import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const translations = {
  en: {
    title: "Welcome",
    description: "This is a multilingual React application",
  },
  hi: {
    title: "स्वागत है",
    description: "यह एक बहुभाषी React एप्लिकेशन है",
  },
  es: {
    title: "Bienvenido",
    description: "Esta es una aplicación React multilingüe",
  },
  fr: {
    title: "Bienvenue",
    description: "Ceci est une application React multilingue",
  },
  de: {
    title: "Willkommen",
    description: "Dies ist eine mehrsprachige React-Anwendung",
  },
  zh: {
    title: "欢迎",
    description: "这是一个多语言 React 应用",
  },
  ar: {
    title: "مرحبًا",
    description: "هذا تطبيق React متعدد اللغات",
  }
};

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("appLanguage");
    return translations[saved] ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("appLanguage", language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, text: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};