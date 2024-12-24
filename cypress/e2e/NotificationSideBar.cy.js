import {
  closeNotificationSideBar,
  openNotificationSidebar,
  visitLoginPageAndLogin,
} from "./GizmoFunctions";

describe("Automation of Notification Side Bar", () => {
  // Perform login before each test
  beforeEach(() => {
    visitLoginPageAndLogin();
  });

  // Clear storage and cookies after each test
  afterEach(() => {
    cy.clearAllLocalStorage();
    cy.clearCookies();
  });

  it("It should click on the Notification Icon on the right side", () => {
    openNotificationSidebar();
  });

  it("Clicks on the Mentions button", () => {
    openNotificationSidebar();

    cy.get("#notification-toggle-button").should("be.visible").click();

    cy.get('.notif-tab-btn[data-id="notes"]', { timeout: 6000 })
      .should("be.visible")
      .click();
  });

  it("It should click on 'Record Updates Button'", () => {
    openNotificationSidebar();

    cy.get("#notification-toggle-button").should("be.visible").click();

    cy.get('.notif-tab-btn[data-id="records"]', { timeout: 6000 })
      .should("be.visible")
      .click();
    cy.wait(2000);
  });

  it("It should click on 'Appointments Button'", () => {
    openNotificationSidebar();

    cy.get("#notification-toggle-button").should("be.visible").click();

    cy.get('.notif-tab-btn[data-id="appointments"]', { timeout: 6000 })
      .should("be.visible")
      .click();
    cy.wait(2000);
  });

  it("It should click on 'Appointments Button' and change the status of the appointment", () => {
    openNotificationSidebar();

    cy.get("#notification-toggle-button").should("be.visible").click();

    cy.get('.notif-tab-btn[data-id="appointments"]', { timeout: 6000 })
      .should("be.visible")
      .click();

    cy.get(".menu-icon.dropdown").should("be.visible").first().click();
    cy.get(".dropdown-item.selected-action").should("be.visible");
    cy.get(".dropdown-item").contains("Completed").click();
    cy.wait(5000);
  });

  it("It should click on 'Appointments' button and click on 'Dismiss'", () => {
    openNotificationSidebar();

    cy.get("#notification-toggle-button").should("be.visible").click();

    cy.get('.notif-tab-btn[data-id="appointments"]', { timeout: 6000 })
      .should("be.visible")
      .click();
    cy.wait(2000);

    cy.get(".notif-card").should("be.visible").first().trigger("mouseover");

    cy.get("notif-card-container", { timeout: 6000 })
      .should("be.visible")
      .exist("available")
      .click();

    // Hover over the first notification message
    cy.get(".notif-message").first().should("be.visible").trigger("mouseover");

    // Click on the dismiss button for the hovered notification
    cy.get(".notif-dismiss", { timeout: 2000 })
      .first()
      .should("be.visible")
      .click();

    // Ensure the notification is dismissed
    cy.get(".notif-card").should("not.exist");
  });

  it("It should click the close Icon of the side bar and close it.", () => {
    closeNotificationSideBar();
  });
});
