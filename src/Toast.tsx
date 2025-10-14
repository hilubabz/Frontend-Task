import { useState } from "react";

const Toast = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [info, setInfo] = useState<boolean>(false);
  const [infoMessage, setInfoMessage] = useState<string>("");

  const addToast = (message: string, type: string, time: number) => {
    if (type === "success") {
      setSuccess(true);
      setSuccessMessage(message);
      setTimeout(() => {
        setSuccess(false);
      }, time);
    } else if (type === "error") {
      setError(true);
      setErrorMessage(message);
      setTimeout(() => {
        setError(false);
      }, time);
    } else if (type === "info") {
      setInfo(true);
      setInfoMessage(message);
      setTimeout(() => {
        setInfo(false);
      }, time);
    } else {
      alert("Invalid type");
    }
  };
  return (
    <>
      <div className="flex justify-center mt-10 space-x-10">
        <button
          className="px-2 py-1 border-1 rounded-2xl"
          onClick={() => addToast("Data Saved Successfully", "success", 3000)}
        >
          Show success
        </button>
        <button
          className="px-2 py-1 border-1 rounded-2xl"
          onClick={() => addToast("Error saving data", "error", 5000)}
        >
          Show error
        </button>
        <button
          className="px-2 py-1 border-1 rounded-2xl"
          onClick={() => addToast("Information Loaded", "info", 4000)}
        >
          Show info
        </button>
      </div>
      <div className="flex flex-col mt-10 space-y-5 justify-center items-center">
        {success && (
          <div className="h-15 w-70 rounded-2xl bg-green-500 text-white flex items-center justify-center">
            {successMessage}
          </div>
        )}
        {error && (
          <div className="h-15 w-70 rounded-2xl bg-red-500 text-white flex items-center justify-center">
            {errorMessage}
          </div>
        )}
        {info && (
          <div className="h-15 w-70 rounded-2xl bg-blue-500 text-white flex items-center justify-center">
            {infoMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default Toast;
