const { it } = require("mocha");

describe("This is the Gizmo Login Process", () => {
  afterEach(() => {
    cy.clearAllLocalStorage();
    cy.clearCookies();
  });

  it("It should display this field is required", () => {
    cy.visit("https://gizmo.local/user/home");
    cy.url().should("include", "/user/login");

    cy.get("#email").clear();
    cy.get("#password").clear();
    cy.get("[type='submit']").first().click();

    cy.url().should("include", "/user/login");
    cy.wait(5000);
  });

  it("It should display Invalid Username/Password", () => {
    cy.visit("https://gizmo.local/user/home");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper");
    cy.get("[type='submit']").first().click();

    cy.url().should("include", "/user/login");
    cy.wait(5000);
  });

  it("It should display Please enter a valid email address.", () => {
    cy.visit("https://gizmo.local/user/home");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();

    cy.url().should("include", "/user/login");
    cy.wait(5000);
  });

  it("It should log in user successfully", () => {
    cy.visit("https://gizmo.local/user/home");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();

    cy.url().should("equal", "https://gizmo.local/user/home");
  });
});
