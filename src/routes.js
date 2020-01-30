import Article from './containers/Article/Article';
import TestComponent from './containers/TestComponent/TestComponent';
// import MyForm from './containers/MyForm/MyForm';

const routes = [
  {
    path: '/',
    component: Article,
    exact: true
  },
  {
    path: '/test',
    component: TestComponent,
    exact: true
  }
];

export default routes;
