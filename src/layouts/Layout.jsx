import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Outlet />
    </div>
  );
}