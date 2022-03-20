export default function Progress({ className, height, percent }) {
  return (
    <div className={`
      ${className ? className + " " : ""}
      ${height ? height + " " : "h-1"}
      w-full bg-gray-200 dark:bg-neutral-800 rounded-full`}
    >
      <div className={`${height ? height + " " : "h-1"} bg-blue-500 rounded-full`}
        style={{ width: `${percent}%` }}
      >
      </div>
    </div>
  );
}
Progress.percentage = ({ className, percent }) => {
  return (
    <div className={`
      ${className ? className + " " : ""}
      w-full bg-gray-200 dark:bg-neutral-800 rounded-full`}
    >
      <div className={`bg-blue-500 rounded-full text-center text-white text-xs leading-none font-medium p-0.5`}
        style={{ width: `${percent}%` }}
      >
        {percent} %
      </div>
    </div>
  );
}
