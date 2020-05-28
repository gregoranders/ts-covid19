import { lazy } from 'react';
const Country = lazy(() => import('components/pages/country'));
const World = lazy(() => import('components/pages/world'));
export const routes = [
    {
        name: 'World',
        path: '/',
        component: World,
        exact: true,
    },
    {
        name: 'Country/State',
        path: '/:country/:state',
        component: Country,
        exact: false,
    },
    {
        name: 'Country',
        path: '/:country',
        component: Country,
        exact: false,
    },
];
export default routes;
