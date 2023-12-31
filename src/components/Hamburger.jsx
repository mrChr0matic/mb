import React,{useState} from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router-dom";

const NavMobile = () => {
    const [isOpen, setOpen] = useState(false);
    const navigate=useNavigate();

    const goToAddMovie=()=>
    {
      navigate("/addmovie");
    }

    const goToDeleteMovie=()=>
    {
      navigate("/deletemovie");
    }

    const goToVerify=()=>
    {
      navigate("/verify");
    }

    const goToUpdateMovie=()=>
    {
      navigate("/updatemovie");
    }
  
    const goToEditors=()=>
    {
      navigate("/addeditors");
    }
    
    return (
      <div className="absolute top-0 right-0 z-50 ">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} className="transition ease-in-out duration-300"/>
        {isOpen && (
          <div className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-gblack border-b border-b-white/20">
            <ul className="grid gap-2">
              <li
                className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
              >
                <p
                  onClick={() => {setOpen((prev) => !prev);
                                 goToAddMovie();}}
                  className={
                    "flex items-center justify-between w-full p-5 rounded-xl bg-gblack hover:cursor-pointer"
                  }
                  href="/addmovie">
                  <span className="flex gap-1 text-lg">Add Movie</span>
                </p>
                
              </li>
              <li
              className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
            >
              <p
                onClick={() => {setOpen((prev) => !prev);
                                 goToDeleteMovie();}}
                className={
                  "flex items-center justify-between w-full p-5 rounded-xl bg-gblack hover:cursor-pointer"
                }>
                <span className="flex gap-1 text-lg">Delete Movie</span>
                {/* <Icon className="text-xl" /> */}
              </p>
              
            </li>

            <li
              className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
            >
              <p
                onClick={() => {setOpen((prev) => !prev);
                                 goToUpdateMovie();}}
                className={
                  "flex items-center justify-between w-full p-5 rounded-xl bg-gblack hover:cursor-pointer"
                }
                >
                <span className="flex gap-1 text-lg">Update Movie</span>
                {/* <Icon className="text-xl" /> */}
              </p>
              
            </li>

            <li
              className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
            >
              <p
                
                onClick={() => {setOpen((prev) => !prev);
                                 goToVerify();}}
                className={
                  "flex items-center justify-between w-full p-5 rounded-xl bg-gblack hover:cursor-pointer"
                }
                href="/verify">
                <span className="flex gap-1 text-lg">Verify users</span>
                {/* <Icon className="text-xl" /> */}
              </p>
              
            </li>
            

            
            <li
              className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
            >
              <p
                onClick={() => {setOpen((prev) => !prev);
                                 goToEditors();}}
                className={
                  "flex items-center justify-between w-full p-5 rounded-xl bg-gblack hover:cursor-pointer"
                }>
                <span className="flex gap-1 text-lg">Add to Editor's choice</span>
                {/* <Icon className="text-xl" /> */}
              </p>
              
            </li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  export default NavMobile;