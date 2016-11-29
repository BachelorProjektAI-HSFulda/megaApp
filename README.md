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
- `ionic serve`

**Note**: Only verified on webkit based browsers.

### Visual Studio Setup

- Install plugin Tools for Apache Cordova
- Install plugin Ionic2 Templates
- Install plugin Ionic Pack
- Import the Project
- Configure Android Run-Environment

Further Information in the Docs of Ionic https://taco.visualstudio.com/en-us/docs/tutorial-ionic/

## How to Test Code

The Unit-Test Framework Jasmine is installed and can be used with Console or with Visual Studio.

On Console just call `npm run tests` and wait for the build and tests to complete. The results are printed to the console.

For usage and installation in Visual Studio refer to the Wiki.

To contribute new tests for the test-suite simply create a new file in the `src/tests` directory. Use the existing test-file as example. More on those test-files in the jasmine documentation. Links are in the Wiki.

Each test-file has to end with Spec.ts or spec.js. For example myClass.spec.js.

**Remember to always put into the .gitignore file all build files, temp files and everything others won't need or that will be generated.**
