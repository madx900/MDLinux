// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MDLinux',
  tagline: 'Comprehensive Linux Documentation in English and Arabic',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://madx900.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/MDLinux/',

  // GitHub pages deployment config
  organizationName: 'madx900',
  projectName: 'MDLinux',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    localeConfigs: {
      en: {
        htmlLang: 'en',
        direction: 'ltr',
      },
      ar: {
        htmlLang: 'ar',
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/madx900/MDLinux/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MDLinux',
        logo: {
          alt: 'MDLinux Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/madx900/MDLinux',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/en/basics/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/madx900/MDLinux/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/madx900/MDLinux',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} MDLinux. Built with Docusaurus.`,
      },
      prism: {
        theme: {
          plain: {
            color: "#393A34",
            backgroundColor: "#f6f8fa"
          },
          styles: [
            {
              types: ["comment", "prolog", "doctype", "cdata"],
              style: {
                color: "#999988",
                fontStyle: "italic"
              }
            },
            {
              types: ["namespace"],
              style: {
                opacity: 0.7
              }
            },
            {
              types: ["string", "attr-value"],
              style: {
                color: "#e3116c"
              }
            },
            {
              types: ["punctuation", "operator"],
              style: {
                color: "#393A34"
              }
            },
            {
              types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
              style: {
                color: "#36acaa"
              }
            },
            {
              types: ["atrule", "keyword", "attr-name", "selector"],
              style: {
                color: "#00a4db"
              }
            },
            {
              types: ["function", "deleted", "tag"],
              style: {
                color: "#d73a49"
              }
            },
            {
              types: ["function-variable"],
              style: {
                color: "#6f42c1"
              }
            },
            {
              types: ["tag", "selector", "keyword"],
              style: {
                color: "#00009f"
              }
            }
          ]
        },
        darkTheme: {
          plain: {
            color: "#F8F8F2",
            backgroundColor: "#282A36"
          },
          styles: [
            {
              types: ["prolog", "constant", "builtin"],
              style: {
                color: "rgb(189, 147, 249)"
              }
            },
            {
              types: ["inserted", "function"],
              style: {
                color: "rgb(80, 250, 123)"
              }
            },
            {
              types: ["deleted"],
              style: {
                color: "rgb(255, 85, 85)"
              }
            },
            {
              types: ["changed"],
              style: {
                color: "rgb(255, 184, 108)"
              }
            },
            {
              types: ["punctuation", "symbol"],
              style: {
                color: "rgb(248, 248, 242)"
              }
            },
            {
              types: ["string", "char", "tag", "selector"],
              style: {
                color: "rgb(255, 121, 198)"
              }
            },
            {
              types: ["keyword", "variable"],
              style: {
                color: "rgb(189, 147, 249)",
                fontStyle: "italic"
              }
            },
            {
              types: ["comment"],
              style: {
                color: "rgb(98, 114, 164)"
              }
            },
            {
              types: ["attr-name"],
              style: {
                color: "rgb(241, 250, 140)"
              }
            }
          ]
        },
      },
    }),
};

module.exports = config;
