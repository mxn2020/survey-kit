import { Link, useLocation } from "react-router-dom";
import { ListTodo, PenTool, BarChart3, Settings, HelpCircle } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: ListTodo, label: "My Surveys" },
        { to: "/builder", icon: PenTool, label: "Builder" },
        { to: "/results", icon: BarChart3, label: "Results" },
        { to: "/settings", icon: Settings, label: "Settings" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-card)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-6)", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <div style={{ background: "var(--color-accent-primary)", color: "var(--color-text-inverse)", padding: 6, borderRadius: "var(--radius-sm)" }}><HelpCircle size={18} /></div>
                <strong style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.5px" }}>SurveyKit</strong>
            </div>
        </div>

        <div style={{ padding: "var(--space-4)" }}>
            <button className="btn btn-primary" style={{ width: "100%" }}>+ New Survey</button>
        </div>

        <nav style={{ padding: "0 var(--space-3)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "10px 12px", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-accent-soft)" : "transparent", fontWeight: loc.pathname === l.to ? 600 : 500, transition: "all var(--transition-fast)" }}><l.icon size={18} />{l.label}</Link>)}
        </nav>

        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", color: "var(--color-text-secondary)", fontWeight: 500 }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--color-bg-tertiary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700 }}>MN</div>
                Workspace
            </div>
            <ThemeToggle />
        </div>
    </aside>);
}
