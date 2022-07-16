const Products = ()=>{
    return(
        <div className="flex flex-row w-[100%]  h-[38px] space-x-[40px] border-b-[1px] mb-[2%]">
        <span className="w-[3%] ">1</span>
        <span className="w-[8%] relative bottom-4 right-3 ">
            <img 
src="https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
             alt="" className="w-[50px] h-[50px]"/>
        </span>
        <span className="w-[23%] flex flex-row">Black T-shirt </span>
        <span className="w-[6%] flex flex-row">$46.42 </span>
        <span className="w-[9%] bg-green-400/60 text-green-400/80 justify-center flex 
        h-[24px]
        ">Available</span>
        <span className="w-[9%] flex flex-row">128 </span>
        <span className="w-[6%] flex flex-row">12,380 </span>
        <span className="w-[11%] flex flex-row ">$5,954</span>
        </div> 
    )
}
export default Products;