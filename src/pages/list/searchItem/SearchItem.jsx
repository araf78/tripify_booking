import { useNavigate } from "react-router-dom"
import "./searchItem.css"

const SearchItem = () => {
  const navigate = useNavigate()
  const handleAvaility = () => {
    navigate("/hotels/id")
  }
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className="searchItems">
    <img data-aos="flip-left" data-aos-duration="1900"
      src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
      alt=""
      className="siImg"
    />
    <div className="siDesc">
      <span data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1100" className="siTitle">Tower Street Apartments</span>
      <span data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1200" className="siDistance">500m from center</span>
      <span data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1300" className="siTaxiOp">Free airport taxi</span>
      <span data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1400" className="siSubtitle">
        Studio Apartment with Air conditioning
      </span>
      <span data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" className="siFeatures">
        Entire studio • 1 bathroom • 21m² 1 full bed
      </span>
      <span  className="siCancelOp">Free cancellation </span>
      <span  className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500">Excellent</span>
        <button data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500">8.9</button>
      </div>
      <div className="siDetailTexts">
        <span data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" className="siPrice">$112</span>
        <span  className="siTaxOp">Includes taxes and fees</span>
        <button onClick={handleAvaility} className="siCheckButton">See availability</button>
      </div>
    </div>
  </div>
  )
}

export default SearchItem