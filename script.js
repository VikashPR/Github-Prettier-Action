export function getAboutUsLink(language) {
  switch (language.toLowerCase()) {
    case englishCode.toLowerCase():
      return "/about-us";
    case spanishCode.toLowerCase():
      return "/acerca-de";
  }
  return "";
}
