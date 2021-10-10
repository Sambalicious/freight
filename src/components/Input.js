import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="relative">
      {props.label && <label className="form__label">{props.label}</label>}
      <div
        style={{
          position: "relative",
          width: props.width ? props.width : "",
        }}
        className="form__wrapper"
      >
        <input
          className="form__input"
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.changeInput || props.inputChange || props.onChange}
          style={{
            padding:
              props.type !== "color"
                ? props.size === "tiny"
                  ? "1px 6px"
                  : props.size === "small"
                  ? "6px 12px"
                  : ""
                : "",

            paddingLeft: props.withIconText
              ? "65px"
              : props.icon
              ? "35px"
              : props.currency
              ? "25px"
              : "",
            marginBottom: props.withMargin ? "20px" : "",
            marginTop: "0px",
            //paddingRight: props.withUnit ? "35px" : "",
            border: props.errorText
              ? "1px solid red"
              : props.successText
              ? "1px solid #5CB85C"
              : props.warningText
              ? "1px solid #ff9966"
              : "",
            /*
              use font size of 16px for input fields on ios devices to 
              prevent page zooming on input focus
            */
            borderRadius: props.borderRadius ? props.borderRadius : "",
            fontSize: "",

            background: props.background ? props.background : "inherit",

            color: props.inputColor ? props.inputColor : "#55595c",
            //width: props.width ? props.width : "100%",
          }}
          ref={ref}
        />
        {props.icon && (
          <span
            className="input-icon flex"
            style={{
              position: "absolute",
              transform: "translateY(-50%)",
              top: "50%",
              paddingLeft: "10px",
            }}
          >
            {props.icon}
          </span>
        )}
        {props.withIconText && (
          <span
            className="input-icon flex"
            style={{
              position: "absolute",
              transform: "translateY(-50%)",
              top: "50%",
              paddingLeft: "10px",
            }}
          >
            {props.withIconText}
          </span>
        )}
        {props.unit && (
          <span
            className="input-icon flex"
            style={{
              position: "absolute",
              transform: "translateY(-50%)",
              top: "50%",
              paddingLeft: "10px",
              right: "10px",
              color: "#808185",
            }}
          >
            {props.unit}
          </span>
        )}
      </div>
    </div>
  );
});

export default Input;
