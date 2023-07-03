import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import "./hotel.css"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Hotel = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1663126312373-b2d5264c2edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpenSlide(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber

    if(direction === 'l'){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {openSlide && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpenSlide(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("l")} />
          <div className="imageWrapper">
            <img src={photos[slideNumber].src} alt="" className="image"/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button data-aos="flip-right" data-aos-easing="linear"
        data-aos-duration="1500" className="bookNow ">Reserve or Book Now!</button>
          <span data-aos="fade-down-right" data-aos-easing="linear"
        data-aos-duration="1300" className="hotelTitle">Tower Street Apartments</span>
          <div data-aos="fade-down-right" data-aos-easing="linear"
        data-aos-duration="1400" className="hotelAddress  ">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span data-aos="fade-down-right" data-aos-easing="linear"
        data-aos-duration="1500" className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span data-aos="fade-down-right" data-aos-easing="linear"
        data-aos-duration="1600"className="hotelPriceHighlight ">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img data-aos="flip-left" data-aos-easing="linear"
        data-aos-duration="1500" 
                  onClick={() => handleOpen(i)}
                  src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelText">
              <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1600">Stay in the heart of city</h1>
              <p  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1700">Upon arrival, you will be greeted by our warm and attentive staff, who will ensure that every aspect of your stay is perfect. Our spacious and tastefully decorated rooms and suites provide a serene retreat, equipped with modern amenities and plush furnishings to cater to your every need. Sink into the comfort of our luxurious beds, indulge in the finest linens, and enjoy the convenience of state-of-the-art technology at your fingertips.</p>
            </div>
            <div data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1800" className="hotelPrice">
              <span className="hpTitle">Perfect for a night stay!</span>
              <span className='hpDesc'>Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!</span>
              <span>
                <b>$945</b> (9 nights)
              </span>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <div className="footerHotel">
      <Footer />
      </div>
    </div>
  )
}

export default Hotel