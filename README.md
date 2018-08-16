# Angular 6 with Bootstrap 4 via ASP Net Core 2.1 WebApi Backend on MongoDB and MariaDB packed by WebPack 3.6

## Original Repository

[GitHub](https://github.com/damienbod/AngularWebpackVisualStudio)
[Blog](https://damienbod.com/2016/06/12/asp-net-core-angular2-with-webpack-and-visual-studio/)

## Modifications by Don Corleone

* Divided in two Projects (Client / Server) for Docker- hosting
* Bootstrap 4
* Ejected Webpack

### Project - Description (German)

> Neuentwicklung www.kinderkultur.ch als Webapplikation mit Datenbankanbindung mit dem Ziel, als eigenständiges CMS fungieren zu können. Noch nicht produktiv.

* Frontend: Browseranwendung
  * [TS](https://www.typescriptlang.org)- Framework: [Angular 6](https://angular.io/docs) mit [Ejected Angular Cli](https://github.com/angular/angular-cli/wiki/eject)  
  * Bundling: [Webpack 3.6](https://webpack.js.org)
  * CSS- Framework: [Bootstrap 4](https://getbootstrap.com) mit [SASS / SCSS](https://sass-lang.com)

* Backend: [ASP.NET Core 2.1](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-2.1) Web-API (REST)
  * CRUD & Patch
  * API Versioning
  * Authentication via [.NET Core Identity](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-2.1&tabs=visual-studio%2Caspnetcore2x) und [JWT](https://tools.ietf.org/html/rfc7519)
  * Logging via [NLog](http://nlog-project.org)
  * [EntityFramework Core](https://docs.microsoft.com/en-us/ef/core/) auf [MariaDB](https://mariadb.org/)
  * [.Net MongoDB Driver](https://docs.mongodb.com/ecosystem/drivers/csharp/) auf [MongoDB](https://www.mongodb.com)
  * Swagger ([NSwag](https://docs.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-nswag?view=aspnetcore-2.1&tabs=visual-studio%2Cvisual-studio-xml))
  * Repository Pattern with Dependency Injection and ViewModels
  * [AutoMapper](http://automapper.readthedocs.io) via Dependency Injection

* Database: SQL & NoSQL
  * Content:  [MongoDB](https://www.mongodb.com) Entwicklung auf lokalem Server
  * Authentication: [MariaDB](https://mariadb.org/) (MySQL-Derrivat), auf [Docker](https://www.docker.com)-Container

* Versionsverwaltung
    * [Git](https://git-scm.com) auf [GitHub- Repository](https://github.com/DonCorleone/KinderKultur_Docker)

* Enwicklungsumgebung Hardware
  * Apple MacBook Pro

* Entwicklungsumgebung Software:
  * MacOS 10.13 (High Sierra)
  * Visual Studio Code (TypeScript, HTML, SCSS, C#, MongoShell)
  * Postman (API-Testing)
  * Robo 3T (Mongo-DB)
  * Sequel Pro (Maria-DB)

* Produktivumgebung Hardware (Noch nicht online)
  * Synology Diskstation (Dockerfähiger Webserver mit RAID 2)
  
## License

MIT

## DonCorleone Modifications

### Init

    npm install rimraf -g
    rimraf node_modules
    npm install

### GIT

    git remote rm origin;
    git remote add origin https://github.com/DonCorleone/AngularWebpack.git
    git push -u origin master

### Bootstrap 4 Beta

    npm install --save popper.js angular-popper
    npm uninstall bootstrap@3.3.7
    npm install bootstrap@4.0.0-beta --save

#### vendor.ts

```javascript
// import 'bootstrap/dist/css/bootstrap-theme.css';
```

#### webpack.dev.js

```javascript
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
```

#### webpack.prod.js

```javascript
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
```

#### AOT

    node_modules/.bin/ngc -p tsconfig-aot.json;

### MongoDB

#### Start locally

    cd /usr/local/bin
    mongod --config mongod.cfg

#### Start Docker Image

    docker start mongodbKinderkultur

#### Import

    mongoimport -h 127.0.0.1:27017 --authenticationDatabase=admin -u 'username' -p 'password' --db kinderkultur --collection links --drop --file links.json

#### credits

use admin
db.createUser(
  {
    user: "admin",
    pwd: "xxx",
    roles: [ { role: "root", db: "admin" } ]
  }
);
exit;

mongo admin -u admin -p

Feeds used:
    https://api.nuget.org/v3/index.json

#### MongoDB C# Driver

https://github.com/fpetru/WebApiMongoDB
http://www.qappdesign.com/using-mongodb-with-net-core-webapi/

### .NET Core Web API Versioning

https://www.hanselman.com/blog/ASPNETCoreRESTfulWebAPIVersioningMadeEasy.aspx
