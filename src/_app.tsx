/* @refresh reload */
import '@styles/globals.scss';
import routes from '~solid-pages';

render(() => {
    const Routes = useRoutes(routes);

    return (
        <>
            <Router>
                <MetaProvider>
                    <Suspense>
                        <Routes />
                    </Suspense>
                </MetaProvider>
            </Router>
        </>
    );
}, document.getElementById('root') as HTMLElement);
