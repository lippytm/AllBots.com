"""Configuration for allbots.com AI swarms."""
from dataclasses import dataclass

@dataclass
class Config:
    primary_model: str = "claude-opus-4-8"
    fast_model: str = "claude-haiku-4-5-20251001"
    repo_name: str = "allbots.com"
    affiliate_link: str = "https://twin.so?via=charles-lipshay"
    monthly_mrr_target: float = 25000.0
    automation_target_pct: float = 0.85
    marketplace_listings_target: int = 500
    active_bots_target: int = 100

CONFIG = Config()
