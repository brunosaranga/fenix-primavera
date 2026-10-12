import { content } from "../content";
import { useLocale } from "../context/LocaleContext";

// Returns the content tree for the current locale.
// Usage: const { home, common } = useContent();
export function useContent() {
    const { locale } = useLocale();
    return content[locale];
}
