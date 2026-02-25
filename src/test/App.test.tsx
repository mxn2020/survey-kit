import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SurveysPage from "../pages/SurveysPage";
import BuilderPage from "../pages/BuilderPage";
import ResultsPage from "../pages/ResultsPage";

vi.mock("recharts", () => {
    const Original = vi.importActual("recharts");
    return { ...Original, ResponsiveContainer: ({ children }: any) => <div style={{ width: 800, height: 300 }}>{children}</div>, BarChart: () => <div data-testid="bar-chart" />, Bar: () => null, XAxis: () => null, YAxis: () => null, Tooltip: () => null };
});

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("SurveyKit")).toBeInTheDocument(); });
    it("SurveysPage renders", () => { wrap(<SurveysPage />); expect(screen.getByText("My Surveys")).toBeInTheDocument(); });
    it("BuilderPage renders", () => { wrap(<BuilderPage />); expect(screen.getByText("Question Types")).toBeInTheDocument(); });
    it("ResultsPage renders", () => { wrap(<ResultsPage />); expect(screen.getByText("Results: Customer Satisfaction (CSAT)")).toBeInTheDocument(); });
});
