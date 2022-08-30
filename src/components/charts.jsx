import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LineChart,CartesianGrid,XAxis,YAxis,Legend,Tooltip,Line,ResponsiveContainer } from "recharts";
import { faSquare ,faShoppingBasket, faList } from "@fortawesome/free-solid-svg-icons";
const Charts = () => {
    const data = [
        { name: "0", uv: 0 , pv:0},
        { name: "Mon 4", pv:"8k", uv: "30k" },
        { name: "Tue 5", pv:"6k", uv: "40k" }
        ,{ name: "Wed 6", pv:"50k", uv: "50k" }
        ,{ name: "Thur 7", pv:"13k", uv: "10k"}
        ,{ name: "Fri 8", pv:"8.7k", uv: "20k"}
        ,{ name: "Sat 9", pv:"7.5k", uv: "25k"}
         ,{ name: "Sun 10", pv:"5k", uv: "15k"}
    ]
return(
<div className="mt-[1%] space-y-[23px] md:space-y-[0px] md:ml-[3%] bg-gray-100 
pt-[3%] space-x-[2.5%] md:pr-[2%] flex flex-col md:flex-row ">
  <div className="flex flex-col bg-white w-[70%] pl-[2%] ">
<span className=" ml-[3.5%] text-[#7A121B] text-md mt-[3%]">
Revenue
</span>
<div className="flex flex-row items-start self-end mr-[2%] space-x-8 items-center justify-center
 w-[70%]">
  <p className="flex flex-row space-x-1 ">
  <FontAwesomeIcon icon={faSquare} className=" h-[17px] w-[17px] text-[#FF6F0B]
  "/>
<span className="text-base text-sm">Total Earn</span>
</p>
<p className="flex flex-row space-x-1">
  <FontAwesomeIcon icon={faSquare} className="
h-[17px] w-[17px] text-[#011C40]
"/>
<span className="text-sm">Total Views</span>
</p>
</div>
<span className="ml-[3.5%] text-md mb-[2%] my-[-1.5%]">$21,000,000 <span className="
text-[#12755B]
">(+ 81230)</span></span>
<ResponsiveContainer width={"100%"} height="100%">
  <LineChart
layout="horizontal"
          width={"100%"}
          height={"100%"}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left:-15,
            bottom: 5,
          }}
          style={
            {
              backgroundColor: "white",
              fontSize: "12px",
            }
          }
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" fill="white"/>
          <XAxis dataKey="name" stroke="black"/>
          <YAxis stroke="black" type="category"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#011C40" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#FF6F0B" />
        </LineChart>
        </ResponsiveContainer>
  </div>
  <div className="w-[40%] text-white flex flex-col space-y-[11%] ">
  <div className=" bg-[#E6342B]/90 w-[100%] h-[47%] py-[12%] rounded-xl pl-[8%] pr-[1%] flex flex-col">
    <span className="
    relative left-[74%] bg-white/40 py-[3%]  w-[16%] justify-center flex items-center
    ">
    <FontAwesomeIcon icon={faShoppingBasket} className="text-gray-200 text-md text-2xl
"/>
    </span>
      <span className="text-base mt-[-17%]">Sales</span>
      <span className="mt-[8%] text-xl font-bold">$120</span>
      <span className="mt-[6%] text-sm">*Updated every order success</span>
    </div>
    <div className=" bg-white/90 w-[100%] h-[47%] py-[12%] rounded-xl pl-[8%] pr-[1%] flex flex-col">
    <span className="
    relative left-[74%] bg-white/40 py-[3%]  w-[16%] justify-center flex items-center
    ">
    <FontAwesomeIcon icon={faList} className="text-black text-md text-2xl
"/>
    </span>
      <span className="text-base mt-[-17%] text-black">Total Orders</span>
      <span className="mt-[8%] text-xl font-bold text-black">120</span>
      <span className="mt-[6%] text-sm text-black">
        <span className="text-[#12755B] mr-1">(+2.18%)</span>More sales than usual</span>
    </div>
  </div>


  <div className="w-[40%] text-white flex flex-col space-y-[11%] ">
  <div className=" bg-white/90 w-[100%] h-[47%] py-[12%] rounded-xl pl-[8%] pr-[1%] flex flex-col">
    <span className="
    relative left-[74%] bg-white/40 py-[3%]  w-[16%] justify-center flex items-center
    ">
    <FontAwesomeIcon icon={faList} className="text-black text-md text-2xl
"/>
    </span>
      <span className="text-base mt-[-17%] text-black">Total Orders</span>
      <span className="mt-[8%] text-xl font-bold text-black">120</span>
      <span className="mt-[6%] text-sm text-black">
        <span className="text-[#12755B] mr-1">(+2.18%)</span>More sales than usual</span>
    </div>
    <div className=" bg-white/90 w-[100%] h-[47%] py-[12%] rounded-xl pl-[8%] pr-[1%] flex flex-col">
    <span className="
    relative left-[74%] bg-white/40 py-[3%]  w-[16%] justify-center flex items-center
    ">
    <FontAwesomeIcon icon={faList} className="text-black text-md text-2xl
"/>
    </span>
      <span className="text-base mt-[-17%] text-black">Total Orders</span>
      <span className="mt-[8%] text-xl font-bold text-black">120</span>
      <span className="mt-[6%] text-sm text-black">
        <span className="text-[#12755B] mr-1">(+2.18%)</span>More sales than usual</span>
    </div>
  </div>
</div>
)
}
export default Charts;