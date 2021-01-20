module.exports = {
  title: "TAIKAI - Documentation",
  tagline:
    "This is the website used to our community to understand how the TAIKAI platform works",
  url: "https://docs.taikai.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "taikai",
  projectName: "taikai-docs",
  themeConfig: {
    navbar: {
      title: "TAIKAI Documentation",
      logo: {
        alt: "TAIKAI Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/taikai/taikai-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Website",
              href: "https://taikai.network",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/taikainetwork",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/taikainetwork",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/taikainetwork",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/company/taikainetwork",
            },
          ],
        },
        {
          title: "TAIKAI",
          items: [
            {
              label: "Blog",
              href: "https://taikai.network/blog",
            },
            {
              label: "Challenges",
              href: "https://taikai.network/challenges",
            },
            {
              label: "For Organizations",
              href: "https://taikai.network/organizations",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/taikai",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with ❤️  by TAIKAI Team`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/taikai/taikai-docs",
          routeBasePath: "/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
