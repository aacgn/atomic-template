import { AtomicRouter } from "@aacgn/atomic";

import WelcomePage from "@pages/WelcomePage";

const routes = [
    {
        path: '/',
        page: WelcomePage()
    }
];

const Router = new AtomicRouter({
    routes: routes,
    mode: "history",
    transitionPage: null
});

export default Router;