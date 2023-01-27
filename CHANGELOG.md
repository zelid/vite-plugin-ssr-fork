## [0.4.71](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.70...v0.4.71) (2023-01-20)


### Bug Fixes

* fix react-streaming optional TypeScript dependency ([8a6af79](https://github.com/brillout/vite-plugin-ssr/commit/8a6af7994e920d1bb9f82a970f0a35720ec8a9f3))
* improve logging of build warnings ([7780b27](https://github.com/brillout/vite-plugin-ssr/commit/7780b277f70826e853ef3eb1a19a92e76e6ac9e3))



## [0.4.70](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.69...v0.4.70) (2023-01-18)


### Bug Fixes

* improve formatting of transpilation error logs in dev ([d158d97](https://github.com/brillout/vite-plugin-ssr/commit/d158d979ffe559b9e007922de64d14fd7fbc2612))
* improve transpile error handling ([1f9f45d](https://github.com/brillout/vite-plugin-ssr/commit/1f9f45d29064cb3409a77d01f05b5e9b13d55751))
* workaround immutable exports (fix [#596](https://github.com/brillout/vite-plugin-ssr/issues/596)) ([3753cc2](https://github.com/brillout/vite-plugin-ssr/commit/3753cc23e9f1af61ec1341f6c983a9db087c6e8c))



## [0.4.69](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.68...v0.4.69) (2022-12-29)


### Bug Fixes

* support Deno (fix [#579](https://github.com/brillout/vite-plugin-ssr/issues/579)) ([3fbd912](https://github.com/brillout/vite-plugin-ssr/commit/3fbd912a1b9093edcbea92da7367574baa6f8155))



## [0.4.68](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.67...v0.4.68) (2022-12-27)


### Bug Fixes

* ensure stream buffer is flushed at stream end ([#577](https://github.com/brillout/vite-plugin-ssr/issues/577)) ([9956583](https://github.com/brillout/vite-plugin-ssr/commit/9956583c6184e3198898b6bd708cbb6b920549ef))
* improve stream wrapper handling ([#577](https://github.com/brillout/vite-plugin-ssr/issues/577)) ([61d2010](https://github.com/brillout/vite-plugin-ssr/commit/61d2010882465293f1e3bcf11b2fdf6c5a0dc707))
* improve stream wrapper release logic ([#577](https://github.com/brillout/vite-plugin-ssr/issues/577)) ([49ce49e](https://github.com/brillout/vite-plugin-ssr/commit/49ce49e4c05c126bab0d90bb1901cca460129440))
* revert hacky workaround ([#577](https://github.com/brillout/vite-plugin-ssr/issues/577)) ([fa6b1a0](https://github.com/brillout/vite-plugin-ssr/commit/fa6b1a0591dd0d1c426127081d7eb84ee39f0c6a))



## [0.4.67](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.66...v0.4.67) (2022-12-27)


### Bug Fixes

* pipe original stream asynchronously ([c87c32e](https://github.com/brillout/vite-plugin-ssr/commit/c87c32e975316279891f4096a6bbdeb788d9a393))



## [0.4.66](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.65...v0.4.66) (2022-12-26)


### Bug Fixes

* also apply pageContextInit to pre-rendered 404 page ([#576](https://github.com/brillout/vite-plugin-ssr/issues/576)) ([4c027f7](https://github.com/brillout/vite-plugin-ssr/commit/4c027f7447d03fa9af35c206d97f280135af0460))
* apply prerender pageContextInit (fix [#576](https://github.com/brillout/vite-plugin-ssr/issues/576)) ([32f0860](https://github.com/brillout/vite-plugin-ssr/commit/32f08606a859f71ca995ee09d3a9aff2356cd3f6))



## [0.4.65](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.64...v0.4.65) (2022-12-22)


### Bug Fixes

* tolerate superfluous globaContext setters (fix [#572](https://github.com/brillout/vite-plugin-ssr/issues/572)) ([74954c1](https://github.com/brillout/vite-plugin-ssr/commit/74954c1348f18ed29c178a4535faef362d43df5f))



## [0.4.64](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.63...v0.4.64) (2022-12-21)


### Bug Fixes

* expose internal _pageContextHtmlTag ([#545](https://github.com/brillout/vite-plugin-ssr/issues/545)) ([05c1c3b](https://github.com/brillout/vite-plugin-ssr/commit/05c1c3b81b9a6e1431b96bc36a6996839fedd960))
* refactor fsAllow handling (fix [#555](https://github.com/brillout/vite-plugin-ssr/issues/555)) ([7cb77a9](https://github.com/brillout/vite-plugin-ssr/commit/7cb77a9fe6acfb168020464347d2a82968955f3f))



## [0.4.63](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.62...v0.4.63) (2022-12-20)


### Bug Fixes

* always use defer for scripts ([#567](https://github.com/brillout/vite-plugin-ssr/issues/567)) ([53dbf91](https://github.com/brillout/vite-plugin-ssr/commit/53dbf91432d24a60f00be6cf117fcad9c20ab747))
* improve interoperability ([c49a5ae](https://github.com/brillout/vite-plugin-ssr/commit/c49a5ae070946bd5ac0a63e706b91ce88e89a708))



## [0.4.62](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.61...v0.4.62) (2022-12-15)


### Bug Fixes

* always use original Base URL config for determining fine-grained Base URLs (fix [#556](https://github.com/brillout/vite-plugin-ssr/issues/556)) ([8dd3f75](https://github.com/brillout/vite-plugin-ssr/commit/8dd3f75188a14d86639991dcceebe22aaaa29185))



## [0.4.61](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.60...v0.4.61) (2022-12-15)


### Bug Fixes

* apply extension assets handling only if needed ([#556](https://github.com/brillout/vite-plugin-ssr/issues/556)) ([6f7ee64](https://github.com/brillout/vite-plugin-ssr/commit/6f7ee64bf9c1e9702567a910d88f5ff1adc49d32))



## [0.4.60](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.59...v0.4.60) (2022-12-14)


### Bug Fixes

* workaround searchForWorkspaceRoot() windows bug (fix [#555](https://github.com/brillout/vite-plugin-ssr/issues/555)) ([5ddb5a4](https://github.com/brillout/vite-plugin-ssr/commit/5ddb5a47fad91eb4bcf4ebc7c1d5379797b511ec))



## [0.4.59](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.58...v0.4.59) (2022-12-13)


### Bug Fixes

* soft-deprecate pageContext promises in favor of pageContext async functions ([f0bc24d](https://github.com/brillout/vite-plugin-ssr/commit/f0bc24d1b3a437a1c0505d764c6c21f2a664de08))
* update outdated assertion (fix [#552](https://github.com/brillout/vite-plugin-ssr/issues/552)) ([6477dbd](https://github.com/brillout/vite-plugin-ssr/commit/6477dbd48036fb39a8f589d4c5a71f8e2632e06e))



## [0.4.58](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.57...v0.4.58) (2022-12-13)


### Bug Fixes

* add 'VITE_' to envPrefix (fix [#554](https://github.com/brillout/vite-plugin-ssr/issues/554)) ([6095042](https://github.com/brillout/vite-plugin-ssr/commit/609504200fa4d94708c60d9e2dae695f6fc46b74))



## [0.4.57](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.56...v0.4.57) (2022-12-10)


### Bug Fixes

* pageContext promise function ([776b156](https://github.com/brillout/vite-plugin-ssr/commit/776b156800fbaa58a205056c6b4af6378f18b32e))



## [0.4.56](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.55...v0.4.56) (2022-12-10)


### Bug Fixes

* stop showing warning upon `$ vite-plugin-ssr prerender` ([659f28b](https://github.com/brillout/vite-plugin-ssr/commit/659f28beb116ec3c777ec922ddae751d3e6b2844))
* tolerate hook file path to be an npm package module (fix [#550](https://github.com/brillout/vite-plugin-ssr/issues/550)) ([2215db7](https://github.com/brillout/vite-plugin-ssr/commit/2215db7120d5398c67303ffadbce7d0d6645ea5c))


### Features

* allow pageContextPromise to be a lazy-called function (fix [#548](https://github.com/brillout/vite-plugin-ssr/issues/548)) ([a273ce3](https://github.com/brillout/vite-plugin-ssr/commit/a273ce33b3ce48a7b8ddb369653a8d2088e8139b))



## [0.4.55](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.54...v0.4.55) (2022-12-09)


### Bug Fixes

* implement new configurations `baseAssets` and `baseServer` (fix [#542](https://github.com/brillout/vite-plugin-ssr/issues/542)) ([3b41f93](https://github.com/brillout/vite-plugin-ssr/commit/3b41f935fda055757a7b2c0f0cfdd12203dac782))
* improve onBeforePrerender() interface ([48b953f](https://github.com/brillout/vite-plugin-ssr/commit/48b953f648daffca783bb869d85ab61a43927a72))
* properly handle virtual IDs ([2e596c5](https://github.com/brillout/vite-plugin-ssr/commit/2e596c5549be563a418839f73230a5d01dd4bbfe))
* remove convoluted extractAssets assertions and improve comments ([05fc470](https://github.com/brillout/vite-plugin-ssr/commit/05fc4700ac84dc4b1b8c05029c39d9b8afcaa4d5))
* simplify processing of extension source page files ([948b131](https://github.com/brillout/vite-plugin-ssr/commit/948b131011958bb674eac1eed61dc1a9e62ebba1))


### Features

* implement extensions ([fbd3b44](https://github.com/brillout/vite-plugin-ssr/commit/fbd3b449717b9df7cba60eefed150cbc66f3ae9a))



## [0.4.54](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.53...v0.4.54) (2022-11-26)


### Bug Fixes

* always use defer instead of async in dev ([#524](https://github.com/brillout/vite-plugin-ssr/issues/524)) ([7513326](https://github.com/brillout/vite-plugin-ssr/commit/75133261d75a2cc2e3dcc2352addbe55e3d8e755))
* use defer in dev (fix [#524](https://github.com/brillout/vite-plugin-ssr/issues/524)) ([d0d27ff](https://github.com/brillout/vite-plugin-ssr/commit/d0d27ffffa55ce9c182cc28c0d9836c64c679c6f))



## [0.4.53](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.52...v0.4.53) (2022-11-25)

* support Vite 4


## [0.4.52](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.51...v0.4.52) (2022-11-24)


### Bug Fixes

* allow arbitrary mode, independently of dev/prod (fix [#516](https://github.com/brillout/vite-plugin-ssr/issues/516)) ([65bcf53](https://github.com/brillout/vite-plugin-ssr/commit/65bcf53eec6b53634d611f77a87fa6cf64312eb0))
* remove unnecessary NODE_ENV check ([#516](https://github.com/brillout/vite-plugin-ssr/issues/516)) ([11f0155](https://github.com/brillout/vite-plugin-ssr/commit/11f0155a01e1acec0afdb82df002a54d2b5f545f))
* explicitly fail when using two streams ([7dbdae8](https://github.com/brillout/vite-plugin-ssr/commit/7dbdae8a38bf415ddc8b6f1db43a610c4477dc6e))
* improve html whitespace handling ([0915436](https://github.com/brillout/vite-plugin-ssr/commit/0915436124ace75a861ac6ef3338f0eb724c9a7b))
* improve PageAsset data structure ([#262](https://github.com/brillout/vite-plugin-ssr/issues/262)) ([e41ab39](https://github.com/brillout/vite-plugin-ssr/commit/e41ab396536d03b568019f3c135c9587537f2dca))
* improve warning message upon wrong HTML variable value ([19f3423](https://github.com/brillout/vite-plugin-ssr/commit/19f342380dcfeb849a0ec136b352a1645390d818))
* increase timeouts ([7f25745](https://github.com/brillout/vite-plugin-ssr/commit/7f257452911bb560efd263575112efb89240be6b))
* make HTML injections more readable ([38c97c7](https://github.com/brillout/vite-plugin-ssr/commit/38c97c7b92c58ffc9440204cbd808d7067991040))


### Features

* `pageContext.httpResponse.earlyHints` (closes [#262](https://github.com/brillout/vite-plugin-ssr/issues/262)) ([3c20516](https://github.com/brillout/vite-plugin-ssr/commit/3c20516612fadbb6684a5afb08dc61e00fd2e8b4))
* implement `injectFilter()` (closes [#262](https://github.com/brillout/vite-plugin-ssr/issues/262), closes [#419](https://github.com/brillout/vite-plugin-ssr/issues/419), closes [#420](https://github.com/brillout/vite-plugin-ssr/issues/420), closes [#510](https://github.com/brillout/vite-plugin-ssr/issues/510)) ([e0785a6](https://github.com/brillout/vite-plugin-ssr/commit/e0785a6afa9c5855ea698fd7109f53d90cfa3d6c))


### Performance Improvements

* allow user to control script preloading ([b0374b1](https://github.com/brillout/vite-plugin-ssr/commit/b0374b14881633fda79b24dbcc0669060c951a87))
* only preload fonts and JavaScript by default ([00cbf39](https://github.com/brillout/vite-plugin-ssr/commit/00cbf392bb8608f7d52fee83ec8f325a80f80815))
* remove superflous preload tag ([70cc112](https://github.com/brillout/vite-plugin-ssr/commit/70cc1121963ff0c8bcccb0025c9018139868198d))
* in dev, load scripts before static assets ([3358460](https://github.com/brillout/vite-plugin-ssr/commit/335846010d490d300f4074af671db53717d3cd87))



## [0.4.51](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.50...v0.4.51) (2022-11-19)


### Bug Fixes

* assert Stem pacakges to define package.json#exports ([55c40b8](https://github.com/brillout/vite-plugin-ssr/commit/55c40b86d1cedb9dfc29ffcee1dedb465f3a8490))
* don't assume Stem pacakges to always define a VPS config ([f5c41d6](https://github.com/brillout/vite-plugin-ssr/commit/f5c41d6a24d68c917cc86e4e4a805dfa929b92c3))
* fix resolving of Stem client entries ([cb2f359](https://github.com/brillout/vite-plugin-ssr/commit/cb2f35945d5644ef3961f0c6ba6fe0e80aac06d8))
* refine wrong usage message ([#516](https://github.com/brillout/vite-plugin-ssr/issues/516)) ([1e4dbe6](https://github.com/brillout/vite-plugin-ssr/commit/1e4dbe65cf552665b388eac54e4dd3ad3f50db00))
* workaround windows bug ([91393d7](https://github.com/brillout/vite-plugin-ssr/commit/91393d73ef4032059f3618fd652a09b0b80ee088))



## [0.4.50](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.49...v0.4.50) (2022-11-17)


### Bug Fixes

* improve error message upon wrong Vite dev server usage (fix [#516](https://github.com/brillout/vite-plugin-ssr/issues/516)) ([0b7c9bc](https://github.com/brillout/vite-plugin-ssr/commit/0b7c9bc3935f1df2430ce4939134d910d773a935))
* look for package.json as well as in parent directories (fix [#518](https://github.com/brillout/vite-plugin-ssr/issues/518)) ([5bd5434](https://github.com/brillout/vite-plugin-ssr/commit/5bd54349d6fcf48c8608a07f9d8de5ee12d98653))



## [0.4.49](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.48...v0.4.49) (2022-11-17)


### Bug Fixes

* `export type { TemplateWrapped }` (fix [#511](https://github.com/brillout/vite-plugin-ssr/issues/511)) ([e9be7fe](https://github.com/brillout/vite-plugin-ssr/commit/e9be7fe6c6ca751716c4015835545cd3b8f725d4))
* `export type { UserConfig }` ([e760135](https://github.com/brillout/vite-plugin-ssr/commit/e760135db68aa82fe9885a121a850ffbfedfcbe4))
* add Stem entries to optimizeDeps.include ([b65b639](https://github.com/brillout/vite-plugin-ssr/commit/b65b63995511f1d7d71f2c7f66609e2b16d6eec2))
* avoid importBuild var collision ([43811ba](https://github.com/brillout/vite-plugin-ssr/commit/43811ba4dc09b7e9ada46761f085190460b3325e))
* deprecate `package.json#vite-plugin-ssr.pageFilesDir` ([e0b2291](https://github.com/brillout/vite-plugin-ssr/commit/e0b2291ddc5a41de46202f36d56767c8278c6880))
* enforce Stem npm packages to belong to an npm org ([c1a9bc4](https://github.com/brillout/vite-plugin-ssr/commit/c1a9bc44d3a194d7e78de47942eb690828200882))
* fix `pageContext.exportsAll` type ([dda92b8](https://github.com/brillout/vite-plugin-ssr/commit/dda92b86fb51263964631012e5304878caafaf90))
* improve Stem package resolver ([c929ab4](https://github.com/brillout/vite-plugin-ssr/commit/c929ab46a349c7e17abc4978171a21bec4381b9b))
* warn instead of err upon wrong Stem package name ([7c198b9](https://github.com/brillout/vite-plugin-ssr/commit/7c198b9ce8e32dfae11412fed122ab171fbd3047))


### Features

* enable Stem packages to define vite-plugin-ssr config ([25a204f](https://github.com/brillout/vite-plugin-ssr/commit/25a204f4f3f0822cfb4bb7894ac491adb63e6147))



## [0.4.48](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.47...v0.4.48) (2022-11-10)


### Features

* expose `pageContext.exportsAll[exportName][0].filePath` ([0dec2ce](https://github.com/brillout/vite-plugin-ssr/commit/0dec2ce56a96ab485ef05bc353c7efe209db95af))



## [0.4.47](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.46...v0.4.47) (2022-11-09)


### Bug Fixes

* remove internal heuristic in favor of new config `hydrationCanBeAborted` (fix [#423](https://github.com/brillout/vite-plugin-ssr/issues/423)) ([56f6c3e](https://github.com/brillout/vite-plugin-ssr/commit/56f6c3e91bc58d13739470aeb6745aee9cff0ec2))



## [0.4.46](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.45...v0.4.46) (2022-11-07)


### Bug Fixes

* fix `navigate()` type ([#501](https://github.com/brillout/vite-plugin-ssr/issues/501)) ([76f1e75](https://github.com/brillout/vite-plugin-ssr/commit/76f1e75280f115c7ff67813ea0566254958ee3c8))



## [0.4.45](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.44...v0.4.45) (2022-11-07)


### Bug Fixes

* add JSDoc to `navigate()` ([c240e8e](https://github.com/brillout/vite-plugin-ssr/commit/c240e8e144a9573b4511a635bbab387f0ba420eb))
* also check whether new page is renderable for `navigate()` (fix [#502](https://github.com/brillout/vite-plugin-ssr/issues/502)) ([d7729e9](https://github.com/brillout/vite-plugin-ssr/commit/d7729e9f12432f3ddac8e6d459c2b0f85fe3520c))
* fix `navigate()` type export for newer TypeScript versions ([3713643](https://github.com/brillout/vite-plugin-ssr/commit/3713643db771c6914eb960c4823fac21babc31f2))



## [0.4.44](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.43...v0.4.44) (2022-11-03)


### Bug Fixes

* improve wrong usage error message ([#496](https://github.com/brillout/vite-plugin-ssr/issues/496)) ([8f8cab4](https://github.com/brillout/vite-plugin-ssr/commit/8f8cab47c2a229ab6161e8bb01d3fda447602ceb))
* support autoFullBuild for globally installed Vite (fix [#484](https://github.com/brillout/vite-plugin-ssr/issues/484)) ([ef5c49f](https://github.com/brillout/vite-plugin-ssr/commit/ef5c49fdf3e66a33c53161d14dd4a3e763db4aa3))
* tolerate navigate to be loaded and called in tests (fix [#496](https://github.com/brillout/vite-plugin-ssr/issues/496)) ([d1ccd25](https://github.com/brillout/vite-plugin-ssr/commit/d1ccd25a50509cceb86fb27d5e4afd0a90e3b2c7))
* use jsdoc [@deprecated](https://github.com/deprecated) ([#491](https://github.com/brillout/vite-plugin-ssr/issues/491)) ([dbeb556](https://github.com/brillout/vite-plugin-ssr/commit/dbeb556b4a4bd783b34d0a955a7d5dd6c6078b92))
* workaround new URL() bug (fix [#495](https://github.com/brillout/vite-plugin-ssr/issues/495)) ([ced0fea](https://github.com/brillout/vite-plugin-ssr/commit/ced0fea8072243b40f936edf87297bf5621771f0))



## [0.4.43](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.42...v0.4.43) (2022-10-19)


### Bug Fixes

* align CLI option parsing with Vite ([54d2b22](https://github.com/brillout/vite-plugin-ssr/commit/54d2b22591c5fba1e2f901d6e268c4713df7f1b2))
* don't preload virtual css modules (fix [#479](https://github.com/brillout/vite-plugin-ssr/issues/479)) ([3f7b991](https://github.com/brillout/vite-plugin-ssr/commit/3f7b9916dddc84e29e2c20d2b0df7211b6f1acbd))
* improve error message upon environment loading wrong exports entry (fix [#481](https://github.com/brillout/vite-plugin-ssr/issues/481)) ([3c58410](https://github.com/brillout/vite-plugin-ssr/commit/3c58410c7785467456b40a92243b15142b49d726))



## [0.4.42](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.41...v0.4.42) (2022-10-18)


### Bug Fixes

* remove erronous assertions (fix [#469](https://github.com/brillout/vite-plugin-ssr/issues/469)) ([7e2bf51](https://github.com/brillout/vite-plugin-ssr/commit/7e2bf51c567a0698a74b14fa8a2ffe11e5eb6f32))
* skip autoFullBuild upon @vitejs/plugin-legacy internal build() ([#477](https://github.com/brillout/vite-plugin-ssr/issues/477)) ([d578381](https://github.com/brillout/vite-plugin-ssr/commit/d578381f3e353640a4e8618beaf21ed82af66966))
* stop assuming build command ([9254b66](https://github.com/brillout/vite-plugin-ssr/commit/9254b6681cd4f8e56fed14ad6ab80082ce375979))
* stop assuming Vite CLI command to occur first ([b9738b7](https://github.com/brillout/vite-plugin-ssr/commit/b9738b7ab9481aa5bb55ab3aa1a956036652e0cd))
* support older Edge browsers ([#477](https://github.com/brillout/vite-plugin-ssr/issues/477)) ([9b9f551](https://github.com/brillout/vite-plugin-ssr/commit/9b9f55172493fad660a10c74387ecb94a33117e9))



## [0.4.41](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.40...v0.4.41) (2022-10-15)


### BREAKING CHANGES

* [disableAutoFullBuild](https://vite-plugin-ssr.com/disableAutoFullBuild) defaults to `true` when using Vite's `build()` API.
  > We introduce this breaking change in a minor because it affects only very small number of users.


### Bug Fixes

* avoid Rollup handling chained build errors ([#472](https://github.com/brillout/vite-plugin-ssr/issues/472)) ([70d90a2](https://github.com/brillout/vite-plugin-ssr/commit/70d90a26a21bf526520b0fc77abd84007f77e4ca))
* support Vite CLI arguments (fix [#444](https://github.com/brillout/vite-plugin-ssr/issues/444)) ([b907fe2](https://github.com/brillout/vite-plugin-ssr/commit/b907fe214ee98bf968fd5ec432b9253b715c4796))


### Performance Improvements

* faster script injection ([#474](https://github.com/brillout/vite-plugin-ssr/pull/474))



## [0.4.40](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.39...v0.4.40) (2022-10-07)


### Bug Fixes

* [stream] ensure order of stream writing and stream flushing ([#466](https://github.com/brillout/vite-plugin-ssr/issues/466)) ([11a5cbd](https://github.com/brillout/vite-plugin-ssr/commit/11a5cbd629fb67d134f2c8f1e414cf9345da2ab8))
* [stream] flush HTML begin/end injections ([#466](https://github.com/brillout/vite-plugin-ssr/issues/466)) ([50bd119](https://github.com/brillout/vite-plugin-ssr/commit/50bd1193bee6444317eb109c6a03eb8c4cb12489))
* [stream] flush script injection ([e618438](https://github.com/brillout/vite-plugin-ssr/commit/e618438b33f7bac658c08ed5cd8d62ad43b6f5a0))
* fix slow hook timeouts ([58525c1](https://github.com/brillout/vite-plugin-ssr/commit/58525c129450c7a36f0a89653282a668e45134a6))
* make `includeAssetsImportedByServer` support `?url` imports (fix [#464](https://github.com/brillout/vite-plugin-ssr/issues/464)) ([29f046e](https://github.com/brillout/vite-plugin-ssr/commit/29f046e72e99f4889372538cdbb9b90899f2d73f))



## [0.4.39](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.38...v0.4.39) (2022-10-03)


### Bug Fixes

* add timeout to hook calls ([1f5be92](https://github.com/brillout/vite-plugin-ssr/commit/1f5be92b09a33d290908da0d24913ca556370036))



## [0.4.38](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.37...v0.4.38) (2022-09-22)


### Bug Fixes

* check bundle package duplicate only for production ([59c832e](https://github.com/brillout/vite-plugin-ssr/commit/59c832eb800a9affd58d9e02adf11c3d25301765))



## [0.4.37](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.36...v0.4.37) (2022-09-22)


### Bug Fixes

* fix exports (fix [#457](https://github.com/brillout/vite-plugin-ssr/issues/457)) ([172fae9](https://github.com/brillout/vite-plugin-ssr/commit/172fae9f9942b91decf03d76f3c80f51501c95f7))
* improve single loaded version assertion ([a97bc12](https://github.com/brillout/vite-plugin-ssr/commit/a97bc1233e9fc1a336dd8ff4696b6ca6c9ba1bf4))
* stop assuming single module instances (fix [#460](https://github.com/brillout/vite-plugin-ssr/issues/460)) ([f0f4991](https://github.com/brillout/vite-plugin-ssr/commit/f0f4991514a460c909903e3d09b0271f13f5dbbe))



## [0.4.36](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.35...v0.4.36) (2022-09-19)


### Bug Fixes

* improve error message when using Vite 2 (fix [#455](https://github.com/brillout/vite-plugin-ssr/issues/455)) ([3a274ef](https://github.com/brillout/vite-plugin-ssr/commit/3a274ef530b93c8a0953e2116fd7616cd9666b72))



## [0.4.35](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.34...v0.4.35) (2022-09-17)


### Bug Fixes

* don't treat page as HTML-only if it define client renderer (fix [#446](https://github.com/brillout/vite-plugin-ssr/issues/446)) ([a89540f](https://github.com/brillout/vite-plugin-ssr/commit/a89540f824cc23fef4d6b73329395e385d340a22))



## [0.4.34](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.33...v0.4.34) (2022-09-14)


### Bug Fixes

* [#449](https://github.com/brillout/vite-plugin-ssr/issues/449) ([ef2718e](https://github.com/brillout/vite-plugin-ssr/commit/ef2718ec5a66f62580a11eca1683156b9cdf35ea))
* apply routing precedence to FileSystem Routing (fix [#448](https://github.com/brillout/vite-plugin-ssr/issues/448)) ([61ecb82](https://github.com/brillout/vite-plugin-ssr/commit/61ecb820a03419655265cbe79d8530c11789ecb4))



## [0.4.33](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.32...v0.4.33) (2022-09-13)


### Bug Fixes

* revert "fix: do not copy static assets to `dist/server/`" (fix [#447](https://github.com/brillout/vite-plugin-ssr/issues/447)) ([ec93afe](https://github.com/brillout/vite-plugin-ssr/commit/ec93afe7240aeb19e9ec8458c0579c995329f26a))



## [0.4.32](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.31...v0.4.32) (2022-09-08)


### Bug Fixes

* comply to common reverse proxy setups (fix [#443](https://github.com/brillout/vite-plugin-ssr/issues/443)) ([7b76001](https://github.com/brillout/vite-plugin-ssr/commit/7b76001da5e212c00f492e1bb62ddf066708e5b2))
* improve error message upon trying to use `navigate()` without Client Routing (fix [#441](https://github.com/brillout/vite-plugin-ssr/issues/441)) ([5c97cc4](https://github.com/brillout/vite-plugin-ssr/commit/5c97cc4d07f689bdb303a50be955d2580df429e9))



## [0.4.31](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.30...v0.4.31) (2022-09-04)


### Bug Fixes

* make streaming SSR work on Firefox ([a0c791c](https://github.com/brillout/vite-plugin-ssr/commit/a0c791ce14a0add270e8c3369e2480d953d31abd))
* typescript: allow user to define `Page` type ([4e3ac79](https://github.com/brillout/vite-plugin-ssr/commit/4e3ac790f165c73c6189630cef08b04129f4905a))



## [0.4.30](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.29...v0.4.30) (2022-09-02)


### Performance Improvements

* use picocolors instead of kolorist ([f4f2e1c](https://github.com/brillout/vite-plugin-ssr/commit/f4f2e1ce472fe2b1f6ff24629ed32e2d30c37439))



## [0.4.29](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.28...v0.4.29) (2022-08-30)


### Bug Fixes

* support `includeAssetsImportedByServer` for linked dependencies ([eaa857b](https://github.com/brillout/vite-plugin-ssr/commit/eaa857b0067899ddfab5c756cf5055fef0f9e8d8))
* use Vite's built-in `import.meta.glob()` instead of `vite-plugin-glob` (fix [#431](https://github.com/brillout/vite-plugin-ssr/issues/431)) ([19385ef](https://github.com/brillout/vite-plugin-ssr/commit/19385ef06bd4997955e267c72bc4f416fbf8dcb1))


### BREAKING CHANGES

* `vite-plugin-ssr@0.4.29` doesn't work with Vite 2 anymore: make sure to update to Vite 3.



## [0.4.28](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.27...v0.4.28) (2022-08-29)


### Bug Fixes

* improve `getFileUrl()` assertions ([4799316](https://github.com/brillout/vite-plugin-ssr/commit/4799316bba2ec8e3fe6edb0cbae6d6fb8aa43d24))
* update react detection heuristic ([#423](https://github.com/brillout/vite-plugin-ssr/issues/423)) ([931a8e9](https://github.com/brillout/vite-plugin-ssr/commit/931a8e95e8d56130be3c3e5488b33b60d7c3d8b2))



## [0.4.27](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.26...v0.4.27) (2022-08-26)


### Bug Fixes

* improve `config.build.outDir` handling ([d6415f8](https://github.com/brillout/vite-plugin-ssr/commit/d6415f8de80e0b8b942d55edb7f473f58612c342))
* track instances for improved debuggability ([6d24934](https://github.com/brillout/vite-plugin-ssr/commit/6d249347210c75ecc5f9b7ae9273419b517b82fe))
* update vite-plugin-import-build ([8856f94](https://github.com/brillout/vite-plugin-ssr/commit/8856f94aab7f4361e03574e230df93fe323f534c))


### Reverts

* Revert "start using @brillout/vite-plus" ([03d0b0f](https://github.com/brillout/vite-plugin-ssr/commit/03d0b0fbb793c67c2e6ba0da8f6b23b7e8804fd0))
* Revert "update @brillout/vite-plus" ([5a9cdc5](https://github.com/brillout/vite-plugin-ssr/commit/5a9cdc5c4889acced311358c2900a2485728d947))



## [0.4.26](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.25...v0.4.26) (2022-08-23)


### Bug Fixes

* use latest vite-plugin-import-build version ([4a2d3ea](https://github.com/brillout/vite-plugin-ssr/commit/4a2d3ea00c3c250f04e90381d6820db989799eef))



## [0.4.25](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.24...v0.4.25) (2022-08-22)


### Bug Fixes

* improve 404 logging during dev ([522f8cc](https://github.com/brillout/vite-plugin-ssr/commit/522f8ccc7ae32beb56299bc7f59b0355fc4f2c03))
* improve React detection heuristic ([#423](https://github.com/brillout/vite-plugin-ssr/issues/423)) ([bbd39c6](https://github.com/brillout/vite-plugin-ssr/commit/bbd39c644e9433075cb5685479c03857fd50e310))
* skip 404 warning upon `RenderErrorPage` error ([45fd93f](https://github.com/brillout/vite-plugin-ssr/commit/45fd93fcee08c1e87486592c360d86a859558305))



## [0.4.24](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.23...v0.4.24) (2022-08-22)


### Bug Fixes

* Async Route Functions (fix [#425](https://github.com/brillout/vite-plugin-ssr/issues/425)) ([2ba489f](https://github.com/brillout/vite-plugin-ssr/commit/2ba489fb44b78a4d649c8e5e733f130404d5ba7f))



## [0.4.23](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.22...v0.4.23) (2022-08-21)


### Bug Fixes

* rename `pageContext.url` to `pageContext.urlOriginal` ([b2e7ff0](https://github.com/brillout/vite-plugin-ssr/commit/b2e7ff0dad2a1d60c83ac4a59a0b4101a8e8d39a))
  > This fix contains a soft breaking change, see [vite-plugin-ssr.com/migration/0.4.23](https://vite-plugin-ssr.com/migration/0.4.23).



## [0.4.22](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.21...v0.4.22) (2022-08-18)


### Bug Fixes

* add module `vite-plugin-ssr/routing` to `optimizeDeps.exclude` ([3585d9e](https://github.com/brillout/vite-plugin-ssr/commit/3585d9eb483408e1af87495fd8316a3f68b777d6))



## [0.4.21](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.20...v0.4.21) (2022-08-18)


### Bug Fixes

* further tolerate vite-plugin-ssr being loaded twice ([da02463](https://github.com/brillout/vite-plugin-ssr/commit/da02463c8d227467c35642f20ff3f594dcf5575e))
* improve error message upon vite-plugin-ssr being included twice in bundle ([58427f5](https://github.com/brillout/vite-plugin-ssr/commit/58427f5320be5518eb9cc795b9c95b71d6f98515))
* improve scroll restoration for Firefox ([fd70fad](https://github.com/brillout/vite-plugin-ssr/commit/fd70fadb0bcea8d922f961f1c88713994e0aaf34))
* pass entire pageContext to Route Functions ([a596b59](https://github.com/brillout/vite-plugin-ssr/commit/a596b590bc67ab7909684edcbcdccde90784684b))
* re-support & improve hash navigation (fix [#418](https://github.com/brillout/vite-plugin-ssr/issues/418)) ([88b9da0](https://github.com/brillout/vite-plugin-ssr/commit/88b9da0b96c3103eaa6152dbb58ebff943b6ee70))


### Features

* impl `resolveRoute` (close [#370](https://github.com/brillout/vite-plugin-ssr/issues/370)) ([15104af](https://github.com/brillout/vite-plugin-ssr/commit/15104af9bd12686b49d6cc11be4cec579029cb9b))



## [0.4.20](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.19...v0.4.20) (2022-08-12)


### Bug Fixes

* fix types for react streaming ([432d1a7](https://github.com/brillout/vite-plugin-ssr/commit/432d1a78b9f8c96c42b6b8d57658cb842b0b265d))
* further tolerate vite-plugin-ssr being loaded twice ([8038fbe](https://github.com/brillout/vite-plugin-ssr/commit/8038fbe917cfc96b4d0e204ddf40171f32da9640))
* stop injecting into stream when streaming is disabled ([#416](https://github.com/brillout/vite-plugin-ssr/issues/416)) ([a8e1519](https://github.com/brillout/vite-plugin-ssr/commit/a8e15193314deb0d9cfc3576a1a6c7e75d15e7f3))



## [0.4.19](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.18...v0.4.19) (2022-08-10)


### Bug Fixes

* improve TypeScripts types ([02c4089](https://github.com/brillout/vite-plugin-ssr/commit/02c408933a6262891703075dfc4da07a8ca728ef))


### Features

* implement `pageContext.isBackwardNavigation` ([510501b](https://github.com/brillout/vite-plugin-ssr/commit/510501b5d2757bc6e2be191ee07ce3d70c7b6797))



## [0.4.18](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.17...v0.4.18) (2022-08-05)


### Bug Fixes

* don't swallow unexpected error upon prefetching ([0e05293](https://github.com/brillout/vite-plugin-ssr/commit/0e0529347cec4dfca868768763a49795a4bc45ca))
* improve error message upon duplicated page files ([32bbdfd](https://github.com/brillout/vite-plugin-ssr/commit/32bbdfdbcf294aae3458b02c9fb4a59958d757eb))
* improve error message upon failure fetching static assets ([1d134a7](https://github.com/brillout/vite-plugin-ssr/commit/1d134a7c168dc3e58bfe95b7550c7b123a39df5e))
* improve error message upon wrong provided `pageContext.url` value in `onBeforeRoute()` ([cb50a55](https://github.com/brillout/vite-plugin-ssr/commit/cb50a556e055d3091470bc9cd6c9f5b8c911e607))
* upon `onBeforeRoute()` overwriting `pageContext.url`, preserve and use original URL for `.pageContex.json` requests ([b9cca1b](https://github.com/brillout/vite-plugin-ssr/commit/b9cca1bd2247217350d51f733f31e80fe11248d1))



## [0.4.17](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.16...v0.4.17) (2022-08-03)


### Bug Fixes

* only inject CSS root import to HTML (fix [#400](https://github.com/brillout/vite-plugin-ssr/issues/400), fix [#398](https://github.com/brillout/vite-plugin-ssr/issues/398)) ([84ea940](https://github.com/brillout/vite-plugin-ssr/commit/84ea94087ee0b744ee880a0f9d37777d172766f7))



## [0.4.16](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.15...v0.4.16) (2022-08-01)


### Bug Fixes

* improve `onBeforeRender()` hook handling upon error ([5838c18](https://github.com/brillout/vite-plugin-ssr/commit/5838c18361472e7a42c772a168ecef8b03d0c468))
* support `build.assetsDir` (fix [#397](https://github.com/brillout/vite-plugin-ssr/issues/397)) ([6909c8a](https://github.com/brillout/vite-plugin-ssr/commit/6909c8a730dce4923d6c9a941c58bddf38eb3f55))


### Features

* `pageContext.enableEagerStreaming` (fix [#396](https://github.com/brillout/vite-plugin-ssr/issues/396)) ([7fd58e8](https://github.com/brillout/vite-plugin-ssr/commit/7fd58e81d6f931534f319ad12e137ee21be37aed))



## [0.4.15](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.14...v0.4.15) (2022-07-31)

### Bug Fixes

* revert [#384](https://github.com/brillout/vite-plugin-ssr/pull/384) (fix [#183](https://github.com/brillout/vite-plugin-ssr/issues/183)) ([7341a4](https://github.com/brillout/vite-plugin-ssr/commit/7341a498a41aec60c455ad59df2dafa2b4faeefe))



## [0.4.14](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.13...v0.4.14) (2022-07-30)


### Bug Fixes

* add `exportsAll` to `PageContextBuiltIn` ([06b0c6c](https://github.com/brillout/vite-plugin-ssr/commit/06b0c6cda4f094515f2a3dec00e9faa16a7dc5bd))
* add `is404` to `pageContext` docs and `PageContextBuiltIn` ([bcb2ab5](https://github.com/brillout/vite-plugin-ssr/commit/bcb2ab53a5d2609e636db8c51da2189f98b559f2))
* add JSDoc annotations to `PageContextBuiltIn` ([62dcc0e](https://github.com/brillout/vite-plugin-ssr/commit/62dcc0e7c1e4aa9e21e8c7cedc5aba41220d72be))
* add support for server-side rendered preprocessed stylesheets (PostCSS, SASS, ...) ([6d30acf](https://github.com/brillout/vite-plugin-ssr/commit/6d30acf433ed8b5f5564b2d21528f8fd9f6b94c6))
* improve `vite-plugin-pwa` error message ([#388](https://github.com/brillout/vite-plugin-ssr/issues/388)) ([6e6f872](https://github.com/brillout/vite-plugin-ssr/commit/6e6f8729c2e08b61fb39b8b74416aae5147a7855))
* improve error message upon wrong base value (fix [#394](https://github.com/brillout/vite-plugin-ssr/issues/394)) ([7671cfa](https://github.com/brillout/vite-plugin-ssr/commit/7671cfa1aa45a6b151106fc7f7b3dce347ec81d5))
* improve error message upon wrong outDir value (fix [#392](https://github.com/brillout/vite-plugin-ssr/issues/392)) ([f2df3fe](https://github.com/brillout/vite-plugin-ssr/commit/f2df3fe3df62f4f498177f2ff5a04cc11b685882))
* improve error message upon wrong Rollup config ([998e9f6](https://github.com/brillout/vite-plugin-ssr/commit/998e9f69c29fb5bd9a1bc43a5e62c4483c67907b))
* improve error message when trying to apply 's HTML transformer (fix [#388](https://github.com/brillout/vite-plugin-ssr/issues/388)) ([2ab98c9](https://github.com/brillout/vite-plugin-ssr/commit/2ab98c93eb65b716ce61b55ca78cc20537b00736))
* make onPagePrerender pageContext concurrent safe ([ba11709](https://github.com/brillout/vite-plugin-ssr/commit/ba11709cbfc70272ac66f0f8a66f826c73083965))
* make React detection heuristic more robust ([dfe45d3](https://github.com/brillout/vite-plugin-ssr/commit/dfe45d30955ef560d6a6a757c1d222249e872f4f))
* remove problematic assertion (fix [#391](https://github.com/brillout/vite-plugin-ssr/issues/391)) ([9500fe3](https://github.com/brillout/vite-plugin-ssr/commit/9500fe3a010358a591abede4a16458d24e621d9d))
* render error page on the client-side (fix [#393](https://github.com/brillout/vite-plugin-ssr/issues/393)) ([9f2dfb7](https://github.com/brillout/vite-plugin-ssr/commit/9f2dfb745dd54685be7c933c640793472472216f))
* show second error if it's not the same as first one ([859678d](https://github.com/brillout/vite-plugin-ssr/commit/859678da0eaf026210380bdab9803efe1f7375c8))
* stop erasing previous `optimizeDeps.entries` (fix [#386](https://github.com/brillout/vite-plugin-ssr/issues/386)) ([255e788](https://github.com/brillout/vite-plugin-ssr/commit/255e788f1f27a5c91e632337524acc2e8e734dcb))
* stop executing `onBeforeRender()` hook upon rendering the error page ([f992343](https://github.com/brillout/vite-plugin-ssr/commit/f992343cdbaebb313ba852a125db3acb2f2e49e0))
* support 404 for `$ vite preview` + SSG ([28f8e02](https://github.com/brillout/vite-plugin-ssr/commit/28f8e02e8425f3b30efa53da99a058a320d09b1f))



## [0.4.13](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.12...v0.4.13) (2022-07-26)


### Bug Fixes

* forbiden re-exports in page files ([6bd30c8](https://github.com/brillout/vite-plugin-ssr/commit/6bd30c89a635eee84f092a6743ff1acb2b7298b7))
* further improve error message upon wrong Vite config while using pre-rendering ([#380](https://github.com/brillout/vite-plugin-ssr/issues/380)) ([013cb92](https://github.com/brillout/vite-plugin-ssr/commit/013cb929725102678a45a53a308cd39136b0e838))
* improve error message upon `prerender()` API usage with wrong Vite config (fix [#380](https://github.com/brillout/vite-plugin-ssr/issues/380)) ([4084c5a](https://github.com/brillout/vite-plugin-ssr/commit/4084c5aad2925a994cf4eeae0441dfa33a163fb2))
* remove wildcard re-export wrong usage assertion ([db3c015](https://github.com/brillout/vite-plugin-ssr/commit/db3c0150b12661cb211422d6a6124fe680aacc8e))
* remove wrong assertion (fix [#383](https://github.com/brillout/vite-plugin-ssr/issues/383)) ([928e12e](https://github.com/brillout/vite-plugin-ssr/commit/928e12e82debc8d09f3fbfa5db9f8afc6089e008))
* support dynamic `doNotPrerender` values (fix [#382](https://github.com/brillout/vite-plugin-ssr/issues/382)) ([8a5b9a4](https://github.com/brillout/vite-plugin-ssr/commit/8a5b9a4af63c773bb38427be9985d95e05c33df2))
* support wildcard re-exports (fix [#381](https://github.com/brillout/vite-plugin-ssr/issues/381)) ([64dc9a9](https://github.com/brillout/vite-plugin-ssr/commit/64dc9a9025d40061cf6f9151ba92789e163b731e))
* tell user to not define `doNotPrerender` in `.page.client.js` files ([5863a99](https://github.com/brillout/vite-plugin-ssr/commit/5863a997257972ae1588c83d42303e68a77c2a1e))
* use custom debug implemention instead of `debug` npm package ([b4bdf62](https://github.com/brillout/vite-plugin-ssr/commit/b4bdf624451af7816e50ccd7c74f4cf0e661735a))


### Features

* allow `doNotPrerender` to be defined in `_default.page.` files (close [#373](https://github.com/brillout/vite-plugin-ssr/issues/373)) ([33f6119](https://github.com/brillout/vite-plugin-ssr/commit/33f61195249f8f90a73e7f65dcb185b6e92eaebb))



## [0.4.12](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.11...v0.4.12) (2022-07-25)


### Bug Fixes

* add export resolvers for TS ([c995bfc](https://github.com/brillout/vite-plugin-ssr/commit/c995bfccf7a5ab2f723db62c740da93531c8443a))
* allow `_error.page.js` to be defined in `_default/` (fix [#374](https://github.com/brillout/vite-plugin-ssr/issues/374)) ([556b4b6](https://github.com/brillout/vite-plugin-ssr/commit/556b4b6ae4d7f0318e498759a0340c4c49f9610c))
* allow `export { doNotPrerender }` to be defined in `.page.js` and `.page.client.js` (fix [#378](https://github.com/brillout/vite-plugin-ssr/issues/378)) ([409b625](https://github.com/brillout/vite-plugin-ssr/commit/409b6253ae494ab1f95c9172c30161a2696244d9))
* explain user wrong usage instead of failing upon wrong export values ([dd6e94e](https://github.com/brillout/vite-plugin-ssr/commit/dd6e94e1bc3aefdc5fbfee9342cf60144dfc005e))
* false positive of using `pageContext.urlParsed.[hashString|searchString]` (fix [#377](https://github.com/brillout/vite-plugin-ssr/issues/377)) ([c129b9e](https://github.com/brillout/vite-plugin-ssr/commit/c129b9ed7e619455078baff073bd51b86ca12563))
* improve DEBUG=vps:extractStyles flag ([#376](https://github.com/brillout/vite-plugin-ssr/issues/376)) ([5301336](https://github.com/brillout/vite-plugin-ssr/commit/5301336a7e0cb5e52e8b045e23edda40f5d25829))
* improve error message upon wrong `onBeforePrerender()` hook usage ([f533bda](https://github.com/brillout/vite-plugin-ssr/commit/f533bda90688e82c68c4cdfdafa2ee146382b4c1))
* make `includeAssetsImportedByServer: false` work ([099bc10](https://github.com/brillout/vite-plugin-ssr/commit/099bc10b5877a656d19e3300795250fca4624133))
* make `includeAssetsImportedByServer` work for Vue SFCs (fix [#376](https://github.com/brillout/vite-plugin-ssr/issues/376)) ([f4c57fb](https://github.com/brillout/vite-plugin-ssr/commit/f4c57fb90d5e8d939a9f4edcdac0604a070ed1cc))
* set `includeAssetsImportedByServer` to `false` by default ([d8aa9a5](https://github.com/brillout/vite-plugin-ssr/commit/d8aa9a5f5ba1212bb714003771c1694d2d0f8e87))
* improve error messages ([611bb45](https://github.com/brillout/vite-plugin-ssr/commit/611bb45445cf75f00ce97393985808917163f825))


### Performance Improvements

* load less page files while pre-rendering ([611bb45](https://github.com/brillout/vite-plugin-ssr/commit/611bb45445cf75f00ce97393985808917163f825))
* use `PageFile[exportNames]` while pre-rendering, in order to avoid unecessary loading of page files ([#373](https://github.com/brillout/vite-plugin-ssr/issues/373), [#378](https://github.com/brillout/vite-plugin-ssr/issues/378)) ([00db4f9](https://github.com/brillout/vite-plugin-ssr/commit/00db4f9c8db8b39ea71a28ab7990ce76e14c6fcb))



## [0.4.11](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.10...v0.4.11) (2022-07-22)


### Bug Fixes

* assertion when user throws non-object error ([7bad325](https://github.com/brillout/vite-plugin-ssr/commit/7bad325b3246fb45d9374293f2bcf01cb8ccc3ad))
* improve err msg upon production build not found ([9aaa254](https://github.com/brillout/vite-plugin-ssr/commit/9aaa254c28aea9cec8c5357db1591a51cb12a21d))



## [0.4.10](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.9...v0.4.10) (2022-07-20)


### Bug Fixes

* show the stack trace for warnings with a direct call stack from the user ([f5c22d4](https://github.com/brillout/vite-plugin-ssr/commit/f5c22d4cee29c62ca38070df77bf2c4c11c735fc))
* treat `_default/` directories as empty for filesytem routing `_default.page.*` files ([da9af6e](https://github.com/brillout/vite-plugin-ssr/commit/da9af6e615d6377f14e2364f80e25cb0a002e778))



## [0.4.9](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.8...v0.4.9) (2022-07-15)


### Bug Fixes

* ensure that plugin helpers are not loaded by server-side runtime ([48714f3](https://github.com/brillout/vite-plugin-ssr/commit/48714f36360e001c34d826b1d315f114182ce32a))



## [0.4.8](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.7...v0.4.8) (2022-07-15)


### Bug Fixes

* add `node_modules/vite-plugin-ssr` to `fs.allow` list ([86b1173](https://github.com/brillout/vite-plugin-ssr/commit/86b11734c49f24ac27371d7f8992fae4e42c9edf))
* do not import `es-module-lexer` from server-side runtime ([7420876](https://github.com/brillout/vite-plugin-ssr/commit/74208764de0dee4a7f36952a6029d5bec007c70e))
* do not import `fast-glob` from server-side runtime ([0fabc6d](https://github.com/brillout/vite-plugin-ssr/commit/0fabc6d2b5ca5eae0bc0103ecd5600db84da0b16))



## [0.4.7](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.6...v0.4.7) (2022-07-15)


### Bug Fixes

* `prerender()` types ([a53c492](https://github.com/brillout/vite-plugin-ssr/commit/a53c492ffcd990cf3c38e348a1b9d193328ff92d))
* avoid false warnings of outdated pageContext.pageExports usage ([905f830](https://github.com/brillout/vite-plugin-ssr/commit/905f83019a6483a1662152ad0f02da1bc548e692))
* do not load route files when using server routing ([0891002](https://github.com/brillout/vite-plugin-ssr/commit/0891002055a51b7976cb9a380c5dbc9e09448e66))
* eslint `prerender()` ([f8f12b5](https://github.com/brillout/vite-plugin-ssr/commit/f8f12b5a074ccc59595395eea8538be9b8b577bd))
* show stack trace upon outdated pageExports usage ([641f7d3](https://github.com/brillout/vite-plugin-ssr/commit/641f7d320f5cc132ad2e8efc993c9a484235ef3b))
* show viewport prefetching dev info only once ([dae2e98](https://github.com/brillout/vite-plugin-ssr/commit/dae2e98c287c481081a1933cdffe32ad46d8b8fc))



## [0.4.6](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.5...v0.4.6) (2022-07-14)


### Bug Fixes

* add page files to optimizeDeps.entries ([3c5fa83](https://github.com/brillout/vite-plugin-ssr/commit/3c5fa83aff61ff7528ba837274449aaf5e6b4a69))
* make fs logic simpler ([2d83b67](https://github.com/brillout/vite-plugin-ssr/commit/2d83b678d95bfc7f1ec353e50283ce9f5bd0c418))


### Performance Improvements

* improve page files to be scanned by Vite ([31f4c01](https://github.com/brillout/vite-plugin-ssr/commit/31f4c01555e003a4ffd278b7d8ffd37aacecf039))
* prevent Vite from scanning too many page files ([2772814](https://github.com/brillout/vite-plugin-ssr/commit/277281448edef026e666837089817acbba639960))



## [0.4.5](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.4...v0.4.5) (2022-07-12)


### Bug Fixes

* Vite CLI for npm (fix [#363](https://github.com/brillout/vite-plugin-ssr/issues/363)) ([13b00b5](https://github.com/brillout/vite-plugin-ssr/commit/13b00b508b9d9a4e354a6b7ae677ffdca10af75e))



## [0.4.4](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.3...v0.4.4) (2022-07-12)


### Bug Fixes

* workaround Vite 3 ping bug vitejs/vite[#9051](https://github.com/brillout/vite-plugin-ssr/issues/9051) ([0140b51](https://github.com/brillout/vite-plugin-ssr/commit/0140b5107ddc95767331daa16f7ee87ea5673793))



## [0.4.3](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.2...v0.4.3) (2022-07-12)


### Bug Fixes

* client entry loaded twice (fix [#362](https://github.com/brillout/vite-plugin-ssr/issues/362)) ([031f47c](https://github.com/brillout/vite-plugin-ssr/commit/031f47ccfaf20b0cae8e55161b9fb79f7432f569))



## [0.4.2](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.1...v0.4.2) (2022-07-11)


### Bug Fixes

* update URLs to https://vite-plugin-ssr.com docs ([2fc1a3a](https://github.com/brillout/vite-plugin-ssr/commit/2fc1a3a7199e9bf319847ea3cd581edd4e681d1e))



## [0.4.1](https://github.com/brillout/vite-plugin-ssr/compare/v0.4.0...v0.4.1) (2022-07-11)


### Bug Fixes

* add crossorigin attribute to preload link with absolute src (fix [#355](https://github.com/brillout/vite-plugin-ssr/issues/355)) ([2c4ed4b](https://github.com/brillout/vite-plugin-ssr/commit/2c4ed4b5f5c9b04da43903fcf654f209c107d7af))
* route precedence for new param token `@` ([f83aa57](https://github.com/brillout/vite-plugin-ssr/commit/f83aa57c2928afc6cdcd666e9e9d0d13912f0740))



# [0.4.0](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.64...v0.4.0) (2022-07-10)


### BREAKING CHANGES

See [vite-plugin-ssr.com/migration/0.4](https://vite-plugin-ssr.com/migration/0.4) for how to migrate from `0.3` to `0.4`.


### Features

Major feature: see [this Twitter Thread](https://twitter.com/brillout/status/1546478670860140544).

Minor features:

* enable overwriting default routing with onBeforeRoute() ([46b9e19](https://github.com/brillout/vite-plugin-ssr/commit/46b9e19386367419cc881307c326df5b5fa8b54c))
* pageContext.urlParsed.searchAll ([94ee761](https://github.com/brillout/vite-plugin-ssr/commit/94ee7611283a933b4d05fbf043d8bc2166e80992))
* Parameterized Filesystem Routing ([416a94e](https://github.com/brillout/vite-plugin-ssr/commit/416a94e238557271d4e93cf713e05f8a1ff44336))
* support export default (fix [#314](https://github.com/brillout/vite-plugin-ssr/issues/314)) ([f653b68](https://github.com/brillout/vite-plugin-ssr/commit/f653b68b7d957f4c0139a22394988e576deaf05d))


### Bug Fixes

* add routing debug logs ([dfdb208](https://github.com/brillout/vite-plugin-ssr/commit/dfdb2081187d5e5f8a4872ad07fea67a693ce49d))
* add support for `$ vite preview` command ([c8ca4b8](https://github.com/brillout/vite-plugin-ssr/commit/c8ca4b8ed09eeba2becb7b0bb6b815a9800974cc))
* add support for ReScript ([a040fe7](https://github.com/brillout/vite-plugin-ssr/commit/a040fe7e56ea34ab2aee2951d91e626abd870bcf))
* add worker exports to `package.json#exports` for Cloudflare Workers ([954fe02](https://github.com/brillout/vite-plugin-ssr/commit/954fe02c13e103210499508e1736bef3044615ec))
* assert HTML variables ([254cf54](https://github.com/brillout/vite-plugin-ssr/commit/254cf549292a7b523dbad4f4f66c92e195c5b8d2))
* do not append ?extractStyles to asset imports for image Vite plugins (fix [#353](https://github.com/brillout/vite-plugin-ssr/issues/353)) ([1b937e2](https://github.com/brillout/vite-plugin-ssr/commit/1b937e28c656515e4d7c15791745a9a6c77dde49))
* do not copy static assets to `dist/server/` ([7e33664](https://github.com/brillout/vite-plugin-ssr/commit/7e336640ab859be358e35da4ea6d800a96bd3984))
* ensure HMR preamble code to be executed before client entries ([f4ff28b](https://github.com/brillout/vite-plugin-ssr/commit/f4ff28bc01ea2b81a354e3974749b5fe1eca253a))
* ensure Rollup generates an entry for each page file (fix [#350](https://github.com/brillout/vite-plugin-ssr/issues/350)) ([e659e26](https://github.com/brillout/vite-plugin-ssr/commit/e659e2643d4002f01113c1bd7b7ce926d077d8eb))
* ensure stream end handler is called once ([768c383](https://github.com/brillout/vite-plugin-ssr/commit/768c38328cc4544232968abee591e04870c9b5e5))
* ensure stream is always flushed ([5770d9f](https://github.com/brillout/vite-plugin-ssr/commit/5770d9fa8a845c16e137f7f4d37bc45fa4d3c8cf))
* fix styling in development for browser back/fwd buttons ([d3d4190](https://github.com/brillout/vite-plugin-ssr/commit/d3d4190b16b1179578df9d04acb3d3d56a70830d))
* handle destroyed Node.js writable proxy ([6488300](https://github.com/brillout/vite-plugin-ssr/commit/6488300cc1f4e5418ae178efa46ceef421f70995))
* handle URLs with several trailing slahes ([#310](https://github.com/brillout/vite-plugin-ssr/issues/310)) ([551b020](https://github.com/brillout/vite-plugin-ssr/commit/551b0207d0b3440ed60f92f337e5c97fdc18552f))
* improve asset naming ([8791d66](https://github.com/brillout/vite-plugin-ssr/commit/8791d6643da73c7624329386dda73123d3e59c6f))
* improve debug logs ([978a7c2](https://github.com/brillout/vite-plugin-ssr/commit/978a7c28f37ba59bcb81d8113a403a5ad240b9f7))
* improve error message upon multiple versions loaded ([6bb206e](https://github.com/brillout/vite-plugin-ssr/commit/6bb206eef570b22647a4161eb64137a9921d8e0b))
* improve error message upon wrong streaming setup ([baf8c88](https://github.com/brillout/vite-plugin-ssr/commit/baf8c8802e0e66c224486e6232ceebc5a9e21f2f))
* improve filesystem routing when `pages/` is (deeply) nested ([858dde4](https://github.com/brillout/vite-plugin-ssr/commit/858dde4498947432d7bf91ba5345ef29ccbe939b))
* improve prefetch config ([f4b4cc7](https://github.com/brillout/vite-plugin-ssr/commit/f4b4cc7945355b32ed7188cdcb6f84e6f22a6051))
* improve stream error handling ([d4835c0](https://github.com/brillout/vite-plugin-ssr/commit/d4835c06b31c23688b7a97ac095059e44b9cf834))
* improve wrong usage error message ([2d3132d](https://github.com/brillout/vite-plugin-ssr/commit/2d3132db0ed1e8f4d17e4d7b079c17f7d5dc84c8))
* increase scroll listener throttle timeout ([#46](https://github.com/brillout/vite-plugin-ssr/issues/46)) ([ab36ac3](https://github.com/brillout/vite-plugin-ssr/commit/ab36ac3d44569bb3bf77d5115f28c8ece891c9b5))
* isolate framework pageFiles symlink directory ([6e2d6f1](https://github.com/brillout/vite-plugin-ssr/commit/6e2d6f18e91dc7efd16a185588d91ad45b44c837))
* make `$ vite dev` and `$ vite preview` support HTML streaming ([9a59360](https://github.com/brillout/vite-plugin-ssr/commit/9a593608be34c0e7323751f484c4c2815ef29634))
* make `httpResponse.pipe()` work with Readable Streams ([558f87a](https://github.com/brillout/vite-plugin-ssr/commit/558f87a72548576d3def017ad3bee3c13f69b35d))
* make `navigate()` cross-bundle safe ([68a9e7a](https://github.com/brillout/vite-plugin-ssr/commit/68a9e7a6cc28936c29ef1ed1cb6997d63f107244))
* make vps resilient against array prototype extensions ([2d09e75](https://github.com/brillout/vite-plugin-ssr/commit/2d09e75b0ce992c3342de6f9b4969771389b73b2))
* only add vps dev middleware for Vite's CLI ([b0c3974](https://github.com/brillout/vite-plugin-ssr/commit/b0c3974f15a4508f99e6d22dedbf4e1b8f6c6d5e))
* route precendence ([e2bfd5d](https://github.com/brillout/vite-plugin-ssr/commit/e2bfd5d13aa1846c5e6fd68a574ab4c43c5f47b9))
* support `$ vite dev` command ([4ca3e39](https://github.com/brillout/vite-plugin-ssr/commit/4ca3e39f75da0482f2050f3ab73e7f649d1752dd))
* support `vite preview` command for SSG ([a7c602a](https://github.com/brillout/vite-plugin-ssr/commit/a7c602a84d263dd9db84afc6bb59310f6cbf9cc3))
* support rollup format synonyms ([1a7d4f7](https://github.com/brillout/vite-plugin-ssr/commit/1a7d4f7d65a5ec3aec354b1411a2f8cdc09f9e6b))
* swallow expected errors upon new frontend deploy ([34d800f](https://github.com/brillout/vite-plugin-ssr/commit/34d800f12aed3411c40ca5c1f9f744a206b5a0d2))
* switch to server-routing if asset fail to load upon new deploy ([#292](https://github.com/brillout/vite-plugin-ssr/issues/292)) ([1f837d5](https://github.com/brillout/vite-plugin-ssr/commit/1f837d5cb8d8239d043227b4a832f3bbe461a6cd))
* throw normalized client-side error upon new deploy handling ([e0163a8](https://github.com/brillout/vite-plugin-ssr/commit/e0163a80f1293306a48e6d9f5c46414335f3783a))
* tolerate multiple vps instances ([74b8eb2](https://github.com/brillout/vite-plugin-ssr/commit/74b8eb20e270a1412af8452cb95ccfc9eb623720))
* treat `Object.ceate(null)` as plain JavaScript object ([c9eb387](https://github.com/brillout/vite-plugin-ssr/commit/c9eb387ff2f878ee949441f4f1235ab9461e6d17))
* update pageContext.urlParsed type ([12261ac](https://github.com/brillout/vite-plugin-ssr/commit/12261ac06341b5a3db985d8ee2aa80df43d58291))


### Performance Improvements

* ensure scripts to be loaded last ([b921e60](https://github.com/brillout/vite-plugin-ssr/commit/b921e606f0a11f7f6a5ffbbc962b940d669b006b))
* only add page entries to `optimizeDeps.entries` if CI ([8e10dae](https://github.com/brillout/vite-plugin-ssr/commit/8e10dae2c2b4517981ded3ead148db9aeaeadc8a))
* resolve dynamic imports early ([a9da5a2](https://github.com/brillout/vite-plugin-ssr/commit/a9da5a2d968411a17ff40e3ac4fb1737ba7e00c7))
* scan index page on dev start ([4f82f03](https://github.com/brillout/vite-plugin-ssr/commit/4f82f035a9def4580d9a28f2e6cea928fdf764b5))



## [0.3.64](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.63...v0.3.64) (2022-04-14)


### Bug Fixes

* remove console.log() ([32848a7](https://github.com/brillout/vite-plugin-ssr/commit/32848a79a2fedc7ae9b1ee53f3c843c4203ad311))



## [0.3.63](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.62...v0.3.63) (2022-04-14)


### Bug Fixes

* client-side routing unicode navigate (fix [#307](https://github.com/brillout/vite-plugin-ssr/issues/307)) ([fba7e77](https://github.com/brillout/vite-plugin-ssr/commit/fba7e777135f5b2fea061cc35150c344bdbc6b31))



## [0.3.62](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.61...v0.3.62) (2022-04-09)


### Bug Fixes

* help esbuild resolve `navigate()` server-side import (fix [#301](https://github.com/brillout/vite-plugin-ssr/issues/301)) ([a03a392](https://github.com/brillout/vite-plugin-ssr/commit/a03a3921a8a4c0b9981c4ae42c6b21bd57bbdd21))



## [0.3.61](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.60...v0.3.61) (2022-03-30)


### Bug Fixes

* Fix duplicate decodeURI logic ([#291](https://github.com/brillout/vite-plugin-ssr/pull/291))



## [0.3.60](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.59...v0.3.60) (2022-03-11)


### Bug Fixes

* allow `prerender()` to be called without any argument ([7eca89d](https://github.com/brillout/vite-plugin-ssr/commit/7eca89d5ba53bc28fa27a16c6b7e8ad34d9bdcf6))
* forbid usage of older problematic Vite version ([1b04a99](https://github.com/brillout/vite-plugin-ssr/commit/1b04a99f100e763ff4e0929f97d40f03d745a7b9))
* support unicode URLs ([443f7c6](https://github.com/brillout/vite-plugin-ssr/commit/443f7c646d7d1e9ccc73a36d0fc5b31c9f94bf14))



## [0.3.59](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.58...v0.3.59) (2022-02-23)


### Bug Fixes

* help eslint resolve modules (fix [#270](https://github.com/brillout/vite-plugin-ssr/issues/270)) ([14dfe7a](https://github.com/brillout/vite-plugin-ssr/commit/14dfe7ad91532ecf461417593da3037e58a35750))
* improve bug error message ([#268](https://github.com/brillout/vite-plugin-ssr/issues/268)) ([a848d9d](https://github.com/brillout/vite-plugin-ssr/commit/a848d9d7f086a73b8f556480d9c1a9feb9f5b5b7))
* improve error message upon wrong `escapeInject` usage (fix [#268](https://github.com/brillout/vite-plugin-ssr/issues/268)) ([9331aa8](https://github.com/brillout/vite-plugin-ssr/commit/9331aa8a34ca5ec4d36953ac0a742fe93e6e1b8a))



## [0.3.58](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.57...v0.3.58) (2022-02-20)


### Bug Fixes

* fix windows dynamic import path resolve ([c548f3e](https://github.com/brillout/vite-plugin-ssr/commit/c548f3ee4c336eaaeeff3f4a8f7dc12680ac5a7d))



## [0.3.57](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.56...v0.3.57) (2022-02-20)


### Bug Fixes

* support ESM module dist/server ([4499330](https://github.com/brillout/vite-plugin-ssr/commit/449933089f9d9708830b8b12e6a2413c48c32f90))
* use `import()` instead of `require()` ([a7886be](https://github.com/brillout/vite-plugin-ssr/commit/a7886be09f642cff56434a86f8ce00d20860b625))



## [0.3.56](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.55...v0.3.56) (2022-02-19)


### Bug Fixes

* [bundle-size reduction] remove unused utils from client ([cb86e81](https://github.com/brillout/vite-plugin-ssr/commit/cb86e81f57a5e1d975a0104cd474dc2ff054057c))
* [npm package size reduction] remove tests from npm package ([3ad6a6b](https://github.com/brillout/vite-plugin-ssr/commit/3ad6a6ba0cf9bea45444cc49c6db78fe9db51268))
* [npm package size reduction] replace dual ESM+CJS transpiling with ([0157912](https://github.com/brillout/vite-plugin-ssr/commit/0157912aa72ae4b2a5d3c103ff2f65c27244522f))



## [0.3.55](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.54...v0.3.55) (2022-02-18)


### Bug Fixes

* remove TS source files from npm package (fix [#265](https://github.com/brillout/vite-plugin-ssr/issues/265)) ([d15f134](https://github.com/brillout/vite-plugin-ssr/commit/d15f134c768ef7f244e65cdff1b88bada9f98a60))



## [0.3.54](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.53...v0.3.54) (2022-02-17)


### Bug Fixes

* improve internal failure message ([eaa1aba](https://github.com/brillout/vite-plugin-ssr/commit/eaa1ababa81a1a15748c178ebf27b4fb65f6d19e))
* skip empty href links (fix [#263](https://github.com/brillout/vite-plugin-ssr/issues/263)) ([5568754](https://github.com/brillout/vite-plugin-ssr/commit/556875465b4d026f1c02df7d8182766f59f88c6f))



## [0.3.53](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.52...v0.3.53) (2022-02-10)


### Bug Fixes

* add TypeScript types to CLI JavaScript API ([b1d90c5](https://github.com/brillout/vite-plugin-ssr/commit/b1d90c54a6c13e92abc32a2c24111af1261666e6))



## [0.3.52](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.51...v0.3.52) (2022-02-10)


### Features

* pass `globalContext` to `prerender()` hooks ([0f52a77](https://github.com/brillout/vite-plugin-ssr/commit/0f52a778691c2b27bdbe6a2ade4c153ad0d84372))



## [0.3.51](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.50...v0.3.51) (2022-02-01)


### Bug Fixes

* fix @brillout/json-s optimizeDeps entry ([4e45d08](https://github.com/brillout/vite-plugin-ssr/commit/4e45d084d05d3a473d7295143432493dcc50a248))
* gracefully handle unexpected URL formats (fix [#252](https://github.com/brillout/vite-plugin-ssr/issues/252)) ([48ca1b1](https://github.com/brillout/vite-plugin-ssr/commit/48ca1b10ce9067e948425cbefc59072a206c000a))
* improve DX around wrong environement ([4f705c4](https://github.com/brillout/vite-plugin-ssr/commit/4f705c4d3043479cefefebcb687abe3554da89f9))
* use more robust Node.js env test ([7240263](https://github.com/brillout/vite-plugin-ssr/commit/724026366b41f811e9b20047419d17eda2a759e8))



## [0.3.50](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.49...v0.3.50) (2022-01-28)


### Bug Fixes

* fix 404 link ([1006387](https://github.com/brillout/vite-plugin-ssr/commit/10063874a8b4ae1f9ec5ba3187ae5b538e9defd4))
* improve DX upon serialization failure ([d42911c](https://github.com/brillout/vite-plugin-ssr/commit/d42911ca0d4fd6c2bfae28ea4cb8846113102cbd))


### Features

* enable users to trigger error page by `throw RenderPageError({ pageContext: /* some additional context passed to _error.page.js */ })` ([8731c6e](https://github.com/brillout/vite-plugin-ssr/commit/8731c6e3a83ef014db4361a4b4f6a8dcb1bc6e87))



## [0.3.49](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.48...v0.3.49) (2022-01-26)


### Features

* add `baseAssets` option; enable CDN deployments ([dac4841](https://github.com/brillout/vite-plugin-ssr/commit/dac484193fbbe6f2432b0e2ad35197bfba1e378a))



## [0.3.48](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.47...v0.3.48) (2022-01-25)


### Bug Fixes

* fix and rename `doNotCreateNewHistoryEntry` to `overwriteLastHistoryEntry` ([d3a4582](https://github.com/brillout/vite-plugin-ssr/commit/d3a458252e43e337769c17d03293201e5abf4e8c))



## [0.3.47](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.46...v0.3.47) (2022-01-24)


### Features

* new `navigate()` option `doNotCreateNewHistoryEntry` ([59460fd](https://github.com/brillout/vite-plugin-ssr/commit/59460fdc2a6b678be92636f129e0707d8871ff4c))



## [0.3.46](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.45...v0.3.46) (2022-01-18)


### Features

* allow `render()` hook to return a `pageContext` promise ([44ef89d](https://github.com/brillout/vite-plugin-ssr/commit/44ef89d2eb03dc0ee0a26a3257f9ca6b72a4504f))



## [0.3.45](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.44...v0.3.45) (2022-01-17)


### Bug Fixes

* allow user to define `rollupOptions.input` with a `string` or `string[]` ([d3f116d](https://github.com/brillout/vite-plugin-ssr/commit/d3f116ddcbdfdac2417179d8bf95360e97e8669f))



## [0.3.44](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.43...v0.3.44) (2022-01-12)


### Features

* expose SSR errors at `pageContext.errorWhileRendering` ([3a10f11](https://github.com/brillout/vite-plugin-ssr/commit/3a10f112ec52000ed507d8bf2b0874ef8f929ad0))



## [0.3.43](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.42...v0.3.43) (2022-01-04)


### Bug Fixes

* enable improved SPA example ([f111fd5](https://github.com/brillout/vite-plugin-ssr/commit/f111fd594b0cdd2ef4a4bbdd3208a3395827e1d2))



## [0.3.42](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.41...v0.3.42) (2021-12-27)


### Bug Fixes

* attempt to fix the setup.ts bug ([0ae3499](https://github.com/brillout/vite-plugin-ssr/commit/0ae3499df2389389e2f1c49d0d2764b45858e5bb))



## [0.3.41](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.40...v0.3.41) (2021-12-24)


### Features

* add option `prerender({ onPagePrender })` ([b864664](https://github.com/brillout/vite-plugin-ssr/commit/b864664cca241ca6e14f09915d9ecbd581fd1ecb))



## [0.3.40](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.39...v0.3.40) (2021-12-23)


### Bug Fixes

* do not use `outDir` config for plugin `dist/` folder ([a7b2cc5](https://github.com/brillout/vite-plugin-ssr/commit/a7b2cc5def992d41c538d156bb914d3dd3878dcd))
* improve error message when `importBuild.js` is missing (fix [#235](https://github.com/brillout/vite-plugin-ssr/issues/235)) ([4390d7f](https://github.com/brillout/vite-plugin-ssr/commit/4390d7f13885bed5ddeb3d9f2c34f314c0fe27fa))
* replace direct eval with new Function ([9432d31](https://github.com/brillout/vite-plugin-ssr/commit/9432d31ed9f6e2519a76d61bfd2691495532c5a2))
* support Cloudflare Pages workers ([950b470](https://github.com/brillout/vite-plugin-ssr/commit/950b470703522f1c9bb1946cfd3d565c96d12739))



## [0.3.39](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.38...v0.3.39) (2021-12-18)


### Bug Fixes

* add debug info for `setup.ts:14` bug ([edad4cc](https://github.com/brillout/vite-plugin-ssr/commit/edad4cce99eefae4e2db04a641914b9982b41e45))



## [0.3.38](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.37...v0.3.38) (2021-12-18)


### Bug Fixes

* make `noExternal: true` work with vite-plugin-ssr ([bacba9f](https://github.com/brillout/vite-plugin-ssr/commit/bacba9f8d5991242d466047bf38cc45e75d5d778))



## [0.3.37](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.36...v0.3.37) (2021-12-17)


### Bug Fixes

* HTML tag detection regex ([d8c3846](https://github.com/brillout/vite-plugin-ssr/commit/d8c3846d1cab2df9fa24a28a9c1715eb78aae625))
* load stream module dynamically only if needed ([beb589d](https://github.com/brillout/vite-plugin-ssr/commit/beb589d54ca02c3927b4be25b90b8a84e55e4e7a))
* remove Vite's require hook plugin ([55270db](https://github.com/brillout/vite-plugin-ssr/commit/55270dbb80a825cb02bbcf88217ca88c2400b7c4))


### BREAKING CHANGES

* HTML Streaming changes.

 - `httpResponse.bodyNodeStream` -> `httpResponse.getNodeStream()`
 - `httpResponse.bodyWebStream` -> `httpResponse.getWebStream()`
 - `httpResponse.bodyPipeToNodeWritable()` -> `httpResponse.pipeToNodeWritable()`
 - `httpResponse.bodyPipeToWebWritable()` -> `httpResponse.pipeToWebWritable()`

More infos at https://vite-plugin-ssr.com/stream



## [0.3.36](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.35...v0.3.36) (2021-12-13)


### Bug Fixes

* add support for relative URLs such as `./relative-path` or `?query` ([b0329d2](https://github.com/brillout/vite-plugin-ssr/commit/b0329d206cf80ab6b0b202d1c7fc9093e9b65fb7))
* deprecate `pageContext.urlNormalized` in favor of `pageContext.urlPathname` and `pageContext.urlParsed` ([2b23bf3](https://github.com/brillout/vite-plugin-ssr/commit/2b23bf345ca9aebc1f0633a5b557c3049dbc600f))


### BREAKING CHANGES

* `pageContext.urlNormalized` is deprecated. Use `pageContext.urlPathname` and `pageContext.urlParsed` instead.



## [0.3.35](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.34...v0.3.35) (2021-12-07)


### Bug Fixes

* fix minor Base URL bug


## [0.3.34](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.33...v0.3.34) (2021-12-04)


### Bug Fixes

* filesytemRoutingRoot living at root ([3f27e5d](https://github.com/brillout/vite-plugin-ssr/commit/3f27e5da55450a7d8f71195fe6c389e28f68e9b7))



## [0.3.33](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.32...v0.3.33) (2021-12-03)


### Bug Fixes

* improve assert ([d6bb445](https://github.com/brillout/vite-plugin-ssr/commit/d6bb44567d2fefce48dd7987d81906a99eda7daf))



## [0.3.32](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.31...v0.3.32) (2021-12-03)


### Bug Fixes

* remove duplicated Base URL in dev ([b6b660d](https://github.com/brillout/vite-plugin-ssr/commit/b6b660d582023da48fa6c92ba96f13219221a626))
* support page files at app root ([7674ec7](https://github.com/brillout/vite-plugin-ssr/commit/7674ec7edacd43f9de82af6a34d9c88d26edd6ef))



## [0.3.31](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.30...v0.3.31) (2021-11-19)


### Bug Fixes

* don't assume Vite to noramlize `root` (fix [#208](https://github.com/brillout/vite-plugin-ssr/issues/208)) ([3b50083](https://github.com/brillout/vite-plugin-ssr/commit/3b5008337ebb346057f1cd0133d9dd5e244e2f6c))
* fix client routing deadlock when ensureHydration is set ([124c83c](https://github.com/brillout/vite-plugin-ssr/commit/124c83c692cfb8713e30af196a84bf91d9a98472))



## [0.3.30](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.29...v0.3.30) (2021-11-18)


### Bug Fixes

* make `pageContext.pageProps.is404` more resillient ([765c5b3](https://github.com/brillout/vite-plugin-ssr/commit/765c5b3df4068a9b89c56a816d09285aea4d33f2))



## [0.3.29](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.28...v0.3.29) (2021-11-16)


### Bug Fixes

* add support for `url === '/some-base-url' && baseUrl === '/some-base-url/'` ([bfac53b](https://github.com/brillout/vite-plugin-ssr/commit/bfac53b2055faa2ca395d762d3ee9f25a678c657))
* Client Router + Base URL regression (fix [#205](https://github.com/brillout/vite-plugin-ssr/issues/205)) ([cb95ed4](https://github.com/brillout/vite-plugin-ssr/commit/cb95ed45a9b727a38105ce296b6cd0a6a10e486d))
* improve argument handling of `useClientRouter()` ([8db8836](https://github.com/brillout/vite-plugin-ssr/commit/8db8836163c92b499cd74a787c41ff8d76c9a8ae))
* regression pageProps.is404 overriden by user provided `pageContext` ([a796168](https://github.com/brillout/vite-plugin-ssr/commit/a7961686cdb9c834bd0bd70f33c70472e563258f))
* skip Client Router for links that don't match Base URL ([bce64c5](https://github.com/brillout/vite-plugin-ssr/commit/bce64c5c49a6b595a54b6379aad50593a589a737))



## [0.3.28](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.27...v0.3.28) (2021-11-15)


### Bug Fixes

* add scss/sass/less to inferred types (fix [#196](https://github.com/brillout/vite-plugin-ssr/issues/196)) ([0a329cf](https://github.com/brillout/vite-plugin-ssr/commit/0a329cf9a7fd7c99a435f7ad861a48809ed51513))
* always use camelCase for CLI options ([2ad6027](https://github.com/brillout/vite-plugin-ssr/commit/2ad60273c0b23d89afeccaafad36525806136282))
* fix buggy CSS test ([8676afa](https://github.com/brillout/vite-plugin-ssr/commit/8676afa10436d55225e68a5644056d802cf943ed))
* fix Route Function precendence value assertion ([f4d41c7](https://github.com/brillout/vite-plugin-ssr/commit/f4d41c7eb8d1d63ae21fc8620ac74b969a10e55f))
* improve error message when client-side routing to 404 ([c036f51](https://github.com/brillout/vite-plugin-ssr/commit/c036f516c22c9dda65c92bb82b82a600835f7b94))
* show warning instead of internal error upon relative link URLs ([83255e2](https://github.com/brillout/vite-plugin-ssr/commit/83255e260aed5ab4dd8a80a16e56e7236e76472d))


### BREAKING CHANGES

* CLI option `$ vite-plugin-ssr prerender --no-extra-dir`
renamed to `$ vite-plugin-ssr prerender --noExtraDir`.



## [0.3.27](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.26...v0.3.27) (2021-11-10)


### Bug Fixes

* circumvent React/Node.js bug (fix [#203](https://github.com/brillout/vite-plugin-ssr/issues/203)) ([b024045](https://github.com/brillout/vite-plugin-ssr/commit/b024045f01bdf0496251b2f2eb9ff3bb7e54b7ad))



## [0.3.26](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.25...v0.3.26) (2021-11-05)


### Bug Fixes

* do not normalize `pageContext.url` ([22a5311](https://github.com/brillout/vite-plugin-ssr/commit/22a5311a327bee99707e1a384c3a2ac9c985a3bd))



## [0.3.25](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.24...v0.3.25) (2021-11-05)


### Bug Fixes

* fix wrong assert ([4d4fa35](https://github.com/brillout/vite-plugin-ssr/commit/4d4fa35c718887581433a4aab5cb6e19e6b9cdc7))



## [0.3.24](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.23...v0.3.24) (2021-11-04)


### Bug Fixes

* [Client Router] add support for links with hash ([39ad1fb](https://github.com/brillout/vite-plugin-ssr/commit/39ad1fb420474825538aaf0cfd30bd7e7e664c07))
* add link prefetch handlers once ([b8e0d00](https://github.com/brillout/vite-plugin-ssr/commit/b8e0d003d2c70e95d7b0a89311c4e94bf58eaf97))



## [0.3.23](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.22...v0.3.23) (2021-11-03)


### Bug Fixes

* also render 500 page upon client-side routing ([252137b](https://github.com/brillout/vite-plugin-ssr/commit/252137ba9667afa334a3f7818b1d645cb34b31fd))
* ensure right content type for `.pageContext.json` URLs ([#191](https://github.com/brillout/vite-plugin-ssr/issues/191)) ([56e356f](https://github.com/brillout/vite-plugin-ssr/commit/56e356fb64b59a6c7ec9e2dad037e9ae7ed6c1e3))
* impl clear message when hooks wrongfully return whole `pageContext` object (fix [#174](https://github.com/brillout/vite-plugin-ssr/issues/174)) ([c38eb98](https://github.com/brillout/vite-plugin-ssr/commit/c38eb98188d1a27119c2e67582213bd025a0904d))



## [0.3.22](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.21...v0.3.22) (2021-11-02)


### Bug Fixes

* Add webp to inferred types ([#195](https://github.com/brillout/vite-plugin-ssr/pull/195))



## [0.3.21](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.20...v0.3.21) (2021-11-02)


### Bug Fixes

* provide `pageContext.httpResponse.contentType` (fix [#191](https://github.com/brillout/vite-plugin-ssr/issues/191)) ([ee5009d](https://github.com/brillout/vite-plugin-ssr/commit/ee5009dcd0e5ec8b5a18cdd8dc13ab095f4016ca))



## [0.3.20](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.19...v0.3.20) (2021-10-30)


### Bug Fixes

* fix renderPage type (fix [#184](https://github.com/brillout/vite-plugin-ssr/issues/184)) ([2263f43](https://github.com/brillout/vite-plugin-ssr/commit/2263f438e90b8605ff7a3f2bfe5fda3f925a90bf))



## [0.3.19](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.18...v0.3.19) (2021-10-27)


### Bug Fixes

* improve CSP support ([#181](https://github.com/brillout/vite-plugin-ssr/pull/181))



## [0.3.18](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.17...v0.3.18) (2021-10-26)


### Bug Fixes

* ensure filesystem routing is skipped when there is a page route file ([95eff57](https://github.com/brillout/vite-plugin-ssr/commit/95eff57d0866e620cec5019acf11951abc34dad2))
* improve overall precende algorithm ([4f84f4e](https://github.com/brillout/vite-plugin-ssr/commit/4f84f4e0777e2fc9f6ac3b9f6a04cd14b2373eaf))



## [0.3.17](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.16...v0.3.17) (2021-10-25)


### Bug Fixes

* improve route string precedence ([74e6abb](https://github.com/brillout/vite-plugin-ssr/commit/74e6abb16c9362c68520ba0789bdb1d30a1d8f4e))



## [0.3.16](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.15...v0.3.16) (2021-10-25)


### Bug Fixes

* refactor route precedence algorithm ([8ce369b](https://github.com/brillout/vite-plugin-ssr/commit/8ce369b6460a49ab6e2b81fd414452f3bf756703))


### BREAKING CHANGES

* Route Functions should return `precedence` instead of
`matchValue`, see https://vite-plugin-ssr.com/route-function



## [0.3.15](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.14...v0.3.15) (2021-10-24)


### Bug Fixes

* reduce priority of catch-all routes ([3b11956](https://github.com/brillout/vite-plugin-ssr/commit/3b11956a9083c4a281380d363a97b23c4f7c5ddb))



## [0.3.14](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.13...v0.3.14) (2021-10-24)


### Bug Fixes

* avoid duplicate error logs ([63eb40f](https://github.com/brillout/vite-plugin-ssr/commit/63eb40fcebc724180d7232934098fc7623418f4d))
* make catch-all route lower prio (fix [#178](https://github.com/brillout/vite-plugin-ssr/issues/178)) ([235e0dc](https://github.com/brillout/vite-plugin-ssr/commit/235e0dcd1151b8bc7ff3487f6887954bc1efcd05))


### Features

* make `outDir` configurable instead of always beeing `dist/` ([#177](https://github.com/brillout/vite-plugin-ssr/pull/177))


### BREAKING CHANGES

* Route String priority algorithm changed. AFAICT there
aren't any breaking change, but no guarantee here.



## [0.3.13](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.12...v0.3.13) (2021-10-21)


### Features

* link prefetching ([9d93b46](https://github.com/brillout/vite-plugin-ssr/commit/9d93b46d5d7c5e22901c97f2d81b6c5b8255477a))



## [0.3.12](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.11...v0.3.12) (2021-10-17)


### Bug Fixes

* client router TS type ([4d11ac3](https://github.com/brillout/vite-plugin-ssr/commit/4d11ac35d4f42fe5ded1d6f71a7d4a7ee87ecdc5))



## [0.3.11](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.10...v0.3.11) (2021-10-16)


### Features

* support multiple `onBeforeRender()` hooks in `.page.js` and `.page.server.js` ([#95](https://github.com/brillout/vite-plugin-ssr/issues/95), [#153](https://github.com/brillout/vite-plugin-ssr/issues/153))


### Bug Fixes

* do not `optimizeDeps` client code deps ([#168](https://github.com/brillout/vite-plugin-ssr/issues/168))
* update path-to-regexp ([f997192](https://github.com/brillout/vite-plugin-ssr/commit/f997192c54bc5209102e6a01d9e57945ce5fe4bb))


### BREAKING CHANGES

* catch-all route is now `'/*'` instead of `'/:params*'`,
see https://vite-plugin-ssr.com/catch-all



## [0.3.10](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.9...v0.3.10) (2021-10-09)


### Bug Fixes

* prepare Vite breaking change ([8312b5d](https://github.com/brillout/vite-plugin-ssr/commit/8312b5d5875db8f411c74bc568b99415f109ad19))



## [0.3.9](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.7...v0.3.9) (2021-10-08)


### Bug Fixes

* add option `useClientRouter({ ensureHydration: boolean })` to mitigate "Hydration Mismatch" errors for Vue users" ([c5891cd](https://github.com/brillout/vite-plugin-ssr/commit/c5891cdc3af5e7873d169c4c672805c994e4f150))
* fix tolerate readable streams with missing read() handler ([#138](https://github.com/brillout/vite-plugin-ssr/issues/138)) ([e33eea4](https://github.com/brillout/vite-plugin-ssr/commit/e33eea453b3242f6d7784c559f8b36ff315e8308))
* stop make superfluous `.pageContext.json` requests when there are no `onBeforeRender()` defined on the server-side ([#95](https://github.com/brillout/vite-plugin-ssr/issues/95)) ([6a16049](https://github.com/brillout/vite-plugin-ssr/commit/6a16049ac084eed28e0eced2ccfa54518601dd8d))
* tolerate readable streams with missing `read()` handler ([#138](https://github.com/brillout/vite-plugin-ssr/issues/138)) ([a214190](https://github.com/brillout/vite-plugin-ssr/commit/a2141909cd40a96bdc167bfbb07d7659178ede5d))



## [0.3.8](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.7...v0.3.8) (2021-10-07)


### Bug Fixes

* add option `useClientRouter({ ensureHydration: boolean })` to mitigate "Hydration Mismatch" errors for Vue users" ([c5891cd](https://github.com/brillout/vite-plugin-ssr/commit/c5891cdc3af5e7873d169c4c672805c994e4f150))
* stop make superfluous `.pageContext.json` requests when there are no `onBeforeRender()` defined on the server-side ([#95](https://github.com/brillout/vite-plugin-ssr/issues/95)) ([6a16049](https://github.com/brillout/vite-plugin-ssr/commit/6a16049ac084eed28e0eced2ccfa54518601dd8d))
* tolerate readable streams with missing `read()` handler ([#138](https://github.com/brillout/vite-plugin-ssr/issues/138)) ([a214190](https://github.com/brillout/vite-plugin-ssr/commit/a2141909cd40a96bdc167bfbb07d7659178ede5d))



## [0.3.7](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.6...v0.3.7) (2021-10-05)


### Bug Fixes

* also add `@brillout/json-s` to `optimizeDeps` ([ed255d1](https://github.com/brillout/vite-plugin-ssr/commit/ed255d1a563ccd7f07b2387b7b15464390993860))



## [0.3.6](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.5...v0.3.6) (2021-10-05)


### Bug Fixes

* tell Vite what to pre-bundle also for `vite-plugin-ssr/client/router` ([#156](https://github.com/brillout/vite-plugin-ssr/issues/156)) ([64f7444](https://github.com/brillout/vite-plugin-ssr/commit/64f7444409c0b30a85634277dbdc7caa9726812d))



## [0.3.5](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.4...v0.3.5) (2021-10-05)


### Bug Fixes

* circumvent Vite bug that occurs when HTML has no `<head>` ([e282837](https://github.com/brillout/vite-plugin-ssr/commit/e282837d0fb82cbe0eeb80901fbe62712300b9e7))
* tell Vite what to pre-bundle (fix [#156](https://github.com/brillout/vite-plugin-ssr/issues/156)) ([59dfb4c](https://github.com/brillout/vite-plugin-ssr/commit/59dfb4c51a4c5394847944b3df2069a746c0574a))



## [0.3.4](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.3...v0.3.4) (2021-10-05)


### Bug Fixes

* make sure `renderPage()` never throws an error, gracefully handle errors instead ([ec37859](https://github.com/brillout/vite-plugin-ssr/commit/ec37859a29411b9edf4a0ecae66596035c5c92c0))



## [0.3.3](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.2...v0.3.3) (2021-09-29)


### Features

* HTML streaming support ([#138](https://github.com/brillout/vite-plugin-ssr/issues/138))



## [0.3.2](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.1...v0.3.2) (2021-09-22)


### Bug Fixes

* correctly handle base URL that contains a URL origin (fix [#149](https://github.com/brillout/vite-plugin-ssr/issues/149)) ([41fb77c](https://github.com/brillout/vite-plugin-ssr/commit/41fb77c8cdc99fa5db5c3acc93d1b4f8278616bd))
* filesystem routing: also map `src/` directories to empty string ([c629cbe](https://github.com/brillout/vite-plugin-ssr/commit/c629cbe12de7f90003e9097564d237fb53124da8))


### Features

* `pageContext.httpResponse.bodyWebStream`, `pageContext.httpResponse.bodyNodeStream`, `pageContext.httpResponse.getBody()` ([c2e1ce2](https://github.com/brillout/vite-plugin-ssr/commit/c2e1ce290b521b020b5f7ab96b099750b083f15f))



## [0.3.1](https://github.com/brillout/vite-plugin-ssr/compare/v0.3.0...v0.3.1) (2021-09-14)


### Bug Fixes

* unkown exports warning ([324480c](https://github.com/brillout/vite-plugin-ssr/commit/324480c68f7a54e3e76a67eb83f1f25b1960b956))



# [0.3.0](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.13...v0.3.0) (2021-09-14)


### Bug Fixes

* dx: forbid user to inject assets twice instead of silently failing ([6d4166e](https://github.com/brillout/vite-plugin-ssr/commit/6d4166ebaee123a6c2fdaad12451c6cf7fc708a1))
* support latest `@types/node` version ([3078ac5](https://github.com/brillout/vite-plugin-ssr/commit/3078ac5021da335c1d3808b524154cd79bf1020a))
* ts: use all strict flags in order to accommodate for users with strict TS settings ([#145](https://github.com/brillout/vite-plugin-ssr/issues/145)) ([fd5bae5](https://github.com/brillout/vite-plugin-ssr/commit/fd5bae5c0c5bd63117af56e3a75e37eb674bda96))

### Features

* implement domain-drive file structure (closes [#125](https://github.com/brillout/vite-plugin-ssr/issues/125)) ([fb368ff](https://github.com/brillout/vite-plugin-ssr/commit/fb368ff2f9cffdd44e556492e01f021d34e84af5))
* allow `render()` hook to modify `pageContext` (e.g. [boilerplate-react/renderer/_default.page.server.jsx](/boilerplates/boilerplate-react/renderer/_default.page.server.jsx))
* `onBeforeRoute()` out of beta
* `onBeforePrerender()` out of beta
* `vite-plugin-ssr` can now automatically inject assets to HTML in more situations (paving the way for built-in HTML streaming support)

### BREAKING CHANGES

* `dangerouslySkipEscape` is now a standalone import.
   ```diff
     // _default.page.server.js

   - import { html } from "vite-plugin-ssr"
   + import { html, dangerouslySkipEscape } from "vite-plugin-ssr"

     export function render() {
       return html`<!DOCTYPE html>
         <html>
           <body>
   -         <div id="page-view">${html.dangerouslySkipEscape(pageHtml)}</div>
   +         <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
           </body>
         </html>`
     }
   ```

* `html` template tag renamed to `escapeInject`.
   ```diff
     // _default.page.server.js

   - import { html, dangerouslySkipEscape } from "vite-plugin-ssr"
   + import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr"

     export function render() {
   -   return html`<!DOCTYPE html>
   +   return escapeInject`<!DOCTYPE html>
         <html>
           <body>
             <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
           </body>
         </html>`
     }
   ```

* `createPageRender()` renamed `createPageRenderer()`.
  ```diff
    // server.js

  - const renderPage = createPageRender(/*...*/)
  + const renderPage = createPageRenderer(/*...*/)
  ```

* `renderPage()` changes:
  ```diff
    // server.js

    const renderPage = createPageRenderer(/*...*/)
    app.get('*', async (req, res, next) => {
      const url = req.originalUrl
  -   const pageContext = { url }
  -   const result = await renderPage(pageContext)
  -   if (result.nothingRendered) return next()
  -   res.status(result.statusCode).send(result.renderResult)
  +   const pageContextInit = { url }
  +   const pageContext = await renderPage(pageContextInit)
  +   if (!pageContext.httpResponse) return next()
  +   res.status(pageContext.httpResponse.statusCode).send(pageContext.httpResponse.body)
    })
  ```

* Hook `addPageContext()` deprecated and replaced with `onBeforeRender()`.
  ```diff
    // *.page.server.js

  - export function addPageContext(pageContext) {
  + export function onBeforeRender(pageContext) {
      const pageProps = /*...*/
  -   return { pageProps }
  +   return {
  +     pageContext: {
  +       pageProps
  +     }
  +   }
    }
  ```

* `_onBeforeRoute()` and `_onBeforePrerender()` are out of beta: rename them to `onBeforeRoute()` and `onBeforePrerender()`.

* `_injectAssets()` is now a standalone import.
   ```diff
     // _default.page.server.js

   - import { html } from "vite-plugin-ssr"
   + import { _injectAssets } from "vite-plugin-ssr"

     export function render() {
   -   html._injectAssets(/*...*/)
   +   _injectAssets(/*...*/)
     }
   ```

## [0.2.13](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.12...v0.2.13) (2021-09-03)


### Bug Fixes

* ts: fix typings for HTML Fragments ([392268a](https://github.com/brillout/vite-plugin-ssr/commit/392268aa22b5943c59d16a201d3b6e2ba5b389c3))



## [0.2.12](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.11...v0.2.12) (2021-09-01)


### Bug Fixes

* do not override page's `render` hook ([0f51330](https://github.com/brillout/vite-plugin-ssr/commit/0f51330e975ea097ae733de393654ea01c369149))


### Features

* [beta feature] allow user to define `_onBeforeRoute()` hook ([#136](https://github.com/brillout/vite-plugin-ssr/issues/136), fix [#140](https://github.com/brillout/vite-plugin-ssr/issues/140)) ([91ed460](https://github.com/brillout/vite-plugin-ssr/commit/91ed46044b3d05336a97f6802f3851251c42eeb7))
* allow `_onBeforeRoute()` to modify `pageContext.url` ([bad2405](https://github.com/brillout/vite-plugin-ssr/commit/bad240514f0fdef6c5db85e5c8e60885bcdb1b2f))
* allow missing `.page.js` when `.page.client.js` and `.page.server.js` is defined ([37f6f6b](https://github.com/brillout/vite-plugin-ssr/commit/37f6f6be4d211f93f2532d910ad1ff98ab8349ca))
* [beta feature] allow user to define `_onBeforePrerender()` hook (fix [#136](https://github.com/brillout/vite-plugin-ssr/issues/136)) ([9b6a135](https://github.com/brillout/vite-plugin-ssr/commit/9b6a135ce3440e5cd7765d6ac47dba1c61ce24fb))
* dx: improve no route matching warning ([586e1c4](https://github.com/brillout/vite-plugin-ssr/commit/586e1c42669127de89bf8368b024a3af293d041e))



## [0.2.11](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.10...v0.2.11) (2021-08-22)


### Bug Fixes

* allow `parallel` option to be passed via cli ([9a94bc9](https://github.com/brillout/vite-plugin-ssr/commit/9a94bc908ba785abdf25ddec3d93acfd875c94b7))



## [0.2.10](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.9...v0.2.10) (2021-08-22)


### Bug Fixes

* pre-rendering: allow user to control concurrency (fix [#134](https://github.com/brillout/vite-plugin-ssr/issues/134), fix ([c7f9454](https://github.com/brillout/vite-plugin-ssr/commit/c7f9454d0c50211dd578c72ac1d52234f9925ad5))
* ts: fix conflicting ViteDevServer type definitions ([8d3aef3](https://github.com/brillout/vite-plugin-ssr/commit/8d3aef390343aafc09fa6bd1f7b432b940cdcc05))
* ts: make `getPage()` generic, e.g. `getPage<SomeCustomPageContext>()` ([f56104d](https://github.com/brillout/vite-plugin-ssr/commit/f56104dba0f51c3bb276cf96a0be451e0115c8f4))



## [0.2.9](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.8...v0.2.9) (2021-08-15)


### Bug Fixes

* allow pageContext to be Vue reactive ([65ac828](https://github.com/brillout/vite-plugin-ssr/commit/65ac8288597068ed846723a3a1f7ca4328023971))
* dx: improve pageContext not available in browser wrong usage message ([0563c20](https://github.com/brillout/vite-plugin-ssr/commit/0563c20ce26606faad31d8a9d25ff9b3b242eb54))
* help TS resolve plugin until TS supports `package.json#exports` ([414ce14](https://github.com/brillout/vite-plugin-ssr/commit/414ce14d667e02b559350d28bca19929bec39575))
* skip symbols and `toJSON` in pageContext proxy ([361bca2](https://github.com/brillout/vite-plugin-ssr/commit/361bca28f7c65e47e7d74d1b0cc81eaf07a73ed6))
* ts: return plugin as `any` to avoid Plugin type mismatches when there are multiple Vite versions installed ([34e9b6a](https://github.com/brillout/vite-plugin-ssr/commit/34e9b6ac4c4799e0ca6c18117ecd97a6b9f4adae))



## [0.2.8](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.7...v0.2.8) (2021-08-12)

### DX

* dx: improve error message when user forgot to run `$ vite build` for production.



## [0.2.7](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.6...v0.2.7) (2021-08-10)


### Bug Fixes

* make server-side test work again for CF (fix [#130](https://github.com/brillout/vite-plugin-ssr/issues/130)) ([fe01932](https://github.com/brillout/vite-plugin-ssr/commit/fe019325ab1475bb55446a827c0a3f0bdaa60aec))
* properly remove built-in props from error message ([6e23c10](https://github.com/brillout/vite-plugin-ssr/commit/6e23c10ae4d25d3b2783ea168fa2a97e9b344780))
* resolve --root arg ([6a51f2a](https://github.com/brillout/vite-plugin-ssr/commit/6a51f2a10e46fb2cce13b1994e9aef6a3bec16b6))



## [0.2.6](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.5...v0.2.6) (2021-08-09)


### Bug Fixes

* use `utils/assert` instead of `assert` of `console` module ([#129](https://github.com/brillout/vite-plugin-ssr/issues/129)) ([8b4e39c](https://github.com/brillout/vite-plugin-ssr/commit/8b4e39cfe61c650b977646323b8123063215a3d5))



## [0.2.5](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.4...v0.2.5) (2021-08-06)


### DX

* dx: improve error message when `pageContext` is not serializable [#127](https://github.com/brillout/vite-plugin-ssr/issues/127) (fix [#128](https://github.com/brillout/vite-plugin-ssr/issues/128))



## [0.2.4](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.3...v0.2.4) (2021-08-03)


### Bug Fixes

* don't overwrite but supplement rollupOptions.input ([f3268a8](https://github.com/brillout/vite-plugin-ssr/commit/f3268a8221c1a784f94b394a0c269590cf73b711))


### Features

* impl `.page.server.js#doNotPrerender` to enable pre-rendering skipping ([bfb2dd1](https://github.com/brillout/vite-plugin-ssr/commit/bfb2dd165a3d866aa880f97ca5168f0c37f521ba))



## [0.2.3](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.2...v0.2.3) (2021-07-21)


### Bug Fixes

* don't return null upon several matching _default page files (fix [#120](https://github.com/brillout/vite-plugin-ssr/issues/120)) ([801b92f](https://github.com/brillout/vite-plugin-ssr/commit/801b92f3fbc291dabc2f3f929e57a7e7c8b45f14))



## [0.2.2](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.1...v0.2.2) (2021-07-20)


### Bug Fixes

* add support for server written in ESM (fix [#118](https://github.com/brillout/vite-plugin-ssr/issues/118)) ([56e3885](https://github.com/brillout/vite-plugin-ssr/commit/56e388500946d9de8e9887c001b972e476fc92bc))



## [0.2.1](https://github.com/brillout/vite-plugin-ssr/compare/v0.2.0...v0.2.1) (2021-07-19)


### Bug Fixes

* add support for ssr-window [#116](https://github.com/brillout/vite-plugin-ssr/issues/116) ([46c2323](https://github.com/brillout/vite-plugin-ssr/commit/46c23233d90ff6655af97eab24a4f906a1c4a3bb))



# [0.2.0](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.5...v0.2.0) (2021-07-16)


* improve `dist/server/importBuild.js` ergonomics ([cad8683](https://github.com/brillout/vite-plugin-ssr/commit/cad868369754aeb7093c71c97b57f4a769e43c22))


### BREAKING CHANGES

* `dist/server/importer.js` has been renamed to
`dist/server/importBuild.js`.



## [0.1.5](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.4...v0.1.5) (2021-07-11)


### Bug Fixes

* error when route string is missing a leading slash instead of silently failing ([21052c6](https://github.com/brillout/vite-plugin-ssr/commit/21052c632c20cf0fe9cba80b03a2b4fb1015df74))
* properly handle URL suffix `.pageContext.json` for URL `/` ([84b3e76](https://github.com/brillout/vite-plugin-ssr/commit/84b3e76478e6a8716baa77bf8b06ab8e3d7bc46c))



## [0.1.4](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.3...v0.1.4) (2021-07-07)


### Features

* add option `$ vite-plugin-ssr prerender --noExtraDir` ([c88e030](https://github.com/brillout/vite-plugin-ssr/commit/c88e030aaee42a3d269247257657c3b4a0a935c9))
* provide TypeScript types for `pageContext` (fix [#110](https://github.com/brillout/vite-plugin-ssr/issues/110)) ([ceb6ebd](https://github.com/brillout/vite-plugin-ssr/commit/ceb6ebdc5caaf84fe87f958f1094906164dde8c4))



## [0.1.3](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.2...v0.1.3) (2021-07-07)


### Bug Fixes

* don't lower case when matching URLs ([333583f](https://github.com/brillout/vite-plugin-ssr/commit/333583f297ee73b7b464635e456e9281925c8241))
* improve strategy to hunt down Vite cache bug ([#108](https://github.com/brillout/vite-plugin-ssr/issues/108)) ([085207a](https://github.com/brillout/vite-plugin-ssr/commit/085207a293ab651c81efa64534da850427dc9fcf))



## [0.1.2](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.1...v0.1.2) (2021-06-17)


### Features

* also expose `pageContext.pageExports` on the client-side ([83801ff](https://github.com/brillout/vite-plugin-ssr/commit/83801ff17182cd5a7aa5063cc48e3472efeaf217))
* support async route functions (fix [#97](https://github.com/brillout/vite-plugin-ssr/issues/97)) ([0aca411](https://github.com/brillout/vite-plugin-ssr/commit/0aca411e01373c9717678b123d5d0f4390ba060a))



## [0.1.1](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0...v0.1.1) (2021-06-09)


### Features

* enable Jest/Babel component unit testing (fix [#91](https://github.com/brillout/vite-plugin-ssr/issues/91)) ([cb3417d](https://github.com/brillout/vite-plugin-ssr/commit/cb3417de974de6697ab29a8a55347fd91f72feac))



# [0.1.0](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.50...v0.1.0) (2021-06-06)

Nothing changed (`0.1.0` is equivalent to `0.1.0-beta.50`); `vite-plugin-ssr` is now out of beta :-).


# [0.1.0-beta.50](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.49...v0.1.0-beta.50) (2021-06-02)


### Bug Fixes

* define ESM build in tsconfig.ts instead of CLI (vitejs/vite[#3617](https://github.com/brillout/vite-plugin-ssr/issues/3617), fix [#85](https://github.com/brillout/vite-plugin-ssr/issues/85)) ([4fdbf91](https://github.com/brillout/vite-plugin-ssr/commit/4fdbf91e9c59f91ca8111dd88b6df7a3c664d0c2))



# [0.1.0-beta.49](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.48...v0.1.0-beta.49) (2021-06-02)

### Bug Fixes

*  dual publish CJS + ESM (vitejs/vite#3617, fix #85)



# [0.1.0-beta.48](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.47...v0.1.0-beta.48) (2021-05-30)


* rename `dangerouslySetHtml` to `dangerouslySkipEscape` (fix #84) ([b14bd17](https://github.com/brillout/vite-plugin-ssr/commit/b14bd17b0177a0b2bedb74f143677cad7521d365)), closes [#84](https://github.com/brillout/vite-plugin-ssr/issues/84)


### Bug Fixes

* export SsrEnv as type ([8c8f5ba](https://github.com/brillout/vite-plugin-ssr/commit/8c8f5ba800cb45f951031a0a5ce2546a5fdc9a68))


### BREAKING CHANGES

* Replace `dangerouslySetHtml` with
`dangerouslySkipEscape`. E.g. for linux users:
`git ls-files | xargs sed -i "s/dangerouslySetHtml/dangerouslySkipEscape/g"`



# [0.1.0-beta.47](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.46...v0.1.0-beta.47) (2021-05-29)

### Features

*  make `*.page.js` exports available to user as `pageContext.pageExports` (fix [#80](https://github.com/brillout/vite-plugin-ssr/issues/80))



# [0.1.0-beta.46](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.45...v0.1.0-beta.46) (2021-05-28)

* define everything on `pageContext` (fix #76) ([15d68f8](https://github.com/brillout/vite-plugin-ssr/commit/15d68f8bd6133b1c5e8916fa5c2aaad8cf5f4579)), closes [#76](https://github.com/brillout/vite-plugin-ssr/issues/76)

### BREAKING CHANGES

* Apply following changes:

```diff
  // *.page.server.js

  export { render }
- function render({ Page, pageContext }) {
+ function render(pageContext) {
+   const { Page } = pageContext
    /* ... */
  }

  export { addPageContext }
- function addPageContext({ Page, pageContext }) {
+ function addPageContext(pageContext) {
+   const { Page } = pageContext
    /* ... */
  }
```

```diff
  // *.page.client.js

  import { getPage } from "vite-plugin-ssr/client";

- const { Page, pageContext } = await getPage();
+ const pageContext = await getPage();
+ const { Page } = pageContext
```

```diff
  // *.page.client.js

  import { useClientRouter } from 'vite-plugin-ssr/client/router'

  useClientRouter({
-   render({ Page, pageContext, isHydration }) {
+   render(pageContext) {
+     const { Page, isHydration } = pageContext
      /* ... */
    },
  })
```

```diff
  // At your server integration point

  const express = require('express')
  const { createPageRender } = require('vite-plugin-ssr')

  /* ... */

  const pageRender = createPageRender(/*...*/)

  /* ... */

- pageRender({ url, pageContext })
+ pageContext.url = url
+ pageRender(pageContext)
```

- `pageContext.urlFull` is deprecated; use `pageContext.urlNormalized`
instead.



# [0.1.0-beta.45](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.44...v0.1.0-beta.45) (2021-05-26)


### Bug Fixes

* reload glob imports in dev ([#66](https://github.com/brillout/vite-plugin-ssr/issues/66)) ([09b54c0](https://github.com/brillout/vite-plugin-ssr/commit/09b54c0dfd988f42d8237450a2f57e0f4d6abf1a))
* Route Functions should return `routeParams` instead of `contextProps` (fix [#63](https://github.com/brillout/vite-plugin-ssr/issues/63)) ([e03b918](https://github.com/brillout/vite-plugin-ssr/commit/e03b9185917f94c4b826a83cb0eafb8a6b98bd93))


### Features

* always route on the server-side (fix [#73](https://github.com/brillout/vite-plugin-ssr/issues/73)) ([ef3eb3c](https://github.com/brillout/vite-plugin-ssr/commit/ef3eb3ce56ded30d2cffdf86f06096e6fd1529ad))
* rename `contextProps` to `pageContext`, and `addContextProps` to `addPageContext` (fix #58) ([aedf9fc](https://github.com/brillout/vite-plugin-ssr/commit/aedf9fc516cc72b3d06128dedd900994a8457767)), closes [#58](https://github.com/brillout/vite-plugin-ssr/issues/58)


### BREAKING CHANGES

- Replace all occurences in your source code of `addContextProps` to
  `addPageContext`, and all occurences of `contextProps` to `pageContext`.
  There is no need for semantic replacing: you can simply replace
  text, for example with a linux terminal:
   1. `git ls-files | xargs sed -i "s/addContextProps/addPageContext/g"`
   2. `git ls-files | xargs sed -i "s/contextProps/pageContext/g"`
- Make your Route Functions return
  `{ match: true, routeParams: {/*...*/} }` instead of
  `{ match: true, pageContext: {/*...*/} }` (or
  `{ match: true, contextProps: {/*...*/} }` if you didn't
  rename `contextProps` to `pageContext` yet).



# [0.1.0-beta.44](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.43...v0.1.0-beta.44) (2021-05-20)


### Bug Fixes

* Add mime types to preload tags, add common image preload tags ([29a3b96](https://github.com/brillout/vite-plugin-ssr/commit/29a3b960e3a852d79fed4456503f5a9be0f4fc9b))



# [0.1.0-beta.43](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.42...v0.1.0-beta.43) (2021-05-18)


### Bug Fixes

* use `visibilitychange` event instead of `unload` event ([b2cc36e](https://github.com/brillout/vite-plugin-ssr/commit/b2cc36e1091ef0fec25592d59b31e84f7ae36a68))


### Features

* implement `<a keep-scroll-position />` and `navigate(url, { keepScrollPosition: true })` ([#62](https://github.com/brillout/vite-plugin-ssr/issues/62)) ([6a8515a](https://github.com/brillout/vite-plugin-ssr/commit/6a8515aaf18e65957ada68709d25bc348bc09a0c))



# [0.1.0-beta.42](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.41...v0.1.0-beta.42) (2021-05-14)


### Bug Fixes

* write pre-render files sequentially (fix [#59](https://github.com/brillout/vite-plugin-ssr/issues/59)) ([2339746](https://github.com/brillout/vite-plugin-ssr/commit/2339746c493278a3abcf131429ec44bc8d555c28))



# [0.1.0-beta.41](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.40...v0.1.0-beta.41) (2021-05-14)


### Bug Fixes

* on static hosts, fallback to Server Routing for 404 pages ([#57](https://github.com/brillout/vite-plugin-ssr/issues/57)) ([56e0d0a](https://github.com/brillout/vite-plugin-ssr/commit/56e0d0a47f2ad14708073c0c467d0db1b5d19177))


### Features

* also generate `dist/client/404.html` when pre-rendering (fix [#57](https://github.com/brillout/vite-plugin-ssr/issues/57)) ([d6072f2](https://github.com/brillout/vite-plugin-ssr/commit/d6072f2f93723f60df02fc4f2dc6e1edf5ad7bcf))



# [0.1.0-beta.40](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.38...v0.1.0-beta.40) (2021-05-05)


### Bug Fixes

* add empty .npmignore to ensure dist/ is always published ([c241c53](https://github.com/brillout/vite-plugin-ssr/commit/c241c5311f8950f78f84d6de861fafda9b2c22c0))



# [0.1.0-beta.38](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.37...v0.1.0-beta.38) (2021-05-05)


### Bug Fixes

* make sure Node.js doesn't try to use browser entry points (fix [#55](https://github.com/brillout/vite-plugin-ssr/issues/55)) ([4e9c14b](https://github.com/brillout/vite-plugin-ssr/commit/4e9c14b813973dca778f29bb08627def6a006a77))



# [0.1.0-beta.37](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.36...v0.1.0-beta.37) (2021-05-04)


* make route parameters available only at `contextProps.routeParams` ([f98f94b](https://github.com/brillout/vite-plugin-ssr/commit/f98f94b072921d9c0325afe57e24e7862e7e27bc))


### BREAKING CHANGES

* Route parameters are not available directly at `contextProps`
anymore. E.g. use `contextProps.routeParams.movieId` instead of
`contextProps.movieId` (for a route string `/movie/:movieId`).



# [0.1.0-beta.36](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.35...v0.1.0-beta.36) (2021-05-01)


### Bug Fixes

* also check windows path for `usesClientRouter` test ([b3c1cab](https://github.com/brillout/vite-plugin-ssr/commit/b3c1cabdf72d916a08830ebb8db6243e5fd285b9))
* do not assume .page.js files to always be the root in the manifest (fix [#51](https://github.com/brillout/vite-plugin-ssr/issues/51)) ([138a3f7](https://github.com/brillout/vite-plugin-ssr/commit/138a3f731a29369099407af77fecebfd76691af8))
* fix preload tags paths when building on windows ([9c2fd40](https://github.com/brillout/vite-plugin-ssr/commit/9c2fd40608f0ad0798da573afcb948561652b246))



# [0.1.0-beta.35](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.34...v0.1.0-beta.35) (2021-04-26)


### Bug Fixes

* `vite-fix-2390` is not required anymore (& bump Vite dependency) ([36fade0](https://github.com/brillout/vite-plugin-ssr/commit/36fade02f6dd535513013b95cf2a563502c1af94))
* do not reload page when user only changes the URL hash ([dbb6f9a](https://github.com/brillout/vite-plugin-ssr/commit/dbb6f9a092181a6ae8256b24ee1082e8c61ffb65))
* do not use new URL for extracting URL search and URL hash (fix [#47](https://github.com/brillout/vite-plugin-ssr/issues/47)) ([4f3d737](https://github.com/brillout/vite-plugin-ssr/commit/4f3d737bc0bfc2edf54c744302f84fdca9367b72))
* throttle `scroll` event listener (fix [#46](https://github.com/brillout/vite-plugin-ssr/issues/46)) ([c58d1ff](https://github.com/brillout/vite-plugin-ssr/commit/c58d1fff680fd2658ed533570faaf71afe867bcf))
* use browser scroll restore for first page load ([b6f701b](https://github.com/brillout/vite-plugin-ssr/commit/b6f701bce234d8dc789555f4261d2198c1f9cd2f))


### Features

* allow Route Functions to return a boolean and make returning `match` optional ([963e488](https://github.com/brillout/vite-plugin-ssr/commit/963e488e1a7dbf588be4f16ce1eec40e9a2f9426))
* make `contextProps.urlParsed` available to user ([97aa908](https://github.com/brillout/vite-plugin-ssr/commit/97aa9082497b2a85c33434855ac5fc013e91673e))



# [0.1.0-beta.34](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.33...v0.1.0-beta.34) (2021-04-21)


### Bug Fixes

* simplify `navigationState` and avoid unnecessary `contextProps` fetching when navigating to `/#` ([#43](https://github.com/brillout/vite-plugin-ssr/issues/43)) ([9e2196b](https://github.com/brillout/vite-plugin-ssr/commit/9e2196b27e9d28cac491d9da5918afa143ee3061))
* use path.posix.relative instead of path.relative ([5eadbb1](https://github.com/brillout/vite-plugin-ssr/commit/5eadbb13a3b6870c57426b3397a1033e586fa35f))
* version number in assertion messages ([47a99a6](https://github.com/brillout/vite-plugin-ssr/commit/47a99a6cb26196b064f1279ca2c20b5122d30487))


### Features

* make `contextProps.urlFull` and `contextProps.urlPathname` available everywhere (fix [#42](https://github.com/brillout/vite-plugin-ssr/issues/42), fix [#42](https://github.com/brillout/vite-plugin-ssr/issues/42)) ([b3f46fc](https://github.com/brillout/vite-plugin-ssr/commit/b3f46fc8c416d66ef455f58261f67461551cf430))


### BREAKING CHANGES

* `contextProps.url` and `contextProps.urlNormalized` are deprecated: use `contextProps.urlFull` and `contextProps.urlPathname` instead.



# [0.1.0-beta.33](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.31...v0.1.0-beta.33) (2021-04-17)


### Bug Fixes

* retrieve context props for 404 page, and expect missing context props for 404 page if no `_error.page.js` is defined (fix [#41](https://github.com/brillout/vite-plugin-ssr/issues/41)) ([55cd596](https://github.com/brillout/vite-plugin-ssr/commit/55cd5969c18d0b876ed8fa86bf554eda5efaad79))



# [0.1.0-beta.32](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.31...v0.1.0-beta.32) (2021-04-16)


### Features

* simplify data fetching ([2d1a52d](https://github.com/brillout/vite-plugin-ssr/commit/2d1a52d4f698741c90049e9978a0904c6ca0dc0d))


### BREAKING CHANGES

* `pageProps` and `setPageProps()` are deprecated. Define
your page props on `contextProps.pageProps` by returning `pageProps` in
`addContextProps()`, and then `export const passToClient = ['pageProps']`
in `.page.server.js` to tell `vite-plugin-ssr` to serialize and pass
`contextProps.pageProps` to the browser. In the browser `contextProps`
is now available at `const { Page, contextProps } = await getPage()`
and `useClientRouter({ render({ Page, contextProps, isHydration }) })`.



# [0.1.0-beta.31](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.30...v0.1.0-beta.31) (2021-04-15)


### Bug Fixes

* remove test files from boilerplates ([c255dbb](https://github.com/brillout/vite-plugin-ssr/commit/c255dbb5d5f01dbdfaea8172dced08f48074af16))
* use `parseUrl()` instead of `new URL()` (fix [#28](https://github.com/brillout/vite-plugin-ssr/issues/28)) ([447d095](https://github.com/brillout/vite-plugin-ssr/commit/447d095f7424be4e6f64412a781015ccc3d7ee14))



# [0.1.0-beta.30](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.29...v0.1.0-beta.30) (2021-04-10)


### Bug Fixes

* prevent dynamic dependency paths from mistakenly being statically analysed ([a1eca47](https://github.com/brillout/vite-plugin-ssr/commit/a1eca47ea6c3246689cffdb936a4f25aa8c78b55))


### Features

* accept any valid URL to be passed to `renderPage()` ([930865e](https://github.com/brillout/vite-plugin-ssr/commit/930865ee1e0aef8c506323fe4dda12485bf1d102))
* add `contextProps.routeParams` ([512a253](https://github.com/brillout/vite-plugin-ssr/commit/512a253830adb079e222d02e5da3eade7f13256f))
* add `contextProps.urlNormalized` ([9c932b0](https://github.com/brillout/vite-plugin-ssr/commit/9c932b0e3f275257a54f0c381ba784fed6443139))



# [0.1.0-beta.29](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.28...v0.1.0-beta.29) (2021-04-10)


### Bug Fixes

* ssr vite entry path ([0237d78](https://github.com/brillout/vite-plugin-ssr/commit/0237d78bcc8ae10736dbd9867884736e52c4798b))



# [0.1.0-beta.28](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.27...v0.1.0-beta.28) (2021-04-10)


### Bug Fixes

* **cli:** process exit 1 on unhandled promise rejections (fix [#33](https://github.com/brillout/vite-plugin-ssr/issues/33)) ([6ab3b49](https://github.com/brillout/vite-plugin-ssr/commit/6ab3b493dce2eff11e4221d391f351c981736768))
* [cloudflare workers] do not import plugin code in prod ([#1](https://github.com/brillout/vite-plugin-ssr/issues/1)) ([a6af9e7](https://github.com/brillout/vite-plugin-ssr/commit/a6af9e7b0043efd082c3ba0c125a36aa972abd4f))
* change url right before rendering new page ([97530f0](https://github.com/brillout/vite-plugin-ssr/commit/97530f0b6e21299d53f56bce4a7aaa36a75636b7))
* do not assume asset path to start with `assets/` (fix [#32](https://github.com/brillout/vite-plugin-ssr/issues/32)) ([9791c41](https://github.com/brillout/vite-plugin-ssr/commit/9791c4108ff0e93e0f150e7ff30cca2de5f9ad8c))
* improve error handling for CF workers ([70a89e0](https://github.com/brillout/vite-plugin-ssr/commit/70a89e0469d83be728282954125069b4219c08a9))


### Features

* [cloudflare workers] generate importer.js ([#1](https://github.com/brillout/vite-plugin-ssr/issues/1)) ([dfa4e76](https://github.com/brillout/vite-plugin-ssr/commit/dfa4e7614956b06edde463464938f610b8f66914))
* **cli:** add option to set `root` ([4f1087a](https://github.com/brillout/vite-plugin-ssr/commit/4f1087a09dbe4e5bd085245d54b041662765ee9e))
* [cloudflare workers] allow user to manually set Vite Manifests ([#1](https://github.com/brillout/vite-plugin-ssr/issues/1)) ([75aa55e](https://github.com/brillout/vite-plugin-ssr/commit/75aa55e0addb9890de2d7b4143ffa2d7f110aa54))
* [cloudflare workers] make loading vite entry user file loader self sufficient for build ([#1](https://github.com/brillout/vite-plugin-ssr/issues/1)) ([0693184](https://github.com/brillout/vite-plugin-ssr/commit/0693184695d7e57d274f00652ad85d4db1e2f9ca))
* [cloudflare workers] remove client-side code in SSR bundles ([#1](https://github.com/brillout/vite-plugin-ssr/issues/1)) ([557fabc](https://github.com/brillout/vite-plugin-ssr/commit/557fabc0aab6d64484dfa72cfb9c5736e46cf3b6))


### BREAKING CHANGES

* `import ssr from 'vite-plugin-ssr'` now throws an error; use `import ssr from 'vite-plugin-ssr/plugin'` instead.



# [0.1.0-beta.27](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.26...v0.1.0-beta.27) (2021-04-03)


### Bug Fixes

* wrong assertion (fix [#28](https://github.com/brillout/vite-plugin-ssr/issues/28)) ([97ba440](https://github.com/brillout/vite-plugin-ssr/commit/97ba440ffb55f0b803f34d22666390d75c16b5f2))


### Features

* auto-detect whether `useClientRouter()` is used and pass that info to the pre-render + pass Vite's `base` value to the pre-render ([698f060](https://github.com/brillout/vite-plugin-ssr/commit/698f060c57bc40fdf17aded40e60bb316b93ebcc))
* support base url for prod server ([de8c0e0](https://github.com/brillout/vite-plugin-ssr/commit/de8c0e00956b1ff0b47b93eb1ffe53c1fbaad2d5))



# [0.1.0-beta.26](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.25...v0.1.0-beta.26) (2021-03-30)


### Bug Fixes

* CJS default plugin export ([09c3ee4](https://github.com/brillout/vite-plugin-ssr/commit/09c3ee4c09bcb7d3b75015b977dffe3279c93fe7))



# [0.1.0-beta.25](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.24...v0.1.0-beta.25) (2021-03-30)


### Bug Fixes

* TS type declarations ([40de96a](https://github.com/brillout/vite-plugin-ssr/commit/40de96a1a592209128264270869db0d41964400c))



# [0.1.0-beta.24](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.23...v0.1.0-beta.24) (2021-03-30)


### Bug Fixes

* use vite@2.1.4 ([1ff3668](https://github.com/brillout/vite-plugin-ssr/commit/1ff36683e09fe1cdd1a759b01655bb5363d225a8))


### Features

* support URL query strings ([#22](https://github.com/brillout/vite-plugin-ssr/issues/22)) ([4d58d4c](https://github.com/brillout/vite-plugin-ssr/commit/4d58d4c3ff3b400814caa63ce80049f225226d17))


### BREAKING CHANGES

* This release only works with `@vite@2.1.4`; make sure
to pin your `vite` dependency to `2.1.4` in your `package.json`.



# [0.1.0-beta.23](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.22...v0.1.0-beta.23) (2021-03-28)


### Bug Fixes

* add CJS default export for `vite-plugin-ssr/plugin` ([40216d2](https://github.com/brillout/vite-plugin-ssr/commit/40216d2db44f7b12d802a2193cb76b9cce3fdcc3))



# [0.1.0-beta.22](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.21...v0.1.0-beta.22) (2021-03-28)


### Bug Fixes

* only intercept regular left clicks on regular links ([405a27f](https://github.com/brillout/vite-plugin-ssr/commit/405a27f7200997c24014edf9b9ca73dc8698fca2))
* save & restore scroll position upon client-side routing ([72815c7](https://github.com/brillout/vite-plugin-ssr/commit/72815c7c00adb04f8fdb8a20924b473cc3a66f49))


### improve

* don't load plugin code in production ([95e7e0f](https://github.com/brillout/vite-plugin-ssr/commit/95e7e0f5492cb907748da312d0ec8b6cb7b5f659))


### BREAKING CHANGES

* It's now recommended to do `import ssr from
'vite-plugin-ssr/plugin';` instead of `import ssr from
'vite-plugin-ssr';`. A warning will be shown otherwise.



# [0.1.0-beta.21](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.20...v0.1.0-beta.21) (2021-03-26)


### Bug Fixes

* Filesystem Routing bug when common prefix ends in filename ([06ccfaa](https://github.com/brillout/vite-plugin-ssr/commit/06ccfaa231319055377af9eb20f74887ad7fb484))
* fix mapping of pageId and page files (fix [#18](https://github.com/brillout/vite-plugin-ssr/issues/18)) ([45436f5](https://github.com/brillout/vite-plugin-ssr/commit/45436f570c5938570717e13b2e77a87657337081))
* use some-path/index.html instead of some-path.html (fix [#19](https://github.com/brillout/vite-plugin-ssr/issues/19)) ([7281ffe](https://github.com/brillout/vite-plugin-ssr/commit/7281ffe9091f99b024b0d4e40833e64c21b07a60))


### Features

* expose CLI as JavaScript API ([e16ec91](https://github.com/brillout/vite-plugin-ssr/commit/e16ec9113763ca9bc46394d38f0011b2737a8a09))



# [0.1.0-beta.20](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.19...v0.1.0-beta.20) (2021-03-26)


### Bug Fixes

* export ES module for Vite (fix [#17](https://github.com/brillout/vite-plugin-ssr/issues/17)) ([8dcd875](https://github.com/brillout/vite-plugin-ssr/commit/8dcd8755622b2d292cf6c02600b553fe52406c67))


### Features

* update peer dependency on vite 2.1.2->2.1.3 ([6778f09](https://github.com/brillout/vite-plugin-ssr/commit/6778f09cfcb2fb63bf1e983aa0aae7d35a8f1a39))


### BREAKING CHANGES

* this release works *only* with vite@2.1.3 so make sure
to pin your vite dependency to 2.1.3



# [0.1.0-beta.19](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.18...v0.1.0-beta.19) (2021-03-25)


### Features

* add --skip-git flag to boilerplates ([18e1616](https://github.com/brillout/vite-plugin-ssr/commit/18e16165324a9204c17cec9370af58696e9303b1))
* add support for base url (fix [#16](https://github.com/brillout/vite-plugin-ssr/issues/16)) ([b4a4f2f](https://github.com/brillout/vite-plugin-ssr/commit/b4a4f2fb40f5872700a2badf86a914941066b6b3))



# [0.1.0-beta.18](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.17...v0.1.0-beta.18) (2021-03-24)


### Bug Fixes

* when injecting HTML: also recognize tags that have attributes ([651428a](https://github.com/brillout/vite-plugin-ssr/commit/651428a4e5bd80acc999b7d822ce682fa8ec135d))


### Features

* impl `useClientRouter()` ([4cfe4ef](https://github.com/brillout/vite-plugin-ssr/commit/4cfe4ef30aeb3c1f6b276cd04c6b405538914bf8))



# [0.1.0-beta.17](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.16...v0.1.0-beta.17) (2021-03-19)


### Bug Fixes

* remove zero-js problematic example ([69d662d](https://github.com/brillout/vite-plugin-ssr/commit/69d662dbbf1845aa90cb707cb810ebcf0b8b4cc2))


### Features

* impl pre-rendering ([2e9de2d](https://github.com/brillout/vite-plugin-ssr/commit/2e9de2d717a0dc63519a9f7e6aae1e3a9e3f9188))



# [0.1.0-beta.16](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.15...v0.1.0-beta.16) (2021-03-18)


### Bug Fixes

* auto apply @brillout/vite-fix-2390 ([f847a32](https://github.com/brillout/vite-plugin-ssr/commit/f847a32a2282ba9ab7dcbfafcd470a039f01893b)), closes [#5](https://github.com/brillout/vite-plugin-ssr/issues/5)



# [0.1.0-beta.15](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.14...v0.1.0-beta.15) (2021-03-17)


### Bug Fixes

* support building in ts cjs projects ([be5c7dc](https://github.com/brillout/vite-plugin-ssr/commit/be5c7dca707cd6a62e15191d5f8387cc67a47ced)), closes [#11](https://github.com/brillout/vite-plugin-ssr/issues/11)



# [0.1.0-beta.14](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.13...v0.1.0-beta.14) (2021-03-17)


### Bug Fixes

* improve thenable check ([62fca8e](https://github.com/brillout/vite-plugin-ssr/commit/62fca8e53ca67fdb3e9a92103d287d93a26a485b))
* remove need for AntiFlicker by preloading styles in dev ([debb9bd](https://github.com/brillout/vite-plugin-ssr/commit/debb9bdbc72d0674066541e39362810d7127b161)), closes [#2](https://github.com/brillout/vite-plugin-ssr/issues/2)


### Reverts

* Revert "failed attempt 4 for a workaround for vitejs/vite#2390" ([4c2130f](https://github.com/brillout/vite-plugin-ssr/commit/4c2130f3be5405f19b695dd7c90584ac89a1a0cd)), closes [vitejs/vite#2390](https://github.com/vitejs/vite/issues/2390)



# [0.1.0-beta.13](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.12...v0.1.0-beta.13) (2021-03-14)


### Bug Fixes

* do not assertUsage viteDevServer in production ([d7f69c5](https://github.com/brillout/vite-plugin-ssr/commit/d7f69c56b270faa5c449d97e402b02e0c667c8cc))



# [0.1.0-beta.12](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.11...v0.1.0-beta.12) (2021-03-12)


### Features

* allow non-page .server file extensions ([10a14d1](https://github.com/brillout/vite-plugin-ssr/commit/10a14d10462aac26f08736d72da1ff028b7a2a51)), closes [#3](https://github.com/brillout/vite-plugin-ssr/issues/3)



# [0.1.0-beta.11](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.10...v0.1.0-beta.11) (2021-03-09)


### Bug Fixes

* skip /favicon.ico requests ([f528784](https://github.com/brillout/vite-plugin-ssr/commit/f528784c87746be3671a301fd289aaaf77ae9540))


### chore

* rename `createRender()` to `createPageRender()` ([f62dc8e](https://github.com/brillout/vite-plugin-ssr/commit/f62dc8ed96db90a09f8cfd636fa3813718bb6358))


### Features

* improve error handling ([4a945bf](https://github.com/brillout/vite-plugin-ssr/commit/4a945bf4c109457326c1b832e928431c829fd716))
* improve route functions ([9af7f7b](https://github.com/brillout/vite-plugin-ssr/commit/9af7f7bc876092c892ec0f76f6c0d5ccb3f3fec9))
* improve usage error messages ([cc0d678](https://github.com/brillout/vite-plugin-ssr/commit/cc0d67865378b7eba85aecc54695ed74ceb8dda8))


### BREAKING CHANGES

* server integration point `createRender()` renamed to `createPageRender()`.
* `render()` function (`const render = createRender(/*...*/)`) now returns an object `{ nothingRendered, renderResult, statusCode }`.
* `_404.page.js` and `_500.page.js` deprecated and replaced with `_error.page.js`.



# [0.1.0-beta.10](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.8...v0.1.0-beta.10) (2021-03-05)


### Bug Fixes

* convert windows path to posix for micromatch ([cc9c405](https://github.com/brillout/vite-plugin-ssr/commit/cc9c405924d38e3615ea042b951c8e58e342f161)), closes [#4](https://github.com/brillout/vite-plugin-ssr/issues/4)
* don't try to inject dynamic import polyfill ([fdffd37](https://github.com/brillout/vite-plugin-ssr/commit/fdffd37c0bff0f3b16d28268ec0ba4bcc193b5cc))
* **boilerplates:** remove duplicated file ([4421aa6](https://github.com/brillout/vite-plugin-ssr/commit/4421aa6fb3b8b2a0f82d0d1eec80d0cc59cc54d3))


### Features

* allow render hook to return an object instead of HTML ([a649eaf](https://github.com/brillout/vite-plugin-ssr/commit/a649eafbc8bf4e746d792b8f3c55ab8161330deb))
* support _500.page.js and improve error handling ([d492b9c](https://github.com/brillout/vite-plugin-ssr/commit/d492b9caba88a07bf28c00f9e14291f69cb5d694))
* support `html` tag composition ([9a57006](https://github.com/brillout/vite-plugin-ssr/commit/9a57006b53dae411ca1981642f2569c5e3cf3cae))



# [0.1.0-beta.9](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.8...v0.1.0-beta.9) (2021-03-01)

### Bug Fixes

* Fix released build



# [0.1.0-beta.8](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.7...v0.1.0-beta.8) (2021-03-01)


### Bug Fixes

* re-export default ([cd43e6e](https://github.com/brillout/vite-plugin-ssr/commit/cd43e6ee27ca48d99fafbb41cf2a6cf4025044ad))
* use `in` operator only on objects ([819dfe1](https://github.com/brillout/vite-plugin-ssr/commit/819dfe14f2ab84bf9535a3e62d5fa2722130eb99))


### Features

* remove html.sanitize and make sanitized automatic ([95d145c](https://github.com/brillout/vite-plugin-ssr/commit/95d145c24123631eac169828b26c0114c63e48d8))


### BREAKING CHANGES

* Removed `html.sanitize()`; simply directly insert the
string and vite-plugin-ssr will automatically sanitize it



# [0.1.0-beta.7](https://github.com/brillout/vite-plugin-ssr/compare/v0.1.0-beta.6...v0.1.0-beta.7) (2021-02-28)


### Features

* Pass `Page` to addContextProps. ([2512ee3](https://github.com/brillout/vite-plugin-ssr/commit/2512ee30a43294d5b6bf61224a0c20d94f88e7ed))



# [0.1.0-beta.6](https://github.com/brillout/vite-plugin-ssr/tree/963afbafa5697d7745b6803bf1475b4aad7559c2) (2021-02-22)

Initial public release
