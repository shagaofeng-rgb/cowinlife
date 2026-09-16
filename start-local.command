#!/bin/zsh
cd "${0:A:h}"
export PATH="/Users/apple/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/apple/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:$PATH"
pnpm dev
