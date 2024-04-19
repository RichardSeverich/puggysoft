## Install Android Studio Platform tools only 

* Download command line tools from android studio from ```https://developer.android.com/studio``` go down on the page.
<p align="center">
  <img src="readme-files-01/001-android-studio-command-line-tools.jpg">
</p>

* Check the API level accoding with the Android version in ```https://en.wikipedia.org/wiki/Android_version_history```
* Execute the following command ```sdkmanager "platform-tools" "platforms;android-30"``` in bin folder ```from command line tools``` according with the API level
<p align="center">
  <img src="readme-files-01/002-android-studio-install-platform-tools.jpg">
</p>

* After that, Add ```Platform tools``` to environment variables
<p align="center">
  <img src="./../../mobile/mobile001/readme-files/013-android-studio-environment-variables1.jpg">
</p>
<p align="center">
  <img src="./../../mobile/mobile001/readme-files/013-android-studio-environment-variables2.jpg">
</p>

* Then test with ``` adb devices``` in cmd
<p align="center">
  <img src="./../../mobile/mobile001/readme-files/014-android-studio-test-adb-devices.jpg">
</p>
