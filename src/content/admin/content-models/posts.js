const posts = {
  name: "posts",
  label: "Posts",
  folder: "src/content/blog",
  create: true,
  slug: "{{slug}}",
  fields: [
    {
      label: "Layout",
      name: "layout",
      widget: "hidden",
      default: "blog-post.njk",
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
      label: "Blog Title",
      name: "blogTitle",
      widget: "string",
    },
    {
      label: "Publish Date",
      name: "publishDate",
      widget: "dateTime",
    },
    {
      label: "Author",
      name: "author",
      widget: "string",
      required: false,
    },
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: false,
    },
    {
      label: "Featured Blogpost",
      name: "featuredBlogpost",
      widget: "boolean",
      required: false,
    },
    {
      label: "Featured Blogpost Order",
      name: "featuredBlogpostOrder",
      widget: "number",
      required: false,
    },
    {
      label: "Excerpt",
      name: "excerpt",
      widget: "string",
      required: false,
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
      required: false,
    },
  ],
};

export default posts;
