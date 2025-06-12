# Buid & Deploy Expo App to App Store

## Expo Dev Account Login

https://expo.dev/accounts/yuhao1949

## install eas-cli

```bash
npm install -g eas-cli
```

## Login to Expo Dev Account using eas-cli

```bash
npx eas login
# yuhao1949 / FOjkPtV0%ibllH0U
npx eas whoami
```

## configure project for eas build

```bash
npx eas build:configure
# choose build for All platforms
# eas.json will be created
```

## Build the app for Andriod device/emulator

# configure a profile to build APKs in eas.json

```bash
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      },
      "distribution": "internal"
    }
  }

# create an installable signed APK for Andriod device or emulator
npx eas build -p android --profile preview
# If asked, set Android application id (Andriod package name in app.json) to "com.yuhao1949.haoDemoApp"
# If asked, Generete a new Android keystore (using Expo server)? choose "Y"; if you have your own keystore, choose "n" and provide the keystore file and password

# create an installable file for iOS simulator
npx eas build -p ios --profile preview
# If asked, set iOS bundle identifier to "com.yuhao1949.haoDemoApp"
```

## Build the app for App Store (AAB file)

```bash
npx eas build -p android
npx eas build -p ios
npx eas build -p all
```

## Submit the app to App Store (a one-time $25 Google Play Developer membership fee required)

## https://expo.fyi/creating-google-service-account

## First Manually Submission of an Android App

## https://github.com/expo/fyi/blob/main/first-android-submission.md

## app-store-service-account@android-project-01-462715.iam.gserviceaccount.com

## download the JSON service account key file from https://console.cloud.google.com

## and save it as `google-service-account.json` in the root of the project

```bash
npx eas submit -p android
# choose "Select a build from EAS"
npx eas submit -p ios
```
