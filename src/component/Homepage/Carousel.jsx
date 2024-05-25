import { useState, useEffect } from "react";
import Image1 from "../../assets/carousel1.webp";
import Image2 from "../../assets/carousel2.webp";
import Image3 from "../../assets/carousel3.webp";
import Image4 from "../../assets/carousel4.webp";
import { Link } from "react-router-dom";

function Carousel() {
  const [image, setImage] = useState(0);
  const images = [Image1, Image2, Image3, Image4];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [image]);

  return (
    <>
      <div className="w-full">
        <Link to={"/store"}>
          <img
            src={images[image]}
            alt={`Image ${image + 1}`}
            className="w-full lg:h-[40rem] object-contain md:object-cover md:w-screen md:h-[25rem] sm:h-[19rem]"
          />
        </Link>
      </div>
    </>
  );
}

export default Carousel;
