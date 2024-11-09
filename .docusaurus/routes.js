import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'eb7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '4c4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '07f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '3a4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '694'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8c1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '596'),
    exact: true
  },
  {
    path: '/addons',
    component: ComponentCreator('/addons', 'dca'),
    exact: true
  },
  {
    path: '/addons/archive',
    component: ComponentCreator('/addons/archive', '9aa'),
    exact: true
  },
  {
    path: '/addons/azalea',
    component: ComponentCreator('/addons/azalea', 'df5'),
    exact: true
  },
  {
    path: '/addons/tags',
    component: ComponentCreator('/addons/tags', '32e'),
    exact: true
  },
  {
    path: '/addons/tags/essentials',
    component: ComponentCreator('/addons/tags/essentials', 'ea3'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '5f3'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '290'),
    exact: true
  },
  {
    path: '/blog/azalea-v2.2-format',
    component: ComponentCreator('/blog/azalea-v2.2-format', '584'),
    exact: true
  },
  {
    path: '/blog/blog-update',
    component: ComponentCreator('/blog/blog-update', 'b8f'),
    exact: true
  },
  {
    path: '/blog/Slug',
    component: ComponentCreator('/blog/Slug', '1dc'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '81d'),
    exact: true
  },
  {
    path: '/blog/tags/bedwars',
    component: ComponentCreator('/blog/tags/bedwars', '3b5'),
    exact: true
  },
  {
    path: '/blog/tags/special',
    component: ComponentCreator('/blog/tags/special', '255'),
    exact: true
  },
  {
    path: '/blog/tags/updates',
    component: ComponentCreator('/blog/tags/updates', '0d8'),
    exact: true
  },
  {
    path: '/blog/tags/v-2-2',
    component: ComponentCreator('/blog/tags/v-2-2', '65d'),
    exact: true
  },
  {
    path: '/blog/trash',
    component: ComponentCreator('/blog/trash', 'f78'),
    exact: true
  },
  {
    path: '/blog/Trash-gay',
    component: ComponentCreator('/blog/Trash-gay', 'f38'),
    exact: true
  },
  {
    path: '/downloader',
    component: ComponentCreator('/downloader', '31c'),
    exact: true
  },
  {
    path: '/downloads',
    component: ComponentCreator('/downloads', '317'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '965'),
    exact: true
  },
  {
    path: '/partnered',
    component: ComponentCreator('/partnered', 'eb6'),
    exact: true
  },
  {
    path: '/register',
    component: ComponentCreator('/register', '56e'),
    exact: true
  },
  {
    path: '/themegen',
    component: ComponentCreator('/themegen', 'ad3'),
    exact: true
  },
  {
    path: '/version-archive',
    component: ComponentCreator('/version-archive', 'd33'),
    exact: true
  },
  {
    path: '/voltrex',
    component: ComponentCreator('/voltrex', '270'),
    exact: true
  },
  {
    path: '/community',
    component: ComponentCreator('/community', '7ac'),
    routes: [
      {
        path: '/community',
        component: ComponentCreator('/community', '8d7'),
        routes: [
          {
            path: '/community',
            component: ComponentCreator('/community', '41c'),
            routes: [
              {
                path: '/community/forums',
                component: ComponentCreator('/community/forums', 'a30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community/welcome',
                component: ComponentCreator('/community/welcome', 'a1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4e0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd3d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b46'),
            routes: [
              {
                path: '/docs/category/features',
                component: ComponentCreator('/docs/category/features', 'be0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/getting-started',
                component: ComponentCreator('/docs/category/getting-started', '01f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/chatranks',
                component: ComponentCreator('/docs/tutorial-basics/chatranks', '21a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/getting_admin_panel',
                component: ComponentCreator('/docs/tutorial-basics/getting_admin_panel', 'e46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/installation',
                component: ComponentCreator('/docs/tutorial-basics/installation', 'f25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/modules',
                component: ComponentCreator('/docs/tutorial-basics/modules', 'b6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/prefix',
                component: ComponentCreator('/docs/tutorial-basics/prefix', 'bd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/warps',
                component: ComponentCreator('/docs/tutorial-basics/warps', 'dd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-features/platformSettings',
                component: ComponentCreator('/docs/tutorial-features/platformSettings', '077'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-features/ui-builder',
                component: ComponentCreator('/docs/tutorial-features/ui-builder', 'db4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '77e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
