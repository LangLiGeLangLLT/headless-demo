export default function BasicLayout({ children }) {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-violet-500 to-indigo-500 flex justify-center items-center">
      {children}
    </div>
  );
}
