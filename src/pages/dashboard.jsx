import React from "react";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Charts from "../components/charts";
import ProductsTable from "../components/productsTable";
import Search from "../components/search";
import SideBar from "../components/sidebar";
import DropDown from "../components/dropdown";
const Dashboard = ()=>{
    const [Status, setStatus] = React.useState(true);
    if(Status){
return(
   < div className=" flex flex-row h-auto bg-gray-100 w-[183.5%] md:w-auto">
    <SideBar/>
    <div className="overflow-y-visible  w-auto md:w-[100%]  bg-gray-100 ">
        <span className="md:hidden cursor-pointer text-gray-400 relative top-[50px]"
        onClick={()=>setStatus(!Status)}
        >
            <FontAwesomeIcon icon={faList} className="h-[30px] w-[30px]"/></span>
            <Search/>
        <Charts/>
        <ProductsTable/>
    </div>
</div>
)
}
else{
    return (
        < div className="  bg-black w-[100%] ">
            <span className="md:hidden cursor-pointer text-gray-600 absolute top-[1.5px] left-8"
            onClick={()=>setStatus(!Status)}
            >
                <FontAwesomeIcon icon={faList} className="h-[30px] w-[30px]"/></span>
            <DropDown/>
    </div>
    )
}
}
export default Dashboard;