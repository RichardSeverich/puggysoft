# APPIUM

### Install appium
* Install appium: ```npm install -g appium```
* Verify appium ```npm ls --global```
* Verify appium ```appium --version```
<p align="center">
  <img src="readme-files-02/001-appium-verification.jpg">
</p>

* Install uiautomator2 driver  ```appium driver install uiautomator2```
* install driver for Ios: ```appium driver install xcutest```
<p align="center">
  <img src="readme-files-02/002-install-driver-uiautomator2.jpg">
</p>

* Verify drivers installation with: ```appium driver list```
<p align="center">
  <img src="readme-files-02/002-appium-drivers-list.jpg">
</p>

* start appium server ```appium``` or ```appium --allow-cors```(recomended)
<p align="center">
  <img src="readme-files-02/003-appium-start.jpg">
</p>

### Install appium-inspector
* Download and install appium-inspector client from ```https://github.com/appium/appium-inspector/releases```

<p align="center">
  <img src="readme-files-02/004-appium-inspector download.jpg">
</p>


### Open appium-inspector

we have 2 options to open appium inspector.

### Option A
* Open appium-inspector, set the following configurtion and let empty Remote Host, Port and Path.
(This option is if you installed the app manually)
```
{
  "automationName": "UIAutomator2",
  "deviceName": "Pixel API 30 (Android 11.0)",
  "udid": "emulator-5554",
  "platformName": "Android",
  "platformVersion": "11.0",
  "appPackage": "com.idt.n2p",
  "appActivity": "com.idt.n2p.MainActivity",
  "autoGrantPermissions": true
}
```
<p align="center">
  <img src="readme-files-02/005-configure-appium-inspector.jpg">
</p>

### Option B
* Open appium-inspector, set the following configurtion and let empty Remote Host, Port and Path.
(For this you need copy the apk file on C:\apk-files\n2p.apk)
```
{
  "appium:automationName": "UIAutomator2",
  "appium:deviceName": "Pixel API 30 (Android 11.0)",
  "appium:udid": "emulator-5554",
  "platformName": "Android",
  "appium:platformVersion": "11.0",
  "appium:app": "C:\\apk-files\\n2p.apk",
  "autoGrantPermissions": true
}
```
<p align="center">
  <img src="readme-files-02/005-configure-appium-inspector-b.jpg">
</p>


### Option C (iOS)
```
{
  "automationName": "XCUITest",
  "deviceName": "iPhone 14 Pro",
  "udid": "7C62B764-5491-40DF-B732-42A46C8715BD",
  "platformName": "iOS",
  "platformVersion": "16.2",
  "app": "/Users/rseverich/Desktop/app-files/n2p.app"
}
```
<p align="center">
  <img src="readme-files-02/006-configure-appium-inspector-ios.png">
</p>


This is in order to get the selectors of our application. (NOTE: for run test you should close the session of appium-inspector)

### Install appium-doctor
* Install appium doctor: ```npm install -g appium-doctor```
* Verify version: ```appium-doctor -v```
* Verify Dependencies Ios: ```appium-doctor --ios```
* Verify Dependencies Android: ```appium-doctor --android```

