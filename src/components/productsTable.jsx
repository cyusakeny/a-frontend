import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faSort, faSortAlphaAsc, faSortAlphaDownAlt, faSortAmountDesc, faSortAsc, faUnsorted } from "@fortawesome/free-solid-svg-icons";
const ProductsTable = () => {
    return (
        <div className=" ml-[3.6%] mr-[1%] pl-[1%] mt-[5%] pt-[1.7%] bg-white">
            <div className="flex flex-row ">
                <span className="font-bold text-lg">Products</span>
                <select className="ml-[59%] rounded-md pl-[1%] pr-[2%] h-8 text-md outline-0" >
                    <option value="">All</option>
                    <option value="">New</option>
                    <option value="">Used</option>
                    <option value="">Unused</option>
                </select>
                <p className=" ml-[4%] bg-black py-[1%] px-[1%] text-white rounded bottom-6">
                  <FontAwesomeIcon icon={faAdd}/>
                  <span>Add Products</span>
                </p>
            </div>
           <div className="flex flex-row w-[100%] mt-[2%] space-x-[24px]">
            <span className="w-[3%] ">No</span>
            <span className="w-[8%] ">Image</span>
            <span className="w-[23%] flex flex-row">Product Name <FontAwesomeIcon icon={faSort}/></span>
            <span className="w-[4%] flex flex-row">Price <FontAwesomeIcon icon={faSort}/></span>
            <span className="w-[8%] ">Status</span>
            <span className="w-[9%] flex flex-row">Sell <FontAwesomeIcon icon={faSort}/></span>
            <span className="w-[6%] flex flex-row">View <FontAwesomeIcon icon={faSort}/></span>
            <span className="w-[11%] flex flex-row ">Earnings <FontAwesomeIcon icon={faSort}/></span>
            </div> 
        </div>
)
}
export default ProductsTable;