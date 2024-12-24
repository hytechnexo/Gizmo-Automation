import { baseUrl } from "./Global";

export const visitLoginPageAndLogin = () => {
  cy.visit(baseUrl);
  cy.url().should("include", "/user/login");

  cy.get("#email").type(Cypress.env("username"));
  cy.get("#password").type(Cypress.env("password"));

  cy.get('[type="submit"]').first().click();

  cy.url().should("eq", `${baseUrl}/user/home`);
};

export const visitEnergyEfficiency = () => {
  cy.get(".nav-link.menu-toggle").click();
  cy.get("#main-menu-navigation").scrollIntoView();
  cy.get(".d-flex.align-items-center", { timeout: 20000 });
  cy.get(".menu-title.text-truncate").should("be.visible");
  cy.get(".nav-item", { timeout: 10000 }).contains("Energy Efficiency").click();

  cy.wait(12000);
};

export const findEnergyOwner = (name) => {
  cy.get(".ownerlookup", { timeout: 60000 }).contains(name).click();
  cy.wait(35000);
};

export const findEnergySection = (section) => {
  cy.get(
    ".record-menu-browser-toggle.d-flex.align-items-center.justify-content-center",
    { timeout: 5000 }
  ).click();

  cy.wait(5000);

  cy.get("#sections-menu-list", { timeout: 10000 }).should("be.visible");

  cy.get(".list-group-item.list-group-item-action.record-menu-item", {
    timeout: 10000,
  })
    .should("be.visible")
    .contains(section)
    .click({ force: true });

  cy.wait(5000);
};

export const editEnergyEfficiency = () => {
  cy.get("#web_edit_url", { timeout: 20000 }).click();
  cy.wait(30000);

  cy.get("#select2-site_assessor_user-container").should("be.visible").click();
  cy.get(".select2-search__field").type("Admin Manager").click();

  cy.get("#stage").should("be.visible");
  cy.get(".select2-selection.select2-selection--single").should("be.visible");
  cy.get(".select2-search__field").scrollIntoView().type("Test").click();

  cy.get("#home_phone").type("8293999696").click();

  cy.get("#select2-lead_source-container")
    .should("be.visible")
    .type("NY Energy Data Sales")
    .click();
  cy.get("#street").clear().type("4050 7th Av");
  cy.get("#city").clear().type("New York");
  cy.get("#state").clear().type("New York");
  cy.get("#zipcode").clear().type("50050");

  cy.get("#select2-financing-container")
    .scrollIntoView()
    .should("be.visible")
    .click();
  cy.get(".select2-search__field").type("Credit Human 10 year 4.99%").click();

  cy.get(".col-8").should("be.visible");
  cy.get("#total_contract_price")
    .scrollIntoView()
    .type("3500", { force: true });
  cy.get("#down_payment").scrollIntoView().type("1500");
  cy.get("#select2-nyserda_rebates-container").type("NYSERDA Rebates");
  cy.get("#contract_notes").type(
    "This contract note has been done by Cypress Automation Test"
  );

  cy.get("#save", { timeout: 10000 }).click();
  cy.wait(10000);

  cy.get("body").then(($body) => {
    if ($body.find(".error-message").length) {
      cy.get(".error-message").should("be.visible");
      throw new Error("Save failed: An error message was displayed.");
    } else {
      cy.url().should("include", "/user/module/energy_efficiency");
    }
  });
};

export const organizationsv2 = () => {
  cy.get(".nav-link.menu-toggle").click();
  cy.get("#main-menu-navigation").scrollIntoView();
  cy.get(".d-flex.align-items-center", { timeout: 20000 });
  cy.get(".menu-title.text-truncate").should("be.visible");
  cy.get(".nav-item", { timeout: 40000 }).contains("Organizationsv2").click();

  cy.url({ timeout: 40000 }).should("eq", `${baseUrl}/admin/organizationsv2`);

  cy.wait(20000);
};

export const shareEnergyEfficiencyRecord = () => {
  cy.get("#actionsDropDownMenu").click();
  cy.wait(10000);
  cy.get("#share-record").click();
  cy.wait(10000);

  cy.get("#select2-share-access-type-container").click();
  cy.get("#select2-share-access-type-result-lms0-read-write")
    .contains("Read Only")
    .click();
  cy.wait(10000);

  cy.get(".select2-selection.select2-selection--single.select").type(
    "Adam Joyce"
  );
  cy.get("#btn-share-record").click();
  cy.wait(10000);
};

