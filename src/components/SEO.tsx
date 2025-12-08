import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

export function SEO({
  title,
  description,
  canonical,
  ogImage = "/og-default.jpg",
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    setMeta("description", description);
    setLink("canonical", canonical);

    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:url", canonical);
    setOG("og:image", ogImage);

    setMeta("twitter:card", "summary_large_image");
  }, [title, description, canonical, ogImage]);

  return null;
}

function setMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setOG(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}
