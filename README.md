
# Setup

* Add to the environment variables in path: `C:\Program Files\Java\jdk1.8.0_261\bin`
* This will give access to the `keytool` and the `jarsigner`

# Compile & Sign Android App

| # | Step               | Command                    | Key        |
|---|--------------------|----------------------------| -----------|
| 1 | Prepare android    | `npm run prepare-android`  |            |
| 2 | Build release apk  | `npm run release-android`  |            |
| 3 | Sign app           | `npm run sign-android`     | `Pr1m3T3c` |
| 4 | Zip apk            | `npm run zipalign-android` |            |


# Upload

## Access
* Go to `https://developer.android.com/distribute/console`
* User `desarrollo@primetec.cl`
* Pass `Pr1m3T3c`
* Select FX360 Movil
* Menu `Version -> Produccion`

## Create Version
* Create version Button
* Upload the FX360 App
* Add the version description
* Save Changes
* Send to Revision
