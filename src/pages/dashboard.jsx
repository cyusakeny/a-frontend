import Charts from "../components/charts";
import ProductsTable from "../components/productsTable";
import Search from "../components/search";
import SideBar from "../components/sidebar";

const Dashboard = ()=>{
return(
   < div className=" flex flex-row h-auto bg-gray-100 w-[183.5%] md:w-auto">
    <SideBar/>
    <div className="overflow-y-visible  w-auto md:w-[100%]  bg-gray-100 ">
        <Search/>
        <Charts/>
        <ProductsTable/>
    </div>
</div>
)
}
export default Dashboard;