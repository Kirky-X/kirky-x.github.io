// Open-source repos that are neither crates nor skills.
export const REPOS = [
  { name: 'weaver', lang: 'Python', repo: 'weaver', desc: 'Enterprise AI news intelligence. DRIFT reasoning, dual-track memory, hybrid graph.' },
  { name: 'subno.ts', lang: 'TypeScript', repo: 'subno.ts', desc: 'Encrypted push notifications with public-key infrastructure, end-to-end delivery.' },
  { name: 'DevCraft-AI', lang: 'Python', repo: 'DevCraft-AI', desc: 'Unified AI development suite. 32 skills, 15 agents, hooks, OpenSpec flows.' },
  { name: 'prompts', lang: 'Python', repo: 'prompts', desc: 'Prompt management platform. Semantic search, versioning, role-based access.' },
  { name: 'axon', lang: 'Python', repo: 'axon', desc: 'Requirement chaining. Dependency graph analysis, planning, task decomposition.' },
  { name: 'xRelay', lang: 'TypeScript', repo: 'xRelay', desc: 'Proxy relay with automatic fallback on Vercel.' },
].map(r => ({ ...r, repoUrl: `https://github.com/Kirky-X/${r.repo}` }))
