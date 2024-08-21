"use client"
import GlobalApi from "@/app/_services/GlobalApi"
import SideNav from "@/components/sharedUI/SideNav"
import { useEffect, useState } from "react"
import DataList from "./_components/DataList"

const Finance = () => {
  const [allDataList,setAllDataList] = useState([])
  useEffect(()=>{
    GetAllData()
  },[])
  const GetAllData=()=>{
    GlobalApi.GetAllData().then((resp:any)=>{
      setAllDataList(resp.data)
      
    })
  }
  return (
    <div className='gap-5 grid md:grid-cols-3'>
    <div className="md:col-span-1 hidden md:block">
 <SideNav/>
 </div>
 <section className="col-span-3 md:col-span-2 flex flex-col gap-5">
 <div className="font-semibold">Data at one place</div>
   <div className=''>
      <DataList allDataList={allDataList} refreshData={GetAllData}/>
    
   </div>
 </section>
</div>
  )
}

export default Finance