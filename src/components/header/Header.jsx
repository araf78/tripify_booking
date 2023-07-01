import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed, faCalendarDays, faCar, faPeopleGroup, faPlane, faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });

  const navigate = useNavigate();

  const handleOption = (name, operation ) => {
    setOptions(prev => {
      return {
        ...prev, 
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1
      }
    })
  }

  const handleSearch = () => {
    navigate("/hotels", {state: {destination, date, options}})
  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" &&
          <>
          <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
          <p className="headerDesc"> Get rewarded for your travels – unlock instant savings of 10% or
            more with a free Tripify account</p>
          <button className="headerBtn">Sing In / Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="searchIcon" />
              <input onChange={e => setDestination(e.target.value)} placeholder="what are you going?" type="text" className="searchInput" required />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="searchIcon" />
              <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
              />}
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPeopleGroup} className="searchIcon" />
              <span onClick={() => setOpenOption(!openOption)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
              {openOption &&
                <div className="options">
                  <div className="optionItem">
                    <span className='optionText'>Adult</span>
                    <div className="optionCounter">
                      <button disabled={options.adult < 1} onClick={() => handleOption("adult", "d")} className='optionCounterButton'>-</button>
                      <span className='optionCounterNumber'>{options.adult}</span>
                      <button onClick={() => handleOption("adult", "i")} className='optionCounterButton'>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className='optionText'>Children</span>
                    <div className="optionCounter">
                      <button disabled={options.children < 1} onClick={() => handleOption("children", "d")} className='optionCounterButton'>-</button>
                      <span className='optionCounterNumber'>{options.children}</span>
                      <button onClick={() => handleOption("children", "i")} className='optionCounterButton'>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className='optionText'>Room</span>
                    <div className="optionCounter">
                      <button disabled={options.room < 1} onClick={() => handleOption("room", "d")} className='optionCounterButton'>-</button>
                      <span className='optionCounterNumber'>{options.room}</span>
                      <button onClick={() => handleOption("room", "i")} className='optionCounterButton'>+</button>
                    </div>
                  </div>
                </div>}
            </div>
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </>}
      </div>
    </div>
  );
};

export default Header;
