# automation-frontend-001

* Install Java version: "1.8.0_201"
* Install Gradle 4.8.1
* Download chrome driver from: https://chromedriver.chromium.org/downloads
* Download chrome driver from: https://googlechromelabs.github.io/chrome-for-testing/
* Download chromedriver_win32.zip
* Copy the chrome driver to "drivers: forlder.


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
