# Changelog

## [0.2.0](https://github.com/djm204/franken-heartbeat/compare/franken-heartbeat-v0.1.0...franken-heartbeat-v0.2.0) (2026-03-06)


### Features

* **checker:** implement DeterministicChecker with composable flag pipeline ([756dd56](https://github.com/djm204/franken-heartbeat/commit/756dd5665ccb34664d80bc765fe8ab1b88297910))
* **checklist:** implement ChecklistParser for watchlist and reflections ([0edc9a5](https://github.com/djm204/franken-heartbeat/commit/0edc9a501fea7002214b140fb1cc590492abe3fa))
* **checklist:** implement ChecklistWriter ([b5ca253](https://github.com/djm204/franken-heartbeat/commit/b5ca253529348606a2b572aaeb0e0a6824543db7))
* **cli:** implement CLI argument parser ([b91aa66](https://github.com/djm204/franken-heartbeat/commit/b91aa6691731f6fef776b9c99e30dd9218de1425))
* **cli:** implement CLI runner with PulseOrchestrator and bin entry ([b5405f3](https://github.com/djm204/franken-heartbeat/commit/b5405f34efaeb527e055270c1a9193dd864dcb1c))
* **core:** define PulseResult, Flag, ReflectionResult types ([ba225e2](https://github.com/djm204/franken-heartbeat/commit/ba225e23a8859850087266a7b049e54fcb0ecc02))
* **core:** implement HeartbeatConfig with Zod validation ([19fc48c](https://github.com/djm204/franken-heartbeat/commit/19fc48ce4e994a8602acdf797ef2e5d1d5f043eb))
* **core:** implement HeartbeatError hierarchy ([8208f3b](https://github.com/djm204/franken-heartbeat/commit/8208f3bb96a6404000e8712728a7dfe4d06d8a64))
* **modules:** define IMemoryModule, IObservabilityModule interfaces ([dec78cd](https://github.com/djm204/franken-heartbeat/commit/dec78cdc3e615ceaf15c85ad9739bc1943e8e557))
* **modules:** define IPlannerModule, ICritiqueModule, IHitlGateway interfaces ([280c383](https://github.com/djm204/franken-heartbeat/commit/280c383dd16d634bcc1d277617c1d22fee47b81c))
* **orchestrator:** implement PulseOrchestrator wiring full lifecycle ([60f49b2](https://github.com/djm204/franken-heartbeat/commit/60f49b2931d01a60c4173d1d6600123a378b4740))
* **reflection:** implement ReflectionEngine with prompt builder and response parser ([e96a84f](https://github.com/djm204/franken-heartbeat/commit/e96a84fd581943fde442560e08b6709ca59e0f11))
* **reporter:** implement MorningBriefBuilder and ActionDispatcher ([48a9e75](https://github.com/djm204/franken-heartbeat/commit/48a9e7531712edc56aa6ef27297a536cd06640a0))


### Miscellaneous

* add project scaffold files (.cursor rules, copilot instructions, project outline) ([fb36b20](https://github.com/djm204/franken-heartbeat/commit/fb36b20e24ce36f72dbd872ce1791affd2b6f848))
* **scaffold:** add .gitignore and src/index.ts ([d80fe9b](https://github.com/djm204/franken-heartbeat/commit/d80fe9b2992167baaca8b7f657928e4cdbc0f495))
* **scaffold:** add tsconfig.json with strict mode (ADR-001) ([0c8dcb4](https://github.com/djm204/franken-heartbeat/commit/0c8dcb467e117f8f4505a08fb1d740d04afda9ad))
* **scaffold:** configure vitest with coverage thresholds (ADR-003) ([fb3bafe](https://github.com/djm204/franken-heartbeat/commit/fb3bafe9833c11aeaf42c630d318f1f02e917be2))
* **scaffold:** init package.json with ESM and dependencies ([61629ea](https://github.com/djm204/franken-heartbeat/commit/61629ea4335261edcfbb95093d14dd809e36f256))


### Documentation

* add implementation plan ([c217b3b](https://github.com/djm204/franken-heartbeat/commit/c217b3b29400c610a5203fb3c7e80de4bc94d291))
* add RAMP_UP.md for agent onboarding ([d3bda9c](https://github.com/djm204/franken-heartbeat/commit/d3bda9c2fd7cfbd4059b1b85ed3c7b72bca742dd))
* add README with architecture overview ([0ca0703](https://github.com/djm204/franken-heartbeat/commit/0ca0703e667226d9d81960662e443c5134cdb0ea))
* **adr:** add ADR-000 template, ADR-001, ADR-003 ([f5b4baf](https://github.com/djm204/franken-heartbeat/commit/f5b4baf5d72a45720ec9430607168da3831cb7ed))
* **adr:** add ADR-002 cheap-then-expensive escalation ([237de4a](https://github.com/djm204/franken-heartbeat/commit/237de4aada4d49535ad6cfc1086fa7002bd2feef))
* **adr:** add ADR-004 HEARTBEAT.md as structured data source ([8eebaef](https://github.com/djm204/franken-heartbeat/commit/8eebaef199a02028e26e84f867fbceefc1310127))
* **adr:** add ADR-005 provider-agnostic LLM interface ([fa98de1](https://github.com/djm204/franken-heartbeat/commit/fa98de1abb1a21ae4f78416bd8127879e75603d3))
* **adr:** add ADR-006 module interface contracts ([e2f5645](https://github.com/djm204/franken-heartbeat/commit/e2f5645cbd17c32bf7fc827bc828ec062b25ed2c))
* update CLAUDE.md with project specifics ([1ea1624](https://github.com/djm204/franken-heartbeat/commit/1ea162431b7887eef78b60241b5e1adf3b322737))


### CI/CD

* add release-please config and workflow ([9e34556](https://github.com/djm204/franken-heartbeat/commit/9e34556f13f94f0a2b4c063de8023b3fcf01263d))


### Tests

* add CLI run.ts unit tests and improve testability (PR-07) ([39d9313](https://github.com/djm204/franken-heartbeat/commit/39d93131a3ca18e29953f68ce30cdb4127f8d947))
* **checker:** add failing tests for DeterministicChecker ([cb6c457](https://github.com/djm204/franken-heartbeat/commit/cb6c4578cc93638a6987b258b386ca376593c58c))
* **checklist:** add failing parser tests for watchlist and reflections ([e019e15](https://github.com/djm204/franken-heartbeat/commit/e019e1526f12c3e823c162b72cdaa4d4ff4d5950))
* **checklist:** add failing writer tests ([cabcfb4](https://github.com/djm204/franken-heartbeat/commit/cabcfb4b1cc74dbb9a7b7c1d20c4cf591dd7fe4c))
* **cli:** add failing tests for argument parsing ([7d0f246](https://github.com/djm204/franken-heartbeat/commit/7d0f246106563db75a6c68ca1ad3b52266406ce3))
* **core:** add failing tests for custom error classes ([5a8b5b7](https://github.com/djm204/franken-heartbeat/commit/5a8b5b711cadf587234e9645ee7725acec56b841))
* **core:** add failing tests for HeartbeatConfig Zod schema ([a5d5971](https://github.com/djm204/franken-heartbeat/commit/a5d5971a4fcb2a628afd1e8b18c0cecfd7150107))
* **core:** add failing tests for PulseResult and Flag types ([56cb5ac](https://github.com/djm204/franken-heartbeat/commit/56cb5ac41ea7f6520790e3e23cfbece0cac92b5d))
* **orchestrator:** add failing tests for PulseOrchestrator ([7b7ce46](https://github.com/djm204/franken-heartbeat/commit/7b7ce46a492ff7ad9e9866e34ffcbfc58010e0b7))
* **orchestrator:** add integration tests for full lifecycle ([1b26e0d](https://github.com/djm204/franken-heartbeat/commit/1b26e0dfa0211e39d88fe561fca1cf0afe4d20d9))
* **PR-18:** verify LLM client provider agnosticism ([b43376c](https://github.com/djm204/franken-heartbeat/commit/b43376caf2cabc1d01b3cac0bd34a5462a0c1995))
* **reflection:** add failing tests for prompt builder, response parser, and engine ([72808bb](https://github.com/djm204/franken-heartbeat/commit/72808bba651cc84a0cf017e5253224b5c5b7a43e))
* **reporter:** add failing tests for MorningBriefBuilder and ActionDispatcher ([538ad4a](https://github.com/djm204/franken-heartbeat/commit/538ad4ae5c9aa0aaa8790019452d2acfd4c5d18a))
* **scaffold:** add smoke test to verify test harness runs ([24a36cb](https://github.com/djm204/franken-heartbeat/commit/24a36cb473fb5eefb1d99a1b92f4159926270d1f))


### Refactoring

* **core:** update barrel export with all types and interfaces ([85aa7b2](https://github.com/djm204/franken-heartbeat/commit/85aa7b238fcdac1dff44d5b8568c38eb67dace64))
* **orchestrator:** update barrel export with all public API ([9d7742f](https://github.com/djm204/franken-heartbeat/commit/9d7742f41b032698fba66e354f464251565970de))
* **PR-24:** adopt @franken/types for Result and ILlmClient ([380376d](https://github.com/djm204/franken-heartbeat/commit/380376d5828b5a93617158383d17589e8c57bda3))
