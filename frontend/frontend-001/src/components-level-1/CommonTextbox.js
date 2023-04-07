import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import { FaPencilAlt } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";
import enumInputType from "./../models/enumInputType";
import "./commonTextbox.css";

function CommonTextbox (props) {
  const {
    textboxLabel,
    textboxReadOnly, // boolean isDisabledEdit true
    textboxType, // text, number, email, date, file
    textboxOnSave,
    textboxOnchange,
    textboxValue,
    textboxSelectOption
  } = props;

  const classNameSection = "puggysoft-common-textbox-section";
  const classNameSectionHidden = "puggysoft-common-textbox-section-hidden";
  const classNameSectionCursor = "puggysoft-common-textbox-section-cursor";
  const classNameSectionPadding = "puggysoft-common-textbox-section-padding";
  const classNameSectionILabel = "puggysoft-common-textbox-label";
  const classNameIcon = classNameSection + " " + classNameSectionPadding + " " + classNameSectionCursor;

  const [isDisabledEdit, setIsDisabledEdit] = useState(true);

  const [classNameEditButton, setClassNameEditButton] =
    useState(
      textboxReadOnly
        ? classNameIcon + " " + classNameSectionHidden
        : classNameIcon
    );
  const [classNameActionsButtons, setClassNameActionsButtons] =
    useState(classNameIcon + " " + classNameSectionHidden);

  const changeEnableActionsButtons = function () {
    setIsDisabledEdit(false);
    setClassNameEditButton(classNameIcon + " " + classNameSectionHidden);
    setClassNameActionsButtons(classNameIcon);
  };

  const changeDisableActionsButtons = function () {
    setIsDisabledEdit(true);
    setClassNameEditButton(classNameIcon);
    setClassNameActionsButtons(classNameSection + " " + classNameSectionHidden);
  };

  const handleEdit = function () {
    changeDisableActionsButtons();
    textboxOnSave();
  };

  return (
    <div className="puggysoft-common-textbox" >
      <div className={classNameSectionILabel}>{textboxLabel}</div>
      <div className={classNameEditButton}
        onClick={changeEnableActionsButtons}><FaPencilAlt size={"1.5rem"} />
      </div>
      <div
        className={classNameActionsButtons}
        onClick={handleEdit}><GrStatusGood size={"1.5rem"} />
      </div>
      <div
        className={classNameActionsButtons}
        onClick={changeDisableActionsButtons} ><AiOutlineCloseCircle size={"1.5rem"} />
      </div>
      <div className={classNameSection + " " + classNameSectionPadding}>
        {textboxType === "select"
          ? <Form.Select
            disabled={isDisabledEdit}
            onChange={textboxOnchange}
            value={textboxValue} >
            {textboxSelectOption.map(function (item) {
              return <option key={item.key} value={item.value}>{item.text}</option>;
            })}
          </Form.Select>
          : <Form.Control
            disabled={isDisabledEdit}
            onChange={textboxOnchange}
            value={textboxValue}
            type={textboxType}
          />}
      </div>
    </div>
  );
}

export default CommonTextbox;

CommonTextbox.propTypes = {
  textboxLabel: PropTypes.string,
  textboxReadOnly: PropTypes.bool,
  textboxType: PropTypes.oneOf([
    enumInputType.TEXT,
    enumInputType.NUMBER,
    enumInputType.EMAIL,
    enumInputType.DATE,
    enumInputType.SELECT,
    enumInputType.FILE
  ]),
  textboxOnSave: PropTypes.func,
  textboxOnchange: PropTypes.func,
  textboxValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  textboxSelectOption: PropTypes.array
};

CommonTextbox.defaultProps = {
  textboxLabel: "Example",
  textboxReadOnly: true,
  textboxType: "text",
  textboxOnSave: () => { },
  textboxOnchange: () => { },
  textboxValue: "Some value",
  textboxSelectOption: []
};
