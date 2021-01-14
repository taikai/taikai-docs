
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','657'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','894'),
  exact: true,
},
{
  path: '/doc1',
  component: ComponentCreator('/doc1','9f0'),
  exact: true,
},
{
  path: '/doc2',
  component: ComponentCreator('/doc2','328'),
  exact: true,
},
{
  path: '/doc3',
  component: ComponentCreator('/doc3','5d3'),
  exact: true,
},
{
  path: '/how-to-create-challenge',
  component: ComponentCreator('/how-to-create-challenge','7f2'),
  exact: true,
},
{
  path: '/how-to-create-project',
  component: ComponentCreator('/how-to-create-project','640'),
  exact: true,
},
{
  path: '/how-to-register',
  component: ComponentCreator('/how-to-register','08f'),
  exact: true,
},
{
  path: '/how-to-vote',
  component: ComponentCreator('/how-to-vote','424'),
  exact: true,
},
{
  path: '/matchmaking',
  component: ComponentCreator('/matchmaking','d09'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
