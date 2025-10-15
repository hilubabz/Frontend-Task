import { useState } from "react";

const Tabs = () => {
  const [tab, setTab] = useState<number>(1);
  return (
    <div className="ml-20 mt-20">
      <div className="flex space-x-10">
        <div
          className={`${tab == 1 ? "text-black" : "text-gray-400"} cursor-pointer relative ease-in-out duration-500`}
          onClick={() => setTab(1)}
        >
          First Tab
          <div className={`absolute left-0 h-1 rounded-2xl bg-black ease-in-out duration-500 ${tab==1?'w-full':'w-0'}`}></div>
        </div>
        <div
          className={`${tab == 2 ? "text-black" : "text-gray-400"} cursor-pointer relative ease-in-out duration-500`}
          onClick={() => setTab(2)}
        >
          Second Tab
          <div className={`absolute left-0 h-1 rounded-2xl bg-black ease-in-out duration-500 ${tab==2?'w-full':'w-0'}`}></div>
        </div>
        <div
          className={`${tab == 3 ? "text-black" : "text-gray-400"} cursor-pointer relative ease-in-out duration-500`}
          onClick={() => setTab(3)}
        >
          Third Tab
          <div className={`absolute left-0 h-1 rounded-2xl bg-black ease-in-out duration-500 ${tab==3?'w-full':'w-0'}`}></div>
        </div>
        <div
          className={`${tab == 4 ? "text-black" : "text-gray-400"} cursor-pointer relative ease-in-out duration-500`}
          onClick={() => setTab(4)}
        >
          Fourth Tab
          <div className={`absolute left-0 h-1 rounded-2xl bg-black ease-in-out duration-500 ${tab==4?'w-full':'w-0'}`}></div>
        </div>
      </div>

      {tab == 1 && <div>This is the first tab</div>}

      {tab == 2 && <div>This is the second tab</div>}

      {tab == 3 && <div>This is the third tab</div>}

      {tab == 4 && <div>This is the fourth tab</div>}
    </div>
  );
};

export default Tabs;
