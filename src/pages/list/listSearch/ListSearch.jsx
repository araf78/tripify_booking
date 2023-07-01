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
    <div className="listSearch">
        <span className="lsTitle">Search</span>
        <div className="lsItem">
            <label htmlFor="">Destination</label>
            <input disabled placeholder={destination} type="text" />
        </div>
        <div className="lsItem ">
            <label htmlFor="">Check-in Date</label>
            <span className="lsDate" onClick={()=> setOpenDate(!openDate)} >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
            {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />}
            </span>
        </div>
        <div className="lsItem">
          <label >Options</label>
          <div className="lsOptionItem">
            <span className="lsOptionTitle">Min Price <small>per night</small></span>
            <input min={1} type="number" placeholder="" />
          </div>
          <div className="lsOptionItem">
            <span className="lsOptionTitle">Max Price <small>per night</small></span>
            <input min={1} type="number" placeholder="" />
          </div>
          <div className="lsOptionItem">
            <span className="lsOptionTitle">Adult</span>
            <input min={1} type="number" placeholder={options.adult} />
          </div>
          <div className="lsOptionItem">
            <span className="lsOptionTitle">Children</span>
            <input min={0} type="number" placeholder={options.children} />
          </div>
          <div className="lsOptionItem">
            <span className="lsOptionTitle">Room</span>
            <input min={1} type="number" placeholder={options.room} />
          </div>
        </div>
        <button className="lsButton">Search</button>
    </div>
  )
}

export default ListSearch