"use client";

import React from "react";

const ContrastView: React.FC = () => {
  return (
    <div className="p-5 bg-gray-900 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold">🌟 Sección de Contraste</h2>
      <p className="mt-2 text-gray-300">
        Esta es una vista de contraste protegida para usuarios autenticados.
      </p>
    </div>
  );
};

export default ContrastView;
