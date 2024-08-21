"use client"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"

const Hero = () => {
  const { isSignedIn, user, isLoaded } = useUser()
  return (
    <div className="w-full bg-secondary p-5 flex items-center rounded-xl">
        <div className=""><Image src="/hero.png" alt="" width={100} height={100}/> </div>
        <div className="flex flex-col">
              <div className="font-semibold text-lg">  Hello {user?.username}, Welcome</div>
              <div className="font-medium text-sm text-gray-700">Your onestop solution for visualising your financial data through safe and accurate representation</div>
            </div>
    </div>
  )
}

export default Hero