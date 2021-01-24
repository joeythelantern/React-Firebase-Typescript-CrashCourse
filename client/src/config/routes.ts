import IRoute from "../interfaces/route";
import HomePage from "../pages/home";

const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: true
    }
];

export default routes;
