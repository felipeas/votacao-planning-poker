import App from './containers/App';
import Account from './containers/Account';
import Feed from './containers/Feed';
import Game from './containers/Game';

function checkLoggedIn(nextState, replaceState) {
    if (!localStorage.getItem('credentials')) {
        replaceState(null, '/');
    }
}

const routes = [
    {
        path: '/',
        component: App,
        indexRoute: { component: Feed },
        childRoutes: [
            { path: 'teste', component: Votacao, onEnter: checkLoggedIn },
            { path: 'sprints', component: Sprints, onEnter: checkLoggedIn },
            { path: 'sprint(/:id)', component: Sprint, onEnter: checkLoggedIn }
            { path: 'votacao(/:id)', component: Votacao, onEnter: checkLoggedIn }
        ]
    },
    {
        path: '/register',
        component: Account
    }
];

export default routes;
