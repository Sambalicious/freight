import styled from "styled-components";
import Burger from "./Burger";
import Input from "./Input";
import { AiOutlineSearch } from "react-icons/ai";

const Nav = styled.nav`
  //width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: #0000b3;
  align-items: center;
  overflow: hidden;

  gap: 20px;
  .logo {
    padding: 15px 0;
  }
`;
const Navbar = (props) => {
  return (
    <>
      <Nav>
        <div className=" flex align-center">
          <div className="flex justify-between align-center gap-30">
            <p className=" logo font-weight-800 text-white font-size-18">
              Send Freight
            </p>
          </div>
        </div>
        <div className="flex-auto">
          <Input
            withUnit
            placeholder={"search"}
            unit={<AiOutlineSearch color={"#fff"} size={20} />}
            background={"inherit"}
            inputColor={"#fff"}
            width={"70%"}
          />
        </div>
        <Burger />
      </Nav>
    </>
  );
};

export default Navbar;
