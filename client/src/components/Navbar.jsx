import ThemeToggle from "../theme/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky navbar top-0 z-10 flex items-center justify-between px-4 py-3">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">Ranveer.dev</h1>
      <ThemeToggle />
    </nav>
  );
}
