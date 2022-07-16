import Charts from "../components/charts";
import ProductsTable from "../components/productsTable";
import Search from "../components/search";
import SideBar from "../components/sidebar";

const Dashboard = ()=>{
return(
   < div className="flex flex-row h-auto ">
    <SideBar/>
    <div className=" overflow-y-visible w-full bg-gray-100 ">
        <Search/>
        <Charts/>
        <ProductsTable/>
    </div>
</div>
)
}
export default Dashboard;