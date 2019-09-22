import { Home, Login, Register, NotFound } from '../containers'

export const serverRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/register',
        component: Register,
        exact: true,
    },
    {
        name: 'NotFound',
        component: NotFound,
    },

]
