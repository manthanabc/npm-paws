<h1 align="center">🐾 Paws: AI-Enhanced Terminal Development Environment</h1>
<p align="center">A coding agent</p>

<p align="center"><code>npx pawscode@latest</code></p>

[![CI Status](https://img.shields.io/github/actions/workflow/status/pawscode/paws/ci.yml?style=for-the-badge)](https://github.com/pawscode/paws/actions)
[![GitHub Release](https://img.shields.io/github/v/release/manthanabc/paws?style=for-the-badge)](https://github.com/manthanabc/paws/releases)
[![Discord](https://img.shields.io/discord/1044859667798568962?style=for-the-badge&cacheSeconds=120&logo=discord)](https://discord.gg/kRZBPpkgwq)

---

<details>
<summary><strong>Table&nbsp;of&nbsp;Contents</strong></summary>

- [Quickstart](#quickstart)
- [Usage Examples](#usage-examples)
- [Why Paws?](#why-paws)
- [Command-Line Options](#command-line-options)
- [Advanced Configuration](#advanced-configuration)
  - [Provider Configuration](#provider-configuration)
    - [Managing Provider Credentials](#managing-provider-credentials)
    - [Deprecated: Environment Variables](#deprecated-environment-variables)
  - [paws.yaml Configuration Options](#pawsyaml-configuration-options)
  - [Environment Variables](#environment-variables)
  - [MCP Configuration](#mcp-configuration)
  - [Example Use Cases](#example-use-cases)
  - [Usage in Multi-Agent Workflows](#usage-in-multi-agent-workflows)
- [Documentation](#documentation)
- [Troubleshooting](#troubleshooting)
  - [Linux glibc Compatibility Issues](#linux-glibc-compatibility-issues)
- [The musl binary has fewer system dependencies and should work on most Linux systems regardless of glibc version.](#the-musl-binary-has-fewer-system-dependencies-and-should-work-on-most-linux-systems-regardless-of-glibc-version)
- [Community](#community)
- [Support Us](#support-us)
- [License](#license)

</details>

---

## Quickstart

To get started with Paws, run the command below:

```bash
npx pawscode@latest
```

Or install globally:

```bash
npm install -g pawscode
```

## Why Paws?

Paws is an AI-powered coding assistant that integrates seamlessly with your development workflow. It provides:

- **Intelligent Code Generation**: Generate, modify, and refactor code with AI assistance
- **Multi-Platform Support**: Works on macOS, Linux, Windows, and Android
- **Multiple LLM Providers**: Support for OpenAI, Anthropic, and other providers
- **File System Integration**: Seamlessly work with your project files
- **Shell Integration**: Execute commands and work with your terminal environment

## Troubleshooting

### Linux glibc Compatibility Issues

On Linux systems, the gnu binary requires glibc 2.39 or higher. If you're on an older Linux distribution, the package will automatically use the musl binary instead.

You can force the use of the musl binary by setting the `FORCE_MUSL` environment variable:

```bash
FORCE_MUSL=1 npx pawscode@latest
```

## Community

- [Discord](https://discord.gg) - Soon 
- [GitHub Issues](https://github.com/manthanabc/paws/issues) - Report bugs and request features

## License

MIT License - see [LICENSE](LICENSE) for details.
