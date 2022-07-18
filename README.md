<p align="center">
  <a href="https://primetec.cl/">
    <img src="https://primetec.cl/wp-content/uploads/2018/07/logo-sin-fondo-white-06-1-600x175.png" alt="Primetec logo" width="420" height="165">
  </a>
</p>
<p align="center">
  <a href="https://primetec.cl/"><strong>Visit our website »</strong></a>
  <br>
</p>

# PRIMETEC FX360 APP MOBILE - ANDROID GUIDE

An application developed under the [Ionic framework](https://ionicframework.com/).

# REQUIREMENTS

- [Git](https://gitforwindows.org/) installed in your machine.
- [npm](https://nodejs.org/es/download/) installed and configured in your machine.
- [node](https://nodejs.org/es/download/) installed and configured in your machine `(v12.22.8 recommended)`.
- Text editor like [VS Code](https://code.visualstudio.com/).
- [@ionic/cli](https://www.npmjs.com/package/@ionic/cli) package installed as global.
- [Cordova](https://www.npmjs.com/package/cordova) package installed as global.
- Java [JDK](https://developer.android.com/studio) installed. The version required is `v1.8.0` or `jdk-8u172`. You can find in development drive!
- [Gradle](https://gradle.org/releases/) folder downloaded. The version required is `v7.3.3`. You can find in development drive!
- [Android Studio](https://developer.android.com/studio) IDE installed.
- `Android SDK` installed and configured.
- `ANDROID_HOME` configured in environment variables, pointed to sdk installation folder.
- `ANDROID_SDK_ROOT` configured in environment variables, pointed to sdk installation folder.
- `JAVA_HOME` configured in environment variables, pointed to jdk installation folder.
- `Path` configured in environment variables with `\gradle-7.3.3\bin` folder.

> We highly recommend using [NVM](https://github.com/coreybutler/nvm-windows) (Node Version Manager) to manage different versions of node on your development machine.

# STEPS TO DOWNLOAD, CONFIGURE, COMPILE AND USE THE APPLICATION

<p align="center">
  <img src="https://res.cloudinary.com/idepixel/image/upload/v1651348337/Landing/service-image.webp" alt="Download and configure">
</p>

## > Download

You can download the application by copying its link, either by ssh or https. The git command you need to run is as follows:

```sh
# HTTPS =====================================================!

# Clone repository
$ git clone https://primetec@bitbucket.org/primetecdev/fx11_mobile.git
$ cd fx11_mobile

# If you want to download it with another folder name, example your-folder-name
$ git clone https://primetec@bitbucket.org/primetecdev/fx11_mobile.git your-folder-name
$ cd your-folder-name

# SSH =======================================================!

# Clone repository
$ git clone git@bitbucket.org:primetecdev/fx11_mobile.git
$ cd fx11_mobile

# If you want to download it with another folder name, example your-folder-name
$ git clone git@bitbucket.org:primetecdev/fx11_mobile.git your-folder-name
$ cd your-folder-name
```
## > Install dependencies

In the application root folder, type this command in the command line terminal:

```sh
# Install dependencies with npm
$ npm install
```

## > Add Android platform target

In the application root folder, type this command in the command line terminal:

```sh
# Configure Android platform
$ ionic cordova platform add android
```

This command will create a platform folder in your local project.

#
## Set version (IMPORTANT!)

To establish a new version you must modify the following files:

| File                            |                         |
|-------------------------------- | ------------------------|
| `./config.xml`                  | widget tag, line 2      |
| `./package.json`                | version propety, line 3 |
| `./src/environments/version.ts` | number propety, line 2  |

> You must change these files on every new version that you going to compile.
#
## > Ionic build before prepare Android

In the application root folder, type this command in the command line terminal:

```sh
# Ionic build
$ npm run build
```
## > Prepare Android app

In the application root folder, type this command in the command line terminal:

```sh
# Prepare for Android
$ npm run prepare-android
```

## > Compile Android APK for QA testing

In the application root folder, type this command in the command line terminal:

```sh
# Compile for QA
$ npm run build-android
```

> This command will generate an Android APK file in the `./platforms/android/app/build/outputs/apk/debug` folder.

## > Compile Android AAB for production

In the application root folder, type this command in the command line terminal:

```sh
# Compile for production
$ npm run release-android
```

> This command will generate an Android AAB file in the `./platforms/android/app/build/outputs/bundle/release` folder.

## > Sign Android AAB

In the application root folder, type this command in the command line terminal:

```sh
# Compile for production
$ npm run sign-android
```

> This command will ask you for a password, it's `Pr1m3T3c`.

## > Compress Android AAB and generate the final file

In the application root folder, type this command in the command line terminal:

```sh
# Compile for production
$ npm run zipalign-android
```

> This command will generate the final Android AAB file in the `./` folder called `fx360.aab`.


# UPLOAD APP IN PLAYSTORE

You must go to the address of the google developer console:

- [https://developer.android.com/distribute/console](`https://developer.android.com/distribute/console`)

Login data:

- User: `desarrollo@primetec.cl`
- Password: `Ask adminitrator!`

Inside developer console:

- Select FX360 app `(cl.primetec.fx11)` in **"See application"** option.
- In **"Launch"** menu, click on **"Production"** option.
- Click on **"Create a new version"** button.
- Upload the `fx360.aab` generated.
- Write the `version description` or notes.
- `Save changes!`.
- Click on **"Check version"** button.

> The next step depends directly on google, they will review the version and if there are no errors, it will go into production.