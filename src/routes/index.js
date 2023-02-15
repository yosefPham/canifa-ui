// Layouts

// Pages
import Home from '~/pages/Home';
import Man from '~/pages/Man';
import Woman from '~/pages/Woman';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/man', component: Man },
    { path: '/woman', component: Woman },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
