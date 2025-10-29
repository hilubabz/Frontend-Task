import { CartesianGrid, Line, XAxis, YAxis, LineChart } from "recharts";
import type { CommitType } from "../services/commitType";

interface LineChartDataType {
  day: string;
  count: number;
}

const LineChartComponent = ({ data }: { data: CommitType[] }) => {
  // console.log(data);
  const fetchDailyCommits = () => {
    const commits = data.filter((e: CommitType) => e.type === "PushEvent");
    const dailyFrequency: Record<string, number> = {};
    commits.forEach((e: CommitType) => {
      const date = new Date(e.created_at);
      const dayKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
        date.getDate(),
      ).padStart(2, "0")}`;
      dailyFrequency[dayKey] = (dailyFrequency[dayKey] || 0) + 1;
    });

    return Object.entries(dailyFrequency)
      .sort(([a], [b]) => (a > b ? 1 : -1))
      .map(([day, count]) => ({ day, count }));
  };

  const lineChartData: LineChartDataType[] = fetchDailyCommits();
  // console.log(lineChartData);

  return (
    <div className="bg-[#ffffff] rounded-xl shadow-xl p-4">
      <div className="text-2xl font-semibold p-2 text-center">
        Recent Commits
      </div>
      <LineChart
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "100%",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={lineChartData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis width="auto" />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
