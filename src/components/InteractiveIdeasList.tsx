import { useState, useMemo } from "react";
import {
  interactiveIdeas,
  categories,
  type InteractiveIdea,
} from "../data/interactiveIdeas";

const categoryColors: Record<string, string> = {
  "Universal Credit & Benefits": "#319795",
  "Income Tax": "#2B6CB0",
  "National Insurance": "#6B46C1",
  "Housing & Local Government": "#D69E2E",
  "Energy & Cost of Living": "#DD6B20",
  "Childcare & Education": "#38A169",
  "Child Poverty & Family Support": "#E53E3E",
  "Disability Benefits": "#805AD5",
  "Scottish & Welsh Devolved Policies": "#3182CE",
  "Transport & Mobility": "#718096",
  "Other Tax & Financial": "#319795",
};

function IdeaCard({ idea }: { idea: InteractiveIdea }) {
  const categoryColor = categoryColors[idea.category] || "#319795";

  return (
    <article
      style={{
        background: "white",
        borderRadius: "8px",
        padding: "1.25rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        borderLeft: `4px solid ${categoryColor}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "0.5rem",
          gap: "0.5rem",
        }}
      >
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "#1a202c",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {idea.title}
        </h3>
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 500,
            color: "white",
            background: categoryColor,
            padding: "0.2rem 0.5rem",
            borderRadius: "9999px",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {idea.category}
        </span>
      </div>
      <p
        style={{
          fontSize: "0.875rem",
          color: "#4a5568",
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {idea.description}
      </p>
    </article>
  );
}

export function InteractiveIdeasList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredIdeas = useMemo(() => {
    return interactiveIdeas.filter((idea) => {
      const matchesSearch =
        searchTerm === "" ||
        idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "" || idea.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search ideas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: "1 1 200px",
            padding: "0.75rem 1rem",
            fontSize: "1rem",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
            outline: "none",
          }}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: "0.75rem 1rem",
            fontSize: "1rem",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
            background: "white",
            cursor: "pointer",
            minWidth: "200px",
          }}
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <p
        style={{
          fontSize: "0.875rem",
          color: "#718096",
          marginBottom: "1rem",
        }}
      >
        {filteredIdeas.length} ideas found
      </p>

      {filteredIdeas.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "#718096",
            padding: "2rem",
          }}
        >
          No ideas found matching your criteria.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "1rem",
          }}
        >
          {filteredIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      )}
    </div>
  );
}
