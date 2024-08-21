import Hero from '@/components/sharedUI/Hero'
import SideNav from '@/components/sharedUI/SideNav'
import { AreaChartComponent } from './_components/AreaChart'
import { BarChartComponent } from './_components/BarChartComponet'
import { PieChartComponent } from './_components/PieChartComponent'

const Dashboard = () => {
  return (
    <div className='gap-5 grid md:grid-cols-3'>
         <div className="md:col-span-1 hidden md:block">
      <SideNav/>
      </div>
      <section className="col-span-3 md:col-span-2 flex flex-col gap-5">
        <Hero/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        
          <div className=''>
          <AreaChartComponent/>
            </div>
            <div className=''>
          <BarChartComponent/>
            </div>
            <div className=''>
          <PieChartComponent/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard