'use client'
import Hero from '@/components/sharedUI/Hero'
import SideNav from '@/components/sharedUI/SideNav'
import { useEffect, useState } from 'react'
import GlobalApi from '../_services/GlobalApi'
import { AreaChartComponent } from './_components/AreaChart'
import { AreaChartFemale } from './_components/AreaChartFemale'
import { BarChartComponent } from './_components/BarChartComponet'
import { GenderBarChart } from './_components/GenderBarChart'
import { PieChart1 } from './_components/PieChart'
import { PieChartComponent } from './_components/PieChartComponent'

const Dashboard = () => {
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
        <Hero/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        
          <div className=''>
          <AreaChartComponent allDataList={allDataList}/>
            </div>
            <div className=''>
          <BarChartComponent allDataList={allDataList}/>
            </div>
            <div className=''>
          <PieChartComponent allDataList={allDataList}/>
            </div>
            <div className=''>
          <GenderBarChart allDataList={allDataList}/>
            </div>
            <div className=''>
          <AreaChartFemale allDataList={allDataList}/>
            </div>
            <div className=''>
          <PieChart1 allDataList={allDataList}/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard