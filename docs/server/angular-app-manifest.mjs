
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/publications"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6073, hash: '487ac6d0bc161ef2458f6f61cacbbbdec27b5b46ef19680a4547a09db1543487', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 982, hash: '310c66291b7248002279ad9761292b066c928addec6435b901690c8dfd552b4a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 19219, hash: '5d9f5aa830b1b68745e7eeb5431ebc5486db64df07ac4ef4ebfa9d3fe278703a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28981, hash: '20a5d662712037775bbd3c9aa68d703036cb5b07c5a52ec8146430f71125731e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'publications/index.html': {size: 24671, hash: '5022338cde25b27de5906f911924fff8b783304d8215ad15e7128ae74f6fa58f', text: () => import('./assets-chunks/publications_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 20520, hash: '1d6611c15677ca613df55b79d1602fdefc72d3429d10d4182555931e67fb54b2', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-DDI4J6WS.css': {size: 24061, hash: '1ApNTVBEO0s', text: () => import('./assets-chunks/styles-DDI4J6WS_css.mjs').then(m => m.default)}
  },
};
