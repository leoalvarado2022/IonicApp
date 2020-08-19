
## Additional tools

 `almacen claves: Pr1m3T3c`.
  
 `ionic cordova build android --prod --release`.
 
 `./jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore fx-pos-key.keystore app-release-unsigned.apk fx_pos`
 
 `./zipalign -v 4 app-release-unsigned.apk app.apk`
