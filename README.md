# Ionic & Angular Portfolio App

This repository contains a setup guide and the source code for a hybrid mobile application built with **Ionic 8** and **Angular**, leveraging the **Standalone Components** architecture. The app is optimized for deployment on **GitHub Pages** and is compatible with **Android** devices via Capacitor.

---

## Prerequisites

To avoid version conflicts in the development environment, using a Node.js version manager is highly recommended.

### 1. Node.js Management with NVM (Windows)
1. Download the installer from the official repository: [nvm-windows releases](https://github.com/coreybutler/nvm-windows/releases).
2. Run the `.exe` file and install it (default path `C:\Program Files\nvm` is recommended).
3. **Essential Commands (Run PowerShell as Administrator):**


#### Verify installation:
```
nvm -v
```
#### Install the latest available Node.js version:
```
nvm install latest
```
#### Install and use a specific compatible version (Recommended: v22):
```
nvm install 22.12.1
nvm use 22.12.1
```
#### Check current version in use:
```
nvm current
```
---
### 2. Angular and Ionic CLIs
#### Global installation:
```
npm install -g @angular/cli
```
#### Configure PowerShell Execution Policy (required to run 'ng' commands):
```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
#### Optional: Migrate an existing project's components to Standalone:
```
ng generate @angular/core:standalone
```
#### Install the Ionic CLI:
```
npm install -g @ionic/cli
```
#### Create a new application from scratch (e.g., using the tabs template):
```
ionic start myApp tabs --type angular
```
#### Update to the latest Ionic version (v8):
```
npm install @ionic/angular@latest
```
#### Launch the local development server:
```
ionic serve
```
---
### 3. Capacitor
#### Create a new Capacitor app:
```
npm init @capacitor/app@latest
```
#### Add the Android platform to the project:
```
npx cap add android
```
#### Add Capacitor to your web app:
#### Requirements:
* A package.json
* A separate directory for built web assets such as dist or www
* An index.html file at the root of your web assets directory with <head> tag in order to properly inject Capacitor
```
npm i @capacitor/core
npm i -D @capacitor/cli
```
#### Initialize your Capacitor config:
```
npx cap init
```
#### Create your Android and iOS projects!
#### After the Capacitor core runtime is installed, you can install the Android and iOS platforms:
```
npm i @capacitor/android @capacitor/ios
```
#### Once the platforms have been added to your package.json, you can run the following commands to create your Android and iOS projects for your native application:
```
npx cap add android
npx cap add ios
```
#### Sync your web code to your native project:
```
npx cap sync
```
#### Compiling your native binary:
```
npx cap build android
```
#### [Capacitor Android Documentation](https://capacitorjs.com/docs/android)
#### [Capacitor iOS Documentation](https://capacitorjs.com/docs/ios)
---
### 4. Deployment to GitHub Pages
#### Install the deployment package:
```
ng add angular-cli-ghpages
```
#### Note: The double dash '--' passes arguments directly to the Angular CLI
#### Replace YOUR_REPOSITORY_NAME with your actual GitHub repo name:
```
ionic build --prod -- --base-href /YOUR_REPOSITORY_NAME/
```
#### Upload files to the gh-pages branch:
```
npx angular-cli-ghpages --dir=www
```
