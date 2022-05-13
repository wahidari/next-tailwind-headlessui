import { useContext } from 'react'
import { GlobalContext } from "@utils/GlobalContext";
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

export default function ChangeTheme() {

  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    darkMode ?
      <button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-6 h-6 p-0.5 transition-all bg-neutral-800 hover:bg-neutral-700 rounded-full" >
        <SunIcon className="text-white"/>
      </button >
      :
      <button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-6 h-6 p-0.5 transition-all bg-gray-100 hover:bg-gray-200 rounded-full">
        <MoonIcon className="text-gray-700" />
      </button>
  )
}