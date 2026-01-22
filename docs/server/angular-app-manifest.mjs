
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/negative-portfolio',
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
    'index.csr.html': {size: 6078, hash: 'c69a1e266581107d8d9215ee43f6e509b45429e81ee9ea1f08a4fb7a20f054f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 987, hash: 'd00726430e83b6eb8fe2eecf831b4ab4ab4e0652e22e309f1798251e2e70755e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29028, hash: '49e5f39e2ff40a8f318eca447e199e081c026a77d702387f296d7b6a4e212706', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'publications/index.html': {size: 24706, hash: 'b3cab082bbfec429e7c8a383cb67902450aada2c0cf59f0b8dd1bf6d802c1204', text: () => import('./assets-chunks/publications_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 20555, hash: '6d96d1702dead85c34f630437429ae4f9876346112787f6fbf933f6c625718f3', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 19254, hash: '0e8dddaa8342b9868e2e33285e48a4ab0ef5b0bf46859e276449238044d8273d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-WVJ75RSC.css': {size: 23244, hash: 'a/syX6gJMFo', text: () => import('./assets-chunks/styles-WVJ75RSC_css.mjs').then(m => m.default)}
  },
};
