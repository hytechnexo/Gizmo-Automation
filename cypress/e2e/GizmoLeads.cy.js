const { it } = require("mocha");

import "cypress-file-upload";

describe("Gizmo Leads Process", () => {
  afterEach(() => {
    cy.clearAllLocalStorage();
    cy.clearCookies();
  });

  it("It should open an external web page and create new leads", () => {
    // Visit the login page
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    // Log in to the application
    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();

    // Verify successful login
    cy.url().should("equal", "https://gizmo.local/user/home");

    // Click the button to create a new lead
    cy.get(".fa-regular.fa-user-plus").first().click();
    cy.wait(10000);

    // Navigate to the lead creation page
    cy.visit("https://gizmo.local/user/module/leads/create");
    cy.url().should("include", "/user/module/leads/create");
    cy.wait(10000);

    cy.url().should("equal", "https://gizmo.local/user/module/leads/create");

    // Debugging: log the page state and take a screenshot
    cy.log("Page state after navigating to create new lead");
    cy.screenshot("create-lead-page");

    // Ensure the first_name field is visible and then type into it
    cy.get("#first_name", { timeout: 15000 })
      .should("be.visible")
      .type("Automation");
    cy.get("#last_name").should("be.visible").type("Cypress");
    cy.get("#home_phone").should("be.visible").type("8095596396");
    cy.get("#mobile_phone").should("be.visible").type("8295896985");
    cy.get("#email")
      .should("be.visible")
      .type("automationcypress@hytechhome.com");

    // Select2 dropdown interactions
    cy.get("#select2-stage-container").click();
    cy.get(".select2-results__option").contains("Qualifying").click();

    cy.get("#select2-project_type-container").click();
    cy.get(".select2-results__option").contains("Home Energy Audit").click();

    cy.get("#select2-lead_source-container").click();
    cy.get(".select2-results__option").contains("Referral").click();

    cy.get("#select2-property_type-container").click();
    cy.get(".select2-results__option").contains("Residential").click();

    cy.get("#street").should("be.visible").type("123 Main St");
    cy.get("#city").should("be.visible").type("New York");
    cy.get("#zipcode").should("be.visible").type("10001");

    cy.get("#state").then(($state) => {
      $state.show();
      cy.wrap($state).select("New York");
    });

    // Save the new lead
    cy.get("#save").first().click();

    cy.url().should("equal", "https://gizmo.local/user/module/leads/create");
  });

  it("When users click on Leads functionality link, Users will be redirected to an internal web page with all leads created", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();

    cy.url().should("equal", "https://gizmo.local/user/home");

    // Click the first menu toggle (if this opens the side nav)
    cy.get(".nav-link.menu-toggle").first().click();

    // Click on the active nav item that should be visible now
    cy.get("a[href='https://gizmo.local/user/module/leads']")
      .should("be.visible")
      .click();

    // Wait for potential page load
    cy.wait(15000);

    // Ensure the redirection is correct
    cy.url({ timeout: 20000 }).should(
      "equal",
      "https://gizmo.local/user/module/leads"
    );
  });

  it("Users must be able to edit existing leads", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    // Login the users
    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();
    cy.url().should("equal", "https://gizmo.local/user/home");

    // Navigate to leads module
    cy.get(".nav-link.menu-toggle").first().click();
    cy.get("a[href='https://gizmo.local/user/module/leads']").first().click();

    // Wait for the page to load
    cy.url({ timeout: 20000 }).should(
      "equal",
      "https://gizmo.local/user/module/leads"
    );

    cy.get(".text.dtfc-fixed-left", { timeout: 50000 })
      .should("be.visible")
      .eq(0)
      .click();

    // Click on one of the elements
    cy.get(".ownerlookup", { timeout: 60000 })
      .contains("Nicole Marie")
      .first()
      .click();

    // Click on the edit button
    cy.get("#web_edit_url", { timeout: 60000 })
      .should("be.visible")
      .first()
      .click();
    cy.wait(20000);

    // Fill in lead details to edit them
    cy.get("#first_name").first().clear().type("Updated Cypress First Name");
    cy.get("#last_name").first().clear().type("Updated Automation Last Name");
    cy.get("#home_phone").first().clear().type("8294744948");
    cy.get("#email").first().clear().type("updatedemail@hytech.com");

    // Select2 dropdown interactions
    cy.get("#select2-stage-container").click();
    cy.get(".select2-results__option").contains("Qualifying").click();

    cy.get("#select2-project_type-container").click();
    cy.get(".select2-results__option").contains("Home Energy Audit").click();

    cy.get("#select2-lead_source-container").click();
    cy.get(".select2-results__option").contains("Referral").click();

    cy.get("#select2-property_type-container").click();
    cy.get(".select2-results__option").contains("Residential").click();

    cy.get("#street").should("be.visible").first().clear().type("123 Main St");
    cy.get("#city").should("be.visible").first().clear().type("New York");
    cy.get("#zipcode").should("be.visible").first().clear().type("10001");

    cy.get("#state").then(($state) => {
      $state.show();
      cy.wrap($state).select("New York");
    });

    cy.get("#save").first().click();

    cy.wait(30000);
  });

  it("It should open an external web page and fail the proccess of creating new leads", () => {
    // Visit the login page
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    // Log in to the application
    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();

    // Verify successful login
    cy.url().should("equal", "https://gizmo.local/user/home");

    // Click the button to create a new lead
    cy.get(".fa-regular.fa-user-plus").first().click();
    cy.wait(10000);

    // Navigate to the lead creation page
    cy.visit("https://gizmo.local/user/module/leads/create");
    cy.url().should("include", "/user/module/leads/create");
    cy.wait(10000);

    cy.url().should("equal", "https://gizmo.local/user/module/leads/create");

    // Debugging: log the page state and take a screenshot
    cy.log("Page state after navigating to create new lead");
    cy.screenshot("create-lead-page");

    // Ensure the first_name field is visible and then type into it
    cy.get("#first_name", { timeout: 15000 }).should("be.visible").type(" ");
    cy.get("#last_name").should("be.visible").type(" ");
    cy.get("#home_phone").should("be.visible").type(" ");
    cy.get("#mobile_phone").should("be.visible").type(" ");
    cy.get("#email").should("be.visible").type(" ");

    // Select2 dropdown interactions
    cy.get("#select2-stage-container").click();
    cy.get(".select2-results__option").contains("Qualifying").click();

    cy.get("#select2-project_type-container").click();
    cy.get(".select2-results__option").contains("Home Energy Audit").click();

    cy.get("#select2-lead_source-container").click();
    cy.get(".select2-results__option").contains("Referral").click();

    cy.get("#select2-property_type-container").click();
    cy.get(".select2-results__option").contains("Residential").click();

    cy.get("#street").should("be.visible").type("123 Main St");
    cy.get("#city").should("be.visible").type("New York");
    cy.get("#zipcode").should("be.visible").type("10001");

    cy.get("#state").then(($state) => {
      $state.show();
      cy.wrap($state).select("New York");
    });

    // Save the new lead
    cy.get("#save").first().click();

    cy.url().should("equal", "https://gizmo.local/user/module/leads/create");
  });

  it("It should open an external web page and fail the proccess of creating new leads due to fields required", () => {
    // Visit the login page
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    // Log in to the application
    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();

    // Verify successful login
    cy.url().should("equal", "https://gizmo.local/user/home");

    // Click the button to create a new lead
    cy.get(".fa-regular.fa-user-plus").first().click();
    cy.wait(10000);

    // Navigate to the lead creation page
    cy.visit("https://gizmo.local/user/module/leads/create");
    cy.url().should("include", "/user/module/leads/create");
    cy.wait(10000);

    cy.url().should("equal", "https://gizmo.local/user/module/leads/create");

    // Debugging: log the page state and take a screenshot
    cy.log("Page state after navigating to create new lead");
    cy.screenshot("create-lead-page");

    // Ensure the first_name field is visible and then type into it
    cy.get("#first_name", { timeout: 15000 }).should("be.visible").type(" ");
    cy.get("#last_name").should("be.visible").type(" ");
    cy.get("#home_phone").should("be.visible").type(" ");
    cy.get("#mobile_phone").should("be.visible").type(" ");
    cy.get("#email").should("be.visible").type(" ");

    // Select2 dropdown interactions
    cy.get("#select2-stage-container").click();
    cy.get(".select2-results__option").contains("Junk Lead").click();

    cy.get("#select2-project_type-container").click();
    cy.get(".select2-results__option").contains("Home Energy Audit").click();

    cy.get("#select2-lead_source-container").click();
    cy.get(".select2-results__option").contains("Telemarketed").click();

    cy.get("#select2-property_type-container").click();
    cy.get(".select2-results__option").contains("Residential").click();

    cy.get("#street").should("be.visible").type(" ");
    cy.get("#city").should("be.visible").type(" ");
    cy.get("#zipcode").should("be.visible").type("20563");

    cy.get("#state").then(($state) => {
      $state.show();
      cy.wrap($state).select("Alabama");
    });

    // Save the new lead
    cy.get("#save").first().click();

    cy.url().should("equal", "https://gizmo.local/user/module/leads/create");
  });

  it("It should fail due to fields required ", () => {
    // Visit the login page
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    // Log in to the application
    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get("[type='submit']").first().click();

    // Verify successful login
    cy.url().should("equal", "https://gizmo.local/user/home");

    // Click the button to create a new lead
    cy.get(".fa-regular.fa-user-plus").first().click();
    cy.wait(10000);

    // Navigate to the lead creation page
    cy.visit("https://gizmo.local/user/module/leads/create");
    cy.url().should("include", "/user/module/leads/create");
    cy.wait(10000);

    cy.url().should("equal", "https://gizmo.local/user/module/leads/create");

    // Debugging: log the page state and take a screenshot
    cy.log("Page state after navigating to create new lead");
    cy.screenshot("create-lead-page");

    // Ensure the first_name field is visible and then type into it
    cy.get("#first_name", { timeout: 15000 }).should("be.visible").type(" ");
    cy.get("#last_name").should("be.visible").type(" ");
    cy.get("#home_phone").should("be.visible").type(" ");
    cy.get("#mobile_phone").should("be.visible").type(" ");
    cy.get("#email").should("be.visible").type(" ");

    // Select2 dropdown interactions
    cy.get("#select2-stage-container").click();
    cy.get(".select2-results__option").contains("Select").click();

    cy.get("#select2-project_type-container").click();
    cy.get(".select2-results__option").contains("Select").click();

    cy.get("#select2-lead_source-container").click();
    cy.get(".select2-results__option").contains("Select").click();

    cy.get("#select2-property_type-container").click();
    cy.get(".select2-results__option").contains("Select").click();

    cy.get("#street").should("be.visible").type("Select");
    cy.get("#city").should("be.visible").click();
    cy.get("#zipcode").should("be.visible").click();

    cy.get("#state").then(($state) => {
      $state.show();
      cy.wrap($state).select("");
    });

    // Save the new lead
    cy.get("#save").first().click();

    cy.url().should("equal", "https://gizmo.local/user/module/leads/create");
  });

  it("Users must be able to upload files or attachments for existing users", () => {
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
    cy.get(".nav-link.menu-toggle", { timeout: 10000 }).first().click();
    cy.get("a[href='https://gizmo.local/user/module/leads']", {
      timeout: 10000,
    })
      .first()
      .click();
    cy.url({ timeout: 20000 }).should(
      "equal",
      "https://gizmo.local/user/module/leads"
    );

    // Click on one of the elements
    cy.get(".ownerlookup", { timeout: 60000 })
      .contains("Nicole Marie")
      .first()
      .click();

    cy.get(".datetime", { timeout: 30000 })
      .contains("Sep 16, 2022 4:24 PM")
      .click();

    // Scroll the Upload File button into view and click it
    cy.get("#attachments-modal", { timeout: 60000 })
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.get('[type="button"]', { timeout: 20000 })
      .first()
      .click({ force: true });

    cy.get(".ff_fileupload_dropzone", { timeout: 60000 })
      .scrollIntoView()
      .should("be.visible")
      .first()
      .click({ force: true });

    // Ensure the modal containing '#view-comment-in-record' is visible before interacting
    cy.get("#gizmo-comments-modal.modal.fade.text-left", { timeout: 60000 })
      .should("have.class", "show")
      .then(($modal) => {
        // Ensure the '#view-comment-in-record' button is visible within the modal
        cy.wrap($modal)
          .find("#view-comment-in-record")
          .should("be.visible")
          .click({ force: true });
      });

    // Ensure the modal containing '#view-comment-in-record' is visible before interacting
    cy.get("#gizmo-comments-modal.modal.fade.text-left", { timeout: 60000 })
      .should("exist")
      .then(() => {
        // Ensure the modal is visible by checking its CSS property 'display'
        cy.get("#gizmo-comments-modal.modal.fade.text-left").should(
          "have.css",
          "display",
          "none"
        );

        // Ensure the '#view-comment-in-record' button is visible within the modal
        cy.get("#view-comment-in-record", { timeout: 60000 })
          .should("be.visible")
          .click();
      });

    // Upload the file
    const fileName = "Login Gizmo.PNG";
    cy.get('input[type="file"]').attachFile(fileName);

    // Ensure the file preview is visible
    cy.get(
      ".ff_fileupload_preview_image.ff_fileupload_preview_image_has_preview",
      { timeout: 50000 }
    ).should("contain", fileName);

    // Click the upload button
    cy.get("#upload", { timeout: 50000 })
      .should("be.visible")
      .first()
      .click({ force: true });
  });

  it("Users must be able to see preview of the file or attachment uploaded", () => {
    // Visit the login page
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    // Login the user
    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get(
      ".btn.btn-success.btn-lighten-2.btn-block.btn-sm.waves-effect.waves-float.waves-light"
    ).click();
    cy.wait(15000);
    cy.url().should("equal", "https://gizmo.local/user/home");

    // Navigate to leads module
    cy.get(".nav-link.menu-toggle").click();
    cy.get("a[href='https://gizmo.local/user/module/leads']").click();
    cy.url({ timeout: 20000 }).should(
      "equal",
      "https://gizmo.local/user/module/leads"
    );

    // Click on one of the elements
    cy.get(".ownerlookup", { timeout: 60000 }).contains("Jose Mateo").click();

    cy.wait(30000);

    cy.get(".btn.btn-sm.dropdown-toggle.hide-arrow", {
      timeout: 20000,
    }).click();

    cy.get(".dropdown-item.preview-file", { timeout: 40000 }).click();

    cy.wait(20000);
  });

  it("When users click on file name or attachment name an external link must be opened displaying current file or attachment", () => {
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

    cy.get(".datetime", { timeout: 30000 })
      .contains("Sep 16, 2022 4:24 PM")
      .click();

    cy.get(".attachment-file-name", { timeout: 40000 }).first().click();

    cy.wait(20000);
  });

  it("Users must be able to download file or attachment that are uploaded", () => {
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
    cy.get("a[href='https://gizmo.local/user/module/leads']")
      .first()
      .click({ force: true });
    cy.url({ timeout: 20000 }).should(
      "equal",
      "https://gizmo.local/user/module/leads"
    );

    // Click on one of the elements
    cy.get(".ownerlookup", { timeout: 60000 })
      .contains("Nicole Marie")
      .first()
      .click();

    cy.get(".datetime", { timeout: 30000 })
      .contains("Sep 16, 2022 4:24 PM")
      .click();

    cy.get(".btn.btn-sm.dropdown-toggle.hide-arrow", {
      timeout: 30000,
    }).click();
    cy.get(".dropdown-item.download-file", { timeout: 30000 }).click();
  });

  it("Users must be able to delete file or attachment that are uploaded", () => {
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
    cy.get("a[href='https://gizmo.local/user/module/leads']")
      .first()
      .click({ force: true });
    cy.url({ timeout: 20000 }).should(
      "equal",
      "https://gizmo.local/user/module/leads"
    );

    // Click on one of the elements
    cy.get(".ownerlookup", { timeout: 60000 })
      .contains("Nicole Marie")
      .first()
      .click();

    cy.get(".datetime", { timeout: 30000 })
      .contains("Sep 16, 2022 4:24 PM")
      .click();

    cy.get(".btn.btn-sm.dropdown-toggle.hide-arrow", {
      timeout: 30000,
    }).click();
    cy.get(".dropdown-item.dpr-file").click();
    cy.get(".swal2-confirm.btn-danger.swal2-styled").click();
  });

  it("should create a new meeting for an existing lead", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").first().click();
    cy.get("a[href='https://gizmo.local/user/module/leads']").first().click();
    cy.url().should("eq", "https://gizmo.local/user/module/leads");

    cy.get(".ownerlookup", { timeout: 60000 })
      .contains("Jose Mateo")
      .first()
      .click();
    cy.url().should("include", "/user/module/leads/");

    cy.get(
      ".btn.btn-sm.btn-success.round.waves-effect.inline-block.btn-new-meeting",
      { timeout: 30000 }
    )
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });

    cy.wait(20000);
    cy.get("#select2-meeting_type-container").click();
    cy.get(".select2-dropdown").should("be.visible");
    cy.get(".select2-results__option").contains("In Person").click();
    cy.get("#label-for-start_time").click();
    cy.get(".datetime-picker.field_start_time")
      .should("be.visible")
      .first()
      .click({ force: true });

    cy.get(".form-control").should("be.visible");

    // Retry logic for the calendar visibility
    cy.get(".flatpickr-calendar.hasTime.animate", { timeout: 40000 }).then(
      ($calendar) => {
        if ($calendar.is(":hidden")) {
          // Directly show the calendar if it is hidden
          cy.wrap($calendar).invoke("show");
        }
        expect($calendar).should("be.visible");
      }
    );

    cy.get(".flatpickr-current-month").first().should("be.visible");
    cy.get(".flatpickr-monthDropdown-months")
      .should("be.visible")
      .contains("June");
    cy.get(".numInputWrapper").should("be.visible");
    cy.get(".numInput.cur-year").should("be.visible").type("2025");
    cy.get(".flatpickr-days").should("be.visible");
    cy.get(".dayContainer").should("be.visible");
    cy.get(".flatpickr-day").should("be.visible").contains("29");
    cy.get(".numInputWrapper").should("be.visible");
    cy.get(".numInput.flatpickr-hour").should("be.visible").type("01");
    cy.get(".numInput.flatpickr-minute").should("be.visible").type("45");
    cy.get(".flatpickr-am-pm").should("be.visible").contains("PM");

    cy.get("#save-meeting").should("be.visible").click();
  });

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
});
