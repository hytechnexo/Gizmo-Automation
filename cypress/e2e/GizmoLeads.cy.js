const { it } = require("mocha");

import "cypress-file-upload";
import {
  createMeetingLeads,
  createNewLeads,
  deleteFileLeads,
  displayFileLeads,
  downloadFileLeads,
  editExistingLeads,
  failCreateNewLeads,
  fieldsRequiredCreateNewLeads,
  previewOfFileLeads,
  uploadFileForExistingLeads,
  visitLoginPageAndLogin,
} from "./GizmoFunctions";
import { baseUrl } from "./Global";

describe("Gizmo Leads Process", () => {
  afterEach(() => {
    cy.clearAllLocalStorage();
    cy.clearCookies();
  });

  it("It should open an external web page and create new leads", () => {
    visitLoginPageAndLogin();
    createNewLeads();
  });

  it("When users click on Leads functionality link, Users will be redirected to an internal web page with all leads created", () => {
    visitLoginPageAndLogin();
    // Click the first menu toggle (if this opens the side nav)
    cy.get(".nav-link.menu-toggle").first().click();

    // Click on the active nav item that should be visible now
    cy.get(`a[href='${baseUrl}/user/module/leads']`)
      .should("be.visible")
      .click();

    // Wait for potential page load
    cy.wait(15000);

    // Ensure the redirection is correct
    cy.url({ timeout: 20000 }).should("equal", `${baseUrl}/user/module/leads`);
  });

  it("Users must be able to edit existing leads", () => {
    visitLoginPageAndLogin();
    editExistingLeads();
  });

  it("It should open an external web page and fail the proccess of creating new leads", () => {
    visitLoginPageAndLogin();
    failCreateNewLeads();
  });

  it("It should open an external web page and fail the proccess of creating new leads due to fields required", () => {
    visitLoginPageAndLogin();
    fieldsRequiredCreateNewLeads();
  });

  it("It should fail due to fields required ", () => {
    visitLoginPageAndLogin();
    fieldsRequiredCreateNewLeads();
  });

  it("Users must be able to upload files or attachments for existing users", () => {
    visitLoginPageAndLogin();
    uploadFileForExistingLeads();
  });

  it("Users must be able to see preview of the file or attachment uploaded", () => {
    visitLoginPageAndLogin();
    previewOfFileLeads();
  });

  it("When users click on file name or attachment name an external link must be opened displaying current file or attachment", () => {
    displayFileLeads();
  });

  it("Users must be able to download file or attachment that are uploaded", () => {
    visitLoginPageAndLogin();
    downloadFileLeads();
  });

  it("Users must be able to delete file or attachment that are uploaded", () => {
    visitLoginPageAndLogin();
    deleteFileLeads();
  });

  it("should create a new meeting for an existing lead", () => {
    visitLoginPageAndLogin();
    createMeetingLeads();
  });

  /*

  it("Users must be able to edit existing meetings for existing leads ", () => {
    // Visit the login page
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    // Login the user
    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();
    cy.wait(15000);
    cy.url().should("equal", "https://gizmo.local/user/home");

    // Navigate to leads module
    cy.get(".nav-link.menu-toggle").first().click();
    cy.get("a[href='https://gizmo.local/user/module/leads']").first().click();
    cy.url({ timeout: 20000 }).should(
      "equal",
      "https://gizmo.local/user/module/leads"
    );

    // Click on one of the elements
    cy.get(".ownerlookup", { timeout: 60000 })
      .contains("Jose Mateo")
      .first()
      .click();
  });

  it("Users must be able to delete existing meetings for existing leads ", () => {
    // Visit the login page
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    // Login the user
    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();
    cy.wait(15000);
    cy.url().should("equal", "https://gizmo.local/user/home");

    // Navigate to leads module
    cy.get(".nav-link.menu-toggle").first().click();
    cy.get("a[href='https://gizmo.local/user/module/leads']").first().click();
    cy.url({ timeout: 20000 }).should(
      "equal",
      "https://gizmo.local/user/module/leads"
    );

    // Click on one of the elements
    cy.get(".ownerlookup", { timeout: 60000 })
      .contains("Jose Mateo")
      .first()
      .click();
  });

  it("Users must be able to add existing meetings to google calendar for existing leads", () => {
    // Visit the login page
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    // Login the user
    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();
    cy.wait(15000);
    cy.url().should("equal", "https://gizmo.local/user/home");

    // Navigate to leads module
    cy.get(".nav-link.menu-toggle").first().click();
    cy.get("a[href='https://gizmo.local/user/module/leads']").first().click();
    cy.url({ timeout: 20000 }).should(
      "equal",
      "https://gizmo.local/user/module/leads"
    );

    // Click on one of the elements
    cy.get(".ownerlookup", { timeout: 60000 })
      .contains("Jose Mateo")
      .first()
      .click();
  });

  it("Users must be able to add public notes for existing leads ", () => {
    // Visit the login page
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    // Login the user
    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();
    cy.wait(15000);
    cy.url().should("equal", "https://gizmo.local/user/home");

    // Navigate to leads module
    cy.get(".nav-link.menu-toggle").first().click();
    cy.get("a[href='https://gizmo.local/user/module/leads']").first().click();
    cy.url({ timeout: 20000 }).should(
      "equal",
      "https://gizmo.local/user/module/leads"
    );

    // Click on one of the elements
    cy.get(".ownerlookup", { timeout: 60000 })
      .contains("Jose Mateo")
      .first()
      .click();
  });

  */
});
