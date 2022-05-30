/* @refresh reload */
import '@styles/globals.scss';

const routes = createRouterTree([
    {
        path: '/',
        component: lazy<any>(() => import('@pages/index')),
    },
    {
        path: '/about',
        component: lazy(() => import('@pages/about')),
    },
]);

render(() => {
    return (
        <>
            <MetaProvider>
                <Suspense>
                    <Router routes={routes} />
                </Suspense>
            </MetaProvider>
        </>
    );
}, document.getElementById('root') as HTMLElement);
