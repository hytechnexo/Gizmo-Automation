import {
  createNewLeads,
  createNewMeeting,
  visitLoginPageAndLogin,
} from "./GizmoFunctions";

describe("This is the Home proccess", () => {
  afterEach(() => {
    cy.clearAllLocalStorage();
    cy.clearCookies();
  });

  /*

  it("User can create New Lead", () => {
    visitLoginPageAndLogin();
    createNewLeads();
  });

  */

  it("User can create new meeting", () => {
    visitLoginPageAndLogin();
    createNewMeeting();
  });
});
