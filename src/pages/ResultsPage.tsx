import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Download, Users } from "lucide-react";
import { Button, Card } from "@geenius-ui/react-css";

const data = [
    { name: "1 - Poor", value: 12 }, { name: "2 - Fair", value: 18 },
    { name: "3 - Good", value: 45 }, { name: "4 - Very Good", value: 89 },
    { name: "5 - Excellent", value: 164 }
];

export default function ResultsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: 4 }}>Results: Customer Satisfaction (CSAT)</h1>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "13px", display: "flex", alignItems: "center", gap: 6 }}><Users size={14} /> 328 Total Responses • Updated just now</p>
            </div>
            <Button variant="outline" icon={<Download size={16} />}>Export CSV</Button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <Card padding="lg">
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-4)" }}>Q1: How satisfied are you with our service?</h2>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
                    <div style={{ fontSize: "48px", fontWeight: 800, color: "var(--color-accent-primary)", lineHeight: 1 }}>4.2</div>
                    <div style={{ color: "var(--color-text-secondary)" }}>Average Rating<br />out of 5.0</div>
                </div>

                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-secondary)", fontSize: 13 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-secondary)", fontSize: 13 }} />
                        <Tooltip cursor={{ fill: "var(--color-bg-hover)" }} contentStyle={{ borderRadius: 8, border: "none", background: "var(--color-bg-primary)", boxShadow: "var(--card-shadow)", fontWeight: 600 }} />
                        <Bar dataKey="value" fill="var(--color-accent-primary)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </Card>

            <Card padding="lg">
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-4)" }}>Q2: What could we improve?</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                    {[
                        "The loading speed on the mobile app is a bit slow sometimes.",
                        "Would love to see a dark mode option natively.",
                        "Customer support was very helpful, no complaints!",
                        "Integration with Slack would be a game changer for our team."
                    ].map((text, i) => (
                        <div key={i} style={{ padding: "var(--space-3)", background: "var(--color-bg-secondary)", borderRadius: "var(--radius-sm)", fontSize: "14px", color: "var(--color-text-primary)", borderLeft: "3px solid var(--color-accent-primary)" }}>
                            {text}
                        </div>
                    ))}
                    <Button variant="ghost" className="view-all-btn">View all 145 responses</Button>
                </div>
            </Card>
        </div>
    </div>);
}
