/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Basics',
      items: [
        '/en/basics/01-introduction',
        '/en/basics/02-installation',
        '/en/basics/03-command-line',
        '/en/basics/04-file-system',
      ],
    },
    {
      type: 'category',
      label: 'Commands',
      items: [
        '/en/commands/01-basic-commands',
        '/en/commands/02-system-admin',
        '/en/commands/03-network',
        '/en/commands/04-process',
        '/en/commands/05-text-processing',
        '/en/commands/06-package',
        '/en/commands/07-security',
        '/en/commands/08-performance',
      ],
    },
    {
      type: 'category',
      label: 'Shell Scripting',
      items: [
        '/en/scripting/01-bash-basics',
        '/en/scripting/02-advanced-bash',
        '/en/scripting/03-debugging',
        '/en/scripting/04-regex',
        '/en/scripting/05-script-examples',
      ],
    },
  ],
  arabicSidebar: [
    {
      type: 'category',
      label: 'الأساسيات',
      items: [
        '/ar/basics/01-introduction',
        '/ar/basics/02-installation',
        '/ar/basics/03-command-line',
        '/ar/basics/04-file-system',
      ],
    },
    {
      type: 'category',
      label: 'الأوامر',
      items: [
        '/ar/commands/01-basic-commands',
        '/ar/commands/02-system-admin',
        '/ar/commands/03-network',
        '/ar/commands/04-process',
        '/ar/commands/05-text-processing',
        '/ar/commands/06-package',
        '/ar/commands/07-security',
        '/ar/commands/08-performance',
      ],
    },
    {
      type: 'category',
      label: 'برمجة الشل',
      items: [
        '/ar/scripting/01-bash-basics',
        '/ar/scripting/02-advanced-bash',
        '/ar/scripting/03-debugging',
        '/ar/scripting/04-regex',
        '/ar/scripting/05-script-examples',
      ],
    },
  ],
};

module.exports = sidebars;
