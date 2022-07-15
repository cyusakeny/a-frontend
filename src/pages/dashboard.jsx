import Charts from "../components/charts";
import ProductsTable from "../components/productsTable";
import Search from "../components/search";
import SideBar from "../components/sidebar";

const Dashboard = ()=>{
return(
   < div className="flex flex-row overflow-y-visible">
    <SideBar/>
    <div className="border-2 h-auto border-black w-full bg-gray-100 ">
        <Search/>
        <Charts/>
        <ProductsTable/>
    </div>
</div>
)
}
export default Dashboard;