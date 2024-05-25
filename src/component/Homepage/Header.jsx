import Carousel from "./Carousel";
import Navbar from "../Navbar/Navbar";
import Footer from "../common/Footer";

function Header() {
  return (
    <header className=" text-white text-center  w-[full] h-[100vh]">
      <Navbar />
      <div className="my-[2rem]">
        <Carousel />
        <h1 className="text-3xl font-bold mt-[2rem]">EnactOn Assignment</h1>
      </div>
      <Footer />
    </header>
  );
}

export default Header;
