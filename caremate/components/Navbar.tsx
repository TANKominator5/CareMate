// components/Navbar.tsx
"use client"; // Or remove if not using app router and it causes issues

import { useState, useEffect, ReactNode, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, LogOut, UserCircle, BriefcaseMedical, LineChart } from "lucide-react";
import { useAuth } from "../context/AuthContext"; // Adjust path if needed
import { useRouter } from "next/router";

interface NavLink {
  href: string;
  label: string;
  icon?: ReactNode; // Optional icon for mobile view
}

const Navbar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const { user, signOut, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSignOut = async () => {
    closeMenu();
    await signOut();
  };

  const publicLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
  ];

  const userLinks: NavLink[] = [
    { href: "/medications", label: "Medications", icon: <BriefcaseMedical size={18} className="mr-2 md:hidden" /> },
    { href: "/analytics", label: "Analytics", icon: <LineChart size={18} className="mr-2 md:hidden" /> },
  ];

  const AuthButtonsSkeleton = () => (
    <div className="flex items-center space-x-4">
      <div className={`w-20 h-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} animate-pulse`}></div>
      <div className={`w-24 h-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} animate-pulse`}></div>
    </div>
  );

  // Add a helper for animated underline
  const AnimatedUnderline = ({ active, theme }: { active: boolean; theme: string | undefined }) => (
    <span
      className={`block h-0.5 rounded transition-all duration-300 ease-in-out mt-1 ${
        active
          ? theme === "dark"
            ? "bg-purple-400 w-full opacity-100"
            : "bg-purple-600 w-full opacity-100"
          : "w-0 opacity-0"
      }`}
    />
  );

  return (
    <nav
      className={`fixed w-full z-50 ${theme === "dark" ? "bg-gray-900/95" : "bg-gradient-to-r from-blue-100 to-white/95"} backdrop-blur-sm shadow-md`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
            <span className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>CareMate</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {publicLinks.map(link => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    `${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} hover:text-purple-500 transition-colors font-medium flex flex-col items-center` +
                    (isActive ? (theme === "dark" ? " text-purple-400" : " text-purple-700") : "")
                  }
                >
                  {link.label}
                  <AnimatedUnderline active={isActive} theme={theme} />
                </Link>
              );
            })}
            {user && userLinks.map(link => {
              const isActive = router.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    `${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} hover:text-purple-500 transition-colors font-medium flex flex-col items-center` +
                    (isActive ? (theme === "dark" ? " text-purple-400" : " text-purple-700") : "")
                  }
                >
                  {link.label}
                  <AnimatedUnderline active={isActive} theme={theme} />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => mounted && setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-full transition-colors ${theme === "dark" ? "bg-gray-800 text-yellow-300 hover:bg-gray-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {authLoading ? (
              <AuthButtonsSkeleton />
            ) : user ? (
              <div className="flex items-center space-x-3">
                 <span className={`text-sm truncate max-w-[100px] lg:max-w-[150px] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} title={user.email ?? 'User Email'}>
                    {(user.user_metadata?.full_name as string)?.split(' ')[0] || user.email?.split('@')[0] || 'User'}
                </span>
                <button
                  onClick={handleSignOut}
                  title="Logout"
                  className={`p-2 rounded-full transition-colors ${theme === "dark" ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"}`}
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${theme === "dark" ? "text-gray-300 hover:bg-gray-800 hover:text-white" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center md:hidden space-x-3">
            <button
              onClick={() => mounted && setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-full transition-colors ${theme === "dark" ? "bg-gray-800 text-yellow-300" : "bg-gray-200 text-gray-700"}`}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg ${theme === "dark" ? "text-white" : "text-gray-700"}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden ${theme === "dark" ? "bg-gray-900" : "bg-white"} shadow-lg border-t ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
          <div className="container mx-auto px-4 py-4 space-y-2">
            {publicLinks.map(link => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    `block py-2 px-3 rounded-lg font-medium ${theme === "dark" ? "text-gray-200 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"} flex items-center relative` +
                    (isActive ? (theme === "dark" ? " bg-purple-900/40 text-purple-300 font-semibold" : " bg-purple-100 text-purple-700 font-semibold") : "")
                  }
                  onClick={closeMenu}
                >
                  <span className="flex-1">{link.label}</span>
                  <AnimatedUnderline active={isActive} theme={theme} />
                </Link>
              );
            })}
            {user && userLinks.map(link => {
              const isActive = router.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    `flex items-center py-2 px-3 rounded-lg font-medium ${theme === "dark" ? "text-gray-200 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"} relative` +
                    (isActive ? (theme === "dark" ? " bg-purple-900/40 text-purple-300 font-semibold" : " bg-purple-100 text-purple-700 font-semibold") : "")
                  }
                  onClick={closeMenu}
                >
                  {link.icon} <span className="flex-1">{link.label}</span>
                  <AnimatedUnderline active={isActive} theme={theme} />
                </Link>
              );
            })}

            <div className={`pt-3 mt-2 border-t ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
              {authLoading ? (
                <div className="space-y-2">
                    <div className={`w-full h-10 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} animate-pulse`}></div>
                    <div className={`w-full h-10 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} animate-pulse`}></div>
                </div>
              ) : user ? (
                <>
                  <div className={`flex items-center p-3 mb-2 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
                    <UserCircle size={20} className={`mr-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}/>
                    <span className={`text-sm font-medium truncate ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
                        {user.user_metadata?.full_name as string || user.email}
                    </span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className={`w-full flex items-center justify-center py-2.5 px-4 rounded-lg font-medium text-white bg-red-500 hover:bg-red-600 transition-colors`}
                  >
                    <LogOut size={18} className="mr-2"/> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={`block py-2.5 px-4 text-center rounded-lg font-medium ${theme === "dark" ? "text-gray-200 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
                    onClick={closeMenu}
                  >
                    Log In
                  </Link>
                  <Link
                    href="/signup"
                    className="block py-2.5 px-4 mt-2 text-center font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90"
                    onClick={closeMenu}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;