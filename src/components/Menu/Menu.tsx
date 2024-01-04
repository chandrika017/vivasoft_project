import React from 'react';
import Directorysettings from "@/assets/icons/directorysettings";
import Accountsettings from "@/assets/icons/accountsettings";
import Visitsettings from "@/assets/icons/visitsettings";
import "./Menu.css";

const Menu = () => {
    return (
    <div className="md:flex flex-row gap-x-2 min-h-full text-textColor">
        {/* Menu Bar */}
        <div className=" bg-white px-6 py-8 rounded-md ">
            <p className="text-xl font-medium">Menu</p>
            <div className="flex flex-col mt-10 gap-2">

            <a href="#"className="flex text-left text-lg bg-backgroundColor px-4 py-3 rounded-sm" >
            <span className="align-middle mr-5">
            <Accountsettings />
                </span>
            Account Settings
            </a>
            <hr />
            <a href="#"className="flex text-left text-lg  px-4 py-3 rounded-sm hover:bg-backgroundColor">
            <span className="align-middle mr-5 pt-1">
            <Directorysettings />
                </span>
            Directory Settings
            </a>
            <hr></hr>

            <a href="#"className=" flex  text-left text-lg px-4 py-3 rounded-sm hover:bg-backgroundColor cursor-pointer"type="a" >
            <span className=" align-middle mr-5 pt-1">
            <Visitsettings />
            </span>
            Purpose List
          </a>
      

            
        </div>
</div>
    </div>
    );
  };
                
               
export default Menu;