export const filterOrganizationAndEditOrganization = () => {
  cy.get("#group-filter").type("Organization Updated By Cypress").click();
  cy.wait(20000);
  cy.get("#button_detail").click();

  cy.wait(10000);
  cy.get("#button_edit").should("be.visible").click({ force: true });

  cy.wait(5000);
  cy.get("#organization_nameo_org", { timeout: 20000 })
    .should("be.visible")
    .clear()
    .type("Organization Updated By Cypress Automation");
  cy.wait(5000);
  cy.get("#select2-organization_partner_type-container")
    .should("be.visible")
    .click();

  cy.get(".select2-search__field").type("Sunnova O&I{enter}");
  cy.get("#organization_phone_number")
    .should("be.visible")
    .clear()
    .type("8493999585");
  cy.get("#organization_description")
    .should("be.visible")
    .clear()
    .type(
      "This organization descripttion has been updated by Cypress using automations scripts"
    );
  cy.get("#select2-organization_leader-container").should("be.visible").click();
  cy.get(".select2-search__field").type("Juan Polanco {enter}");

  // Step 5: Save changes and validate
  cy.get("#button_save").should("be.visible").click();
  cy.wait(10000);
};

export const addNewCommisionRange = () => {
  cy.get("#group-filter").type("Organization Updated two By Cypress").click();

  cy.get("#button_detail").click();

  cy.wait(10000);
  cy.get("#button_edit").should("be.visible").click({ force: true });

  cy.wait(5000);

  // Click on add_rate button and wait for fields to appear
  cy.get("#add_rate", { timeout: 10000 })
    .scrollIntoView()
    .should("be.visible")
    .click();

  // Additional wait to ensure the fields are rendered
  cy.wait(10000);

  cy.get(".col-3").should("be.visible");

  cy.get("#base_commission_rate-0").type("200");
  cy.get("#min_production_value-0").type("300");
  cy.get("#max_production_value-0").type("400");

  cy.get(".col-3").should("be.visible");

  cy.wait(5000);
  cy.get("#button_save").click();
  cy.wait(9000);
};

export const addNewRedlinePricing = () => {
  cy.get("#group-filter").type("Organization Updated two By Cypress").click();

  cy.get("#button_detail").click();

  cy.wait(10000);
  cy.get("#button_edit").should("be.visible").click({ force: true });

  //Redline Pricing by System Size Range
  cy.wait(5000);
  cy.get("#add_redline", { timeout: 10000 })
    .scrollIntoView()
    .should("be.visible")
    .click();

  cy.get(".col-12").should("be.visible");
  cy.get("#redline_pricing-0").type("600");
  cy.get("#min_system_size_value-0").type("700");
  cy.get("#max_system_size_value-0").type("800");

  cy.wait(5000);
  cy.get("#button_save").click();
  cy.wait(9000);
};

export const deleteCommisionRate = () => {
  cy.get("#group-filter").type("Organization Updated two By Cypress").click();
  cy.get("#button_detail").click();

  cy.wait(10000);
  cy.get("#button_edit").should("be.visible").click({ force: true });
  cy.wait(5000);
  cy.get("#delete_rate", { timeout: 30000 }).should("be.visible").click();
  cy.wait(5000);
  cy.get(".swal2-popup.swal2-modal.swal2-icon-warning.swal2-show").should(
    "be.visible"
  );
  cy.wait(5000);
  cy.get(".swal2-confirm.btn.btn-primary.swal2-styled")
    .scrollIntoView()
    .should("be.visible")
    .click();
  cy.wait(5000);
};

export const deleteRedlinePricing = () => {
  cy.get("#group-filter").type("Organization Updated two By Cypress").click();

  cy.get("#button_detail").click();

  cy.wait(10000);
  cy.get("#button_edit").should("be.visible").click({ force: true });

  cy.wait(5000);
  cy.get("#delete_redline").click();
  cy.wait(5000);
  cy.get(".swal2-popup.swal2-modal.swal2-icon-warning.swal2-show").should(
    "be.visible"
  );
  cy.wait(5000);
  cy.get(".swal2-confirm.btn.btn-primary.swal2-styled")
    .scrollIntoView()
    .should("be.visible")
    .click();
  cy.wait(5000);
};

