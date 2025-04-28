/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'installation'],
    },
    {
      type: 'category',
      label: 'Basics',
      items: [
        'basics/command-line',
        'basics/file-system',
        'basics/user-management',
      ],
    },
    {
      type: 'category',
      label: 'System Administration',
      items: [
        'system-admin/package-management',
        'system-admin/service-management',
        'system-admin/monitoring',
        'system-admin/logs',
      ],
    },
    {
      type: 'category',
      label: 'Networking',
      items: [
        'networking/basics',
        'networking/configuration',
        'networking/security',
        'networking/tools',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/basics',
        'security/users-permissions',
        'security/firewall',
        'security/encryption',
      ],
    },
    {
      type: 'category',
      label: 'Shell Scripting',
      items: [
        'scripting/basics',
        'scripting/variables',
        'scripting/control-flow',
        'scripting/functions',
        'scripting/debugging',
      ],
    },
  ],
};

module.exports = sidebars;
