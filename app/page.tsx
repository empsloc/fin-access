"use client"
import Hero from "@/components/sharedUI/Hero";
import SideNav from "@/components/sharedUI/SideNav";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    
    redirect('/dashboard')
   
  }, [])
  return (
    <main className=" gap-5 grid md:grid-cols-3">
      <div className="md:col-span-1 hidden md:block">
      <SideNav/>
      </div>
      <section className="col-span-3 md:col-span-2">
        <Hero/>
      </section>

    </main>
  );
}