export const addUserForOganizationsv2 = () => {
  cy.get("#group-filter").type("Organization Updated two By Cypress").click();
  cy.get("#button_detail").click();

  cy.wait(10000);
  cy.get("#add_user_new").click();

  cy.get("#select2-create_type_id-container").should("be.visible", {
    timeout: 10000,
  });
  cy.get("#select2-create_type_id-container").click();
  cy.get(".select2-results__options", { timeout: 10000 })
    .contains("Account Owner")
    .click();

  cy.get("#select2-create_account_status-container").should("be.visible", {
    timeout: 10000,
  });
  cy.get("#select2-create_account_status-container").click();
  cy.get(".select2-results__options", { timeout: 10000 })
    .contains("Pending Activation")
    .click();

  cy.get("#select2-create_department_id-container").should("be.visible", {
    timeout: 10000,
  });
  cy.get("#select2-create_department_id-container").click();
  cy.get(".select2-results__option", { timeout: 10000 })
    .contains("Operations")
    .click();

  cy.get("#password").should("be.visible").type("CypressPassword24");
  cy.get("#confirm_password").should("be.visible").type("CypressPassword24");
  cy.get("#create_email")
    .should("be.visible")
    .type("cypressautomationhome@hytechhome.com");

  cy.get("#select2-create_job_title_id-container").should("be.visible");
  cy.get("#select2-create_job_title_id-container").click();
  cy.get(".select2-results__options", { timeout: 10000 })
    .contains("Software Developer Manager")
    .click();

  cy.get("#select2-create_role_id-container").should("be.visible", {
    timeout: 10000,
  });
  cy.get("#select2-create_role_id-container").click();
  cy.get(".select2-results__options", { timeout: 10000 })
    .contains("QA Engineer")
    .click();

  cy.get("#create_user_buttonTwo").should("be.visible").click();
  cy.get("#create_first_name").should("be.visible").type("Cypress");
  cy.get("#create_last_name").should("be.visible").type("Automation");

  cy.get("#select2-create_gender-container").should("be.visible", {
    timeout: 10000,
  });
  cy.get("#select2-create_gender-container").click();
  cy.get(".select2-results__options")
    .should("be.visible")
    .contains("Male")
    .click();

  cy.get("#create_mobile_phone").should("be.visible").type("8293996993");

  cy.get("#user_create_save").click();
  cy.wait(20000);

  cy.get(".swal2-confirm.btn-success.swal2-styled")
    .should("be.visible")
    .click();
  cy.wait(5000);
};

export const createNewLeads = () => {
  // Click the button to create a new lead
  cy.get(".nav-link.nav-create-new-lead-btn").click();
  cy.wait(10000);

  // Navigate to the lead creation page
  cy.visit(`${baseUrl}/user/module/leads/create`);
  cy.url().should("include", "/user/module/leads/create");
  cy.wait(20000);

  // Ensure the first_name field is visible and then type into it
  cy.get("#first_name", { timeout: 15000 })
    .should("be.visible")
    .type("Test automated");
  cy.get("#last_name").should("be.visible").type("Automation By Cypress");
  cy.get("#home_phone").should("be.visible").type("8095999663");
  cy.get("#mobile_phone").should("be.visible").type("8493999356");
  cy.get("#email")
    .should("be.visible")
    .type("testautomationbycypress@hytechhome.com");

  // Select2 dropdown interactions
  cy.get("#select2-stage-container").click();
  cy.get(".select2-results__option").contains("Junk Lead").click();

  cy.get("#select2-project_type-container").click();
  cy.get(".select2-results__option").contains("Battery Only").click();

  cy.get("#select2-lead_source-container").click();
  cy.get(".select2-results__option").contains("PSEG").click();

  cy.get("#select2-property_type-container").click();
  cy.get(".select2-results__option").contains("Commercial").click();

  cy.get("#street").should("be.visible").type("556 5th Av");
  cy.get("#city").should("be.visible").type("New York");
  cy.get("#zipcode").should("be.visible").type("50556");

  cy.get("#state").then(($state) => {
    $state.show();
    cy.wrap($state).select("New York");
  });

  // Save the new lead
  cy.get("#save").first().click();

  cy.url().should("equal", `${baseUrl}/user/module/leads/create`);

  cy.wait(20000);
};

export const editExistingLeads = () => {
  // Navigate to leads module
  cy.get(".nav-link.menu-toggle").first().click();
  cy.get(`a[href='${baseUrl}/user/module/leads']`).first().click();

  // Wait for the page to load
  cy.url({ timeout: 20000 }).should("equal", `${baseUrl}/user/module/leads`);

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
};

