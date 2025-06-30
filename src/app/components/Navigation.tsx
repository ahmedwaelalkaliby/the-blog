"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeSwitch from './ThemeSwitch';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/newsletter", label: "Newsletter" },
  ];

  return (
    <>
      {/* Desktop Horizontal Navbar */}
      <nav className="hidden lg:flex items-center justify-between p-4 bg-white border-b border-gray-200">

        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-200 ${
                pathname === link.href
                  ? "text-blue-500 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </nav>

      {/* Mobile hamburger button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <nav
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo/Name */}
          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-800">Ahmed Wael</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex-1">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeSidebar}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-blue-500 bg-blue-50 font-medium"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Switch */}
          <div className="mt-auto pt-4 border-t border-gray-200">
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </>
  );
} 