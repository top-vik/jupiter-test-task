import { HOME_ROUTE, BLOG_ROUTE, SERVICES_ROUTE, ABOUT_ROUTE, PRICING_ROUTE } from "./utils/constants";
import { Home, About, Blog, Services, Pricing } from "./pages";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: BLOG_ROUTE,
        Component: Blog
    },
    {
        path: PRICING_ROUTE,
        Component: Pricing
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: SERVICES_ROUTE,
        Component: Services
    }
]