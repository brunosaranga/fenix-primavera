import Seo from "../../components/layout/Seo/Seo";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import Button from "../../components/ui/Button/Button";
import { useContent } from "../../hooks/useContent";

export default function NotFound() {
    const { pages } = useContent();
    const page = pages.notFound;

    return (
        <>
            <Seo title={page.seo.title} />
            <PageHeader label="404" title={page.title} text={page.text} />
            <section className="section">
                <div className="container">
                    <Button to="/">{page.back}</Button>
                </div>
            </section>
        </>
    );
}
