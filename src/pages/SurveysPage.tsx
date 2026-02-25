import { Users, Clock, MoreHorizontal } from "lucide-react";

export default function SurveysPage() {
    const surveys = [
        { id: "1", title: "Customer Satisfaction (CSAT) Q3", status: "Active", responses: 128, created: "2 days ago" },
        { id: "2", title: "Product Feature Feedback", status: "Active", responses: 89, created: "5 days ago" },
        { id: "3", title: "Annual Employee Engagement", status: "Draft", responses: 0, created: "1 week ago" },
        { id: "4", title: "Website Redesign Beta Feedback", status: "Closed", responses: 342, created: "2 months ago" },
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700 }}>My Surveys</h1>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <select className="input" style={{ width: "auto", padding: "8px 32px 8px 12px" }}><option>All Surveys</option><option>Active</option><option>Draft</option><option>Closed</option></select>
            </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {surveys.map(s => (
                <div key={s.id} className="card" style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "transform 0.2s, box-shadow 0.2s" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                            <h2 style={{ fontSize: "16px", fontWeight: 600 }}>{s.title}</h2>
                            <span className={`badge badge-${s.status.toLowerCase()}`}>{s.status}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", color: "var(--color-text-secondary)", fontSize: "13px" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Users size={14} /> {s.responses} Responses</span>
                            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={14} /> {s.created}</span>
                        </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                        <button className="btn btn-ghost">Edit</button>
                        <button className="btn btn-primary btn-sm">View Results</button>
                        <button className="btn-icon"><MoreHorizontal size={18} /></button>
                    </div>
                </div>
            ))}
        </div>
    </div>);
}
