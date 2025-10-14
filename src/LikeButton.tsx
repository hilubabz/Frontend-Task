import { useState } from "react";
import { IoMdHeart } from "react-icons/io";

const LikeButton = () => {
	const [like,setLike]=useState<boolean>(false)
  return (
    <div className="flex justify-center mt-10">
        <div className={`border-2 flex gap-2 items-center justify-center px-4 py-2 rounded-2xl text-4xl ${like?'bg-red-500 text-white':'border-gray-500 text-gray-500 hover:border-red-500  hover:text-red-500'} ease-in-out duration-500 cursor-default`} onClick={()=>setLike(!like)}>
            <IoMdHeart className={`${like?'text-white':'text-red-500'} ease-in-out duration-500`}/>
            Like
        </div>
    </div>
  )
}

export default LikeButton