// Layouts

// Pages
import Home from '~/pages/Home';
import Man from '~/pages/Man';
import Woman from '~/pages/Woman';
import User from '~/pages/User';
import Cart from '~/pages/Cart';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/man', component: Man },
    { path: '/woman', component: Woman },
    { path: '/user', component: User },
    { path: '/cart', component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
