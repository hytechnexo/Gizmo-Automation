import { visitLoginPageAndLogin } from "./GizmoFunctions";
import { baseUrl } from "./Global";

describe("HEA Appointment Calendar Process", () => {
  let localStorageData;
  let cookiesData;

  beforeEach(() => {
    // Visit the login page and log in before each test
    visitLoginPageAndLogin();
    // Restore local storage and cookies before each test
    if (localStorageData) {
      cy.window().then((win) => {
        Object.keys(localStorageData).forEach((key) => {
          win.localStorage.setItem(key, localStorageData[key]);
        });
      });
    }

    if (cookiesData) {
      cookiesData.forEach((cookie) => {
        cy.setCookie(cookie.name, cookie.value);
      });
    }
  });

  afterEach(() => {
    // Save the current state of local storage and cookies after each test
    cy.window().then((win) => {
      localStorageData = { ...win.localStorage };
    });

    cy.getCookies().then((cookies) => {
      cookiesData = cookies;
    });
  });

  it("Should only display the tutorial once", () => {
    // Open the menu
    cy.get(".nav-link.menu-toggle").click();
    cy.wait(500);

    // Scroll to HEA Appt. Calendar and click
    cy.get(".menu-title.text-truncate")
      .contains("HEA Appt. Calendar")
      .scrollIntoView({ duration: 120 })
      .click();
    cy.wait(500);
    cy.url().should("eq", `${baseUrl}/user/tools/hea-appointments`);

    // Check if tutorial has been completed by checking localStorage
    cy.window().then((win) => {
      const tutorialCompleted = win.localStorage.getItem("tutorialCompleted");
      if (!tutorialCompleted) {
        // Follow the tooltip instructions
        for (let i = 0; i < 12; i++) {
          cy.get(".introjs-button.introjs-nextbutton")
            .contains("Next")
            .scrollIntoView()
            .should("be.visible")
            .click({ force: true });
          cy.wait(500); // Add wait to handle the tooltip transition
        }

        // Click "Done" on the last tooltip
        cy.get(".introjs-button.introjs-nextbutton")
          .contains("Done")
          .scrollIntoView()
          .should("be.visible")
          .click({ force: true })
          .then(() => {
            cy.wait(1000);
            // Set localStorage flag after completing the tutorial
            win.localStorage.setItem("tutorialCompleted", "true");
          });
      } else {
        // Skip the tutorial since it's already completed
        cy.log("Tutorial already completed, skipping...");
      }
    });
  });

  it("It should click on 'All' button and display all appointment.", () => {
    // Open the menu
    cy.get(".nav-link.menu-toggle").click();
    cy.wait(1000);

    // Scroll to HEA Appt. Calendar and click
    cy.get(".menu-title.text-truncate").contains("HEA Appt. Calendar").click();
    cy.wait(1000);

    cy.get("#all").click({ force: true });
    cy.wait(1000);
  });

  it("It should click on 'Open' button and display open appointment.", () => {
    // Open the menu
    cy.get(".nav-link.menu-toggle").click();
    cy.wait(1000);

    // Scroll to HEA Appt. Calendar and click
    cy.get(".menu-title.text-truncate").contains("HEA Appt. Calendar").click();
    cy.wait(1000);

    cy.get("#open").click({ force: true });
  });

  it("It should click on 'Pending Resh' button and display rescheduled appointment.", () => {
    // Open the menu
    cy.get(".nav-link.menu-toggle").click();
    cy.wait(1000);

    // Scroll to HEA Appt. Calendar and click
    cy.get(".menu-title.text-truncate").contains("HEA Appt. Calendar").click();
    cy.wait(1000);

    cy.get("#pending").click({ force: true });
    cy.wait(1000);
  });

  it("It should click on 'Confirmed' button and display confirmed appointment.", () => {
    // Open the menu
    cy.get(".nav-link.menu-toggle").click();
    cy.wait(1000);

    // Scroll to HEA Appt. Calendar and click
    cy.get(".menu-title.text-truncate").contains("HEA Appt. Calendar").click();
    cy.wait(1000);

    cy.get("#confirmed").click({ force: true });
    cy.wait(1000);
  });

  it("It should click on 'Canceled' button and display canceled appointment.", () => {
    // Open the menu
    cy.get(".nav-link.menu-toggle").click();
    cy.wait(1000);

    // Scroll to HEA Appt. Calendar and click
    cy.get(".menu-title.text-truncate").contains("HEA Appt. Calendar").click();
    cy.wait(1000);

    cy.get("#canceled").click();
    cy.wait(1000);
  });

  it("It should create a new appointment.", () => {
    // Open the menu
    cy.get(".nav-link.menu-toggle").click();
    cy.wait(1000);

    // Scroll to HEA Appt. Calendar and click
    cy.get(".menu-title.text-truncate")
      .contains("HEA Appt. Calendar")
      .scrollIntoView({ duration: 120 })
      .click();
    cy.wait(1000);

    // Wait for work hours cells to be visible and interact with them
    cy.get("td.e-work-cells.e-work-hours", { timeout: 60000 }).should(
      "be.visible"
    );

    cy.get(".e-work-hours", { timeout: 60000 })
      .should("be.visible")
      .eq(4)
      .click();

    // Wait to ensure the click event is registered
    cy.wait(1000);

    // Click the create appointment button
    cy.get("#create_appointment").scrollIntoView().should("be.visible").click();
    cy.wait(1000);

    cy.get(".fa-solid.fa-search").click();

    cy.get(
      ".ag-cell-value.ag-cell.ag-cell-not-inline-editing.ag-cell-normal-height"
    ).should("be.visible");

    cy.get(
      ".ag-cell-value.ag-cell.ag-cell-not-inline-editing.ag-cell-normal-height"
    )
      .contains("David")
      .click();
    cy.wait(1000);

    cy.get("#Subject").clear().type("Cypress Automation QA Test");

    cy.get(".form-group").should("be.visible");

    cy.get("#Status").contains("Confirmed").click({ force: true });

    cy.get("#StartTime")
      .should("be.visible")
      .clear({ force: true })
      .click()
      .type("Nov 13, 2024, 4:00 PM", { force: true })
      .click({ force: true });

    cy.get("#technician")
      .should("be.visible")
      .contains("Anthony Scala")
      .click({ force: true });

    cy.get(".e-input-group-icon.e-date-icon.e-icons").should("be.visible");

    cy.get(".form-control.field_description")
      .type(
        "This is the Cypress Automation description of HEA Appt has been created just for testing purpose"
      )
      .click();

    cy.wait(2000);

    // Save the event
    cy.get("#btnSaveEvent").should("be.visible").click();
    cy.wait(20000);
  });

  it("it should try to delete pending appointment and cancel the process.", () => {
    // Open the menu
    cy.get(".nav-link.menu-toggle").click();
    cy.wait(1000);

    // Scroll to HEA Appt. Calendar and click
    cy.get(".menu-title.text-truncate").contains("HEA Appt. Calendar").click();
    cy.wait(1000);

    cy.get("#pending").click({ force: true });
    cy.wait(1000);

    cy.get(".e-appointment.e-lib.e-draggable.pending-reschedule")
      .should("be.visible")
      .click();
    cy.get(".e-appointment-details").should("be.visible").click();

    cy.wait(1000);

    cy.get(
      ".e-event-delete.e-text-ellipsis.e-control.e-btn.e-lib.e-flat"
    ).click();

    cy.wait(1000);

    cy.get(
      ".e-control.e-btn.e-lib.e-quick-alertcancel.e-flat.e-quick-dialog-cancel"
    ).click();
    cy.wait(1000);
  });

  it("it should delete pending appointment successful", () => {
    // Open the menu
    cy.get(".nav-link.menu-toggle").click();
    cy.wait(1000);

    // Scroll to HEA Appt. Calendar and click
    cy.get(".menu-title.text-truncate").contains("HEA Appt. Calendar").click();
    cy.wait(1000);

    cy.get("#pending").click({ force: true });
    cy.wait(1000);

    cy.get(".e-appointment.e-lib.e-draggable.pending-reschedule")
      .should("be.visible")
      .click();
    cy.get(".e-appointment-details").should("be.visible").eq(0).click();

    cy.get(
      ".e-event-delete.e-text-ellipsis.e-control.e-btn.e-lib.e-flat"
    ).click();

    cy.get(
      ".e-control.e-btn.e-lib.e-quick-alertok.e-flat.e-primary.e-quick-dialog-delete"
    ).click();
    cy.wait(1000);
    cy.get(".swal2-confirm.btn.btn-primary.swal2-styled").click();
    cy.wait(1000);
  });

  it("It should click on 'Open' button and edit open appointment.", () => {
    // Open the menu
    cy.get(".nav-link.menu-toggle").click();
    cy.wait(1000);

    // Scroll to HEA Appt. Calendar and click
    cy.get(".menu-title.text-truncate").contains("HEA Appt. Calendar").click();
    cy.wait(1000);

    cy.get("#open").click({ force: true });
    cy.wait(1000);

    cy.get(".e-appointment-details").should("be.visible").eq(0).click();
    cy.get(
      ".e-event-edit.e-text-ellipsis.e-control.e-btn.e-lib.e-flat.e-primary"
    )
      .should("be.visible")
      .click();

    cy.get("#StartTime")
      .should("be.visible")
      .clear({ force: true })
      .click()
      .type("Nov 13, 2024, 4:00 PM", { force: true })
      .click({ force: true });

    cy.get("#technician")
      .should("be.visible")
      .contains("James Jackson")
      .click({ force: true });
    cy.get(".invalid-feedback")
      .should("not.have.css", "display", "none")
      .should("be.visible")
      .click();

    cy.get(".e-input-group-icon.e-date-icon.e-icons").should("be.visible");

    cy.get(".form-control.field_description")
      .clear()
      .type(
        "This is the Cypress Automation description of HEA App has been edited or updated just for testing purposes"
      )
      .click();

    // Save the event
    cy.get("#btnSaveEvent").should("be.visible").click();
  });
});
