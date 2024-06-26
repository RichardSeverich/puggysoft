## Install and configure Android Studio

* Download Android Studio from: ```https://developer.android.com/studio```
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/001-android-studio-download.jpg">
</p>

* Install Android Studio:
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/002-android-studio-install.JPG">
</p>

### Create a New Device in Android Studio

* Open Android Studio and go to ```More actions > Virtual Device manager```:
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/003-android-studio-more-actions.JPG">
</p>

* Click on "Create Virtual" in Device Manager:
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/004-android-studio-device-manager.JPG">
</p>

* Select hadware, you can select ```Pixel 7 Pro``` and press ```Next``` button :
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/005-android-studio-select-hadware.JPG">
</p>

* Download and select de android version you can select ```Android 11.0``` and press ```Next``` button : 
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/006-android-studio-select-android-version.JPG">
</p>

* Leave everything as it is and press ```Finish``` button : 
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/007-android-studio-finish-device-mananger.JPG">
</p>

* With this we have finished creating a new device and we will view it in the ```Device Manager``` screen, now we can run it by pressing the ```play``` button
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/008-android-studio-run-device.JPG">
</p>

* Once it run, you can see your device opened
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/009-android-studio-run-device-finish.JPG">
</p>

### Optional (App install manually)

You can install the app manually, or you can also use an APK directly in the appium settings, so if you are going to use an APK file you can skip this step.

* Enter ```Play Store``` and Install ``` Net2Phone``` app.
<p align="center">
  <img src="./readme-files-01/003-install-net-2-phone.JPG">
</p>


### Configure SDK in Android Studio

* Go to a ```SDK Manager```
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/010-android-studio-go-sdk-manager.JPG">
</p>

* Select ```Android 11.0 (R) 30``` SDK Platform and press ```Apply``` button. (Note: before selecting, it must be downloaded.)
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/011-android-studio-select-SDK-platform.JPG">
</p>

* Then go to ```SDK tools``` and select ```Android SDK Command-line Tools (latest)``` and press ```Apply``` button and ```Ok``` button. (Note: before selecting, it must be downloaded.)
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/012-android-studio-select-SDK-tool.JPG">
</p>

<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/012-android-studio-SDK-download.JPG">
</p>

* After that, Add ```Platform tools``` to environment variables
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/013-android-studio-environment-variables1.JPG">
</p>
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/013-android-studio-environment-variables2.JPG">
</p>

* Then test with ``` adb devices``` in cmd
<p align="center">
  <img src="./../../../mobile/mobile001/readme-files/014-android-studio-test-adb-devices.JPG">
</p>
