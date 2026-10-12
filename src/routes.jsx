import Layout from "./components/layout/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Solutions from "./pages/Solutions/Solutions";
import SolutionDetail from "./pages/SolutionDetail/SolutionDetail";
import PublicSector from "./pages/PublicSector/PublicSector";
import Training from "./pages/Training/Training";
import HowToChoose from "./pages/HowToChoose/HowToChoose";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

// Single source of truth: the router AND the navbar read this list.
// `labelKey` points to content/<locale>/nav.js. `inNav` controls navbar visibility.
export const pageRoutes = [
    { path: "/", labelKey: "home", element: <Home />, inNav: false },
    { path: "/sobre", labelKey: "about", element: <About />, inNav: true },
    { path: "/solucoes", labelKey: "solutions", element: <Solutions />, inNav: true },
    { path: "/solucoes/:slug", labelKey: "solutions", element: <SolutionDetail />, inNav: false },
    { path: "/setor-publico", labelKey: "publicSector", element: <PublicSector />, inNav: true },
    { path: "/formacao", labelKey: "training", element: <Training />, inNav: true },
    { path: "/como-escolher", labelKey: "howToChoose", element: <HowToChoose />, inNav: false },
    { path: "/contactos", labelKey: "contact", element: <Contact />, inNav: false },
];

export const navRoutes = pageRoutes.filter((route) => route.inNav);

export const routerConfig = [
    {
        path: "/",
        element: <Layout />,
        children: [
            ...pageRoutes.map(({ path, element }) =>
                path === "/" ? { index: true, element } : { path: path.slice(1), element }
            ),
            { path: "*", element: <NotFound /> },
        ],
    },
];
