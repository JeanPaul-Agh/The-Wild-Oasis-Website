import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

function Header() {
  return (
    // Reduced horizontal padding on mobile (px-4) vs desktop (px-8)
    <header className="border-b border-primary-900 px-4 md:px-8 py-5">
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
