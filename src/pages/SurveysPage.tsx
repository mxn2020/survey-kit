import { Users, Clock, MoreHorizontal } from "lucide-react";
import { Button, Card, Badge, Select, SelectItem } from "@geenius-ui/react-css";

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
            <Select defaultValue="all">
                <SelectItem value="all">All Surveys</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
            </Select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {surveys.map(s => (
                <Card key={s.id} padding="lg" hover>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                                <h2 style={{ fontSize: "16px", fontWeight: 600 }}>{s.title}</h2>
                                <Badge variant={s.status === "Active" ? "success" : s.status === "Draft" ? "warning" : "secondary"}>{s.status}</Badge>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", color: "var(--color-text-secondary)", fontSize: "13px" }}>
                                <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Users size={14} /> {s.responses} Responses</span>
                                <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={14} /> {s.created}</span>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                            <Button variant="ghost">Edit</Button>
                            <Button variant="primary" size="sm">View Results</Button>
                            <Button variant="ghost" size="sm" icon={<MoreHorizontal size={18} />} />
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    </div>);
}
