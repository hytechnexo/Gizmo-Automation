export const visitLoginPageAndLogin = () => {
  cy.visit("https://gizmo.local/user/login");
  cy.url().should("include", "/user/login");

  cy.get("#email").type(Cypress.env("username"));
  cy.get("#password").type(Cypress.env("password"));
  cy.get('[type="submit"]').first().click();

  cy.wait(15000);
  cy.url().should("eq", "https://gizmo.local/user/home");
};

export const visitEnergyEfficiency = () => {
  cy.get(".nav-link.menu-toggle").click();
  cy.get("#main-menu-navigation").scrollIntoView();
  cy.get(".d-flex.align-items-center", { timeout: 20000 });
  cy.get(".menu-title.text-truncate").should("be.visible");
  cy.get(".nav-item", { timeout: 10000 }).contains("Energy Efficiency").click();

  cy.wait(15000);
};

export const findEnergyOwner = (name) => {
  cy.get(".ownerlookup").contains(name).click();
  cy.wait(45000);
};

export const editEnergyEfficiency = () => {
  cy.get("#web_edit_url", { timeout: 10000 }).click();
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
  cy.get(".nav-item", { timeout: 30000 }).contains("Organizationsv2").click();

  cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");

  cy.wait(15000);
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
