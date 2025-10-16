import { useState, useEffect } from "react";
import { IoAddOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineLowPriority } from "react-icons/md";

export default function ToDoList() {
  type Prioritize = "high" | "low";
  interface TaskList {
    id: number;
    task: string;
    date: string;
    time: string;
    completed: boolean;
    priority: Prioritize;
  }
  const taskStorage = localStorage.getItem("task");
  const [task, setTask] = useState<TaskList[]>(() => {
    return taskStorage ? JSON.parse(taskStorage) : [];
  });
  useEffect(() => {
    const uniqueDates = new Set<string>();
    task.forEach((val: TaskList) => {
      uniqueDates.add(val.date);
    });
    setTaskDates(
      Array.from(uniqueDates).sort((a, b) => {
        return new Date(a).getDate() - new Date(b).getDate();
      }),
    );
  }, [task]);
  const [selectedTask, setSelectedTask] = useState<TaskList[]>([]);
  const [input, setInput] = useState<boolean>(false);
  const [taskInput, setTaskInput] = useState<string>("");
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [taskDates, setTaskDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleSubmit = () => {
    if (taskInput == "") {
      alert("Please Enter A Task");
    } else if (dateInput == "") {
      alert("Please Enter A Date");
    } else if (timeInput == "") {
      alert("Please Enter Time");
    } else if (new Date(dateInput) < new Date()) {
      alert("Invalid Date & Time");
    } else {
      setTask([
        ...task,
        {
          id: Math.random(),
          task: taskInput,
          date: dateInput,
          time: timeInput,
          completed: false,
          priority: "low",
        },
      ]);
    }
    setTaskInput("");
    setTimeInput("");
    setInput(false);
  };
  // console.log(task)
  const handleCheck = (id: number) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const deleteSelected = () => {
    setSelectedTask((prevSelectedTask) =>
      prevSelectedTask.filter((val) => val.completed == false),
    );
    setTask((prevTask) =>
      prevTask.filter((val) =>
        val.date == selectedDate ? val.completed == false : val,
      ),
    );
  };

  const handlePriority = (id: number, priority: Prioritize) => {
    if (priority == "low") {
      setTask(
        task.map((val) => {
          return val.id === id
            ? {
                id: val.id,
                task: val.task,
                date: val.date,
                time: val.time,
                completed: val.completed,
                priority: "high",
              }
            : val;
        }),
      );
    } else {
      setTask(
        task.map((val) => {
          return val.id === id
            ? {
                id: val.id,
                task: val.task,
                date: val.date,
                time: val.time,
                completed: val.completed,
                priority: "low",
              }
            : val;
        }),
      );
    }
  };

  const handleSelect = () => {
    setTask((prev) =>
      prev.map((val) => {
        return val.date == selectedDate
          ? {
              id: val.id,
              task: val.task,
              date: val.date,
              time: val.time,
              completed: true,
              priority: val.priority,
            }
          : val;
      }),
    );
  };

  useEffect(() => {
    task.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority == "high" ? -1 : 1;
      }
      return (
        new Date(`${a.date}T${a.time}`).getTime() -
        new Date(`${b.date}T${b.time}`).getTime()
      );
    });
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  useEffect(() => {
    if (taskDates.length > 0) {
      setSelectedDate((prev) =>
        taskDates.includes(prev) ? prev : taskDates[0],
      );
    }
  }, [taskDates]);

  useEffect(() => {
    setSelectedTask(task.filter((val) => val.date == selectedDate));
  }, [selectedDate, task]);

  useEffect(() => {
    setDateInput(selectedDate);
  }, [selectedDate]);

  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-gradient-to-br from-blue-700 to-blue-900">
      <div className="bg-white rounded-lg h-[75%] w-[30%] max-lg:w-[50%] max-md:w-[75%] max-sm:w-[90%] pt-10">
        <div className="flex space-x-10 justify-around items-center">
          <select
            className="text-2xl font-semibold bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl px-2 py-1"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            {taskDates.map((val: string, index: number) => (
              <option key={index} value={val} className="text-black">
                {val}
              </option>
            ))}
          </select>
          <div className="flex items-center justify-center space-x-2">
            <div
              className="h-10 w-10 rounded-full bg-blue-700 text-white flex items-center justify-center text-2xl"
              onClick={() => setInput(true)}
            >
              <IoAddOutline />
            </div>
            <div
              className="h-10 w-10 rounded-full bg-red-700 text-white flex items-center justify-center text-lg"
              onClick={deleteSelected}
            >
              <FaRegTrashAlt />
            </div>
            <button
              className="bg-blue-500 px-2 py-1 text-white rounded-xl font-bold"
              onClick={handleSelect}
            >
              Select All
            </button>
          </div>
        </div>
        <div className="p-5 space-y-5 h-[90%] overflow-y-auto">
          {selectedTask.map((val: TaskList, index: number) => (
            <div
              key={index}
              className={`grid grid-cols-[1fr_5fr_2fr_1fr_1fr] text-md justify-items-start items-center py-2 border-b-gray-400 border-b-1 rounded-xl group pl-2 ${
                val.priority == "high"
                  ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={val.completed}
                  onChange={() => handleCheck(val.id)}
                />
              </div>
              <div
                className={`${
                  val.completed ? "line-through text-gray-400" : ""
                } text-2xl`}
              >
                {val.task}
              </div>
              <div>{val.time}</div>
              <FaRegTrashAlt onClick={() => handleDelete(val.id)} />
              <MdOutlineLowPriority
                className={`${val.priority == "high" ? "" : "rotate-180"}`}
                onClick={() => handlePriority(val.id, val.priority)}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`fixed h-full w-full bg-black/30 flex items-center justify-center ${
          input ? "" : "translate-y-[-150vh]"
        } ease-in-out duration-500`}
      >
        <div className="bg-blue-700 p-5 rounded-xl space-y-5">
          <div
            className="fixed top-10 right-10 bg-white h-10 w-10 flex items-center justify-center rounded-full font-bold cursor-pointer"
            onClick={() => setInput(false)}
          >
            X
          </div>

          <div className="flex items-center justify-start space-x-7">
            <div className="text-white font-semibold text-lg">
              Enter the task
            </div>
            <div>
              <input
                type="text"
                className="bg-white"
                placeholder="task"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-start space-x-7">
            <div className="text-white font-semibold text-lg">
              Enter the date
            </div>
            <div>
              <input
                type="date"
                className="bg-white"
                placeholder="task"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-start space-x-7">
            <div className="text-white font-semibold text-lg">
              Enter the time
            </div>
            <div>
              <input
                type="time"
                className="bg-white"
                placeholder="task"
                value={timeInput}
                onChange={(e) => setTimeInput(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div
              className="bg-white px-2 py-1 rounded-md cursor-pointer"
              onClick={handleSubmit}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
