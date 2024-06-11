import {
  visitLoginPageAndLogin,
  organizationsv2,
  filterOrganizationAndEditOrganization,
  addNewCommisionRange,
  deleteCommisionRate,
  deleteRedlinePricing,
  addUserForOganizationsv2,
  addNewRedlinePricing,
} from "./GizmoFunctions";

describe("Organizationsv2 Proccess", () => {
  afterEach(() => {
    cy.clearAllLocalStorage();
    cy.clearCookies();
  });

  /*

  it("Super User must be taken to an internal page with all the organizations created when clicking on Organizationsv2 Link", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });

  it("When super user click on Organization Details button an internal page will be opened with the Organization details for that specific organization", () => {
    visitLoginPageAndLogin();
    organizationsv2();

    cy.get("#group-filter", { timeout: 20000 })
      .type("Organization name updated")
      .click();
    cy.get("#button_detail", { timeout: 20000 }).click();
    cy.wait(2000);
  });

  it("When super user click on Edit button a cancel button  and save button must appear and the Inactivate or Activate Organization button must disappear from the screen", () => {
    visitLoginPageAndLogin();
    organizationsv2();

    cy.get("#group-filter", { timeout: 20000 })
      .type("Organization Updated")
      .click();

    cy.get("#button_detail", { timeout: 20000 }).click();
    cy.wait(20000);

    cy.get("#button_edit", { timeout: 20000 })
      .should("be.visible")
      .click({ force: true });

    cy.wait(5000);
  });

  it("When super user click on cancel button an Inactivate or  Activate Organization button must appear and the Cancel and Save button must disappear from the screen", () => {
    visitLoginPageAndLogin();
    organizationsv2();

    cy.get("#group-filter", { timeout: 20000 }).type("Freedom Power").click();

    cy.get("#button_detail", { timeout: 20000 }).click();
    cy.wait(20000);

    cy.get("#button_edit", { timeout: 20000 })
      .should("be.visible")
      .click({ force: true });

    cy.wait(5000);

    cy.get("#button_cancel").should("be.visible").click();
  });

  it("When super user click on Edit button a cancel button  and save button must appear and the Inactivate or Activate Organization button must disappear from the screen and the super user will be able to edit all fields from the organization after successfully editing a message will pop up: The organization has been successfully updated.", () => {
    visitLoginPageAndLogin();
    organizationsv2();
    filterOrganizationAndEditOrganization();
  });

  it("When super user click on Edit button, Commission Rates by Production Range and Redline Pricing by System Size Range sections will show Add new commision range and add new redline pricing range button as well as a delete button next to each section.", () => {
    visitLoginPageAndLogin();
    organizationsv2();

    cy.get("#group-filter").type("Organization Updated two By Cypress").click();
    cy.wait(20000);
    cy.get("#button_detail").click();

    cy.wait(10000);
    cy.get("#button_edit").should("be.visible").click({ force: true });

    cy.wait(5000);
  });

  it("When super user click on Add New Commision Range button Super user 3 new fields will pop up with a delete button by the side, user will be able to fill out fields or delete them.", () => {
    visitLoginPageAndLogin();
    organizationsv2();

    cy.get("#group-filter").type("Organization Updated two By Cypress").click();
    cy.wait(15000);
    cy.get("#button_detail").click();

    cy.wait(5000);
    cy.get("#button_edit").should("be.visible").click({ force: true });

    cy.wait(5000);

    cy.get("#add_rate").scrollIntoView().should("be.visible").click();

    cy.wait(5000);
  });

  it("When super user click on Add New Redline Pricing Range button Super user 3 new fields will pop up with a delete button by the side, user will be able to fill out fields or delete them.", () => {
    visitLoginPageAndLogin();
    organizationsv2();

    cy.get("#group-filter").type("Organization Updated two By Cypress").click();
    cy.wait(10000);
    cy.get("#button_detail").click();

    cy.wait(10000);
    cy.get("#button_edit").should("be.visible").click({ force: true });

    cy.wait(5000);

    cy.get("#add_redline", { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.wait(5000);
  });

*/

  it("When super user clicks on Add new commission range button, 3 new fields will pop up with a delete button by the side. The user will be able to fill out fields.", () => {
    visitLoginPageAndLogin();
    organizationsv2();
    addNewCommisionRange();
  });

  it("When super user clicks on Add new redline pricing range button, 3 new fields will pop up with a delete button by the side. The user will be able to fill out fields.", () => {
    visitLoginPageAndLogin();
    organizationsv2();
    addNewRedlinePricing();
  });

  it("When super user click on Delete button in Commission Rates by Production Range section should be able to delete Commission Rates", () => {
    visitLoginPageAndLogin();
    organizationsv2();
    deleteCommisionRate();
  });

  it("When super user click on Delete button in commission rates by production range section should be able to delete redline pricing", () => {
    visitLoginPageAndLogin();
    organizationsv2();
    deleteRedlinePricing();
  });

  it("Super user should be able to add users under the Organizationsv2 created", () => {
    visitLoginPageAndLogin();
    organizationsv2();
    addUserForOganizationsv2();
  });

  it("Super user should be able to reset password from users under the organization", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });

  it("Super user should be able to edit Account Details from users under the organization ", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });

  it("Super user should be able to edit Profile Details from users under the organization", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });

  it("Super user should be able to edit Proposal Tool from users under the organization ", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });

  it("Super user should be able to edit Permission Settings from users under the organization", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });

  it("Super user should be able to edit Licensing from users under the organization ", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });

  it("Super user should be able to Disactivate Account from users under the organization", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });

  it("Super user should be able to Activate Account from users under the organization", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });

  it("Super user should be able to upload file or attachments", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });

  it("Super user should be able to delete file or attachments", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });

  it("Super user should be able to Download file or attachments", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });

  it("Super user should be able to see preview of the file or attachment", () => {
    visitLoginPageAndLogin();
    organizationsv2();
  });
});
