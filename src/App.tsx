import { useState } from "react";
import { InteractiveIdeasList } from "./components/InteractiveIdeasList";
import { ContentWithCitations } from "./components/Citation";
import { sections } from "./data/applicationContent";

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
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img
          src="https://raw.githubusercontent.com/PolicyEngine/policyengine-app/master/src/images/logos/policyengine/white.png"
          alt="PolicyEngine logo"
          style={{ height: "36px" }}
        />
        <div>
          <h1 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>
            PolicyEngine UK
          </h1>
          <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.9 }}>
            Nuffield Foundation RDA 2025 • FR-000027022
          </p>
        </div>
      </div>
      <div style={{ display: "flex", gap: "0.75rem" }}>
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
          PolicyEngine UK
        </a>
        <a
          href="https://github.com/PolicyEngine"
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
          GitHub
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
        padding: "1.25rem",
        textAlign: "center",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        minWidth: "140px",
      }}
    >
      <div
        style={{
          fontSize: "1.75rem",
          fontWeight: 700,
          color: "#319795",
          marginBottom: "0.25rem",
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: "0.8rem", color: "#718096" }}>{label}</div>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #319795 0%, #2c7a7b 100%)",
        color: "white",
        padding: "3rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Interactive grant application
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.7,
            maxWidth: "900px",
            margin: "0 auto 2rem",
            textAlign: "center",
            opacity: 0.95,
          }}
        >
          This interactive site presents PolicyEngine's full application to the Nuffield
          Foundation Research and Development Awards 2025. Hover over citations to see
          references, explore our 146 policy interactive ideas, and try embedded
          PolicyEngine tools.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
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

function TableOfContents({
  activeSection,
  onSectionClick,
}: {
  activeSection: string;
  onSectionClick: (key: string) => void;
}) {
  return (
    <nav
      style={{
        background: "#f7fafc",
        borderBottom: "1px solid #e2e8f0",
        padding: "1rem 2rem",
        position: "sticky",
        top: "60px",
        zIndex: 99,
        overflowX: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          gap: "0.5rem",
          flexWrap: "nowrap",
        }}
      >
        {[
          { key: "summary", label: "Summary" },
          { key: "application", label: "Full application" },
          { key: "interactives", label: "Try interactives" },
          { key: "ideas", label: "146 ideas" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => onSectionClick(item.key)}
            style={{
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: "0.875rem",
              whiteSpace: "nowrap",
              background: activeSection === item.key ? "#319795" : "transparent",
              color: activeSection === item.key ? "white" : "#4a5568",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function ApplicationSection({
  section,
  isExpanded,
  onToggle,
}: {
  section: (typeof sections)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        marginBottom: "1rem",
        overflow: "hidden",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "1.25rem 1.5rem",
          border: "none",
          background: isExpanded ? "#f7fafc" : "white",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
        }}
      >
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: "1.125rem",
              fontWeight: 600,
              color: "#1a202c",
            }}
          >
            {section.title}
          </h3>
          <span style={{ fontSize: "0.8rem", color: "#718096" }}>
            {section.wordLimit} word limit
          </span>
        </div>
        <span
          style={{
            fontSize: "1.5rem",
            color: "#319795",
            transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.2s",
          }}
        >
          ▼
        </span>
      </button>
      {isExpanded && (
        <div
          style={{
            padding: "1.5rem",
            borderTop: "1px solid #e2e8f0",
            color: "#344054",
            fontSize: "1rem",
          }}
        >
          <ContentWithCitations content={section.content} />
        </div>
      )}
    </div>
  );
}

function FullApplicationSection() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["project_summary"])
  );

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setExpandedSections(new Set(sections.map((s) => s.key)));
  };

  const collapseAll = () => {
    setExpandedSections(new Set());
  };

  return (
    <section
      id="application"
      style={{
        padding: "3rem 2rem",
        background: "#f7fafc",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 600,
              color: "#1a202c",
              margin: 0,
            }}
          >
            Full application
          </h2>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={expandAll}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #319795",
                borderRadius: "6px",
                background: "white",
                color: "#319795",
                cursor: "pointer",
                fontSize: "0.875rem",
              }}
            >
              Expand all
            </button>
            <button
              onClick={collapseAll}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                background: "white",
                color: "#4a5568",
                cursor: "pointer",
                fontSize: "0.875rem",
              }}
            >
              Collapse all
            </button>
          </div>
        </div>
        <p
          style={{
            color: "#718096",
            marginBottom: "1.5rem",
            fontSize: "0.95rem",
          }}
        >
          Click sections to expand. Hover over{" "}
          <span style={{ color: "#319795", borderBottom: "1px dotted #319795" }}>
            citations
          </span>{" "}
          to see full references with links.
        </p>
        {sections.map((section) => (
          <ApplicationSection
            key={section.key}
            section={section}
            isExpanded={expandedSections.has(section.key)}
            onToggle={() => toggleSection(section.key)}
          />
        ))}
      </div>
    </section>
  );
}

function InteractivesSection() {
  const [activeTab, setActiveTab] = useState<"calculator" | "policy">("calculator");

  return (
    <section id="interactives" style={{ padding: "3rem 2rem", background: "white" }}>
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
          Try PolicyEngine
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#718096",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Explore the tools that power our policy analysis
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
            onClick={() => setActiveTab("calculator")}
            style={{
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: 500,
              background: activeTab === "calculator" ? "#319795" : "#e2e8f0",
              color: activeTab === "calculator" ? "white" : "#4a5568",
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
              activeTab === "calculator"
                ? "https://policyengine.org/uk"
                : "https://policyengine.org/uk/policy"
            }
            style={{
              width: "100%",
              height: "700px",
              border: "none",
            }}
            title={
              activeTab === "calculator"
                ? "PolicyEngine UK Calculator"
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
      id="ideas"
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
          Demonstrating the depth and breadth of timely policy analysis PolicyEngine can
          deliver. Search and filter by category.
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
        PolicyEngine is a nonprofit organization dedicated to making tax and benefit
        policy accessible to everyone.
      </p>
      <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.7 }}>
        Nuffield Foundation RDA 2025 Application • Reference FR-000027022 • £300,000 over
        3 years
      </p>
    </footer>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("summary");

  const scrollToSection = (key: string) => {
    setActiveSection(key);
    const element = document.getElementById(
      key === "summary" ? "hero" : key === "application" ? "application" : key
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        background: "#f7fafc",
      }}
    >
      <Header />
      <TableOfContents activeSection={activeSection} onSectionClick={scrollToSection} />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <FullApplicationSection />
        <InteractivesSection />
        <IdeasSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
