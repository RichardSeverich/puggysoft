# DEPLOY PART 2

### Install appium
* Install appium: ```npm install -g appium```
* Verify appium ```npm ls --global```
* Verify appium ```appium --version```
<p align="center">
  <img src="readme-files-02/001-appium-verification.jpg">
</p>

* Install uiautomator2 driver  ```appium driver install uiautomator2```
<p align="center">
  <img src="readme-files-02/002-install-driver-uiautomator2.jpg">
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

* Open appium-inspector, set the following configurtion and let empty Remote Host, Port and Path.
```
{
  "automationName": "UIAutomator2",
  "deviceName": "Pixel API 30 (Android 11.0)",
  "udid": "emulator-5554",
  "platformName": "Android",
  "platformVersion": "11.0",
  "appPackage": "com.idt.n2p",
  "appActivity": "com.idt.n2p.MainActivity",
  "noReset": "true"
}
```
<p align="center">
  <img src="readme-files-02/005-configure-appium-inspector.jpg">
</p>

This is in order to get the selectors of our application. (NOTE: for run test you should close the session of appium-inspector)

### Install appium-doctor
* Install appium doctor: ```npm install -g appium-doctor```
* Verify version: ```appium-doctor -v```
* Verify Dependencies Ios: ```appium-doctor --ios```
* Verify Dependencies Andorid: ```appium-doctor --andorid```

