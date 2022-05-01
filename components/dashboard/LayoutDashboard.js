export default function LayoutDashboard({ children }) {
  return (
    // if using custom scrollbar 
    // <div className="dark:bg-neutral-900 min-h-screen w-screen">
    <div className="dark:bg-neutral-900">
      <div className="min-h-screen w-screen xl:grid" style={{ gridTemplateColumns: "auto 1fr" }}>
        {children}
      </div>
    </div>
  );
}
