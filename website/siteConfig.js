/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://docusaurus.io/img/users/flipper.png',
    infoLink: 'https://fbflipper.com',
    pinned: true,
    description: "Flipper"
  },
  {
    caption: 'User2',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://docusaurus.io/img/users/jest.png',
    infoLink: 'https://jestjs.io',
    pinned: true,
    description: "Jest"
  },
  {
    caption: 'User3',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://docusaurus.io/img/users/makeitopen.png',
    infoLink: 'https://makeitopen.com',
    pinned: true,
    description: "MakeItOpen"
  },
  {
    caption: 'User4',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://docusaurus.io/img/users/metro.svg',
    infoLink: 'https://facebook.github.io/metro',
    pinned: true,
    description: "Metro"
  },
  {
    caption: 'User5',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://docusaurus.io/img/users/reason-react.svg',
    infoLink: 'https://reasonml.github.io/reason-react',
    pinned: true,
    description: "Reason React"
  },
];

const siteConfig = {
  title: 'EDQ App Docs', // Title for your website.
  tagline: 'EDQ - Emergency Department Queuing Application - Patientway',
  url: 'https://patientway.com', // Your website URL
  baseUrl: '/', // Base URL for your project */,
  docusaurusUrl: 'https://docusaurus.io/', // Docusaurus URL for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'doc-test',
  organizationName: 'patientway',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/batman.png',
  footerIcon: 'img/batman.png',
  favicon: 'img/updemo1.png',

  /* Colors for website */
  colors: {
    primaryColor: '#272928',
    secondaryColor: '#272928',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
