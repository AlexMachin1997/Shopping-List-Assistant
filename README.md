# Shopping Assistant &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AlexMachin1997/Shopping-List-Assistant/README.md) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/AlexMachin1997/Shopping-List-Assistant/pulls) [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

This repository consists of a project of made for educational purposes, it was created as part of a mobile application unit at university.

As part of the README file it will describe and explain the following sections:

- Purpose
- Core features
- Technologies used
- Getting started
- Deployment notes
- Contributing
- Project information

## Purpose

The overall purpose of this React-native mobile application is to allow users to add a nd track items in relatime through GPS tracking.

To enable tracking items will need to be added to the shopping list, once items are present background tracking will be enabled. With an item being present in a shopping list it will now be tracked, once an item is present in a shopping list it will be tracked. Now when an item is found you will be alerted through the use of a push notification.

For a full breakdown of the mobile application features checkout the core features breakdown below.

## Core features

As of the current version of the mobile application, it is currently capable of performing some of the following tasks (They will all be added soon):

- Create a shopping list
- Add an item to a shopping list
- Edit items
- Edit a shopping list
- Edit the colour assigned to the shopping list
- GPS tracking via React-Native-Maps
- Theming
- Managing AsyncStorage
- Filter lists based on criteras such as complete and incomplete

## Technologies used:

- [React-Native](https://facebook.github.io/react-native/)
- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [Metro bundler](https://github.com/facebook/metro)
- [Expo-cli](https://docs.expo.io/versions/latest/workflow/expo-cli/)
- [Babel](https://babeljs.io/)
- [React Navigation](https://reactnavigation.org/)
- [React-Native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [React-navigation](https://reactnavigation.org/)
- [React-navigation-material-bottom-tabs](https://github.com/react-navigation/react-navigation-material-bottom-tabs)
- [ShortID](https://github.com/dylang/shortid)
- [Styled-components](https://github.com/styled-components/styled-components)
- [MomentJS](https://github.com/moment/moment/)
- [React-Native-Maps](https://github.com/react-native-community/react-native-maps)
- [React-native-onboarding-swiper](react-native-onboarding-swiper)

## Getting started

- Clone the project to your development environment by using `git clone https://github.com/AlexMachin1997/Shopping-List-Assistant`

- Install and configure android studio

  - Install the IDE

  - Click SDK manager within Android Studio settings.

  - Go to the SDK platforms tools and perform the following

    - Click show all package details and go to the latest version of Android
    - Click "Android SDK Platform 28"
    - Click "Sources for Android 28"
    - Click "Intel x86 Atom Ststem Image"
    - Click "Intel x86 Atom_64 System Image"
    - Click "Google APIs Intel x86 Atom System Image"
    - Click "Google APIs Intel x86 Atom_64 System Image"
    - Click "Google Play Intel x86 Atom System Image"
    - Click "Google Play Intel x86 Atom_64 System Image"

  - Go to SDK tools tab and perform the following:

    - Click show all package details.
    - Click "Android SDK Build-Tools"
    - Click "Android Emulator"
    - Click "Android-SDK Platform Tools"
    - Click "Android SDK tools"
    - Click "Google play services"
    - Click "Google USB Driver"
    - Click "Intel x86 Emulator Accelerator (HAXM Installer)"
    - Click "Support Respository"

  - Add a virtual device via the AVD manager
  - Check the Android SDK location is correct

- Configure the enviroment variables for Android Studio:

  - Add ANDROID_HOME = `C:\Users\ [USERNAME] \AppData\Local\Android\Sdk`
  - Add `C:\Users\ [USERNAME] \AppData\Local\Android\Sdk\platform-tools` to the PATH variable within the system and account sections

- Install Node.JS and node package manager(NPM):

  - https://nodejs.org/en/ (Node.JS and NPM)

- Install expo cli and react-native:

  - `npm install -g expo-cli`

- Physical device configuration:
  - Enable developer mode
  - Enable USB debugging
  - Check the USB configuration is set to MTP
  - Uncheck and recheck the USB debugging (Weird issue during the setup)
  - Run `adb devices`, this should show the devices as the platform tools variable was set earlier
    - If it fails go to `C:\Users\ [USERNAME] \AppData\Local\Android\Sdk\platform-tools` in the command line and type in `adb devices` again
  - The util should show your device connected, note the name showed in the adb devices output
  - configure adbs reverse `adb -s <Device name from adb devices output> reverse tcp:8081 tcp:8081`
  - Run adb devices again to check everything is ok, your device should show up

* Dependency installation

  - Issue `npm install` to install all dependencies with NPM
  - Issue 'yarn install' to install all dependencies with yarn (Requires yarn to be configured)

* Running the development enviroment:
  - Go to the cloned repositories location in the terminal
  - Run `react-native run-android` (This will take a long time on the inital build, but the second time around it will take seconds)
  - If you have the emulator running it will run on that device
  - If you have a physical device attached it will run on that device
  - **Note**: If when you run `react-native run-android` and you get **"Could not find tools.jar"** complete the following:
    - install [Chocolatey](https://chocolatey.org/)
    - Run `choco install -y nodejs.install python2 jdk8` as a windows admin
    - Wait for installs, try running it again and it should work correctly now
    - NOTE: Im not sure why this is currently happening, I experienced this issue and performing the above steps worked a charm

## Deployment notes

To use the API, you can deploy it to various playstores a platforms like:

- [Expo](https://expo.io/)
- [Google Play](https://play.google.com/store?hl=en_GB)
- [Apple store](https://www.apple.com/uk/ios/app-store/)

**NOTE**: The deployment of the application will be different depending on the setup used. For my personal use it will be deployed to Expo and Google Play, though if you want to create an iOS version then you will need to deploy it to Apple store as opposed to Google Play.

## Contributing

### Reporting issues

If you find any problems while using the API, report them [here](https://github.com/AlexMachin1997/Food-Allergy-Mobile-Application/issues), and I will address them as quick as I can.

### Feature requests

If you would like to request features for future versions of the application again, please post them [here](https://github.com/AlexMachin1997/Food-Allergy-Mobile-Application/issues). When posting ideas ensure the functionality is explained to provide any developers contributing to the project know what to implement.

# Project Information

### Author information

Alex Machin

If you want to connect with me on my professional social network platforms feel free to use the links located below, but please don't abuse them.

- [LinkedIn](https://www.linkedin.com/in/alex-machin/)
- [Twitter](https://twitter.com/AlexMachin97)

### Mobile app version

The application is currently at version 1.0, with each feature added it will increment based on these [guidelines](https://docs.npmjs.com/about-semantic-versioning)

### Project Licence information

This project is licensed under the MIT License, for more details about the API refer to the LICENCE.md file located within the project.
