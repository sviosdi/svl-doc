// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
var qtCreatorTheme = {
  plain: {
    color: "#982e64",
    backgroundColor: "#f7f7f7",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "#f92672",
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#008000",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "#008000",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#808000",
      },
    },
    {
      types: ["number"],
      style: {
        color: "#000080",
      },
    },
    {
      types: ["builtin", "char", "constant", "function", "class-name"],
      style: {
        color: "#00677c",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#666",
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "#a6e22e",
        fontStyle: "italic",
      },
    },
    {
      types: ["tag", "keyword"],
      style: {
        color: "#092e64",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "#444",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "#808000",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
        opacity: 0.7,
      },
    },
    {
      types: ["property"],
      style: {
        color: "#092e64",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#a6e22e !important",
      },
    },
    {
      types: ["doctype"],
      style: {
        color: "#8292a2",
      },
    },
    {
      types: ["rule"],
      style: {
        color: "#e6db74",
      },
    },
  ],
};

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SavvyLite",
  tagline: "Documentation",
  url: "https://sviosdi.github.io",
  baseUrl: "/svl-doc/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sviosdi", // Usually your GitHub org/user name.
  projectName: "svl-doc", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl: "https://github.com/sviosdi/svl-doc/tree/main/",*/
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",*/
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      prism: {
        theme: qtCreatorTheme, //require("prism-react-renderer/themes/okaidia"),
        //  theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "SavvyLite",
        logo: {
          alt: "SavvyLiteLogo",
          src: "img/logo_svl.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://gitlab.com/sviosdi/signals_slots",
            label: "GitLab",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        /*links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} SavvyLite.`,
      },
    },
};

module.exports = config;
