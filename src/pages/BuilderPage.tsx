import { GripVertical, Type, List, Save, Settings, Play } from "lucide-react";

export default function BuilderPage() {
    const questions = [
        { id: "q1", type: "rating", text: "How satisfied are you with our service?", required: true },
        { id: "q2", type: "text", text: "What could we improve?", required: false },
        { id: "q3", type: "choice", text: "How did you hear about us?", required: true }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1200, margin: "0 auto", height: "calc(100vh - 80px)", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: 4 }}>Customer Satisfaction (CSAT) Q3</h1>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "13px" }}>Status: <span className="badge badge-draft">Draft</span> • Last saved 2 mins ago</p>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <button className="btn btn-ghost"><Settings size={16} /> Settings</button>
                <button className="btn"><Play size={16} /> Preview</button>
                <button className="btn btn-primary"><Save size={16} /> Publish Survey</button>
            </div>
        </div>

        <div style={{ display: "flex", gap: "var(--space-6)", flex: 1, minHeight: 0 }}>
            <div style={{ width: 280, background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)", overflowY: "auto" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 1 }}>Question Types</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                    {[
                        { icon: Type, label: "Short Text" },
                        { icon: List, label: "Multiple Choice" },
                        { icon: Play, label: "NPS Rating" }, // using play as dummy
                    ].map(t => (
                        <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "10px 12px", border: "1px dashed var(--color-border-strong)", borderRadius: "var(--radius-sm)", cursor: "grab", background: "var(--color-bg-primary)", fontWeight: 500 }}>
                            <t.icon size={16} style={{ color: "var(--color-accent-primary)" }} /> {t.label}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ flex: 1, background: "var(--color-bg-editor)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "var(--space-6)", overflowY: "auto", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                {questions.map((q, i) => (
                    <div key={q.id} className="card" style={{ padding: 0, display: "flex", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                        <div style={{ width: 32, background: "var(--color-bg-tertiary)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "grab", color: "var(--color-text-secondary)" }}>
                            <GripVertical size={16} />
                        </div>
                        <div style={{ padding: "var(--space-4)", flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
                                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase" }}>Q{i + 1} • {q.type}</div>
                                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "12px" }}>
                                    <input type="checkbox" checked={q.required} readOnly style={{ accentColor: "var(--color-accent-primary)" }} /> Required
                                </div>
                            </div>
                            <input type="text" className="input" defaultValue={q.text} style={{ fontSize: "16px", fontWeight: 600, background: "transparent", border: "none", padding: 0, borderBottom: "1px solid transparent", borderRadius: 0 }} onFocus={(e) => e.target.style.borderBottomColor = "var(--color-accent-primary)"} onBlur={(e) => e.target.style.borderBottomColor = "transparent"} />

                            {q.type === "rating" && (
                                <div style={{ display: "flex", gap: 8, marginTop: "var(--space-4)" }}>
                                    {[1, 2, 3, 4, 5].map(n => <div key={n} style={{ width: 40, height: 40, borderRadius: 4, border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, color: "var(--color-text-secondary)", background: "var(--color-bg-primary)" }}>{n}</div>)}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>);
}
