import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
    <h1 data-aos="fade-down"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="1700" className="mailTitle">Save time, save money!</h1>
    <span data-aos="fade-down"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="1900" className="mailDesc">Sign up and we'll send the best deals to you</span>
    <div className="mailInputContainer">
      <input data-aos="fade-right"
     data-aos-duration="2100" type="text" placeholder="Your Email" />
      <button data-aos="fade-left"
     data-aos-duration="2100">Subscribe</button>
    </div>
  </div>
  )
}

export default MailList