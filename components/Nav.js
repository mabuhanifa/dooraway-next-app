import { AiOutlinePlus } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { MdOutlinePostAdd } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

export default function Nav() {
 
  return (
    <>
      <nav className="flex flex-col-reverse gap-y-5 shad rounded-lg py-3 px-5 lg:flex-row justify-between items-center">
        <div className="lg:flex items-center justify-between hidden ">
          <span className="font-bold">
            <MdOutlinePostAdd className="text-blue-500 inline text-2xl mb-1" />
            Blog App
          </span>
        </div>
        <div className="flex flex-col gap-y-5 lg:flex-row items-center">
          <div className="relative">
            <input
              type="text"
              className="bg-gray-200 rounded-md py-2 md:w-96 px-10"
              placeholder="Search"
            //   onChange={(e) => {dispatch(addFilter(e.target.value))}}
            />
            <RiSearchLine className="text-gray-400 text-2xl absolute left-2 top-2" />
            
          </div>
          <div>
            <button className="px-5 mt-1.5" >
              <AiOutlinePlus className="text-2xl text-gray-600" />
            </button>
          </div>
        </div>
        <div>
          <button>
            <CiUser className="text-2xl text-gray-600 mt-1.5" />
          </button>
        </div>
      </nav>
      <div></div>
    </>
  );
}