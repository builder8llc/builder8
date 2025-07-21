const Navbar = () => {
  return (
    <nav className="w-full px-6 py-5 flex justify-between items-center border-b border-white/10 backdrop-blur-sm">
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Builder8
      </h2>

      <a
        href="#"
        className="text-sm sm:text-base text-white hover:text-pink-400 transition-colors duration-200"
      >
        Docs
      </a>
    </nav>
  );
};

export default Navbar;
