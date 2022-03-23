<p align="center">
  <a href="https://www.metalsmith.io">
    <img alt="Metalsmith" src="https://www.glinka.co/assets/images/metalsmith-logo-bug.png" width="60" />
  </a>
  <a href="https://www.netlify.com/">
    <img alt="Netlify" src="https://metalsmith-netlify-starter.netlify.app/assets/images/netlify.png" width="60" />
  </a>
</p>
<h1 align="center">
  Metalsmith Netlify Starter
</h1>

Based on the Metalsmith blog starter. This starter is setup for content editing with the Netlify CMS and ready to deploy to Netlify with a couple of clicks. Check out a [demo of this starter](https://metalsmith-netlify-cms-starter.netlify.app/).

## Features
  - Pages and a blog
  - Netlify CMS with editor previews
  - Minifies HTML
  - Uses Markdown files for content
  - Uses Nunjucks templates for layout

## Want to try it out now?

Deploy to Netlify

Simply deploy a copy of the demo website to your Netlify account by clicking the button.  If you don't have an account, you can create one during this process. Netlify has a generous free tier, no credit card needed. 

Once you have clicked the button a new repository will be created in your GitHub account with this code and the Netlify account will be linked to this Github repo. Now, every time you commit a change to your Github repo, your site will be rebuild and deployed to Netlify's global CDN network.

All content may now be managed with the Netlify CMS and you may invite other contributors/editors as well. Netlify Identity is used to control access to the CMS admin console.


## Authentication
After deploying this project, Netlify Identity will add you as a CMS user and will email you an invite. It is not necessary to accept this invite if you wish to use an OAuth provider (e.g. Github) to manage authentication for your CMS. It is recommended to use this method of authentication as it removes the need for an email & password to log in to the CMS and is generally more secure. You will need to add an OAuth provider in your Netlify app settings under `Settings > Identity > External providers`.

Once you've added an OAuth provider, navigate to `/admin` on your site and log into your CMS.

## Local Development

Follow these steps to build a local development environment:

1.  **Create the Metalsmith starter.**

    Clone the starter repository to create a new site.

    ```shell
    git clone https://github.com/wernerglinka/metalsmith-netlify-starter.git my-site 
    ```

2.  **Start developing.**

    Navigate to the my-site directory and start it up.

    ```shell
    cd my-site/
    npm install
    npm start
    ```
    Your site is now running at `http://localhost:3000`!

3.  **Open the source code and start editing!**

    Open the `my-site` directory in your code editor of choice and edit `src/content/index.md`. Save your changes and the browser will update in real time!

## What's included?

A quick look at the top-level files and directories you'll see in this Metalsmith project.

    .
    ├── node_modules
    ├── src
    ├── templates
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── LICENSE
    ├── metalsmith.js
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all the node modules that your project depends on.

2.  **`/src`**: This directory will contain all the content that makes up your site.

3.  **`/templates`**: This directory will contain all the templates and template partials that will be used to render your site.

4.  **`/.eslintrc`**: This file contains all rules foir eslint.

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6.  **`.prettierignore`**: This file tells prettier what files it should ignore.

7.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

8.  **`LICENSE`**: This Metalsmith starter is licensed under the MIT license.

9.  **`metalsmith.js`**: This is the Metalsmith build file.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## Learn more about Metalsmith

Looking for more guidance? Full documentation for Metalsmith can be found [on the website](https://www.metalsmith.io). 

## Deploy

Deploy and Host on any static hosting service. For example [Netlify](https://www.netlify.com), [Vercel](https://vercel.com/) or [Cloudflare Pages](https://pages.cloudflare.com/).

Here is an article about [how to deploy Metalsmith on Netlify](https://www.netlify.com/blog/2015/12/08/a-step-by-step-guide-metalsmith-on-netlify/).

## Need help?
For getting help with setting up Netlify CMS, you may want to reach out to the Netlify team. [![Gitter](https://badges.gitter.im/netlify/netlify.svg)](https://gitter.im/netlify/NetlifyCMS)

To discuss all-things Metalsmith, please join the Metalsmith community at [![Gitter](https://badges.gitter.im/netlify/netlify.svg)](https://gitter.im/metalsmith/community) 