# java-spring-puggysoft

## Prerequisites 🔨

1. Install ```Windows 10```
2. Install ```java 1.8.0_201```
3. Deploy ```puggysoft backend project```
4. Configure  ```project-02/config.app.properties```
5. Visual Studio Plugin ```Cucumber (Gherkin) Full Support```
6. Visual Studio Plugin ```Java prettier formatter```

## Information

1. Gradle version: ```gradle-8.1.1```
2. Command to init: ```gradle init --type java-library```

## Run tests

* Run all test ```gradlew --info cleanTest test```
* build all projects ```gradlew build```

## Run tests project-01

* build only a project ```gradlew :project-01:build```
* Run on project-01 ```gradlew :project-01:test```

## Run tests project-02

* build only a project ```gradlew :project-02:build```
* Run Tests only a project ```gradlew :project-02:test```
* Run cucumber tests  ```gradlew :project-02:cucumber```
* Run cucumber tests only smoke```gradlew :project-02:cucumber -P tags=@SmokeTest```
