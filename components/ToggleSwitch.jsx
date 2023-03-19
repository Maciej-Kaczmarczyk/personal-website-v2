import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ToggleSwitch = () => {
  const [enabled, setEnabled] = useState(false);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex items-center">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={theme === "dark" ? true : false}
          readOnly
        />
        <div
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="peer dark:text-white h-6 w-11 rounded-full border-[1px] border-gray-light bg-gray after:absolute  after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-blue"
        ></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={theme === "light" ? "none" : "white"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="ml-2 h-6 w-6 dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </label>
    </div>
  );
};

export default ToggleSwitch;
