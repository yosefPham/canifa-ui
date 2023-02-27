// Layouts

// Pages
import Home from '~/pages/Home';
import Man from '~/pages/Man';
import Woman from '~/pages/Woman';
import User from '~/pages/User';
import Cart from '~/pages/Cart';
import ProductDetail from '~/pages/ProductDetail';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/man', component: Man },
    { path: '/woman', component: Woman },
    { path: '/user', component: User },
    { path: '/cart', component: Cart },
    { path: '/product-detail', component: ProductDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
