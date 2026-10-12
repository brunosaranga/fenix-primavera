import { Helmet } from "react-helmet-async";

// Per-page <title> and meta tags. Every page renders one <Seo />.
export default function Seo({ title, description, image = "/og-image.jpg" }) {
    return (
        <Helmet>
            <title>{title}</title>
            {description ? <meta name="description" content={description} /> : null}
            <meta property="og:title" content={title} />
            {description ? <meta property="og:description" content={description} /> : null}
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image} />
        </Helmet>
    );
}
