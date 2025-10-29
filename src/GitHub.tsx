import { IoSunnyOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState, type FormEvent } from "react";
import useGithubData from "./hooks/useGithubData";
import Profile from "./components/Profile";
import useGithubUserData from "./hooks/useGithubUserData";
import Repositories from "./components/Repositories";
import PieChartComponent from "./charts/PieChartComponent";
import BarChartComponent from "./charts/BarChartComponent";
import useGithubUserCommits from "./hooks/useGithubUserCommits";
import LineChartComponent from "./charts/LineChartComponent";
import ProfileSkeleton from "./components/ProfileSkeleton";
import RepositoriesSkeleton from "./components/RepositoriesSkeleton";
import ChartSkeleton from "./components/ChartSkeleton";

const GitHub = () => {
  const [query, setQuery] = useState<string>("");

  const repos = useGithubData(query);
  const userData = useGithubUserData(query);
  const userCommits = useGithubUserCommits(query);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    repos.refetch();
    userData.refetch();
    userCommits.refetch();
    // console.log('Success')
  };
  // console.log(data)
  // console.log(userData)
  // console.log(userCommits)
  return (
    <div className="px-20 pt-10 bg-[#f9fafb] min-h-[100vh] text-[#111827]">
      <div className="flex justify-between p-5 shadow-lg bg-[#ffffff] rounded-xl items-center">
        <div className="flex gap-30 w-[75%] items-center">
          <div className="font-semibold text-xl">Repo Analyzer</div>
          <div className="flex gap-2 w-[70%] items-center border-gray-300 border-1 p-2 rounded-xl">
            <CiSearch />
            <form onSubmit={(e) => handleSubmit(e)} className="w-full">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-0"
                placeholder="Enter GitHub username..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="flex items-center text-3xl gap-2">
          <IoSunnyOutline />
          <div className="relative w-14 h-7 bg-gray-700 rounded-full cursor-pointer">
            <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-10 max-w-[100vw] gap-4">
        <div className="space-y-4">
          {!userData.isLoading ? (
            <Profile userData={userData.data} />
          ) : (
            <ProfileSkeleton />
          )}
          {!repos.isLoading ? (
            <PieChartComponent data={repos.data ?? []} />
          ) : (
            <ChartSkeleton title={"Top Languages"} />
          )}
          {!userCommits.isLoading ? (
            <LineChartComponent data={userCommits.data ?? []} />
          ) : (
            <ChartSkeleton title="Recent Commits" />
          )}
        </div>
        <div className="space-y-4">
          {!repos.isLoading ? (
            <>
              <Repositories data={repos.data ?? []} />
              <BarChartComponent repos={repos.data ?? []} />
            </>
          ) : (
            <>
              <RepositoriesSkeleton />
              <ChartSkeleton title="Most Starred Repositories" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GitHub;
