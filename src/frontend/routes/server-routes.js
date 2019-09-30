import { Home, Login, Register, NotFound, Player } from '../containers'

export const serverRoutes = isLogged => ([
    {
        path: '/',
        component: isLogged ? Home : Login,
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
        path: '/player/:id',
        exact: true,
        component: isLogged ? Player : Login,
    },
    {
        name: 'NotFound',
        component: NotFound,
    },
])
