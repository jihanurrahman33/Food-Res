import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Foods", path: "/foods" },
    { name: "Reviews", path: "/reviews" },
    { name: "Feedbacks", path: "/feedbacks" },
  ];
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            Food Res
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
