const pages = {
  name: "pages",
  label: "Pages",
  folder: "src/content/",
  create: true,
  slug: "{{slug}}",
  fields: [
    {
      label: "Layout",
      name: "layout",
      widget: "hidden",
      default: "simple.njk",
    },
    {
      label: "Body Class",
      name: "bodyClass",
      widget: "string",
      required: false,
    },
    {
      label: "SEO",
      name: "seo",
      widget: "object",
      summary: "SEO Properties",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "Description",
          name: "description",
          widget: "string",
        },
        {
          label: "Social Image",
          name: "socialImage",
          widget: "image",
          required: false,
        },
        {
          label: "Canonical Overwrite",
          name: "canonicalOverwrite",
          widget: "string",
          required: false,
        },
      ],
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
      required: false,
    },
  ],
};

export default pages;
