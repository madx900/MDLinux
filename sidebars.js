/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'en/basics/introduction',
        'en/basics/installation',
        'en/basics/command-line',
        'en/basics/file-system',
      ],
    },
    {
      type: 'category',
      label: 'Commands',
      items: [
        'en/commands/basic-commands',
        'en/commands/text-processing',
        'en/commands/process',
        'en/commands/package',
        'en/commands/network',
        'en/commands/security',
        'en/commands/system-admin',
        'en/commands/performance',
      ],
    },
    {
      type: 'category',
      label: 'Shell Scripting',
      items: [
        'en/scripting/bash-basics',
        'en/scripting/advanced-bash',
        'en/scripting/regex',
        'en/scripting/debugging',
        'en/scripting/script-examples',
      ],
    },
  ],
};

module.exports = sidebars;
