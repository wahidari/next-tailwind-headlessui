export default function Layout({ children }) {
  return (
    // if using custom scrollbar 
    // <div className="dark:bg-neutral-900 min-h-screen w-screen">
    <div className="dark:bg-neutral-900 min-h-screen">
      {children}
    </div>
  );
}
