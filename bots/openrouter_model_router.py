#!/usr/bin/env python3
"""
OpenRouter Model Router for AllBots.com.

Routes each bot task to a best-fit model profile through OpenRouter while
keeping secrets in environment variables. The default implementation uses only
Python standard-library modules so it can run in lightweight bot environments.

Environment:
  OPENROUTER_API_KEY=sk-or-...
  OPENROUTER_APP_URL=https://allbots.com          # optional, improves rankings
  OPENROUTER_APP_NAME=AllBots.com                 # optional, improves rankings
  OPENROUTER_DEFAULT_MODEL=openai/gpt-4.1-mini    # optional fallback

Quick start:
  python bots/openrouter_model_router.py --task coding --prompt "Write a test"
"""

from __future__ import annotations

import argparse
import json
import os
import sys
import urllib.error
import urllib.request
from dataclasses import dataclass
from typing import Any

OPENROUTER_CHAT_COMPLETIONS_URL = "https://openrouter.ai/api/v1/chat/completions"


@dataclass(frozen=True)
class ModelProfile:
    """A routing profile for a common bot task."""

    model: str
    reason: str
    temperature: float = 0.4
    max_tokens: int = 1600


# These defaults are deliberately editable. OpenRouter model availability changes
# frequently, so this table is an opinionated starting point rather than a lock-in.
MODEL_PROFILES: dict[str, ModelProfile] = {
    "default": ModelProfile(
        model=os.getenv("OPENROUTER_DEFAULT_MODEL", "openai/gpt-4.1-mini"),
        reason="General-purpose fast fallback for everyday bot tasks.",
    ),
    "coding": ModelProfile(
        model=os.getenv("OPENROUTER_CODING_MODEL", "anthropic/claude-3.7-sonnet"),
        reason="Strong code reasoning, refactoring, and review behavior.",
        temperature=0.2,
        max_tokens=2400,
    ),
    "research": ModelProfile(
        model=os.getenv("OPENROUTER_RESEARCH_MODEL", "google/gemini-2.5-pro"),
        reason="Long-context synthesis and source-heavy analysis.",
        temperature=0.25,
        max_tokens=2400,
    ),
    "creative": ModelProfile(
        model=os.getenv("OPENROUTER_CREATIVE_MODEL", "anthropic/claude-3.7-sonnet"),
        reason="Brand voice, campaign copy, and narrative ideation.",
        temperature=0.75,
        max_tokens=2000,
    ),
    "cheap": ModelProfile(
        model=os.getenv("OPENROUTER_CHEAP_MODEL", "openai/gpt-4.1-mini"),
        reason="Low-cost high-volume automation where perfection is not required.",
        temperature=0.35,
        max_tokens=1200,
    ),
    "vision": ModelProfile(
        model=os.getenv("OPENROUTER_VISION_MODEL", "openai/gpt-4.1"),
        reason="Image-aware work when a bot needs visual understanding.",
        temperature=0.25,
        max_tokens=1800,
    ),
}


class OpenRouterModelRouter:
    """Small OpenRouter client with task-aware model selection."""

    def __init__(self, api_key: str | None = None) -> None:
        self.api_key = api_key or os.getenv("OPENROUTER_API_KEY", "")
        if not self.api_key:
            raise RuntimeError("OPENROUTER_API_KEY is required")

    def choose_model(self, task: str) -> ModelProfile:
        """Return the configured model profile for a task label."""
        return MODEL_PROFILES.get(task.lower().strip(), MODEL_PROFILES["default"])

    def chat(
        self,
        prompt: str,
        *,
        task: str = "default",
        system: str = "You are an AllBots.com assistant. Be concise, accurate, and useful.",
        extra_messages: list[dict[str, str]] | None = None,
    ) -> dict[str, Any]:
        """Send a chat completion request through OpenRouter."""
        profile = self.choose_model(task)
        messages = [{"role": "system", "content": system}]
        if extra_messages:
            messages.extend(extra_messages)
        messages.append({"role": "user", "content": prompt})

        payload = {
            "model": profile.model,
            "messages": messages,
            "temperature": profile.temperature,
            "max_tokens": profile.max_tokens,
        }
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": os.getenv("OPENROUTER_APP_URL", "https://allbots.com"),
            "X-Title": os.getenv("OPENROUTER_APP_NAME", "AllBots.com"),
        }
        request = urllib.request.Request(
            OPENROUTER_CHAT_COMPLETIONS_URL,
            data=json.dumps(payload).encode("utf-8"),
            headers=headers,
            method="POST",
        )
        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                data = json.loads(response.read().decode("utf-8"))
        except urllib.error.HTTPError as exc:
            body = exc.read().decode("utf-8", errors="replace")
            raise RuntimeError(f"OpenRouter HTTP {exc.code}: {body}") from exc
        except urllib.error.URLError as exc:
            raise RuntimeError(f"OpenRouter request failed: {exc}") from exc

        return {
            "task": task,
            "model": profile.model,
            "route_reason": profile.reason,
            "response": data,
            "text": extract_text(data),
        }


def extract_text(response: dict[str, Any]) -> str:
    """Extract the assistant text from an OpenRouter response."""
    try:
        return response["choices"][0]["message"]["content"] or ""
    except (KeyError, IndexError, TypeError):
        return ""


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Route an AllBots prompt through OpenRouter.")
    parser.add_argument("--task", default="default", choices=sorted(MODEL_PROFILES), help="Task routing profile")
    parser.add_argument("--prompt", required=True, help="Prompt to send")
    parser.add_argument("--system", default="You are an AllBots.com assistant. Be concise, accurate, and useful.")
    args = parser.parse_args(argv)

    try:
        router = OpenRouterModelRouter()
        result = router.chat(args.prompt, task=args.task, system=args.system)
    except RuntimeError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 1

    print(json.dumps({
        "task": result["task"],
        "model": result["model"],
        "route_reason": result["route_reason"],
        "text": result["text"],
    }, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
