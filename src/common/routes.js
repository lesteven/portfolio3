import makeRouteObject from './utils/makeRouteObject';
import HomePage from './views/home/HomePage';
import AboutPage from './views/about/AboutPage';

const prefix = '';
const exactTrue = true;
const exactFalse = false;

const homeURL = '/';
const homeTitle = 'Home';

const aboutURL = '/about';
const aboutTitle = 'About';



const routes = {
  routes: [
    makeRouteObject(
      prefix,
      aboutURL,
      AboutPage,
      exactTrue,
      aboutTitle,
    ),
    makeRouteObject(
      prefix,
      homeURL,
      HomePage,
      exactTrue,
      homeTitle,
    ),
  ],
};


export default routes;
