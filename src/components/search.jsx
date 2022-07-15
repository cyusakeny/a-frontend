import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBell,faMessage,faSearch, faSortDown} from "@fortawesome/free-solid-svg-icons";
const Search =()=>{
    const [value, setBegin] = React.useState(new Date());
    return(
 <div className="h-[9.7%] flex items-center bg-white pl-[3%] space-x-[9%]">
    <div className="flex flex-row">
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
    <div className=" w-[42%] flex flex-row space-x-[3%] items-center">
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