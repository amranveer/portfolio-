const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50  shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Ranveer.dev</h1>
        <nav className="space-x-4 hidden sm:block">
          <a href="#hero" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Projects</a>
          <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Skills</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
