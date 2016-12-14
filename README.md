megaApp
===========

Super Mega Cordova und Electron app

Currently only the Ionic mobile part is setup and can be used for development.

## Setup Dev Environment and Run

- Install the dependencies Cordova and Android SDK
- Assign ANDROID_HOME to your android sdk location
- Make sure to have tools and platform-tools in the path
- Accept the License Agreement of the Android SDK 
- Make sure to have Node 6.x or 7.x at least

- `npm install`
- `npm run install-globals` 
- `ionic serve`

**Note**: Only verified on webkit based browsers.

### Visual Studio Setup

- Install plugin Tools for Apache Cordova
- Install plugin Ionic2 Templates
- Install plugin Ionic Pack
- Import the Project
- Configure Android Run-Environment

Further Information in the Docs of Ionic https://taco.visualstudio.com/en-us/docs/tutorial-ionic/

**Remember to always put into the .gitignore file all build files, temp files and everything others won't need or that will be generated.**
