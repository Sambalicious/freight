import { MdOutlineAirplanemodeActive } from "react-icons/md";
import "../styles/pages/selectservice.scss";
import { useState } from "react";
import styled from "styled-components";

const Tab = styled.div`
  color: #808185;
  overflow-x: auto;
  position: relative;
  cursor: pointer;
  display: flex;

  .active {
    background-color: #015fd1;
    color: #fff;
    /* font-weight: 500;
    font-size: 14px; */
  }
`;

const tabData = [
  {
    name: "Air Freight",
    icon: MdOutlineAirplanemodeActive,
  },
  {
    name: "Sea Freight",
    icon: MdOutlineAirplanemodeActive,
  },
  {
    name: "Inland  (Truck and Barge)",
    icon: MdOutlineAirplanemodeActive,
  },
  {
    name: "Custom Clearance",
    icon: MdOutlineAirplanemodeActive,
  },
];
const SelectService = () => {
  const [activeTab, setActiveTab] = useState({
    name: "Air Freight",
    icon: MdOutlineAirplanemodeActive,
  });
  return (
    <div className="select px-40 pt-10 pb-30 bg-white mt-20">
      <h5 className="font-weight-600 font-size-18">Select a service</h5>

      <Tab className="select__service flex gap-20 align-center">
        {tabData.map((data, i) => {
          const Icon = data.icon;
          return (
            <div
              //   style={{ flex: "1", height: "50px" }}
              key={i}
              className={`select__service__height flex gap-20 justify-between align-center ${
                activeTab.name === data.name ? "active" : ""
              }`}
              onClick={() => setActiveTab(data)}
            >
              <p>{data.name} </p>
              <Icon
                color={activeTab.name === data.name ? "#fff" : "#808185"}
                size={30}
              />
            </div>
          );
        })}
      </Tab>
    </div>
  );
};

export default SelectService;
