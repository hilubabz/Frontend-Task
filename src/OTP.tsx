import { useEffect, useRef, type KeyboardEvent } from "react";

const OTP = () => {
  const num1 = useRef<HTMLInputElement>(null);
  const num2 = useRef<HTMLInputElement>(null);
  const num3 = useRef<HTMLInputElement>(null);
  const num4 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    num1.current?.focus();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, val: number) => {
    e.currentTarget.value = e.currentTarget.value.replace(/\D/, "");

    if (val === 1 && e.currentTarget.value) num2.current?.focus();
    if (val === 2 && e.currentTarget.value) num3.current?.focus();
    if (val === 3 && e.currentTarget.value) num4.current?.focus();
  };

  const handleBackspace = (e: KeyboardEvent<HTMLInputElement>, val: number) => {
    if (e.key === "Backspace") {
      if (val === 2 && !e.currentTarget.value) num1.current?.focus();
      if (val === 3 && !e.currentTarget.value) num2.current?.focus();
      if (val === 4 && !e.currentTarget.value) num3.current?.focus();
    }
  };

  const handlePaste=(e:any)=>{
    e.preventDefault()
    // console.log(e.clipboardData.getData("text"))
    const pastedData=e.clipboardData.getData("text").replace(/\D/,'').toString()
    // console.log(pastedData)
    if(pastedData.length==4){
      num1.current!.value=pastedData[0]
      num2.current!.value=pastedData[1]
      num3.current!.value=pastedData[2]
      num4.current!.value=pastedData[3]
    }
    else{
      alert('The OTP should be of 4 digits')
    }
  }

  return (
    <div className="flex space-x-5 justify-center mt-10">
      <input
        type="text"
        className="border-1 h-20 w-20 text-center text-2xl appearance-none"
        onPaste={(e)=>handlePaste(e)}
        ref={num1}
        onChange={(e) => handleInput(e, 1)}
        onKeyDown={(e) => handleBackspace(e, 1)}
        maxLength={1}
      />
      <input
        type="text"
        className="border-1 h-20 w-20 text-center text-2xl"
        ref={num2}
        onChange={(e) => handleInput(e, 2)}
        onKeyDown={(e) => handleBackspace(e, 2)}
        maxLength={1}
      />
      <input
        type="text"
        className="border-1 h-20 w-20 text-center text-2xl"
        ref={num3}
        onChange={(e) => handleInput(e, 3)}
        onKeyDown={(e) => handleBackspace(e, 3)}
        maxLength={1}
      />
      <input
        type="text"
        className="border-1 h-20 w-20 text-center text-2xl"
        ref={num4}
        onChange={(e) => handleInput(e, 4)}
        onKeyDown={(e) => handleBackspace(e, 4)}
        maxLength={1}
      />
    </div>
  );
};


export default OTP;
