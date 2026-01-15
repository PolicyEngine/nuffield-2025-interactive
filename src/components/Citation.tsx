import { useState, useRef, useEffect } from "react";
import { citations } from "../data/applicationContent";

interface CitationTooltipProps {
  citationKey: string;
  children: React.ReactNode;
}

export function CitationTooltip({ citationKey, children }: CitationTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<"above" | "below">("below");
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  const citation = citations[citationKey];

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setPosition(spaceBelow < 200 && spaceAbove > spaceBelow ? "above" : "below");
    }
  }, [isVisible]);

  if (!citation) {
    return <span style={{ color: "#e53e3e" }}>[Unknown citation: {citationKey}]</span>;
  }

  return (
    <span
      ref={triggerRef}
      style={{ position: "relative", display: "inline" }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <a
        href={citation.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#319795",
          textDecoration: "none",
          borderBottom: "1px dotted #319795",
          cursor: "pointer",
        }}
        onClick={(e) => {
          if (!citation.url) e.preventDefault();
        }}
      >
        {children}
      </a>
      {isVisible && (
        <div
          ref={tooltipRef}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            ...(position === "below"
              ? { top: "calc(100% + 8px)" }
              : { bottom: "calc(100% + 8px)" }),
            zIndex: 1000,
            width: "320px",
            maxWidth: "90vw",
            padding: "12px 16px",
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            border: "1px solid #e2e8f0",
            fontSize: "0.875rem",
            lineHeight: 1.5,
            textAlign: "left",
            color: "#1a202c",
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: "4px", color: "#319795" }}>
            {citation.title}
          </div>
          <div style={{ color: "#4a5568", marginBottom: "4px" }}>
            {citation.author} ({citation.year})
          </div>
          {citation.journal && (
            <div style={{ fontStyle: "italic", color: "#718096", fontSize: "0.8rem" }}>
              {citation.journal}
              {citation.volume && `, ${citation.volume}`}
              {citation.pages && `, pp. ${citation.pages}`}
            </div>
          )}
          {citation.institution && (
            <div style={{ fontStyle: "italic", color: "#718096", fontSize: "0.8rem" }}>
              {citation.institution}
            </div>
          )}
          {citation.note && (
            <div
              style={{
                marginTop: "8px",
                paddingTop: "8px",
                borderTop: "1px solid #e2e8f0",
                color: "#718096",
                fontSize: "0.8rem",
              }}
            >
              {citation.note}
            </div>
          )}
          {citation.url && (
            <div style={{ marginTop: "8px", fontSize: "0.75rem" }}>
              <a
                href={citation.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#319795", wordBreak: "break-all" }}
              >
                View source →
              </a>
            </div>
          )}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              ...(position === "below"
                ? {
                    top: "-6px",
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderBottom: "6px solid white",
                  }
                : {
                    bottom: "-6px",
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: "6px solid white",
                  }),
              width: 0,
              height: 0,
            }}
          />
        </div>
      )}
    </span>
  );
}

// Parse markdown-style citations [@key] and render with tooltips
export function renderContentWithCitations(content: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\[@([^\]]+)\]/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    // Add text before the citation
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }

    // Handle multiple citations like [@key1; @key2]
    const citationKeys = match[1].split(/;\s*@?/).map((k) => k.trim());

    citationKeys.forEach((key, i) => {
      const citation = citations[key];
      const displayText = citation
        ? `${citation.author.split(",")[0].split(" ").pop()}, ${citation.year}`
        : key;

      parts.push(
        <CitationTooltip key={`${match!.index}-${i}`} citationKey={key}>
          ({displayText})
        </CitationTooltip>
      );

      if (i < citationKeys.length - 1) {
        parts.push("; ");
      }
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts;
}

// Convert content with paragraphs and citations
export function ContentWithCitations({ content }: { content: string }) {
  // Split by double newlines for paragraphs
  const paragraphs = content.split(/\n\n+/);

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        // Check if it's a header (starts with **)
        const headerMatch = paragraph.match(/^\*\*([^*]+)\*\*/);
        if (headerMatch && paragraph.startsWith("**")) {
          const headerText = headerMatch[1];
          const restOfParagraph = paragraph.slice(headerMatch[0].length).trim();

          return (
            <div key={index}>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#1a202c",
                  marginTop: index > 0 ? "1.5rem" : 0,
                  marginBottom: "0.75rem",
                }}
              >
                {headerText}
              </h3>
              {restOfParagraph && (
                <p style={{ marginBottom: "1rem", lineHeight: 1.8 }}>
                  {renderContentWithCitations(restOfParagraph)}
                </p>
              )}
            </div>
          );
        }

        return (
          <p key={index} style={{ marginBottom: "1rem", lineHeight: 1.8 }}>
            {renderContentWithCitations(paragraph)}
          </p>
        );
      })}
    </>
  );
}
