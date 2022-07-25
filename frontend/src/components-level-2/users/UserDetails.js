import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CommonTextbox from '../../components-level-1/CommonTextbox'
import i18n from "../../i18n/i18n";
import useInput from "./../../hooks/useInput";
import { handleValidation, classNameFormTextNew } from "./../../validations/users/HandleUserFormValidations"
import { handleEditRequest } from "../../actions/HandleManager";
import enumSex from "./../../models/users/enumSex"

import "./user-details.css"

function UserDetails(props) {

  const history = useHistory();
  const routerProps = history && history.location && history.location.state;
  const userData = routerProps.data;

  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);

  // Use custom hook
  const { value: valueUsername, onChange: onChangeUsername } = useInput(userData.username);
  const { value: valuePassword, onChange: onChangePassword } = useInput(userData.password);
  const { value: valueDni, onChange: onChangeDni } = useInput(userData.dni);
  const { value: valueName, onChange: onChangeName } = useInput(userData.name);
  const { value: valueSecondName, onChange: onChangeSecondName } = useInput(userData.secondName);
  const { value: valueLastName, onChange: onChangeLastName } = useInput(userData.lastName);
  const { value: valueSecondLastName, onChange: onChangeSecondLastName } = useInput(userData.secondLastName);
  const { value: valueBirthDate, onChange: onChangeBirthDate } = useInput(userData.birthDate);
  const { value: valueAge, onChange: onChangeAge } = useInput(userData.age);
  const { value: valueSex, onChange: onChangeSex } = useInput(userData.sex);
  const { value: valueOccupation, onChange: onChangeOccupation } = useInput(userData.occupation);
  const { value: valueTelephone, onChange: onChangeTelephone } = useInput(userData.telephone);
  const { value: valueAddress, onChange: onChangeAddress } = useInput(userData.address);
  const { value: valueEmail, onChange: onChangeEmail } = useInput(userData.email);
  const { value: valueStatus, onChange: onChangeStatus } = useInput(userData.active);
  const { value: valueCreatedBy } = useInput(userData.createdBy);
  const { value: valueUpdatedBy } = useInput(userData.updatedBy);
  const { value: valueCreationDate } = useInput(userData.creationDate?.substring(0, 10));
  const { value: valueUpdateDate } = useInput(userData.updateDate?.substring(0, 10));

  const getBody = function () {
    const username = window.sessionStorage.getItem("username");
    const body = {
      username: valueUsername,
      password: valuePassword,
      dni: valueDni,
      name: valueName,
      secondName: valueSecondName,
      lastName: valueLastName,
      secondLastName: valueSecondLastName,
      age: valueAge,
      sex: valueSex,
      occupation: valueOccupation,
      birthDate: valueBirthDate,
      telephone: valueTelephone,
      address: valueAddress,
      email: valueEmail,
      active: valueStatus,
      createdBy: valueCreatedBy,
      updatedBy: username,
    }
    return body;
  }

  const handleAdd = () => {
    const body = getBody();
    let isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      //handleEditRequest("users/", body, userData.id, handleReset, setIsEdit)
    } else {
      alert(i18n.errorMessages.validationError);
    }
  }

  const selectOptionSex = [
    {
      value: enumSex.MALE,
      text: i18n.userSexText.male,
      key: 'option-male'
    },
    {
      value: enumSex.FEMALE,
      text: i18n.userSexText.female,
      key: 'option-female'
    },
  ]

  const selectOptionStatus = [
    {
      value: true,
      text: i18n.userStatus.active,
      key: 'option-true'
    },
    {
      value: false,
      text: i18n.userStatus.inactive,
      key: 'option-false'
    },
  ]

  return (
    <div className="puggysoft-user-details">
      <Card>
        <Card.Header as='h3'>{i18n.userDetails.title}</Card.Header>
        <Card.Img variant="top" size='' src="https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg" />
        <Card.Body>
          <ListGroup.Item> <Card.Title>{i18n.userDetails.subTitleCredentials}</Card.Title> </ListGroup.Item>
          <ListGroup>
            <ListGroup.Item>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnId}
                  textboxReadOnly={true}
                  textboxType={'text'}
                  textboxOnSave={() => { }}
                  textboxOnchange={() => { }}
                  textboxValue={userData.id}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnDni}
                  textboxReadOnly={false}
                  textboxType={'text'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeDni}
                  textboxValue={valueDni}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnUsername}
                  textboxReadOnly={false}
                  textboxType={'text'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeUsername}
                  textboxValue={valueUsername}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnPassword}
                  textboxReadOnly={false}
                  textboxType={'text'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangePassword}
                  textboxValue={valuePassword}
                >
                </CommonTextbox>
              </div>
            </ListGroup.Item>
            <ListGroup.Item> <Card.Title>{i18n.userDetails.subTitleGeneralData}</Card.Title> </ListGroup.Item>
            <ListGroup.Item>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnName}
                  textboxReadOnly={false}
                  textboxType={'text'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeName}
                  textboxValue={valueName}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnSecondName}
                  textboxReadOnly={false}
                  textboxType={'text'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeSecondName}
                  textboxValue={valueSecondName}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnLastName}
                  textboxReadOnly={false}
                  textboxType={'text'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeLastName}
                  textboxValue={valueLastName}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnSecondLastName}
                  textboxReadOnly={false}
                  textboxType={'text'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeSecondLastName}
                  textboxValue={valueSecondLastName}
                >
                </CommonTextbox>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnBirthDate}
                  textboxReadOnly={false}
                  textboxType={'date'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeBirthDate}
                  textboxValue={valueBirthDate}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columndAge}
                  textboxReadOnly={false}
                  textboxType={'number'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeAge}
                  textboxValue={valueAge}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columndSex}
                  textboxReadOnly={false}
                  textboxType={'select'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeSex}
                  textboxValue={valueSex}
                  textboxSelectOption={selectOptionSex}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnOccupation}
                  textboxReadOnly={false}
                  textboxType={'text'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeOccupation}
                  textboxValue={valueOccupation}
                >
                </CommonTextbox>
              </div>
            </ListGroup.Item>
            <ListGroup.Item> <Card.Title>{i18n.userDetails.subTitleContactData}</Card.Title> </ListGroup.Item>
            <ListGroup.Item>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnTelephone}
                  textboxReadOnly={false}
                  textboxType={'number'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeTelephone}
                  textboxValue={valueTelephone}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnAddress}
                  textboxReadOnly={false}
                  textboxType={'text'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeAddress}
                  textboxValue={valueAddress}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnEmail}
                  textboxReadOnly={false}
                  textboxType={'email'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeEmail}
                  textboxValue={valueEmail}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnStatus}
                  textboxReadOnly={false}
                  textboxType={'select'}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeStatus}
                  textboxValue={valueStatus}
                  textboxSelectOption={selectOptionStatus}
                >
                </CommonTextbox>
              </div>
            </ListGroup.Item>
            <ListGroup.Item> <Card.Title>{i18n.userDetails.subTitleInformationData}</Card.Title> </ListGroup.Item>
            <ListGroup.Item>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnCreatedBy}
                  textboxReadOnly={true}
                  textboxType={'text'}
                  textboxOnSave={() => { }}
                  textboxOnchange={() => { }}
                  textboxValue={valueCreatedBy}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnUpdatedBy}
                  textboxReadOnly={true}
                  textboxType={'text'}
                  textboxOnSave={() => { }}
                  textboxOnchange={() => { }}
                  textboxValue={valueUpdatedBy}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnCreationDate}
                  textboxReadOnly={true}
                  textboxType={'date'}
                  textboxOnSave={() => { }}
                  textboxOnchange={() => { }}
                  textboxValue={valueCreationDate}
                >
                </CommonTextbox>
              </div>
              <div className='puggysoft-textbox-item'>
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnStatus}
                  textboxReadOnly={true}
                  textboxType={'date'}
                  textboxOnSave={() => { }}
                  textboxOnchange={() => { }}
                  textboxValue={valueUpdateDate}
                >
                </CommonTextbox>
              </div>
            </ListGroup.Item>
          </ListGroup>
          {props.children}
        </Card.Body>
      </Card>
    </div >
  );
}

export default UserDetails;
