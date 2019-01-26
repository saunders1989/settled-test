import AppContainer from '../views/App/app.container';
import HomeContainer from '../views/Home/home.container';
import PropertyContainer from '../views/Property/property.container';
import NotFound from '../views/NotFound';

const routes = [
  {
    component: AppContainer,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomeContainer
      },
      {
        path: '/property/:id',
        exact: true,
        component: PropertyContainer
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
