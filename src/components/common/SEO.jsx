import { useEffect } from "react";

const SITE_URL = "https://errorfixsolutions.online";

const DEFAULT_TITLE =
  "Errorfix Solution | Web, Mobile App, Software & AI Development";

const DEFAULT_DESCRIPTION =
  "Errorfix Solution provides professional website development, mobile app development, desktop software, AI solutions, UI/UX design and digital solutions for businesses worldwide.";

const DEFAULT_KEYWORDS =
  "website development, website designing, mobile app development, software development, desktop app development, AI development, UI UX design, digital marketing, Errorfix Solution";

export default function SEO({
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  image = `${SITE_URL}/og-image.png`,
  noIndex = false,
}) {
  const pageTitle = title || DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageCanonical = canonical || SITE_URL;

  useEffect(() => {
    document.title = pageTitle;

    const setMeta = (name, content) => {
      if (!content) return;

      let element = document.querySelector(`meta[name="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      if (!content) return;

      let element = document.querySelector(`meta[property="${property}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Basic SEO
    setMeta("description", pageDescription);
    setMeta("keywords", keywords);
    setMeta("robots", noIndex ? "noindex,nofollow" : "index,follow");

    // Author / theme
    setMeta("author", "Errorfix Solution");
    setMeta("theme-color", "#111827");

    // Canonical
    let canonicalElement = document.querySelector('link[rel="canonical"]');

    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalElement);
    }

    canonicalElement.setAttribute("href", pageCanonical);

    // Open Graph
    setProperty("og:title", pageTitle);
    setProperty("og:description", pageDescription);
    setProperty("og:type", "website");
    setProperty("og:url", pageCanonical);
    setProperty("og:image", image);
    setProperty("og:site_name", "Errorfix Solution");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", pageDescription);
    setMeta("twitter:image", image);

    // Cleanup isn't necessary because the same elements are reused.
  }, [pageTitle, pageDescription, keywords, pageCanonical, image, noIndex]);

  return null;
}
