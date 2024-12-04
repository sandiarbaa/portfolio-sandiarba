"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { toggleDarkMode } from "./redux/slice/themeSlice";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function Home() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrated(true); // Set to true after the component is mounted
  }, []);

  const toggleClick = () => {
    dispatch(toggleDarkMode());
  };

  if (!isHydrated) {
    // Render nothing or a fallback until hydration is complete
    return null;
  }

  return (
    <>
      <Button onClick={toggleClick} variant={"default"}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Button>
      <h1 className="text-red-500 dark:text-green-500">Hello</h1>
      <div>
        <Sun />
        <Moon />
      </div>
    </>
  );
}
