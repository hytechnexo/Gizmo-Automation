import { visitLoginPageAndLogin } from "./GizmoFunctions";

describe("This is for the Group Mention", () => {
  beforeEach(() => {
    // Handle uncaught exceptions
    Cypress.on("uncaught:exception", (err, runnable) => {
      // Don't fail the test on uncaught exceptions
      return false;
    });

    visitLoginPageAndLogin();
  });

  it("Clicks on the Mention and writes a message for the group", () => {
    // Navigate to the Leads module
    cy.get(".nav-link.menu-toggle").should("be.visible").click();
    cy.get(".menu-title.text-truncate")
      .should("be.visible")
      .contains("Leads")
      .click();

    // Ensure the page is loaded before clicking the record
    cy.url().should("include", "/user/module/leads");

    // Click on the record with the specific text
    cy.contains("a", "Exploiting HEA Edited Exploiting Test Edited", {
      timeout: 60000,
    })
      .should("be.visible")
      .click();

    // Wait for the next element to appear, retrying if necessary
    cy.url().should("include", "/user/module/leads/", { timeout: 50000 });
    cy.wait(50000); // Wait a bit for dynamic content

    // Try to click the .notes-heading-collapse element with additional wait and retries
    cy.get(".notes-heading-collapse", { timeout: 120000 })
      .should("be.visible")
      .click();

    // Log to help debug
    cy.log("Found .notes-heading-collapse, clicking...");

    // Add the message in the group text box (if applicable)
    cy.get(".message-textarea")
      .should("be.visible")
      .type("This is a message for the group!");

    // Click on the send button (assuming it's like '.send-button')
    cy.get(".send-button").should("be.visible").click();

    // Optionally, verify the message is sent and visible in the conversation
    cy.contains(".message-text", "This is a message for the group!")
      .should("be.visible")
      .and("contain.text", "This is a message for the group!");
  });
});
