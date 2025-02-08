import React from "react";

import Footer from "@/components/layout/Footer";
import AuthNavigator from "@/src/auth/AuthNavigator";
import HeroLogin from "@/components/sections/Login/HeroLogin";
import MoreInfo from "@/components/sections/IndexSect/MoreInfo";
const AuthPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      <HeroLogin />
      <main className="flex-1 flex items-center justify-center">
        <AuthNavigator />
      </main>

    </div>
  );
};

export default AuthPage;