export const failCreateNewLeads = () => {
  // Click the button to create a new lead
  cy.get(".nav-link.nav-create-new-lead-btn").click();
  cy.wait(10000);

  // Navigate to the lead creation page
  cy.visit(`${baseUrl}/user/module/leads/create`);
  cy.url().should("include", "/user/module/leads/create");
  cy.wait(20000);

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

  cy.url().should("equal", `${baseUrl}/user/module/leads/create`);
};

export const fieldsRequiredCreateNewLeads = () => {
  // Click the button to create a new lead
  cy.get(".nav-link.nav-create-new-lead-btn").click();
  cy.wait(10000);

  // Navigate to the lead creation page
  cy.visit(`${baseUrl}/user/module/leads/create`);
  cy.url().should("include", "/user/module/leads/create");
  cy.wait(20000);

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

  cy.url().should("equal", `${baseUrl}/user/module/leads/create`);
};

export const uploadFileForExistingLeads = () => {
  // Navigate to leads module
  cy.get(".nav-link.menu-toggle", { timeout: 10000 }).first().click();
  cy.get(`a[href='${baseUrl}/user/module/leads']`, {
    timeout: 10000,
  })
    .first()
    .click();
  cy.url({ timeout: 20000 }).should("equal", `${baseUrl}/user/module/leads`);

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

  cy.get('[type="button"]', { timeout: 20000 }).first().click({ force: true });

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
};

export const previewOfFileLeads = () => {
  // Navigate to leads module
  cy.get(".nav-link.menu-toggle").click();
  cy.get(`a[href='${baseUrl}/user/module/leads']`).click();
  cy.url({ timeout: 20000 }).should("equal", `${baseUrl}/user/module/leads`);

  // Click on one of the elements
  cy.get(".ownerlookup", { timeout: 60000 }).contains("Jose Mateo").click();

  cy.wait(30000);

  cy.get(".btn.btn-sm.dropdown-toggle.hide-arrow", {
    timeout: 20000,
  }).click();

  cy.get(".dropdown-item.preview-file", { timeout: 40000 }).click();

  cy.wait(20000);
};

export const displayFileLeads = () => {
  // Navigate to leads module
  cy.get(".nav-link.menu-toggle").first().click();
  cy.get(`a[href='${baseUrl}/user/module/leads']`).first().click();
  cy.url({ timeout: 20000 }).should("equal", `${baseUrl}/user/module/leads`);

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
};

export const downloadFileLeads = () => {
  // Navigate to leads module
  cy.get(".nav-link.menu-toggle").first().click();
  cy.get(`a[href='${baseUrl}/user/module/leads']`)
    .first()
    .click({ force: true });
  cy.url({ timeout: 20000 }).should("equal", `${baseUrl}/user/module/leads`);

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
};

export const deleteFileLeads = () => {
  // Navigate to leads module
  cy.get(".nav-link.menu-toggle").first().click();
  cy.get(`a[href='${baseUrl}/user/module/leads']`)
    .first()
    .click({ force: true });
  cy.url({ timeout: 20000 }).should("equal", `${baseUrl}/user/module/leads`);

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
};

export const createMeetingLeads = () => {
  cy.get(".nav-link.menu-toggle").first().click();
  cy.get(`a[href='${baseUrl}/user/module/leads']`).first().click();
  cy.url().should("eq", `${baseUrl}/user/module/leads`);

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
};

export const createNewMeeting = () => {
  cy.get("#btn-add-new-meeting").should("be.visible").click();

  cy.get("#select2-meeting_type-container", { timeout: 10000 })
    .should("be.visible")
    .click();

  cy.get(".select2-search__field")
    .should("be.visible")
    .type("In Person{enter}");

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
  cy.get(".flatpickr-calendar.hasTime.animate", { timeout: 60000 }).then(
    ($calendar) => {
      if ($calendar.is(":hidden")) {
        cy.log("Calendar is hidden, attempting to show it");
        // Directly show the calendar if it is hidden
        cy.wrap($calendar).invoke("show");
        cy.wait(2000); // Espera adicional después de intentar mostrar el calendario
        cy.log(
          "Calendar visibility status after show attempt: ",
          $calendar.css("visibility")
        );
      }
      cy.wrap($calendar).should("be.visible");
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
};

export const openNotificationSidebar = () => {
  cy.get("#notification-icon-container").should("be.visible").click();
  cy.wait(20000);
};

export const closeNotificationSideBar = () => {
  cy.get("#notification-icon-container").should("be.visible").click();
  cy.wait(5000);
  cy.get("#close-sidebar-button", { timeout: 4000 })
    .should("exist")
    .should("be.visible")
    .click();
};
