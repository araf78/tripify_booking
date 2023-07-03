import { useLocation } from "react-router-dom"
import "./listSearch.css"
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const ListSearch = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false);
  return (
    <div  className="listSearch">
      <span data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600" className="lsTitle">Search</span>
      <div className="lsItem">
        <label data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="700" htmlFor="">Destination</label>
        <input data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800" placeholder={destination} type="text" />
      </div>
      <div className="lsItem ">
        <label data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="900" htmlFor="">Check-in Date</label>
        <span data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000" className="lsDate" onClick={() => setOpenDate(!openDate)} >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
          {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
          />}
        </span>
      </div>
      <div className="lsItem">
        <label data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1100" >Options</label>
        <div className="lsOptionItem">
          <span data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200" className="lsOptionTitle">Min Price <small>per night</small></span>
          <input data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1300" min={1} type="number" placeholder="" />
        </div>
        <div className="lsOptionItem">
          <span data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400" className="lsOptionTitle">Max Price <small>per night</small></span>
          <input data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" min={1} type="number" placeholder="" />
        </div>
        <div data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1600" className="lsOptionItem">
          <span className="lsOptionTitle">Adult</span>
          <input min={1} type="number" placeholder={options.adult} />
        </div>
        <div data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1700" className="lsOptionItem">
          <span className="lsOptionTitle">Children</span>
          <input min={0} type="number" placeholder={options.children} />
        </div>
        <div data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1800" className="lsOptionItem">
          <span className="lsOptionTitle">Room</span>
          <input min={1} type="number" placeholder={options.room} />
        </div>
      </div>
      <button className="lsButton">Search</button>
    </div>
  )
}

export default ListSearch