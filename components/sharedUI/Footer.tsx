import { Github, InstagramIcon, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    
      <div className="mt-24 mb-5">
        <div className="grid lg:grid-cols-10 md:grid-cols-8">
          <div className="lg:col-span-7 md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 relative">
                <Image src="/ayanokoji-modified.png" alt="" fill />
              </div>
              <div className="text-xl font-bold">Fewbe</div>
            </div>

            <div className="md:mr-20">
            This website is currently under construction and is being tested for optimal performance. We apologize for any inconvenience caused during this testing phase. Thank you for your patience and understanding.
            </div>

            <div className="">
              <div className="socialMediaIcons flex gap-5">
                <Github />
                <InstagramIcon />
                <Twitter />
                <Youtube></Youtube>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 lg:col-span-3 mt-7 ">
            <div className="grid grid-cols-5 gap-10 md:grid-cols-3">
              <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
                <div className="font-semibold">Links</div>
                <div className="flex justify-start items-start">Homepage</div>
                <div className="flex justify-start items-start">Data</div>
                <div className="flex justify-start items-start">About</div>
                <div className="flex justify-start items-start">Contact</div>
              
              </div>
              <div className="flex flex-col gap-3 items-start md:items-start col-span-1 md:col-span-1">
                <div className="font-semibold">Cities</div>
                <div className="">Pune</div>
                <div className="">Nagpur</div>
                <div className="">Mumbai</div>
                <div className="">Delhi</div>
              
              </div>
              <div className="flex flex-col gap-3 items-end md:items-start col-span-2 md:col-span-1">
                <div className="font-semibold">Social</div>
                <div className="">Facebook</div>
                <div className="">Instagram</div>
                <div className="">Github</div>
                <div className="">Youtube</div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default Footer;
