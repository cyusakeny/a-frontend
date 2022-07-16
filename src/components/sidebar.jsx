import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faMap,faHome,faShoppingCart,faShoppingBasket ,faArrowDown,faReceipt, faPeopleGroup, faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const SideBar =({ visible = true })=>{
    const[isOpen,setIsOpen]=React.useState(false);
    const handleClick=()=>{
        setIsOpen(!isOpen);
    }
    const showMenu=()=>{
        if(isOpen){
            return (
                <div className="ml-[23.7%] -mt-[10%]  space-y-[6%] h-auto w-[65%] pt-[2%] flex flex-col  mb-[12%]
                text-gray-600
                ">
                   <div className="flex flex-row w-[86%]  space-x-[9%] ">
                   <p className="w-[90%]">Products</p> 
                   <input type="checkbox" 
                   id="topping" name="topping" value="Paneer" className="
                   "/>
                   </div>
                   <div className="flex flex-row w-[86%] space-x-[9%] ">
                   <p className="w-[90%]">Plans</p> 
                   <input type="checkbox" 
                   id="topping" name="topping" value="Paneer" className="
                   "/>
                   </div>
                </div>
            )
        }
        return null;
    }
return(
    <div className={`${visible?'visible':'invisible'} flex-col bg-black w-[22%] top-0 left-0 sticky justify-center  h-screen
    `}> 

    {/* <span className="rounded-full border-[1px] border-gray-100 p-[2%]"> <FontAwesomeIcon icon={faArrowRight} 
    className="text-gray-300"/>
     </span> */}
    
    <div className=" h-12 flex items-center mb-[12%] justify-center ml-[1.7%]"  
    
    >
        <span className="font-mono text-base tracking-normal font-bold text-gray-100 
            border-b-[0.5px] border-b-gray-100  pb-2  ">
            <FontAwesomeIcon icon={faMap} className="text-3xl"/> A-MANAGEMENT</span> 
    </div>
    <div className="ml-[11.2%] pl-[5%] h-8 w-[75%] pt-[2%] flex items-center mb-[12%] rounded-lg
     text-gray-700 hover:bg-gray-700 hover:text-white ">
        <span className="font-mono text-base tracking-normal font-thin
            border-b-gray-100  pb-2 ">
    <Link to=""> <FontAwesomeIcon icon={faHome}/> Home </Link>
        </span>
        
    </div>
    <div className="ml-[11.2%] pl-[5%] h-8 w-[75%] pt-[2%] flex items-center mb-[12%] rounded-lg
     text-gray-700 hover:bg-gray-700 hover:text-white ">
        <span className="font-mono text-base tracking-normal font-thin
            border-b-gray-100  pb-2 ">
    <Link to=""> <FontAwesomeIcon icon={faShoppingCart}/> Sales </Link>
        </span>
        
    </div>
    <div className="ml-[11.2%] pl-[5%] h-8 w-[75%] pt-[2%] flex items-center mb-[12%] rounded-lg
     text-gray-700 hover:bg-gray-700 hover:text-white ">
        <span className="font-mono text-base tracking-normal font-thin
            border-b-gray-100  pb-2 ">
    <Link to="" className="pr-4"> <FontAwesomeIcon icon={faShoppingBasket}/> Products </Link>
    <FontAwesomeIcon icon={faArrowDown} onClick={handleClick} />
        </span>
        
    </div>
    {
        showMenu()
    }
    <div className="ml-[11.2%] pl-[5%] h-8 w-[75%] pt-[2%] flex items-center mb-[12%] rounded-lg
     text-gray-700 hover:bg-gray-700 hover:text-white ">
        <span className="font-mono text-base tracking-normal font-thin
            border-b-gray-100  pb-2 ">
    <Link to=""> <FontAwesomeIcon icon={faList}/> Products </Link>
        </span>
    </div>
    <div className="ml-[11.2%] pl-[5%] h-8 w-[75%] pt-[2%] flex items-center mb-[12%] rounded-lg
     text-gray-700 hover:bg-gray-700 hover:text-white ">
        <span className="font-mono text-base tracking-normal font-thin
            border-b-gray-100  pb-2 ">
    <Link to=""> <FontAwesomeIcon icon={faReceipt}/> Reports </Link>
        </span>
        
    </div>
    <div className="ml-[11.2%] pl-[5%] h-8 w-[75%] pt-[2%] flex items-center mb-[12%] rounded-lg
     text-gray-700 hover:bg-gray-700 hover:text-white ">
        <span className="font-mono text-base tracking-normal font-thin
            border-b-gray-100  pb-2 ">
    <Link to=""> <FontAwesomeIcon icon={faPeopleGroup}/> Customers </Link>
        </span>
        
    </div>
    </div>
);

}
export default SideBar;