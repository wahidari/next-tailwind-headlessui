export default function LayoutDashboard({ children }) {
  return (
    // if using custom scrollbar 
    // <div className="dark:bg-neutral-900 min-h-screen w-screen">
    <div className="dark:bg-neutral-900">
      {/* "auto" width sidebar and take the rest for main content "1fr" */}
      {/* https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns */}
      <div className="min-h-screen w-screen xl:grid" style={{ gridTemplateColumns: "auto 1fr" }}>
        {children}
      </div>
    </div>
  );
}
