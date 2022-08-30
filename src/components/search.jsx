import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBell,faMessage,faSearch, faSortDown} from "@fortawesome/free-solid-svg-icons";
const Search =()=>{
    const [value, setBegin] = React.useState(new Date());
    return(
 <div className="h-[120px] md:h-[60px] flex flex-col md:flex-row w-full items-start 
  md:items-center bg-white 
 pl-[0%] md:pl-[3%]  md:space-x-[9%]">
    <div className=" flex flex-row  pb-[10px] md:pb-[0px]  mt-[15px] md:mt-[0px]">
    <span className="text-gray-400 bg-gray-200 rounded-l-md border-r-[1px] p-[2%]">
        <FontAwesomeIcon icon={faSearch} className="text-base"/>
        </span>
<input type="text" name="search" id="search" placeholder="Search" 
className="rounded-r-md text-base bg-gray-200 outline-0 pl-[2%]"/>
    </div>
    <div className="">
    <input
            type="date"
            name="date"
            id="date"
            value={value}
            className="outline-0 p-[3%] w-[90%] bg-gray-200 rounded text-gray-400"
            onChange={(e) => {
              setBegin(e.target.value);
            }}
          />
    </div>
    <div className=" w-[42%] flex flex-row space-x-[3%]
     items-center ml-[50%] md:ml-[0px] mt-[-90px] md:mt-[0px]">
     <FontAwesomeIcon icon={faMessage} className="text-gray-400 text-lg"/>
     <FontAwesomeIcon icon={faBell} className="text-gray-400 text-lg"/>
     <p className="flex flex-row w-[90%] items-center space-x-[4%] pl-[10%]">
        <span className="text-gray-400 text-base">Hypebeast Store</span>
        <p className="rounded-full text-lg text-white bg-[#7A121B] h-10 w-[10%] flex items-center justify-center">
                H
        </p>
        <span className="justify-center items-center">
        <FontAwesomeIcon icon={faSortDown} className="text-gray-400 bottom-8 text-2xl -mt-1"/>
        </span> 
            </p>
    </div>
 </div>
    )
}
export default Search;