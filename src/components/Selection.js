import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import "../styles/pages/selection.scss";
import { MdLocationOn } from "react-icons/md";
import Input from "./Input";
const Selection = () => {
  return (
    <div className="selection">
      <AiOutlineInfoCircle />
      <div className="selection__flex gap-30 align-center w-100 mt-5">
        <div className="selection__import flex">
          <div className="pointer">Import</div>
          <div className="pointer">Export</div>
        </div>
        <div className="selection__input">
          <Input
            placeholder={"City or port"}
            withIconText={
              <div className="flex align-center">
                <MdLocationOn size={20} />
                <div>From</div>
              </div>
            }
            background={"#fafafa"}
          />
        </div>

        <div>
          <Input
            placeholder={"City or Port"}
            withIconText={
              <div className="flex align-center">
                <MdLocationOn size={20} />
                <div>To</div>
              </div>
            }
            background={"#fafafa"}
          />
        </div>
      </div>
      <div className="selection__flex gap-30 align-center mt-30">
        <div className="selection__flex__auto">
          <Input
            placeholder={"Ready Date"}
            icon={<BsFillCalendar2DateFill size={15} background={"#fafafa"} />}
          />
        </div>

        <div className="selection__flex__auto">
          <Input placeholder={"Incoterms"} />
        </div>
        <div className="selection__flex__auto">
          <Input placeholder={"Total Cargo value"} background={"#fafafa"} />
        </div>
      </div>
    </div>
  );
};

export default Selection;
