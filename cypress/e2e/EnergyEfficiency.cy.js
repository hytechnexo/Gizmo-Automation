import {
  visitLoginPageAndLogin,
  visitEnergyEfficiency,
  findEnergyOwner,
  editEnergyEfficiency,
} from "./GizmoFunctions";

describe("Energy Efficiency Proccess", () => {
  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

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

    cy.get("#web_edit_url", { timeout: 20000 }).click();
    cy.wait(35000);
  });

  it('After super user click on "Edit" button, user will be able to click on "Cancel" button to discard the changes', () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#web_edit_url", { timeout: 15000 }).click();
    cy.wait(10000);
    cy.get("#cancel-edit", { timeout: 30000 }).should("be.visible").click();
    cy.wait(45000);
  });

  it('When super user click on "Edit" button user will be able to edit energy efficiency name information', () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    editEnergyEfficiency();
  });

  it('When user click on "Actions" button, "Convert Lead" and "Share" links will drop down.', () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#actionsDropDownMenu", { timeout: 10000 }).click();
    cy.wait(10000);
  });

  it('When user click on "Share" link that is under "Actions" button, a pop up option will appear that user can select.', () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#actionsDropDownMenu", { timeout: 10000 }).click();
    cy.wait(10000);
    cy.get("#share-record").click();
    cy.wait(10000);
  });

  it("should allow user to share the record", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#actionsDropDownMenu", { timeout: 10000 }).click();
    cy.wait(10000);
    cy.get("#share-record").click();
    cy.wait(15000);

    cy.get(".select2-selection.select2-selection--single", {
      timeout: 10000,
    }).should("be.visible");

    cy.get("#select2-share-access-type-container").scrollIntoView().click();

    cy.get(".select2-results").should("be.visible");

    cy.get("#select2-share-access-type-results", {
      timeout: 20000,
    })
      .contains("Read & Write")
      .click();

    cy.get(".select2-selection.select2-selection--single.select")
      .scrollIntoView()
      .click();
    cy.get(".select2-search__field").type("Dev Team").click();

    cy.get("#btn-share-record").click();
    cy.wait(10000);
  });

  it('When user click on "hamburger" icon that is on the right side user will be able to select sections options', () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);
  });

  it("When user click on 'Notes' that is in the 'Hamberger' icon it will take user to Note section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Notes")
      .click();
    cy.wait(5000);
  });

  it("When user click on 'Energy Efficiency Information' that is in the 'Hamberger' icon it will take user to Energy Efficiency Information section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Energy Efficiency Information")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Address' that is in the 'Hamberger' icon it will take user to Address section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Address")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Contract Details' that is in the 'Hamberger' icon it will take user to Contract Details section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Contract Details")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Program Details' that is in the 'Hamberger' icon it will take user to Program Details section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Program Details")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'NYSERDA' that is in the 'Hamberger' icon it will take user to NYSERDA section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("NYSERDA")
      .click();
    cy.wait(5000);
  });

  it("When user click on 'PSEG' that is in the 'Hamberger' icon it will take user to PSEG section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("PSEG")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Product Section' that is in the 'Hamberger' icon it will take user to Product Section section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-centre",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Product Section")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Site Assessment' that is in the 'Hamberger' icon it will take user to Site Assessment section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Site Assessment")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Heating and Cooling' that is in the 'Hamberger' icon it will take user to Heating and Cooling section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Heating and Cooling")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Insulation' that is in the 'Hamberger' icon it will take user to Insulation section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Insulation")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Geo Thermal' that is in the 'Hamberger' icon it will take user to Geo Thermal section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Geo Thermal")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Installation' that is in the 'Hamberger' icon it will take user to Installation section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Installation")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Admin' that is in the 'Hamberger' icon it will take user to Admin section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Admin")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Attachments' that is in the 'Hamberger' icon it will take user to Attachments section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Attachments")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Related Meetings' that is in the 'Hamberger' icon it will take user to Related Meetings section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Related Meetings")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Shared With' that is in the 'Hamberger' icon it will take user to Shared With section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Shared With")
      .click();

    cy.wait(5000);
  });

  it("When user click on 'Related Records' that is in the 'Hamberger' icon it will take user to elated Records section  ", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get(
      ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
      { timeout: 5000 }
    ).click();

    cy.wait(5000);

    cy.get("#sections-menu-list").should("be.visible");

    cy.get(".list-group-item.list-group-item-action.record-menu-item")
      .contains("Related Records")
      .click();

    cy.wait(5000);
  });

  /*

  it("", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
  });

  it("", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
  });

  it("", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
  });

  it("", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
  });

  it("", () => {
    visitLoginPageAndLogin();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
  });

  */
});
