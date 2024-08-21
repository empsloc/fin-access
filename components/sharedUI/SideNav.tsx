"use client"
import { useUser } from '@clerk/clerk-react'
import { DollarSign, LayoutIcon, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

function SideNav() {
  const { isSignedIn, user, isLoaded } = useUser()
  
  const menuItems=[
    {
      id:1,
      name:'Dashboard',
      icon:LayoutIcon,
      path:'/dashboard'
    },
    {
      id:2,
      name:'Finance ',
      icon:DollarSign,
      path:'/dashboard/finance'
    },
  
    {
      id:3,
      name:'Settings',
      icon:Settings,
      path:'/dashboard/settings'
    }
  ]
  const path = usePathname()

  return (
    <div className="border shadow-md h-screen p-4 rounded-xl flex flex-col justify-between">
      <div className=''>
      <Image alt="" src ={"/logo.svg"} width={180} height={50}/>
    <hr className="my-5"></hr>
    {menuItems.map((menu,index)=>(
     <Link href={menu.path}> <h2 className={`flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-secondary cursor-pointer rounded-lg ${path==menu.path&&'bg-secondary '}` }>
      <menu.icon/>
      {menu.name}
      </h2>
      </Link>
    ))}
    </div>

    <div className="flex flex-col gap-3 bottom-5 p-4">
      <Image className="rounded-full" src={user?.imageUrl!} alt="" width={35} height={35}/>
      <div className="">
        <div className="flex text-sm font-bold">
          {user?.firstName} {user?.lastName}
        </div>
        <div className="flex text-sm text-slate-400">
          {user?.username}
        </div>
      </div>
    </div>
    </div>
  )
}

export default SideNav