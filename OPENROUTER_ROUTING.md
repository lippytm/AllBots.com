# OpenRouter Multi-Model Routing for AllBots.com

OpenRouter has become a major AI infrastructure layer because it lets applications access many models through one API. For AllBots.com, this means each bot can use the best model for the job instead of being locked to one provider.

## What This Adds

- `bots/openrouter_model_router.py` — a standard-library Python router/client.
- Task profiles for `coding`, `research`, `creative`, `cheap`, `vision`, and `default`.
- Environment-variable model overrides so the routing table can evolve without code changes.
- CLI usage for quick testing.

## Setup

Add an OpenRouter key to your environment:

```bash
export OPENROUTER_API_KEY="sk-or-..."
export OPENROUTER_APP_URL="https://allbots.com"
export OPENROUTER_APP_NAME="AllBots.com"
```

Optional model overrides:

```bash
export OPENROUTER_DEFAULT_MODEL="openai/gpt-4.1-mini"
export OPENROUTER_CODING_MODEL="anthropic/claude-3.7-sonnet"
export OPENROUTER_RESEARCH_MODEL="google/gemini-2.5-pro"
export OPENROUTER_CREATIVE_MODEL="anthropic/claude-3.7-sonnet"
export OPENROUTER_CHEAP_MODEL="openai/gpt-4.1-mini"
export OPENROUTER_VISION_MODEL="openai/gpt-4.1"
```

## CLI Example

```bash
python bots/openrouter_model_router.py \
  --task research \
  --prompt "Summarize the top three risks for AI agents using crypto wallets."
```

## Python Example

```python
from bots.openrouter_model_router import OpenRouterModelRouter

router = OpenRouterModelRouter()
result = router.chat(
    "Write a launch tweet for a Web3 data ownership calculator.",
    task="creative",
)
print(result["model"])
print(result["text"])
```

## Product Pattern

Use routing as an AllBots feature:

1. User creates a bot.
2. User chooses a strategy: **fastest**, **cheapest**, **highest quality**, or **best for task**.
3. AllBots maps each step to a task profile.
4. OpenRouter handles provider/model access through one key.
5. AllBots logs model, cost, and output quality for future benchmarks.

## Safety Notes

- Never commit real API keys.
- Keep model names configurable because OpenRouter availability changes.
- Add per-bot spending limits before enabling high-volume automation.
- Log the selected model and reason for auditability.
