describe("Organizationsv2 Proccess", () => {
  afterEach(() => {
    cy.clearAllLocalStorage();
    cy.clearCookies();
  });

  /*
    
    it("Super User must be taken to an internal page with all the organizations created when clicking on Organizationsv2 Link", () => {

        cy.visit('https://gizmo.local/user/login');
        cy.url().should('include', '/user/login');
      
        cy.get('#email').type('jose.mateo@hytechhome.com');
        cy.get('#password').type('Migueldeveloper2424@');
        cy.get('[type="submit"]').first().click();
      
        cy.wait(15000);
        cy.url().should('eq', 'https://gizmo.local/user/home');

        cy.get(".nav-link.menu-toggle").click();
        cy.get("#main-menu-navigation").scrollIntoView();
        cy.get(".d-flex.align-items-center", {timeout: 20000})
        cy.get(".menu-title.text-truncate").should("be.visible");
        cy.get(".nav-item", {timeout: 30000}).contains("Organizationsv2").click();

        cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");

        cy.wait(30000);

    });

    

    it("When super user click on Organization Details button an internal page will be opened with the Organization details for that specific organization", () => {

        cy.visit('https://gizmo.local/user/login');
        cy.url().should('include', '/user/login');
      
        cy.get('#email').type('jose.mateo@hytechhome.com');
        cy.get('#password').type('Migueldeveloper2424@');
        cy.get('[type="submit"]').first().click();
      
        cy.wait(15000);
        cy.url().should('eq', 'https://gizmo.local/user/home');

        cy.get(".nav-link.menu-toggle").click();
        cy.get("#main-menu-navigation").scrollIntoView();
        cy.get(".d-flex.align-items-center", {timeout: 20000})
        cy.get(".menu-title.text-truncate").should("be.visible");
        cy.get(".nav-item", {timeout: 10000}).contains("Organizationsv2").click();

        cy.wait(15000);
        cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");

        cy.wait(2000);
        cy.get("#group-filter", {timeout: 20000}).type("Organization name updated").click();
        cy.get("#button_detail", {timeout: 20000}).click();
        cy.wait(2000);


    });

    

    
    it("When super user click on Edit button a cancel button  and save button must appear and the Inactivate or Activate Organization button must disappear from the screen", () => {

        cy.visit('https://gizmo.local/user/login');
        cy.url().should('include', '/user/login');
      
        cy.get('#email').type('jose.mateo@hytechhome.com');
        cy.get('#password').type('Migueldeveloper2424@');
        cy.get('[type="submit"]').first().click();
      
        cy.wait(15000);
        cy.url().should('eq', 'https://gizmo.local/user/home');

        cy.get(".nav-link.menu-toggle").click();
        cy.get("#main-menu-navigation").scrollIntoView();
        cy.get(".d-flex.align-items-center", {timeout: 20000})
        cy.get(".menu-title.text-truncate").should("be.visible");
        cy.get(".nav-item", {timeout: 10000}).contains("Organizationsv2").click();

        cy.wait(15000);

        cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
        cy.wait(20000);

        cy.get("#group-filter", {timeout: 20000}).type("Organization Updated").click();
       
        cy.get("#button_detail", {timeout: 20000}).click();
        cy.wait(20000);

        cy.get("#button_edit", {timeout: 20000}).should("be.visible").click({force: true});

        cy.wait(5000);

    });


    it("When super user click on cancel button an Inactivate or  Activate Organization button must appear and the Cancel and Save button must disappear from the screen", () => {

        cy.visit('https://gizmo.local/user/login');
        cy.url().should('include', '/user/login');
      
        cy.get('#email').type('jose.mateo@hytechhome.com');
        cy.get('#password').type('Migueldeveloper2424@');
        cy.get('[type="submit"]').first().click();
      
        cy.wait(15000);
        cy.url().should('eq', 'https://gizmo.local/user/home');

        cy.get(".nav-link.menu-toggle").click();
        cy.get("#main-menu-navigation").scrollIntoView();
        cy.get(".d-flex.align-items-center", {timeout: 20000})
        cy.get(".menu-title.text-truncate").should("be.visible");
        cy.get(".nav-item", {timeout: 10000}).contains("Organizationsv2").click();

        cy.wait(15000);

        cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
        cy.wait(20000);

        cy.get("#group-filter", {timeout: 20000}).type("Freedom Power").click();
       
        cy.get("#button_detail", {timeout: 20000}).click();
        cy.wait(20000);

        cy.get("#button_edit", {timeout: 20000}).should("be.visible").click({force: true});

        cy.wait(5000);

        cy.get("#button_cancel").should("be.visible").click();

    });


   */

  it("When super user click on Edit button a cancel button  and save button must appear and the Inactivate or Activate Organization button must disappear from the screen and the super user will be able to edit all fields from the organization after successfully editing a message will pop up: The organization has been successfully updated.", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click({ force: true });
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");

    cy.wait(20000);
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
    cy.get("#select2-organization_leader-container")
      .should("be.visible")
      .click();
    cy.get(".select2-search__field").type("Juan Polanco {enter}");

    // Step 5: Save changes and validate
    cy.get("#button_save").should("be.visible").click();
    cy.wait(10000);
  });

  it("When super user click on Edit button, Commission Rates by Production Range and Redline Pricing by System Size Range sections will show Add new commision range and add new redline pricing range button as well as a delete button next to each section.", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");

    cy.wait(20000);
    cy.get("#group-filter").type("Organization Updated two By Cypress").click();
    cy.wait(20000);
    cy.get("#button_detail").click();

    cy.wait(10000);
    cy.get("#button_edit").should("be.visible").click({ force: true });

    cy.wait(5000);
  });

  it("When super user click on Add New Commision Range button Super user 3 new fields will pop up with a delete button by the side, user will be able to fill out fields or delete them.", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");

    cy.wait(15000);
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
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");

    cy.wait(15000);
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

  it("When super user clicks on Add new commission range button, 3 new fields will pop up with a delete button by the side. The user will be able to fill out fields.", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");

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

    cy.get("#redline_pricing-0", { timeout: 5000 }).type("600");
    cy.get("#min_system_size_value-0", { timeout: 5000 }).type("700");
    cy.get("#max_system_size_value-0", { timeout: 5000 }).type("800");

    cy.get(".col-3").should("be.visible");

    cy.wait(5000);
    cy.get("#button_save").click();
    cy.wait(5000);
  });

  it("When super user clicks on Add new commission range and add new redline pricing range button, 3 new fields will pop up with a delete button by the side. The user will be able to fill out fields.", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");

    cy.get("#group-filter").type("Organization Updated two By Cypress").click();

    cy.get("#button_detail").click();

    cy.wait(10000);
    cy.get("#button_edit").should("be.visible").click({ force: true });

    cy.wait(5000);
    cy.get("#add_redline", { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible");
    cy.get("#base_commission_rate-0", { timeout: 5000 }).type("600");
    cy.get("#min_production_value-0", { timeout: 5000 }).type("700");
    cy.get("#max_production_value-0", { timeout: 5000 }).type("800");

    cy.wait(5000);
    cy.get("#button_save").click();
    cy.wait(5000);
  });

  it("When super user click on Delete button in Commission Rates by Production Range section should be able to delete Commission Rates", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");

    cy.get("#group-filter").type("Organization Updated two By Cypress").click();
    cy.get("#button_detail").click();

    cy.wait(10000);
    cy.get("#button_edit").should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.get("#delete_rate", { timeout: 30000 }).click();
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
  });

  it("When super user click on Delete button in commission rates by production range section should be able to delete redline pricing", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");

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
  });

  it("Super user should be able to add users under the Organizationsv2 created", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");

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
  });

  it("Super user should be able to reset password from users under the organization", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
  });

  it("Super user should be able to edit Account Details from users under the organization ", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
  });

  it("Super user should be able to edit Profile Details from users under the organization", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
  });

  it("Super user should be able to edit Proposal Tool from users under the organization ", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
  });

  it("Super user should be able to edit Permission Settings from users under the organization", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
  });

  it("Super user should be able to edit Licensing from users under the organization ", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
  });

  it("Super user should be able to Disactivate Account from users under the organization", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
  });

  it("Super user should be able to Activate Account from users under the organization", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
  });

  it("Super user should be able to upload file or attachments", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
  });

  it("Super user should be able to delete file or attachments", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
  });

  it("Super user should be able to Download file or attachments", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
  });

  it("Super user should be able to see preview of the file or attachment", () => {
    cy.visit("https://gizmo.local/user/login");
    cy.url().should("include", "/user/login");

    cy.get("#email").type("jose.mateo@hytechhome.com");
    cy.get("#password").type("Migueldeveloper2424@");
    cy.get('[type="submit"]').first().click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/user/home");

    cy.get(".nav-link.menu-toggle").click();
    cy.get("#main-menu-navigation").scrollIntoView();
    cy.get(".d-flex.align-items-center", { timeout: 20000 });
    cy.get(".menu-title.text-truncate").should("be.visible");
    cy.get(".nav-item").contains("Organizationsv2").click();

    cy.wait(15000);
    cy.url().should("eq", "https://gizmo.local/admin/organizationsv2");
  });
});
