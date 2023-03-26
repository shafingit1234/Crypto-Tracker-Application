import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
const Home = () => {
  return (
    <CryptoProvider>
      <main className="w-full h-full flex flex-col items-center content-center text-white font-nunito relative">
        <div className="w-screen h-screen bg-gray-300 fixed -z-10"></div>
        <Logo />
        <Navigation />
        <Outlet />
      </main>
    </CryptoProvider>
  );
};

export default Home;
