import { GlobalContext } from "@utils/GlobalContext";
import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Skeletons({ className }) {
  const { darkMode } = useContext(GlobalContext);

  return (
    darkMode ?
      <Skeleton
        className={`${className ? className + " " : ""} h-10 mb-2`} baseColor="#262626" highlightColor="#404040"
      />
      :
      <Skeleton
        className={`${className ? className + " " : ""} h-10 mb-2 dark:bg-gray-500 dark:text-gray-400`}
      />
  )
}
