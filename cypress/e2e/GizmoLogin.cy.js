const { it } = require("mocha");
import { visitLoginPageAndLogin } from "./GizmoFunctions";
import { baseUrl } from "./Global";

describe("This is the Gizmo Login Process", () => {
  afterEach(() => {
    cy.clearAllLocalStorage();
    cy.clearCookies();
  });

  it("It should display this field is required", () => {
    cy.visit(baseUrl);
    cy.url().should("include", "/user/login");

    cy.get("#email").clear();
    cy.get("#password").clear();
    cy.get("[type='submit']").first().click();

    cy.url().should("include", "/user/login");
    cy.wait(5000);
  });

  it("It should display Invalid Username/Password", () => {
    cy.visit(baseUrl);
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper");
    cy.get("[type='submit']").first().click();

    cy.url().should("include", "/user/login");
    cy.wait(5000);
  });

  it("It should display Please enter a valid email address.", () => {
    cy.visit(baseUrl);
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();

    cy.url().should("include", "/user/login");
    cy.wait(5000);
  });

  it("It should log in user successfully", () => {
    visitLoginPageAndLogin();
  });
});
