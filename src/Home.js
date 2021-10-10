import CargoDetails from "./components/CargoDetails";
import Selection from "./components/Selection";
import SelectService from "./components/SelectService";
import Services from "./components/Services";
import "./styles/pages/home.scss";
import { MdOutlineArrowBack } from "react-icons/md";
import Navbar from "./components/Navbar";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home__header">
        <div className="flex gap-30">
          <MdOutlineArrowBack className="mt-15" color={"#000"} size={30} />
          <div>
            <p className="font-weight-700 font-size-16">New Bookings</p>
            <p className="text-mute">
              Fill in the information below to get a quote or create a new
              bookings
            </p>
          </div>
        </div>
      </div>
      <div className="home__other">
        <SelectService />
        <Selection />
        <CargoDetails />
        <Services />
      </div>
    </div>
  );
};

export default Home;
