# JENKINS CONFIGURATION

## ADD AWS EC2 AS JENKINS EXECUTOR
* Login to:  ```http://jenkins-n2p.idt.net:8080/login```
<p align="center">
  <img src="readme-files-08-jenkins/000-jenkins.png">
</p>

* Go to executor:
<p align="center">
  <img src="readme-files-08-jenkins/001-jenkins.png">
</p>

* Go to new node:
<p align="center">
  <img src="readme-files-08-jenkins/002-jenkins.png">
</p>


* Create jenkins creentials ```SSH username with private key ``` note: use your AWS .pem key

<p align="center">
  <img src="readme-files-08-jenkins/004-jenkins.png">
</p>

<p align="center">
  <img src="readme-files-08-jenkins/005-jenkins.png">
</p>

* Finally fill textboxes:
<p align="center">
  <img src="readme-files-08-jenkins/003-jenkins.png">
</p>

## ADD JENKINS PIPELINE

* Go new item:
<p align="center">
  <img src="readme-files-08-jenkins/006-jenkins.png">
</p>

* Select pipeline option:
<p align="center">
  <img src="readme-files-08-jenkins/007-jenkins.png">
</p>

* Copy the pipeline that is in jenkins folder on root of this project.
<p align="center">
  <img src="readme-files-08-jenkins/008-jenkins.png">
</p>
