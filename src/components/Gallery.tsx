import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = ["/resources/image1.jpg", "/resources/image2.jpg"]; // Ensure correct path

export default function Gallery() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="py-16 px-4 bg-gray-100" id="gallery">
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full max-h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
