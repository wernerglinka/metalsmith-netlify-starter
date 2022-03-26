const data = {
  name: "data",
  label: "Data",
  files: [
    {
      label: "Navigation",
      name: "navigation",
      file: "src/content/data/navigation.json",
      fields: [
        {
          label: "Menu",
          name: "menu",
          widget: "list",
          fields: [
            {
              label: "Label",
              name: "label",
              widget: "string",
            },
            {
              label: "URL",
              name: "url",
              widget: "string",
            },
            {
              label: "Body Class",
              name: "bodyClass",
              widget: "string",
            },
          ],
        },
      ],
    },
    {
      label: "Site",
      name: "site",
      file: "src/content/data/site.json",
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
          label: "Author",
          name: "author",
          widget: "string",
        },
        {
          label: "Site URL",
          name: "siteUrl",
          widget: "string",
        },
        {
          label: "Site Owner",
          name: "siteOwner",
          widget: "string",
        },
        {
          label: "Validate",
          name: "validate",
          widget: "object",
          summary: "Validation",
          fields: [
            {
              label: "Google",
              name: "google",
              widget: "string",
              required: false,
            },
            {
              label: "Bing",
              name: "bing",
              widget: "string",
              required: false,
            },
          ],
        },
        {
          label: "Social",
          name: "social",
          widget: "object",
          summary: "Social",
          fields: [
            {
              label: "LinkedIn",
              name: "linkedIn",
              widget: "string",
              required: false,
            },
            {
              label: "GitHub",
              name: "gitHub",
              widget: "string",
              required: false,
            },
          ],
        },
        {
          label: "Social Image",
          name: "socialImage",
          widget: "image",
          required: false,
        },
      ],
    },
  ],
};

export default data;
