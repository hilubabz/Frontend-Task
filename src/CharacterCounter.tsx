import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

type LetterDensity = {
  letter: string;
  count: number;
};

const CharacterCounter = () => {
  const [text, setText] = useState<string>("");
  // console.log(text.split(' '))
  const [characterCount, setCharacterCount] = useState<number>(0);
  const [wordCount, setWordCount] = useState<number>(0);
  const [sentenceCount, setSentenceCount] = useState<number>(0);
  const [ignoreSpace, setIgnoreSpace] = useState<boolean>(false);
  const [letterDensity, setLetterDensity] = useState<LetterDensity[]>();
  const [characterLimitSelectBox, setCharacterLimitSelectBox] =
    useState<boolean>(false);
  const [characterLimit, setCharacterLimit] = useState<number>(Infinity);
  const [seeMore, setSeeMore] = useState<number>(5);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (ignoreSpace) {
      const spaceIgnoredText = text.replace(/\s/g, "");
      setCharacterCount(spaceIgnoredText.length);
    } else {
      setCharacterCount(text.length);
    }
    const sentences = text
      .split(/[.!?]/)
      .filter((sentence) => sentence.trim() !== "");
    setSentenceCount(sentences.length);
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word !== "");
    setWordCount(words.length);
    const allCharacters = text.split("");
    const tempDensity: LetterDensity[] = [
      { letter: "a", count: 0 },
      { letter: "b", count: 0 },
      { letter: "c", count: 0 },
      { letter: "d", count: 0 },
      { letter: "e", count: 0 },
      { letter: "f", count: 0 },
      { letter: "g", count: 0 },
      { letter: "h", count: 0 },
      { letter: "i", count: 0 },
      { letter: "j", count: 0 },
      { letter: "k", count: 0 },
      { letter: "l", count: 0 },
      { letter: "m", count: 0 },
      { letter: "n", count: 0 },
      { letter: "o", count: 0 },
      { letter: "p", count: 0 },
      { letter: "q", count: 0 },
      { letter: "r", count: 0 },
      { letter: "s", count: 0 },
      { letter: "t", count: 0 },
      { letter: "u", count: 0 },
      { letter: "v", count: 0 },
      { letter: "w", count: 0 },
      { letter: "x", count: 0 },
      { letter: "y", count: 0 },
      { letter: "z", count: 0 },
    ];

    allCharacters.map((val) => {
      if (val.toLowerCase() >= "a" && val.toLowerCase() <= "z") {
        tempDensity.map((value) => {
          if (value.letter == val.toLowerCase()) {
            value.count += 1;
          }
        });
      }
    });
    setLetterDensity(tempDensity.sort((a, b) => b.count - a.count));
  }, [text, ignoreSpace]);

  useEffect(() => {
    if (!characterLimitSelectBox) {
      setCharacterLimit(Infinity);
    }
  }, [characterLimitSelectBox]);
  return (
    <div
      className={`${
        darkMode
          ? "bg-gradient-to-br from-gray-800 to-gray-950 min-h-[100vh] text-white"
          : "bg-gradient-to-br from-white to-gray-100 min-h-[100vh] text-black"
      } overflow-x-hidden lg:px-40 transition-colors ease-in-out duration-500`}
    >
      <div className="flex justify-between mx-8 items-center pt-2">
        <div className="text-2xl font-semibold">Character Counter</div>
        {darkMode ? (
          <div
            className="h-10 w-10 bg-gray-500 flex items-center justify-center rounded-xl text-white font-bold text-2xl transition-all duration-500 ease-in-out"
            onClick={() => setDarkMode(false)}
          >
            <MdOutlineWbSunny />
          </div>
        ) : (
          <div
            className="h-10 w-10 bg-gray-200 flex items-center justify-center rounded-xl text-black font-bold text-2xl transition-all duration-500 ease-in-out"
            onClick={() => setDarkMode(true)}
          >
            <IoMoonOutline />
          </div>
        )}
      </div>

      <div className="text-center font-bold text-4xl mt-10 mx-8">
        Analyze Your Text In Real-Time
      </div>
      <div className="mx-8 mt-5">
        <textarea
          className={`${
            darkMode ? "bg-[#2D2E3A] text-white" : "bg-gray-300 text-black"
          } w-full rounded-xl h-[200px] border-white border-1 p-2 text-xl ease-in-out duration-500`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={characterLimit}
          placeholder="Start typing here..... (or paste your text)"
        ></textarea>
      </div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="md:flex md:items-center md:space-x-2 mx-8">
          <div className="space-x-2 flex text-xl items-center mt-3">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={ignoreSpace}
              onClick={() => setIgnoreSpace((prev) => !prev)}
            />
            <p>Exclude Spaces</p>
          </div>
          <div className="space-x-2 flex text-xl items-center mt-2 ">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={characterLimitSelectBox}
              onClick={() => setCharacterLimitSelectBox((prev) => !prev)}
            />
            <p>Set Character Limit</p>
            {characterLimitSelectBox && (
              <input
                type="number"
                className={`border-1 border-gray-500 w-20 ${
                  darkMode ? "bg-white" : "bg-gray-300"
                } text-black text-center rounded-md`}
                value={characterLimit}
                onChange={(e) => setCharacterLimit(Number(e.target.value))}
              />
            )}
          </div>
        </div>

        <div className="text-lg mx-8 mt-2">
          Approx. reading time: {Math.ceil(wordCount / 60)} minutes
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-5 mx-8 mt-4 space-y-4">
        <div className="h-[150px] bg-[#DCB5FB] flex flex-col justify-center pl-4 rounded-xl">
          <div className="text-black text-4xl font-bold md:text-6xl">
            {characterCount}
          </div>
          <div className="text-black text-xl font-semibold md:text-2xl">
            Total Characters
          </div>
        </div>
        <div className="h-[150px] bg-[#FFAE00] flex flex-col justify-center pl-4 rounded-xl">
          <div className="text-black text-4xl font-bold md:text-6xl">
            {wordCount}
          </div>
          <div className="text-black text-xl font-semibold md:text-2xl">
            Word Count
          </div>
        </div>
        <div className="h-[150px] bg-[#FF956C] flex flex-col justify-center pl-4 rounded-xl">
          <div className="text-black text-4xl font-bold md:text-6xl">
            {sentenceCount}
          </div>
          <div className="text-black text-xl font-semibold md:text-2xl">
            Sentence Count
          </div>
        </div>
      </div>

      {text.length > 0 && (
        <div className="mx-8 mt-4 space-y-2">
          <div className="text-2xl font-semibold mb-4">Letter Density</div>
          {letterDensity?.map((val, index) => {
            return (
              index < seeMore && (
                <div
                  className="grid grid-cols-[2%_7fr_1fr] gap-2 items-center"
                  key={"letter" + index}
                >
                  <div>{val.letter.toUpperCase()}</div>
                  <div className="w-full h-4 rounded-xl overflow-hidden bg-gray-500">
                    <div
                      className="h-4 bg-[#DDB4FD] rounded-xl ease-in-out duration-500"
                      style={{
                        width: `${Math.floor(
                          (val.count / characterCount) * 100,
                        )}%`,
                      }}
                    ></div>
                  </div>
                  <div>
                    {val.count} (
                    {((val.count / characterCount) * 100).toFixed(2)}%)
                  </div>
                </div>
              )
            );
          })}
          {seeMore === 5 && (
            <div
              className="flex space-x-1 items-center cursor-pointer"
              onClick={() => setSeeMore(26)}
            >
              <div>See More</div>
              <MdOutlineKeyboardArrowDown />
            </div>
          )}
          {seeMore === 26 && (
            <div
              className="flex space-x-1 items-center cursor-pointer"
              onClick={() => setSeeMore(4)}
            >
              <div>See Less</div>
              <MdOutlineKeyboardArrowDown className="rotate-180" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CharacterCounter;
