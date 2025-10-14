import { useState } from "react"

const LoadingSkeleton = () => {
  const [skeleton,setSkeleton]=useState<boolean>(true)
  setTimeout(()=>{
    setSkeleton(false)
  },2000)
  return (
    <div className="flex space-y-5 flex-col border-1 w-[75%] items-start pl-5 py-5 mt-10 ml-10 rounded-xl">
        {skeleton && (
          <>
            <div className="w-2/7 h-5 rounded-2xl bg-gray-400 animate-pulse"></div>
            <div className="w-4/7 h-5 rounded-2xl bg-gray-400 animate-pulse"></div>
          </>
        )}
        {!skeleton&&(<><div className={`text-2xl font-bold`}>John Doe</div>
        <div className="text-xl font-semibold">Full-stack developer at XYZ Company</div></>)}
    </div>
  )
}

export default LoadingSkeleton