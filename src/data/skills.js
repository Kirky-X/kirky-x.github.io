import baseline from './baseline.json'

// `glyph` is the ghost watermark mark: the first character of the Chinese name
// where one exists, the repo initial for those named in plain words.
const LIST = [
  { name: 'maliang', cn: '马良', glyph: '马', repo: 'maliang', focus: 'Frontend design generation. DESIGN.md to design tokens to cross-platform code.' },
  { name: 'tiangang', cn: '天罡', glyph: '罡', repo: 'tiangang', focus: 'SAST security scanning. Semgrep plus language-specific scanners with CI gates.' },
  { name: 'diting', cn: '谛听', glyph: '谛', repo: 'diting', focus: 'Code quality review. Dimensional review, decay diagnosis, simplification.' },
  { name: 'kueiku', cn: '鬼谷子', glyph: '谷', repo: 'kueiku', focus: 'Methodology navigation compass. Routes each task to the right framework.' },
  { name: 'cangjie', cn: '仓颉', glyph: '仓', repo: 'cangjie', focus: 'Content distillation. Notes, storyboards, de-AI-flavored rewriting, diagrams.' },
  { name: 'dayv', cn: '大禹', glyph: '大', repo: 'dayv', focus: 'Dependency analysis across ecosystems. Trees, conflicts, OSV, SBOM.' },
  { name: 'liuxiang', cn: '刘向', glyph: '刘', repo: 'liuxiang', focus: 'Academic research pipeline. Paper search, 12-agent writing, 7-agent review.' },
  { name: 'lizhu', cn: '离朱', glyph: '离', repo: 'lizhu', focus: 'Document digitization to Markdown. PDF, Word, PPT, Excel, EPUB, images.' },
  { name: 'ouyezi', cn: '欧冶子', glyph: '欧', repo: 'ouyezi', focus: 'Performance optimization methodology. Profile-driven, architecture-agnostic.' },
  { name: 'pangu', cn: '盘古', glyph: '盘', repo: 'pangu', focus: 'Project harness initialization. Scaffolds, CI, release, coverage gates.' },
  { name: 'specmark', cn: '', glyph: 'S', repo: 'specmark', focus: 'Spec-driven change workflow. Eight-stage state machine, filesystem as state.' },
  { name: 'wudaozi', cn: '吴道子', glyph: '吴', repo: 'wudaozi', focus: 'Media generation. Text-to-image, image understanding, video, deterministic routing.' },
  { name: 'xizhi', cn: '羲之', glyph: '羲', repo: 'xizhi', focus: 'Icon set routing and auto-download. 21 first-class suites, Iconify fallback.' },
  { name: 'element-dev', cn: '', glyph: 'E', repo: 'element-dev', focus: 'Element Plus (Vue 3) development assistant with a local knowledge base.' },
  { name: 'flutter-dev', cn: '', glyph: 'F', repo: 'flutter-dev', focus: 'Flutter/Dart development assistant. Build errors, crash triage, offline knowledge base.' },
  { name: 'hap-dev', cn: '', glyph: 'H', repo: 'hap-dev', focus: 'HarmonyOS app development assistant. ArkTS fixes, hvigor builds, crash evidence.' },
  { name: 'pua', cn: '', glyph: 'P', repo: 'pua', focus: 'Behavior-correction coach for agents. Evidence-driven closure loops.' },
]

export const SKILLS = LIST.map(s => ({
  ...s,
  repoUrl: `https://github.com/Kirky-X/${s.repo}`,
  version: baseline.skills[s.repo]?.version ?? '',
}))
