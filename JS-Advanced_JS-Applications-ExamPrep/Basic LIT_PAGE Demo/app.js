import page from '../node_modules/page/page.mjs';
import { showAbout } from './src/views/about.js';
import { showCatalog } from './src/views/catalog.js';
import { showHome } from './src/views/home.js';

const root = document.querySelector('main');

page('/', showHome);
page('/catalog', showCatalog);
page('/about', showAbout);

page.start();
