import React from "react";

import AuthNavigator from "@/src/auth/AuthNavigator";
import HeroLogin from "@/components/sections/Login/HeroLogin";
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
