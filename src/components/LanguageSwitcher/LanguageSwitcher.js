import React from "react";
import { NavDropdown } from "react-bootstrap";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const availableLngs = {
  en: { nativeName: "English" },
  es: { nativeName: "Español" },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <NavDropdown
      align="end"
      title={
        <>
          <IoLanguage /> {availableLngs[i18n.resolvedLanguage].nativeName}
        </>
      }
      id="basic-nav-dropdown"
    >
      {Object.keys(availableLngs).map((langIdx) => {
        return (
          <NavDropdown.Item
            key={`lang-${langIdx}`}
            onClick={() => {
              i18n.changeLanguage(langIdx);
            }}
          >
            {availableLngs[langIdx].nativeName}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
};

export default LanguageSwitcher;
