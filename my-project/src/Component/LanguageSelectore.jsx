import { useTranslation } from "react-i18next";

const LanguageSelectore = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="pl-[25px]">
      <select
        className="absolute top-[35px] right-[45px] p-[4px] rounded border"
        onChange={handleChange}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="hi">Hindi</option>
        <option value="pt">Portuguese</option>
      </select>
    </div>
  );
};

export default LanguageSelectore;
