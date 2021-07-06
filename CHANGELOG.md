# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.36.0] - 2021-6-25
### Fixed
- Fixed backend copying of non typescript files to the correct directory. Changed occured due to updated compilation with the TypeScript outdir

## [0.35.0] - 2021-6-08
### Added
- Updated dependencies to latest version in backend and frontend

### Fixed
- Fixed test configuration in backend to not scan for tests in build and node_modules directories

## [0.34.0] - 2021-6-08
### Added
- Created resuable configuration system on backend to replace database only configuration. Creating an easy and intuitive experience when defining different values per deployment environment (Example: Local vs Development vs Testing vs Production vs Any other deployment environments specific for your workflow) - https://en.wikipedia.org/wiki/Deployment_environment

### Removed
- Database info system (because it was replaced with configuration system)

## [0.33.0] - 2021-6-07
### Fixed
- Fixed changelog to use correct dates

## [0.32.0] - 2021-6-07
### Added
- Updated all dependencies across the project

### Fixed
- Changed helmet to use require syntax instead of import, because import is not supported yet and the dependency update caused a compile error

## [0.31.0] - 2021-6-07
### Fixed
- Fixed README typo for the word "optional"

## [0.30.0] - 2021-6-07
### Fixed
- Fixed TypeScript compilation issues when only app.ts and server.ts are the only TypeScript file in src, by enhancing the tsconfig configuration 

## [0.29.0] - 2021-6-03
### Fixed
- Fixed prettier issues caused by misconfiguration when using updated eslint-config-prettier

## [0.28.0] - 2021-6-03
### Fixed
- Fixed prettier issues caused by misconfiguration when using updated eslint-config-prettier

## [0.27.0] - 2021-5-28
### Changed
- Only update dependencies with dependup command, when tests pass
- Updated all package-lock on the backend

## [0.26.0] - 2021-1-29
### Added
- Updated all dependencies across the project
- Add placeholder text on frontend, when backend health endpoint cannot be connected to

### Fixed
- Frontend tests failing due to missing create-react-app default text

## [0.25.0] - 2021-1-24
### Added
- Updated package-lock on frontend

## [0.24.0] - 2021-1-24
### Added
- Added dependup command in running locally to have one convenient area to upgrade (update) dependencies across entire project
- Added dependup instructions to README

## [0.23.0] - 2021-1-24
### Changed
- Updated all dependencies on frontend

## [0.22.0] - 2021-1-24
### Added
- Added dependup command to the frontend, which updates all dependencies on the frontend

## [0.21.0] - 2021-1-24
### Changed
- Updated all dependencies on backend

## [0.20.0] - 2021-1-24
### Added
- Added dependup command to the backend, which updates all dependencies on the backend

## [0.19.0] - 2021-1-24
### Added
- Separate non-coverage and coverage test commands in backend
- Separate watchAll, non-coverage, and coverage test commands in frontend 

## [0.18.0] - 2021-1-18
### Changed
- Linted and formatted backend

## [0.17.0] - 2021-1-18
### Added
- Added lint and format command to the backend
- Added lormat command to the backend

### Changed
- Rearranged test command in package.json in backend
- Updated Axios dependency on backend

## [0.16.0] - 2021-1-18
### Added
- Added lormat command to the frontend, which run lint and format in a single command
- Sensible default start command to frontend

## [0.15.0] - 2021-1-18
### Added
- Sensible default commands for format and lint on frontend

### Changed
- Linted and formatted frontend

## [0.14.0] - 2021-1-17
### Added
- ESLint linting and Prettier formatting to frontend

### Changed
- Updated Axios dependency on frontend

## [0.13.0] - 2020-12-19
### Changed
- Updated dependencies on backend and frontend to their latest version

## [0.12.0] - 2020-12-19
### Fixed
- Being able to run on docker, by changing to the correct relative paths when running application from build folder

## [0.11.0] - 2020-11-13
### Added
- Jest testing on the backend
- Added commands for running tests for both back end and front end for running locally or on the cloud

## [0.10.0] - 2020-10-29
### Changed
- Make docker commands more specific in README
- Let ci commands when running on cloud or docker install the devDependencies, so that builds can be made using tsc
- Change ports to 8080 when running on cloud or docker to match default expected CloudFoundry diego port 

### Fixed
- Fix changelog dates

## [0.9.0] - 2020-10-29
### Added
- Added prune commands to remove devDependencies when running on the cloud or docker 

### Changed
- Let ci commands when running on cloud or docker install the devDependencies, so that builds can be made using tsc

## [0.8.0] - 2020-10-28
### Added
- Support for docker
- Add more 

### Changed
- Fixed dates on changelog

## [0.7.0] - 2020-10-28
### Added
- Support for linux and mac

### Changed
- Some commands related to running locally and on the cloud, to know if you are using commands related to windows, linux, or mac

### Fixed
- Removed duplicate changelog version numbers, and adjusted current numbers to relfect change

## [0.6.0] - 2020-10-27
### Changed
- When running locally on back end, watch all files regardless of extension, but don't watch build directory

### Fixed
- Non ts files are copied over from src to build (example: json)

## [0.5.0] - 2020-10-27
### Changed
- Use `npm install` with `npm postinstall` instead of `npm install:all` when running locally
- Use `npm run start` instead of `npm run start:all` when running locally

## [0.4.0] - 2020-10-27
### Changed
- Compile to a separate 'build' directory on backend, instead of in src, to make it more convenient to develop when running locally

## [0.3.0] - 2020-10-27
### Added
- Abstract calls to load host information on the back end

## [0.2.0] - 2020-10-27
### Added
- Abstract calls to load host information on the back end

### Fixed
- Recompiling with tsc when running locally on the the back end

## [0.1.0] - 2020-10-27
### Added
- Use TypeScript on frontend and backend
- Add Changelog