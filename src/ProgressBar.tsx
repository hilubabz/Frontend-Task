import { useState } from "react";

const ProgressBar = () => {
	const [progress,setProgress]=useState<number>(0)
	
	const handleIncrement=()=>{
		if(progress==100){
			return
		}
		setProgress(prev=>prev+10)
	}

	const handleDecrement=()=>{
		if(progress==0){
			return
		}
		setProgress(prev=>prev-10)
	}

  return (
    <div className="pl-10 pt-10 space-y-5">
      <div className="font-bold text-3xl">Progress Bar</div>
      <div className="h-10 w-[50%] bg-gray-300 rounded-2xl overflow-hidden">
        <div className={`h-full ${progress<40?'bg-red-700':progress<80?'bg-orange-400':'bg-green-500'} ease-in-out duration-500`} style={{width:`${progress}%`}}></div>
      </div>
      <div className="space-x-5">
        <button className="px-2 py-1 border-1 border-gray-300 rounded-xl cursor-pointer hover:bg-gray-400 ease-in-out duration-500" onClick={handleDecrement}>-10%</button>
        <button className="px-2 py-1 border-1 border-gray-300 rounded-xl cursor-pointer hover:bg-gray-400 ease-in-out duration-500" onClick={handleIncrement}>+10%</button>
      </div>
    </div>
  );
};

export default ProgressBar;
