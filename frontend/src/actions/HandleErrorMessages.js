import i18n from "./../i18n/i18n";

const unknownError = () => { alert(i18n.errorMessages.unknownError); }
const successfullyCreated = () => { alert(i18n.errorMessages.successfullyCreated); }
const successfullyEdited = () => { alert(i18n.errorMessages.successfullyEdited); }
const successfullyDeleted = () => { alert(i18n.errorMessages.successfullyDeleted); }
const errorStaus400 = () => { alert(i18n.errorMessages.errorStaus400); }
const errorStaus403 = () => { alert(i18n.errorMessages.errorStaus403); }
const errorStaus409 = () => { alert(i18n.errorMessages.errorStaus409); }
const invalidCredentials = () => { alert(i18n.errorMessages.invalidCredentials); }
const customMessage = (message) => { alert(message); }

const commonMessages = (response) => {
  if (response && response.status === 400) {
    errorStaus400();
    if (response.data && response.data.errors) {
      let meessage = "";
      response.data.errors.forEach(error => {
        let objectName = error.objectName;
        let field = error.field;
        let defaultMessage = error.defaultMessage;
        meessage = meessage.concat("******* ERROR *******");
        meessage = meessage.concat("\n");
        meessage = meessage.concat("ObjectName: " + objectName + "\n");
        meessage = meessage.concat("field: " + field + "\n");
        meessage = meessage.concat("defaultMessage: " + defaultMessage + "\n");
        meessage = meessage.concat("\n");
      });
      customMessage(meessage);
    }
    if (response.data && response.data.message) {
      customMessage(response.data.message);
    }
  } else if (response && response.status === 403) {
    errorStaus403();
  } else if (response && response.status === 409) {
    errorStaus409();
    if (response.data && response.data.message) {
      let meessage = response.data.message;
      customMessage(meessage);
    }
  } else {
    unknownError();
  }
}

const addMessages = (response) => {
  response && response.status === 201 ? successfullyCreated() : commonMessages(response);
}

const editMessages = (response) => {
  response && response.status === 200 ? successfullyEdited() : commonMessages(response);
}

const deleteMessages = (response) => {
  response && response.status === 200 ? successfullyDeleted() : commonMessages(response);
}

const loginMessages = (response) => {
  if (response.status === 400) {
    // invalid user and password
    invalidCredentials();
  } else if (response.status === 404) {
    // user and pass does not exist
    invalidCredentials();
  } else {
    unknownError();
  }
}

const messageManager = {
  loginMessages,
  addMessages,
  editMessages,
  deleteMessages,
  commonMessages,
  invalidCredentials
}

export default messageManager;
