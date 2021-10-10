import { useState } from "react";
import "../styles/pages/cargodetails.scss";

import styled from "styled-components";
import Switch from "./Switch";
import Input from "./Input";
const tab = [
  { name: "Total Dimension", id: 1 },
  { id: 2, name: "Package Details" },
];

const Tab = styled.div`
  display: flex;
  background: #fafafa;
  max-width: 300px;
  border-radius: 6px;
  align-items: center;
  font-weight: 600;
  color: #878585;
  font-size: 14px;

  // border: 0.5px solid #878585;
  padding: 5px 0;
  // justify-content: space-around;

  & > div {
    width: 50%;
    text-align: center;
    padding: 10px;
  }
  .active {
    color: #015fd1;
    background: #fff;

    border-radius: 6px;
    border: 0.5px solid #878585;
    /* font-weight: 500;
    font-size: 14px; */
  }
`;

const CargoDetails = () => {
  const [activeTab, setActiveTab] = useState({
    name: "Total Dimension",
    id: 1,
  });
  return (
    <div className="cargo">
      <div className="cargo__flex">
        <div className="cargo__flex__auto">
          <h5 className="pb-20 font-weight-600 font-size-18">Cargo Details</h5>

          <Tab>
            {tab.map((data, i) => (
              <div
                key={i}
                className={`pointer ${
                  activeTab.name === data.name ? "active" : ""
                } `}
                onClick={() => setActiveTab(data)}
              >
                {data.name}{" "}
              </div>
            ))}
          </Tab>

          <div className="flex mt-30 align-center gap-50">
            <div className="mb-30">
              <Input label={"Total Volume"} withUnit unit={"cbm"} />
            </div>
            <div className="mb-30">
              <Input label={"Total Weight"} withUnit unit={"Kg"} />
            </div>
          </div>
        </div>

        <div className="my-30 cargo__flex__auto">
          <Switch rightText={"Dangerous Cargo(ex. Chemicals, Battery)"} />
        </div>
      </div>
    </div>
  );
};

export default CargoDetails;
