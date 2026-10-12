import {
    Archive,
    BadgeCheck,
    Banknote,
    BarChart3,
    BookOpen,
    Calculator,
    Check,
    CircleDollarSign,
    Cloud,
    FileText,
    Gauge,
    Handshake,
    KeyRound,
    MessageCircle,
    Monitor,
    Moon,
    Globe,
    RefreshCcw,
    Server,
    ShieldCheck,
    ShoppingCart,
    Store,
    Sun,
    TrendingDown,
    TrendingUp,
    Users,
    UserRoundCheck,
} from "lucide-react";

// Content files refer to icons by name. To use Fenix's own icons later,
// change the mapping here and nothing else.
const ICONS = {
    team: Users,
    follow: UserRoundCheck,
    partner: BadgeCheck,
    tailored: Handshake,
    costs: TrendingDown,
    realtime: Gauge,
    errors: ShieldCheck,
    cloud: Cloud,
    server: Server,
    subscription: RefreshCcw,
    license: KeyRound,
    check: Check,
    whatsapp: MessageCircle,
    sun: Sun,
    moon: Moon,
    globe: Globe,
    erp: Monitor,
    accounting: Calculator,
    hr: Users,
    pos: Store,
    invoice: FileText,
    assets: Archive,
    treasury: Banknote,
    purchases: ShoppingCart,
    sales: TrendingUp,
    training: BookOpen,
    chart: BarChart3,
    money: CircleDollarSign,
};

export default function Icon({ name, size = 24, strokeWidth = 1.5, className, label }) {
    const Component = ICONS[name];
    if (!Component) {
        if (import.meta.env.DEV) {
            console.warn(`Icon "${name}" is not mapped in ui/Icon`);
        }
        return null;
    }
    return (
        <Component
            size={size}
            strokeWidth={strokeWidth}
            className={className}
            aria-hidden={label ? undefined : true}
            aria-label={label}
            role={label ? "img" : undefined}
        />
    );
}
