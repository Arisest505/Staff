import React from "react";
import HamburgerToggle from "../HamburgerButton";
import Image from "next/image";

interface SidebarHeaderProps {
  isMinimized: boolean;
  toggleMinimize: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isMinimized, toggleMinimize }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      {/* Logo */}
      <div className="relative h-[40px] w-[144px] flex items-center justify-center">
          <Image
            src="/img/logo-vaya.webp"
            alt="logo-de-vaya-valla-publicidad"
            width={144}
            height={120}
            className="object-contain w-[120px] h-[120px]"
            draggable={false}
          />
        </div>

      {/* Botón de Hamburguesa */}
      <HamburgerToggle isOpen={!isMinimized} onClick={toggleMinimize} />
    </div>
  );
};

export default SidebarHeader;
