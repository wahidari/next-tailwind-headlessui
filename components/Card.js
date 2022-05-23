export default function Card({ className, children }) {
  return (
    <div
      className={`${className} p-2 xl:p-4 rounded-lg border dark:border-neutral-800`}
    >
      {children}
    </div>
  );
}
