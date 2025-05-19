module.export = {
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  output: "./",
  options: {
    func: {
      list: ["t"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    trans: {
      component: "Trans",
      i18nKey: "i18nKey",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    lngs: ["en", "hi", "ar", "pt"],
    defaultLng: "en",
    defaultNs: "translation",
    resource: {
      loadPath: "public/locales/{{lng}}/{{ns}}.json",
      savePath: "public/locales/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
    },
  },
};
