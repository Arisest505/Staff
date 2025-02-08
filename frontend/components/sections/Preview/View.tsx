"use client";

import React from "react";

const View: React.FC = () => {
  return (
    <div className="mt-5 p-5 bg-gray-800 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold">🔍 Sección de Vista</h2>
      <p className="mt-2 text-gray-300">
        Solo los usuarios autenticados pueden ver esto.
      </p>
    </div>
  );
};

export default View;
