<a name="0.10.0"></a>
# [0.10.0](https://github.com/JamieMason/shrinkpack/compare/0.6.0...v0.10.0) (2016-04-13)


### Bug Fixes

* **logging:** improve consistency of error messages ([3f26bc2](https://github.com/JamieMason/shrinkpack/commit/3f26bc2))
* **logging:** improve how errors are serialised ([22e852f](https://github.com/JamieMason/shrinkpack/commit/22e852f))
* **promises:** ensure promises are always rejected with an error object ([dfe779c](https://github.com/JamieMason/shrinkpack/commit/dfe779c))
* **resolve:** forward dependency on error ([f28197a](https://github.com/JamieMason/shrinkpack/commit/f28197a))
* **shell:** don't reject promise on stderr ([cc5e55e](https://github.com/JamieMason/shrinkpack/commit/cc5e55e)), closes [#26](https://github.com/JamieMason/shrinkpack/issues/26)
* **shell:** rate-limit disk operations ([3c3de88](https://github.com/JamieMason/shrinkpack/commit/3c3de88))

### Features

* **logging:** add prompts for when npm shrinkwrap needs to be run ([f3a3eed](https://github.com/JamieMason/shrinkpack/commit/f3a3eed))
* **logging:** add prompts for when npm shrinkwrap needs to be run ([409062c](https://github.com/JamieMason/shrinkpack/commit/409062c))
* **shrinkpack:** refactor into tasks, improve logging ([c8aa147](https://github.com/JamieMason/shrinkpack/commit/c8aa147))
* **shrinkwrap:** query registry if unable to patch missing resolved property locally ([1aa9964](https://github.com/JamieMason/shrinkpack/commit/1aa9964))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/JamieMason/shrinkpack/compare/0.5.0...0.6.0) (2016-04-04)


### Bug Fixes

* **resolve:** normalize scoped module dependency name ([d02cc3e](https://github.com/JamieMason/shrinkpack/commit/d02cc3e))

### Features

* **shrinkwrap:** handle dependencies with a missing "resolved" property ([ef5ecd2](https://github.com/JamieMason/shrinkpack/commit/ef5ecd2)), closes [#18](https://github.com/JamieMason/shrinkpack/issues/18)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/JamieMason/shrinkpack/compare/0.4.1...0.5.0) (2016-04-03)


### Features

* **resolve:** add support for git dependencies ([13b8604](https://github.com/JamieMason/shrinkpack/commit/13b8604)), closes [#12](https://github.com/JamieMason/shrinkpack/issues/12) [#18](https://github.com/JamieMason/shrinkpack/issues/18) [#19](https://github.com/JamieMason/shrinkpack/issues/19)



<a name="0.4.1"></a>
## [0.4.1](https://github.com/JamieMason/shrinkpack/compare/0.4.0...0.4.1) (2015-11-04)


### Bug Fixes

* **rewrite:** handle urls in resolved properties ([ef02a10](https://github.com/JamieMason/shrinkpack/commit/ef02a10))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/JamieMason/shrinkpack/compare/0.3.3...0.4.0) (2015-10-26)


### Features

* **rewrite:** include .tar.gz files ([cf14888](https://github.com/JamieMason/shrinkpack/commit/cf14888))



<a name="0.3.3"></a>
## [0.3.3](https://github.com/JamieMason/shrinkpack/compare/0.3.2...0.3.3) (2015-10-26)


### Bug Fixes

* **rewrite:** ignore deps not resolving to a tgz ([ad98849](https://github.com/JamieMason/shrinkpack/commit/ad98849))



<a name="0.3.2"></a>
## [0.3.2](https://github.com/JamieMason/shrinkpack/compare/0.3.1...0.3.2) (2015-10-26)


### Bug Fixes

* **rewrite:** update all resolved props inc. dupes ([dfe6083](https://github.com/JamieMason/shrinkpack/commit/dfe6083))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/JamieMason/shrinkpack/compare/0.3.0...0.3.1) (2015-10-23)




<a name="0.3.0"></a>
# [0.3.0](https://github.com/JamieMason/shrinkpack/compare/db4f279...0.3.0) (2015-10-23)


### Bug Fixes

* **shrinkpack:** Rate-limit shell operations ([c474b40](https://github.com/JamieMason/shrinkpack/commit/c474b40))
* **shrinkpack:** Repair support for Windows ([bc5e53c](https://github.com/JamieMason/shrinkpack/commit/bc5e53c))

### Features

* **shrinkpack:** Create working proof of concept ([db4f279](https://github.com/JamieMason/shrinkpack/commit/db4f279))
* **shrinkpack:** Improve speed and log output ([821b470](https://github.com/JamieMason/shrinkpack/commit/821b470))
* **shrinkpack:** Include devDependencies ([fd834b7](https://github.com/JamieMason/shrinkpack/commit/fd834b7))



