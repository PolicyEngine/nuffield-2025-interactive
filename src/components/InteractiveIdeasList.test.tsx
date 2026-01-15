import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InteractiveIdeasList } from "./InteractiveIdeasList";

describe("InteractiveIdeasList", () => {
  it("renders all 146 ideas by default", () => {
    render(<InteractiveIdeasList />);
    // Count the number of idea cards
    const ideas = screen.getAllByRole("article");
    expect(ideas).toHaveLength(146);
  });

  it("filters ideas by search term", async () => {
    const user = userEvent.setup();
    render(<InteractiveIdeasList />);

    const searchInput = screen.getByPlaceholderText(/search/i);
    await user.type(searchInput, "council tax");

    // Should find ideas containing "council tax"
    const ideas = screen.getAllByRole("article");
    expect(ideas.length).toBeLessThan(146);
    expect(ideas.length).toBeGreaterThan(0);

    // Each visible idea should contain "council tax" in title or description
    ideas.forEach((idea) => {
      const text = idea.textContent?.toLowerCase() || "";
      expect(text).toMatch(/council tax/i);
    });
  });

  it("filters ideas by category", async () => {
    const user = userEvent.setup();
    render(<InteractiveIdeasList />);

    const categorySelect = screen.getByRole("combobox");
    await user.selectOptions(categorySelect, "Income Tax");

    const ideas = screen.getAllByRole("article");
    // Income Tax category has 15 ideas
    expect(ideas).toHaveLength(15);
  });

  it("combines search and category filters", async () => {
    const user = userEvent.setup();
    render(<InteractiveIdeasList />);

    const searchInput = screen.getByPlaceholderText(/search/i);
    const categorySelect = screen.getByRole("combobox");

    await user.selectOptions(categorySelect, "Housing & Local Government");
    await user.type(searchInput, "council tax");

    const ideas = screen.getAllByRole("article");
    expect(ideas.length).toBeGreaterThan(0);

    ideas.forEach((idea) => {
      const text = idea.textContent?.toLowerCase() || "";
      expect(text).toMatch(/council tax/i);
    });
  });

  it("shows no results message when no matches", async () => {
    const user = userEvent.setup();
    render(<InteractiveIdeasList />);

    const searchInput = screen.getByPlaceholderText(/search/i);
    await user.type(searchInput, "xyznonexistent123");

    expect(screen.getByText(/no ideas found/i)).toBeInTheDocument();
  });

  it("displays category badge for each idea", () => {
    render(<InteractiveIdeasList />);

    const firstIdea = screen.getAllByRole("article")[0];
    expect(firstIdea).toHaveTextContent(/Universal Credit & Benefits/);
  });

  it("shows result count", () => {
    render(<InteractiveIdeasList />);
    expect(screen.getByText(/146 ideas/i)).toBeInTheDocument();
  });
});
