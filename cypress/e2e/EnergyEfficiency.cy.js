
describe("Energy Efficiency Proccess", () => {


    const visitLoginPageAndLogin = () => {

        cy.visit('https://gizmo.local/user/login');
        cy.url().should('include', '/user/login');
      
        cy.get('#email').type('jose.mateo@hytechhome.com');
        cy.get('#password').type('Migueldeveloper2424@');
        cy.get('[type="submit"]').first().click();
      
        cy.wait(15000);
        cy.url().should('eq', 'https://gizmo.local/user/home');

    };


    const visitEnergyEfficiency = () => {

        cy.get(".nav-link.menu-toggle").click();
        cy.get("#main-menu-navigation").scrollIntoView();
        cy.get(".d-flex.align-items-center", {timeout: 20000})
        cy.get(".menu-title.text-truncate").should("be.visible");
        cy.get(".nav-item", {timeout: 10000}).contains("Energy Efficiency").click();

        cy.wait(15000);

    };
    
    const findEnergyOwner = (name) => {

        cy.get(".ownerlookup").contains(name).click();
        cy.wait(45000);

    };
    
    const editEnergyEfficiency = () => {
        
        cy.get("#web_edit_url").click();
        cy.wait(30000);

        cy.get("#select2-site_assessor_user-container").should("be.visible").click();
        cy.get(".select2-search__field").type("Admin Manager").click();

        cy.get("#stage").should("be.visible");
        cy.get(".select2-selection.select2-selection--single").should("be.visible");
        cy.get(".select2-search__field").scrollIntoView().type("Test").click()

        cy.get("#home_phone").type("8293999696").click();

        cy.get("#select2-lead_source-container").should("be.visible").type("NY Energy Data Sales").click();
        cy.get("#street").clear().type("4050 7th Av");
        cy.get("#city").clear().type("New York");
        cy.get("#state").clear().type("New York");
        cy.get("#zipcode").clear().type("50050");

        cy.get("#select2-financing-container").scrollIntoView().should("be.visible").click();
        cy.get(".select2-search__field").type("Credit Human 10 year 4.99%").click();
        
        cy.get(".col-8").should("be.visible");
        cy.get("#total_contract_price").scrollIntoView().type("3500",  {force: true});
        cy.get("#down_payment").scrollIntoView().type("1500");
        cy.get("#select2-nyserda_rebates-container").type("NYSERDA Rebates");
        cy.get("#contract_notes").type("This contract note has been done by Cypress Automation Test");


        cy.get("#save", {timeout: 10000}).click();
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

    /*

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

        cy.get("#web_edit_url").click();
        cy.wait(25000);

    });

    */

    it('When super user click on "Edit" button user will be able to edit energy efficiency name information', () => {

        visitLoginPageAndLogin();
        visitEnergyEfficiency();
        findEnergyOwner("Jose Mateo");
        editEnergyEfficiency();


    });



    it("", () => {


    });



    it("", () => {


    });




});