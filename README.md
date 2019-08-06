# Angular-Bootrap-Firebase

Angular Bootstrap Firebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Documentation

[Node.js](https://nodejs.org/en/docs/)

[Angular](https://angular.io/)

[AngularCLI](https://cli.angular.io/)

[RxJS](http://reactivex.io/rxjs/)

## Install the Angular CLI

```
npm install -g @angular/cli
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

```
ng new angular-bootstrap-firebase --routing --style scss --skip-install --skip-git
```

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

```
ng generate component header -m app
ng generate component footer -m app
ng generate component carousel -m app
ng generate component page-header -m app
ng generate service auth/auth-user
ng generate component signin -m app
ng generate component signup -m app
ng generate component blog-post -m app
ng generate component blog-widget -m app
ng generate module blog-routing --module app --flat
ng generate guard auth
ng generate component blog-post-item -m app
ng generate component blog-comment -m app
ng generate component blog-reply -m app
ng generate service blog-service/blog 
ng generate service blog-service/resolver 
```

## Add Bootsrap

```
npm install --save bootstrap
```

Import the Bootstrap styles in the src/styles.css file by adding the following code:

```
@import "~bootstrap/dist/css/bootstrap.css";  
```

### Add Firebase hosting

Add the needed packages

```
npm install --save firebase @angular/fire 
```

### Import the Angular Fire libraries

Modify app.module.ts to import the Firebase libraries. Add import for environment

```
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    ...
    AngularFireModule.initializeApp(environment.firebaseConfig), // initialize
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  ...
})  
```

Modify environment.ts and environment.prod.ts and add the firebase credentials.

environment.ts:
```
export const environment = {
  production: false,
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  }
};
```

environment.prod.ts

```
export const environment = {
  production: true,
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  }
};
```

## Add ng-bootstrap

```
npm install --save @ng-bootstrap/ng-bootstrap
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
