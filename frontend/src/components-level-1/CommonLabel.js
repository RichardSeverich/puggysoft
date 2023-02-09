import React from "react";
import PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { AiFillQuestionCircle } from "react-icons/ai";
import "./common-label.css";
function CommonQuestionMark ({
  leftIcon,
  label,
  questionMarkEnable,
  questionMarkTooltipLabel,
  questionMarkTooltipPlacement
}) {
  return (
    <div className="puggysoft-common-label">
      <div className="puggysoft-common-label-section-left-icon">
        {leftIcon && leftIcon}
      </div>
      <div className="puggysoft-common-label-section-content">
        {label && label}
      </div>
      <div className="puggysoft-common-label-section-question-mark">
        {questionMarkEnable && <OverlayTrigger
          trigger="hover" // 'hover' | 'click' | 'focus'
          placement={questionMarkTooltipPlacement}
          delay={{ show: 60, hide: 256 }}
          overlay={<Tooltip id="tooltip">
            {questionMarkTooltipLabel && questionMarkTooltipLabel}
          </Tooltip>}
        >
          <div className="puggysoft-common-label-question-mark">
            <AiFillQuestionCircle />
          </div>
        </OverlayTrigger>}
      </div>
    </div>
  );
}

export default CommonQuestionMark;

CommonQuestionMark.propTypes = {
  leftIcon: PropTypes.node,
  label: PropTypes.string,
  questionMarkEnable: PropTypes.bool,
  questionMarkTooltipLabel: PropTypes.string,
  questionMarkTooltipPlacement: PropTypes.oneOf(["top", "right", "bottom", "left"])
};

CommonQuestionMark.defaultProps = {
  leftIcon: undefined,
  label: undefined,
  questionMarkEnable: false,
  questionMarkTooltipLabel: undefined,
  questionMarkTooltipPlacement: "right"
};
