export default function Tooltips({ text, children, left, right }) {
  return (
    <div className="flex">
      <div className={`relative flex justify-center group ${left && "!justify-start"} ${right && "!justify-end"}`}>
        {children}
        <div className="absolute bottom-0 items-center mb-8 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
          <div className="relative z-10 p-2 text-xs text-white whitespace-no-wrap bg-neutral-800 shadow-lg rounded-md w-40">
            {text}
          </div>
          {left ?
            <div className="absolute w-3 h-3 mt-6 -bottom-0.5 left-1 rotate-45 bg-neutral-800"></div>
            : right ?
            <div className="absolute w-3 h-3 mt-6 -bottom-0.5 right-1 rotate-45 bg-neutral-800"></div>
            :
            <div className="absolute w-3 h-3 mt-6 mx-auto left-1/2 transform -translate-x-1/2 -bottom-0.5 rotate-45 bg-neutral-800"></div>
          }
        </div>
      </div>
    </div>
  );
};