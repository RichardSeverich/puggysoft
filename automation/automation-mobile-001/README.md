# APPIUM WITH AUTOMATION

## Install Dependencies

* Install node version: ```v18.16.1```
* Install npm version: ```9.5.1```
* Install npx version: ```9.5.1```
* Install JDK version: ```1.8.0_401``` and add env variables
* Install and Configure Android Studio.
Select ony one option:
  - Option A: follow all instructions from [README-DEPLOY-01A](./README-DEPLOY-01A.md) file. (Recommended) (Use it when you need test with real and emulator devices.)
  - Option B: follow all instructions from [README-DEPLOY-01B](./README-DEPLOY-01B.md) file. (Use it when you need only test with real devices.)
* Install Appium: follow all instructions from [README-DEPLOY-02](./README-DEPLOY-02.md)
* Configure ```config.properties``` according with [README-DEPLOY-03](./README-DEPLOY-03.md)

## Run tests
* Run all test ```gradlew --info cleanTest test```
* build all projects ```gradlew build```

## Run tests project-01
* build only a project ```gradlew :project-01:build```
* Run on project-01 ```gradlew :project-01:test```

## Run tests project-02
* build only a project ```gradlew :project-02:build```
* Run on project-01 ```gradlew :project-02:test```

## Run tests project-03

* build only a project ```gradlew :project-03:build```
* Run cucumber tests  ```gradlew :project-03:cucumber```
* Run cucumber tests only smoke```gradlew :project-03:cucumber -P tags=@SmokeTest```
* Then you can see the reports in ```project-03/reports/index.html``` folder.
