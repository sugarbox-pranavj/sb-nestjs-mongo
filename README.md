## API Caching IDC

| Environment                                     | Deployed branch                                                      | Current Release                                                                                                                                                    |
| ----------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

| Release date | Version                                                                                                                                                                                                                                                                                                                                                | System's association                                                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Table of Contents

* [About the Project](#about-the-project)
* [Other SBox systems](#other-sbox-systems)
* [Prerequisite](#Prerequisite)
* [Getting Started](#getting-started)
    * [Folder structure](#folder-structure)
    * [CLI commands](#cli-commands)
    * [Sample controller and guidelines](#sample-controller-and-guidelines)
    * [Access environment variable configuration in code](#access-environment-variable-configuration-in-code)
    * [Sample .env format](#sample-.env-format)
* [Code of conduct](#code-of-conduct)
* [Documentation](#documentation)
    * [PRDs](#prds)
    * [System flow diagram](#system-flow-diagram)
    * [Database diagram](#database-diagram)
    * [Swagger](#swagger)
    * [Gitlab repositories](#gitlab-repositories)
* [Links](#links)

## About the Project

API Caching is a service will be used to store content listing details such as home feed, movies feed, shows feed, app
listing, etc, on the Edge server. This service is made up of 2 applications: One will be deployed on IDC and the other
in edges.

## Environment

| Environment                                     | Internal URL                                                                 | API gateway URL                                                         | Versions installed                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Prerequisite

![MongoDB](https://img.shields.io/badge/MongoDB->%3D4.0.5-informational.svg) &nbsp;
![NodeJS](https://img.shields.io/badge/NodeJS->%3D14.0.0-informational.svg)  &nbsp;
![NestJS](https://img.shields.io/badge/NestJS->%3D8.0.0-informational.svg) &nbsp;

## Getting Started

### Folder structure

| For  | Folder structure |
| ---- | ----------- |
| Database related modules | ```./src/database``` |
| Migrations | ```./src/database/migrations``` |
| Configuration related | ```./src/config``` |
| **Modules** ||
| Modules | ```./src/modules/<module-name-dir>``` |
| Modules DTOs | ```./src/modules/<module-name-dir>/dto/create-<module-name>.dto.ts``` <br> ```./src/modules/<module-name-dir>/dto/edit-<module-name>.dto.ts``` |
| Module Schemas | ```./src/modules/<module-name-dir>/schemas/<schema-name>.schema.ts``` |
| Module Service | ```./src/modules/<module-name-dir>/<module-name>.service.ts``` |
| Module Controller | ```./src/modules/<module-name-dir>/<module-name>.controller.ts``` |
| Module specific constants | ```./src/modules/<module-name-dir>/<module-name>.constant.ts``` |
| **Shared** ||
| Shared Service | ```./src/shared/services/<service-name>.service.ts``` |
| Shared Constant | ```./src/shared/constants/<constant-name>.constant.ts``` |
| Shared Decorators | ```./src/shared/decorators/<decorator-name>.decorator.ts``` |
| Shared Pipes | ```./src/shared/pipes/<pipe-name>.pipes.ts``` |
| **Test** ||
| Test unit test cases | ```./test/<unit-test-file-name>.test.ts``` |
| Test integration test cases | ```./test/integration/api/<integration-test-file-name>.test.ts``` |
| Test mocks | ```./test/integration/mocks/<integration-test-mock-file-name>.test.ts``` |

### CLI commands

| To  | Use command |
| ---- | ----------- |
| **DB Migration** ||
| Create migration file | ```npm run db:migrate:create <name>``` |
| Upgrade database | ```npm run db:migrate:up``` |
| Downgrade database | ```npm run db:migrate:down``` |
| **NestJS** ||
| Create new module | ```nest g mo <module-name>``` |
| Create new controller within module | ```nest g co <controller-name>``` |
| Create new service | ```nest g s <service-name>``` |
| Create interface | ```nest g interface <interface-name>``` (Or just create a new file <interface-name>.interface.ts) |
| More nestJS CLI usages| https://docs.nestjs.com/cli/usages |

### Sample controller and guidelines

1. All routes and param names should be linked to a constant file. No hard-coded strings arr allowed. (Refer: #1,#2,#3)
2. Instead of hard-coded status code strings, use ```HttpStatus``` enum. (Refer: #4,#5,#6)
3. Any request body being received from UI / any other system should be mapped to a ```dto``` (Refer: #7)

```typescript
//#1
@Controller(CAT_ROUTES.cats)
export class CatsController {
  constructor(private readonly _catsService: CatsService) {
  }

  @Post()
  //#4
  @HttpCode(HttpStatus.CREATED)
  async create(
    //#7
    @Body(new ValidationPipe({ transform: true }))
      createCatDto: CreateCatDto,
  ) {
    await this._catsService.create(createCatDto);
  }

  @Get()
  //#5
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Cat[]> {
    return this._catsService.findAll();
  }

  //#2
  @Get(CAT_ROUTES.catById)
  //#6
  @HttpCode(HttpStatus.OK)
  async find(
    //#3
    @Param(CAT_PARAMS.id, new IdentifierPipe())
      id: string,
  ): Promise<Cat[]> {
    return this._catsService.findAll();
  }
}
```

### English labels/messages handling

1. Any English hard-coded message / label should be mapped in the file ```labels.constant.ts``` file

### Access environment variable configuration in code

1. Use ```ConfigService``` dependency.
2. Fetch variable value like ```configService.get('database.host')```

### Sample .env format

```shell
PORT=<port>
DATABASE_NAME=<db-name>
DATABASE_HOST=<db-host>
DATABASE_PORT=<db-port>
```

## Code of conduct

Follow Confluence
page: [Code of conduct](https://sboxnw.atlassian.net/wiki/spaces/TP/pages/201752675/Git+Workflow+and+Code+Review+Process)

## Documentation

### PRDs

| Date / Version      | PRD link                                                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| v1 | [API Caching IDC and Edge](https://sboxnw.atlassian.net/wiki/spaces/TM/pages/1748009042/API+Caching)      |

### System flow diagram

| Date / Version       | Link  |
| ---------- | ------|
| - | - |

### Database diagram

| Date / Version       | Link  |
| ---------- | ------|
| - | - |

### Swagger

| Date / Version       | Link  |
| ---------- | ------|
| - | - |

### Gitlab repositories

| Type       | Link  |
| ---------- | ------|
| - | - |

## Links

* NodeJS Onboard
  document: [link](https://sboxnw.atlassian.net/wiki/spaces/TM/pages/644055410/Node.js+Team+-+On-boarding+Document)
* External
  dependency: [link](https://sboxnw.atlassian.net/wiki/spaces/TM/pages/1244463105/Order+Management+External+Dependency)
