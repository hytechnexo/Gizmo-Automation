import {
  visitLoginPageAndLogin,
  visitEnergyEfficiency,
  findEnergyOwner,
  editEnergyEfficiency,
  findEnergySection,
  closeNotificationSideBar,
} from "./GizmoFunctions";

describe("Energy Efficiency Proccess", () => {
  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('When super user click on "Energy Efficiency" Link an internal web page will be opened containning Energy Efficiency informations', () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
  });

  it('When super user click on "Energy Efficiency Name" an internal web page will be opened containing that specific energy efficiency name informations', () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    closeNotificationSideBar();
    findEnergyOwner("Moreno Presidente");
  });

  it('When super user click on "Edit" button user will be able to edit energy efficiency name information and "Save" and "Cancel" button will be displayed', () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#web_edit_url", { timeout: 20000 }).click();
    cy.wait(35000);
  });

  it('After super user click on "Edit" button, user will be able to click on "Cancel" button to discard the changes', () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#web_edit_url", { timeout: 30000 }).click();
    cy.wait(10000);
    cy.get("#cancel-edit", { timeout: 40000 }).should("be.visible").click();
    cy.wait(40000);
  });

  it('When super user click on "Edit" button user will be able to edit energy efficiency name information', () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    editEnergyEfficiency();
  });

  it('When user click on "Actions" button, "Convert Lead" and "Share" links will drop down.', () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#actionsDropDownMenu", { timeout: 10000 }).click();
    cy.wait(10000);
  });

  it('When user click on "Share" link that is under "Actions" button, a pop up option will appear that user can select.', () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#actionsDropDownMenu", { timeout: 10000 }).click();
    cy.wait(10000);
    cy.get("#share-record").click();
    cy.wait(10000);
  });

  it("should allow user to share the record", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#actionsDropDownMenu", { timeout: 15000 }).click();
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
    cy.get(".select2-search__field", { timeout: 10000 })
      .type("Devs Teams")
      .click({ force: true });

    cy.wait(10000);

    cy.get("#btn-share-record", { timeout: 10000 }).click();
    cy.wait(10000);
  });

  it('When user click on "hamburger" icon that is on the right side user will be able to select sections options', () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
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
    closeNotificationSideBar();
    visitEnergyEfficiency();
    closeNotificationSideBar();
    findEnergyOwner("Jose Mateo");
    closeNotificationSideBar();
    findEnergySection("Notes");
  });

  it("When user click on 'Energy Efficiency Information' that is in the 'Hamberger' icon it will take user to Energy Efficiency Information section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    closeNotificationSideBar();
    findEnergyOwner("Jose Mateo");
    closeNotificationSideBar();
    findEnergySection("Energy Efficiency Information");
  });

  it("When user click on 'Address' that is in the 'Hamberger' icon it will take user to Address section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    closeNotificationSideBar();
    findEnergyOwner("Jose Mateo");
    closeNotificationSideBar();
    findEnergySection("Address");
  });

  it("When user click on 'Contract Details' that is in the 'Hamberger' icon it will take user to Contract Details section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("Contract Details");
  });

  it("When user click on 'Program Details' that is in the 'Hamberger' icon it will take user to Program Details section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("Program Details");
  });

  it("When user click on 'NYSERDA' that is in the 'Hamberger' icon it will take user to NYSERDA section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("NYSERDA");
  });

  it("When user click on 'PSEG' that is in the 'Hamberger' icon it will take user to PSEG section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("PSEG");
  });

  it("When user click on 'Products Section' that is in the 'Hamberger' icon it will take user to Product Section section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("Products Section");
  });

  it("When user click on 'Site Assessment' that is in the 'Hamberger' icon it will take user to Site Assessment section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("Site Assessment");
  });

  it("When user click on 'Heating and Cooling' that is in the 'Hamberger' icon it will take user to Heating and Cooling section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("Heating and Cooling");
  });

  it("When user click on 'Insulation' that is in the 'Hamberger' icon it will take user to Insulation section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("Insulation");
  });

  it("When user click on 'Geo Thermal' that is in the 'Hamberger' icon it will take user to Geo Thermal section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("Geo Thermal");
  });

  it("When user click on 'Installation' that is in the 'Hamberger' icon it will take user to Installation section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
  });

  it("When user click on 'Admin' that is in the 'Hamberger' icon it will take user to Admin section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("Admin");
  });

  it("When user click on 'Attachments' that is in the 'Hamberger' icon it will take user to Attachments section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("Attachments");
  });

  it("When user click on 'Related Meetings' that is in the 'Hamberger' icon it will take user to Related Meetings section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("Related Meetings");
  });

  it("When user click on 'Shared With' that is in the 'Hamberger' icon it will take user to Shared With section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("Shared With");
  });

  it("When user click on 'Related Records' that is in the 'Hamberger' icon it will take user to elated Records section  ", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
    findEnergySection("Related Records");
  });

  it("When Super user click on 'Revoke' button the shared record will be removed", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#actionsDropDownMenu", { timeout: 10000 }).click();
    cy.wait(10000);
    cy.get("#share-record").click();
    cy.wait(15000);

    cy.get(".select2-selection.select2-selection--single.select")
      .scrollIntoView()
      .click();

    cy.get(".select2-search__field", { timeout: 10000 })
      .type("Devs Teams")
      .click({ force: true });

    cy.get(".btn.btn-danger.btn-sm.round.btn-revoke-record-access", {
      timeout: 30000,
    }).click();
  });

  it("User should be able to upload file or attachment from attachment section", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");

    cy.get("#attachments-modal", { timeout: 10000 }).scrollIntoView().click();

    cy.get(".modal-content").should("be.visible");

    cy.get(".ff_fileupload_dropzone_wrap").scrollIntoView();

    cy.get(".ff_fileupload_dropzone", { timeout: 10000 })
      .should("be.visible")
      .click();
  });

  /*

  it("", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
  });

  it("", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
  });

  it("", () => {
    visitLoginPageAndLogin();
    closeNotificationSideBar();
    visitEnergyEfficiency();
    findEnergyOwner("Jose Mateo");
  });

  */
});
