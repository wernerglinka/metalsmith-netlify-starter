import Post from "./post.js";
import Page from "./page.js";

// Register components as the preview for entries
CMS.registerPreviewTemplate("blog", Post);
CMS.registerPreviewTemplate("pages", Page);

// Register any CSS file on the home page as a preview style
fetch("/")
  .then(response => response.text())
  .then(html => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach(tag => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
