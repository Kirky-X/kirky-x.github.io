import baseline from './baseline.json'

// Focus copy mirrors the GitHub profile README (same voice across channels).
// `domain` drives the filter chips; baseline is the offline fallback baked by
// `npm run refresh:baseline` — live numbers overwrite it in the browser.
export const DOMAINS = [
  'all',
  'caching',
  'config',
  'logging',
  'security',
  'flow-control',
  'data',
  'architecture',
  'ai',
  'web',
  'tooling',
]

const LIST = [
  { name: 'oxcache', repo: 'oxcache', domain: 'caching', focus: 'Multi-level cache with usage kept simple: single-flight, stale-while-revalidate, adaptive TTL.' },
  { name: 'trait-kit', repo: 'trait-kit', domain: 'architecture', focus: 'Trait assembly boilerplate, removed. Typestate validation and a service registry, no heavy DI.' },
  { name: 'confers', repo: 'confers', domain: 'config', focus: 'Layered configuration with the merge pitfalls solved. Derive-based, hot reload with canary rollout.' },
  { name: 'inklog', repo: 'inklog', domain: 'logging', focus: 'Async logging that keeps your macros. PII redaction, rotation, backpressure, audit chain.' },
  { name: 'limiteron', repo: 'limiteron', domain: 'flow-control', focus: 'Nine rate-limit algorithms behind one decision chain. Clock-drift pitfalls pre-solved.' },
  { name: 'dbnexus', repo: 'dbnexus', domain: 'data', focus: 'Data-access layer with SQL-injection defense and RBAC. Two drivers, one identical API.' },
  { name: 'zenith', repo: 'zenith', domain: 'tooling', focus: 'Multi-language code formatter with automatic backup and one-click restore.' },
  { name: 'sdforge', repo: 'sdforge', domain: 'architecture', focus: 'One macro generates HTTP, gRPC, MCP, WebSocket and CLI, with OpenAPI and client SDKs.' },
  { name: 'garrison', repo: 'garrison', domain: 'security', focus: 'Authentication that fails closed: JWT, OAuth2/OIDC, RBAC+ABAC, brute-force protection.' },
  { name: 'vecboost', repo: 'vecboost', domain: 'ai', focus: 'Local embedding and decision inference. Candle/ONNX dual engine, semantic cache.' },
  { name: 'codenexus', repo: 'codenexus', domain: 'tooling', focus: 'Code knowledge graph over 21 languages. Cypher queries, taint analysis, MCP server.' },
  { name: 'crawlrs', repo: 'crawlrs', domain: 'web', focus: 'Polite crawling as the default. Five engines, anti-bot handling, SSRF protection.' },
  { name: 'calnexus', repo: 'calnexus', domain: 'tooling', focus: 'Deterministic arithmetic as an external engine. REPL, batch mode, HTTP + MCP.' },
  { name: 'ciphern', repo: 'ciphern', domain: 'security', focus: 'Security-first encryption: SM2/SM3/SM4 plus AES/RSA/ECC, secure memory handling.' },
  { name: 'nebulaid', repo: 'NebulaId', domain: 'data', focus: 'Distributed IDs that survive clock drift. Snowflake protection, UUID v8.' },
  { name: 'xlink', repo: 'xlink', domain: 'web', focus: 'Unified messaging SDK: email, SMS, push and webhooks with end-to-end encryption.' },
  { name: 'fluxweir', repo: 'fluxweir', domain: 'ai', focus: 'One gateway over LLM provider dialects. Weighted routing, failover, circuit breaking.' },
  { name: 'alchemize', repo: 'alchemize', domain: 'tooling', focus: 'Documents distilled into Markdown. Skeleton at 0.0.0, format backends on the way.' },
]

export const CRATES = LIST.map(c => ({
  ...c,
  repoUrl: `https://github.com/Kirky-X/${c.repo}`,
  crateUrl: `https://crates.io/crates/${c.name}`,
  fallback: baseline.crates[c.name] ?? { downloads: 0, spark: [] },
}))

export const TOTAL_BASELINE = CRATES.reduce((sum, c) => sum + c.fallback.downloads, 0)
