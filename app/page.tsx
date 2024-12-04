"use client";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { toggleDarkMode } from "./redux/slice/themeSlice";

export default function Home() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();

  const toggleClick = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <button onClick={toggleClick} className="border py-2 px-4 rounded-md bg-slate-200 shadow m-5">
        {" "}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1 className="text-red-500 dark:text-green-500">Hello</h1>
    </>
  );
}
