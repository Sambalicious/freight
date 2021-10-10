import React from "react";
import { _hex2rgba } from "../utils/helpers";
import styled from "styled-components";

const SliderSpan = styled.span`
  background-color: ${() => `${_hex2rgba("#015fd1", 0.09)}`};
  &:before {
    background-color: #015fd1;
  }
`;

const Switch = (props) => {
  const disableLeftText = props.leftText && props.rightText && props.checked;
  const disableRightText = props.leftText && props.rightText && !props.checked;

  return (
    <div className="form__switch">
      {props.leftText && (
        <div
          className="form__switch__left"
          style={{ opacity: disableLeftText ? "0.5" : "" }}
        >
          {props.leftText}
        </div>
      )}
      <label className="switch">
        <input
          type="checkbox"
          checked={props.checked}
          onChange={props.onChange}
        />
        <SliderSpan className="slider round" />
      </label>
      {props.rightText && (
        <div>
          <div
            className="form__switch__right"
            style={{ opacity: disableRightText ? "0.5" : "" }}
          >
            {props.rightText}
          </div>
          <div className="pt-5 text-mute text-small">
            {props.subText && <div>{props.subText}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Switch;
