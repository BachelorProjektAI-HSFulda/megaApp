megaApp
===========

[![Build Status](https://travis-ci.org/BachelorProjektAI-HSFulda/megaApp.svg?branch=development)](https://travis-ci.org/BachelorProjektAI-HSFulda/megaApp)

Super Mega Cordova und Electron app

Currently only the Ionic mobile part is setup and can be used for development.

## Setup Dev Environment and Run

- Install the dependencies Cordova and Android SDK
- Assign ANDROID_HOME to your android sdk location
- Make sure to have tools and platform-tools in the path
- Accept the License Agreement of the Android SDK 
- Make sure to have Node 6.x or 7.x at least

- `npm install`
- `npm install -g ionic cordova` 
- `ionic serve`

With the command `npm run install-clean` it's possible to install a fresh npm installation. This is handy when switching between branches with different node_modules and configurations or when new node_modules are introduced.

**Note**: Only verified on webkit based browsers.

### Run Android Build

- `android update sdk --no-ui --filter build-tools-25.2.5,android-25,extra-android-m2repository,platform-tools-25.0.3`
- `ionic platform add android`
- `ionic build android`

### Visual Studio Setup

- Install plugin Tools for Apache Cordova
- Install plugin Ionic2 Templates
- Install plugin Ionic Pack
- Import the Project
- Configure Android Run-Environment

Further Information in the Docs of Ionic https://taco.visualstudio.com/en-us/docs/tutorial-ionic/

**Remember to always put into the .gitignore file all build files, temp files and everything others won't need or that will be generated.**
