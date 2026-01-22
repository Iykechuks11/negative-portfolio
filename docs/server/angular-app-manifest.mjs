
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/negative-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/negative-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/negative-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/negative-portfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/negative-portfolio/publications"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6079, hash: '9c71e7496f40eb7a3125a651939322bcf892669973aae0a9e4354e716d757ba7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 988, hash: 'f103bcee4016ea293643ea7e89538a2b198086eb86a07f0d421e9d16a2b47b10', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 20556, hash: 'e1be6147c77ff4ac5b464c324a03f458a6aa5f7dd7bfc1c44f98bc5f7b915ae5', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29029, hash: 'fd8a8b91fbeb7264674ee90bb12352ea680ac7574ce62a39087c8204f610565a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 19255, hash: '4a9d2f334a0cddfc4b21f39bb37c891cb53eb7f24f64f3e40e89f3f882ff5361', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'publications/index.html': {size: 24707, hash: '535901fc4bdef935c0a8de0491bc024e42d701609c7d29d1538d4f2eeacffc1e', text: () => import('./assets-chunks/publications_index_html.mjs').then(m => m.default)},
    'styles-WVJ75RSC.css': {size: 23244, hash: 'a/syX6gJMFo', text: () => import('./assets-chunks/styles-WVJ75RSC_css.mjs').then(m => m.default)}
  },
};
