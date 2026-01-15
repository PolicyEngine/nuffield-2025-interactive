import { useState } from "react";
import { InteractiveIdeasList } from "./components/InteractiveIdeasList";

const projectSummary = `PolicyEngine builds interactive tools that help everyone in the UK—regardless of policy expertise—understand how tax and benefit policy affects their country, their community, and their household. Nuffield's first grant built constituency and local authority infrastructure now validated at the highest levels of government. This project extends that investment in two directions: Budget interactives delivered overnight to all 650 constituencies, and a council tax policy platform enabling policymakers and the public to understand local schemes, compare across authorities, and design reforms with fiscal and distributional analysis.`;

const keyStats = [
  { label: "Interactive ideas", value: "146" },
  { label: "Grant duration", value: "3 years" },
  { label: "Funding requested", value: "£300,000" },
  { label: "Council tax schemes", value: "313" },
  { label: "UK constituencies", value: "650" },
];

function Header() {
  return (
    <header
      style={{
        background: "#319795",
        color: "white",
        padding: "1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img
          src="https://raw.githubusercontent.com/PolicyEngine/policyengine-app/master/src/images/logos/policyengine/white.png"
          alt="PolicyEngine logo"
          style={{ height: "40px" }}
        />
        <div>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 600 }}>
            PolicyEngine UK
          </h1>
          <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.9 }}>
            Nuffield Foundation RDA 2025 Application
          </p>
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href="https://policyengine.org/uk"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.3)",
            fontSize: "0.875rem",
          }}
        >
          Visit PolicyEngine
        </a>
      </div>
    </header>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "8px",
        padding: "1.5rem",
        textAlign: "center",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#319795",
          marginBottom: "0.25rem",
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: "0.875rem", color: "#718096" }}>{label}</div>
    </div>
  );
}

function ProjectSummarySection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)",
        padding: "3rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 600,
            color: "#1a202c",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Project summary
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.8,
            color: "#344054",
            maxWidth: "900px",
            margin: "0 auto 2rem",
            textAlign: "center",
          }}
        >
          {projectSummary}
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {keyStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InteractivesSection() {
  const [activeTab, setActiveTab] = useState<"household" | "policy">(
    "household"
  );

  return (
    <section style={{ padding: "3rem 2rem", background: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 600,
            color: "#1a202c",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}
        >
          Try our live interactives
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#718096",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          See how PolicyEngine works in practice
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <button
            onClick={() => setActiveTab("household")}
            style={{
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: 500,
              background: activeTab === "household" ? "#319795" : "#e2e8f0",
              color: activeTab === "household" ? "white" : "#4a5568",
            }}
          >
            Household calculator
          </button>
          <button
            onClick={() => setActiveTab("policy")}
            style={{
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: 500,
              background: activeTab === "policy" ? "#319795" : "#e2e8f0",
              color: activeTab === "policy" ? "white" : "#4a5568",
            }}
          >
            Policy analysis
          </button>
        </div>

        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            background: "#f7fafc",
          }}
        >
          <iframe
            src={
              activeTab === "household"
                ? "https://policyengine.org/uk/household"
                : "https://policyengine.org/uk/policy"
            }
            style={{
              width: "100%",
              height: "600px",
              border: "none",
            }}
            title={
              activeTab === "household"
                ? "PolicyEngine UK Household Calculator"
                : "PolicyEngine UK Policy Analysis"
            }
          />
        </div>
      </div>
    </section>
  );
}

function IdeasSection() {
  return (
    <section
      style={{
        padding: "3rem 2rem",
        background: "#f7fafc",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 600,
            color: "#1a202c",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}
        >
          146 interactive ideas for 2026-2029
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#718096",
            marginBottom: "2rem",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 2rem",
          }}
        >
          Demonstrating the depth and breadth of timely policy analysis
          PolicyEngine can deliver
        </p>
        <InteractiveIdeasList />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#1a202c",
        color: "white",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p style={{ margin: "0 0 0.5rem", fontSize: "0.875rem", opacity: 0.9 }}>
        PolicyEngine is a nonprofit organization dedicated to making tax and
        benefit policy accessible to everyone.
      </p>
      <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.7 }}>
        Nuffield Foundation RDA 2025 Application - Reference FR-000027022
      </p>
    </footer>
  );
}

function App() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        background: "#f7fafc",
      }}
    >
      <Header />
      <main>
        <ProjectSummarySection />
        <InteractivesSection />
        <IdeasSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
