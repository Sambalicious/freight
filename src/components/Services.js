import { useState } from "react";
import Switch from "./Switch";
import "../styles/pages/services.scss";

const Services = () => {
  const [right, setRight] = useState(false);
  return (
    <div className="service mb-20">
      <h5 className=" font-weight-600 font-size-18">Additional services</h5>

      <div>
        <div className="flex flex-wrap justify-between align-center">
          <div className="service__switch">
            <Switch
              checked={!right}
              onChange={() => setRight(!right)}
              rightText={"Export Forwarding"}
              subText={"We handle customs clearance and documentation"}
            />{" "}
          </div>

          <div className="service__switch">
            <Switch
              checked={!right}
              onChange={() => setRight(!right)}
              rightText={"Import Custom Clearance"}
              subText={
                "We handle customs clearance and regulatory requirements."
              }
            />{" "}
          </div>
          <div className="service__switch">
            <Switch
              checked={!right}
              onChange={() => setRight(!right)}
              rightText={"Cargo Insurance"}
              subText={
                "Protect your cargo from logistics risks up to its full value"
              }
            />{" "}
          </div>
          <div className="service__switch">
            <Switch
              checked={!right}
              onChange={() => setRight(!right)}
              rightText={"Transport / Delivery"}
              subText={"We Deliver the cargo to your door step from the ports"}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
