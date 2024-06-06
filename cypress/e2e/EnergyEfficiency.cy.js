import {
  visitLoginPageAndLogin,
  visitEnergyEfficiency,
  findEnergyOwner,
  editEnergyEfficiency,
} from "./GizmoFunctions.cy";

describe("Energy Efficiency Proccess", () => {
  it('When super user click on "Energy Efficiency" Link an internal web page will be opened containning Energy Efficiency informations', () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
  });

  it('When super user click on "Energy Efficiency Name" an internal web page will be opened containing that specific energy efficiency name informations', () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
  });

  it('When super user click on "Edit" button user will be able to edit energy efficiency name information and "Save" and "Cancel" button will be displayed', () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#web_edit_url", { timeout: 10000 }).click();
    cy.wait(25000);
  });

  it('After super user click on "Edit" button, user will be able to click on "Cancel" button to discard the changes', () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#web_edit_url").click();
    cy.wait(25000);
    cy.get("#cancel-edit").should("be.visible").click();
    cy.wait(15000);
  });

  it('When super user click on "Edit" button user will be able to edit energy efficiency name information', () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    editEnergyEfficiency();
  });

  it("", () => {});

  it("", () => {});
});
