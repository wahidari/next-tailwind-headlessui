export default function Layout({ children }) {
  return (
    <div className="dark:bg-neutral-900 min-h-screen w-screen">
      {children}
    </div>
  );
}
