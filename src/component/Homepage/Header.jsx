import Carousel from "./Carousel";
import Options from "./Options";
import Navbar from "../Navbar/Navbar";
import Footer from "../common/Footer";

function Header() {
  return (
    <header className=" text-white text-center  w-[full] h-[100vh]">
      <Navbar />
      <h1 className="text-3xl font-bold mt-[2rem]">EnactOn Assignment</h1>
      <div className="my-[2rem]">
        <Carousel />
        <Options />
      </div>
      <Footer />
    </header>
  );
}

export default Header;
