import { useContext } from 'react'
import { GlobalContext } from "@utils/GlobalContext";
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

export default function ThemeToggle() {
  
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <div className="!py-2 px-2 rounded mx-4 bg-opacity-20 dark:bg-opacity-40 bg-gray-100 backdrop-filter backdrop-blur fixed bottom-20 right-3 md:right-10 z-10">
      {darkMode ?
        <button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full">
          <SunIcon />
        </button>
        :
        <button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full">
          <MoonIcon />
        </button>
      }
    </div>
  )
}