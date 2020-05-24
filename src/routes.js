import Characters from './containers/Characters';
import Locations from './containers/Locations';
import Episodes from './containers/Episodes';

const routes = [
  {
    path: '/',
    component: Characters,
    exact: true
  },
  {
    path: '/locations',
    component: Locations,
    exact: true
  },
  {
    path: '/episodes',
    component: Episodes,
    exact: true
  }
];

export default routes;
