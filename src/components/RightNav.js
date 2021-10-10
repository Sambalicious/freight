import React from "react";
import styled from "styled-components";
import { _hex2rgba } from "../utils/helpers";

const Button = styled.button`
  color: #fff;
  border: 1px solid #fff;
  text-transform: capitalize;
  padding: 0px 30px;
  background: ${(props) => (props.color ? props.color : "inherit")};
  border-radius: 6px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.color ? _hex2rgba(props.color, 0.9) : _hex2rgba("#0000b3", 0.6)};
  }

  @media (max-width: 768px) {
    padding: 5px 30px;
    margin: 0 40px;
    z-index: 0;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  height: 40px;
  a {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0000b3;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 20%;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Button>Request Quote</Button>
      <Button color="#00ff80">New Booking</Button>
    </Ul>
  );
};

export default RightNav;
