/* @refresh reload */
import '@styles/globals.scss';
import { render } from 'solid-js/web';
import { Route, Router, Routes, useRoutes } from 'solid-app-router';
import { lazy } from 'solid-js';
import { MetaProvider } from 'solid-meta';
import routes from '~solid-pages';

const About = lazy(() => import('@pages/about'));
const App = lazy(() => import('@pages/index'));

render(() => {
    const Routes = useRoutes(routes);

    return (
        <>
            <Router>
                <MetaProvider>
                    <Routes />
                </MetaProvider>
            </Router>
        </>
    );
}, document.getElementById('root') as HTMLElement);
