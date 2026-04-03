import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <nav className="nav">
      <div className="logo">🌍 GlobalApp</div>

      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="dropdown"
      >
        <option value="en">🇺🇸 English</option>
        <option value="hi">🇮🇳 Hindi</option>
        <option value="es">🇪🇸 Spanish</option>
        <option value="fr">🇫🇷 French</option>
        <option value="de">🇩🇪 German</option>
        <option value="zh">🇨🇳 Chinese</option>
        <option value="ar">🇸🇦 Arabic</option>
      </select>
    </nav>
  );
};

export default Navbar;