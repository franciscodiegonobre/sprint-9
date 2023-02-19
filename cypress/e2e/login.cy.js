describe("Login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Landing page can be opened", () => {
    cy.contains("Sign in");
  });

  it("Inputs are required after clicking Sign in", () => {
    cy.contains("Sign in").click();
    cy.contains("is required");
  });

  it("Alert is displayed if login credentials are incorrect", () => {
    cy.get('input[name="username"]').type("wronguser");
    cy.get('input[name="password"]').type("wrongpass");
    cy.contains("Sign in").click();
    cy.get('div[role="alert"]').should("be.visible");
  });

  it("Creates an account", () => {
    cy.contains("Create an account").click();
    cy.get('input[name="name"]').type("Automated User");
    cy.get('input[name="username"]').type("autouser");
    cy.get('input[name="password"]').type("autouser");
    cy.contains("Sign up").click();
    cy.contains("Your account has been created");
  });

  it("Does't create an account if one field is left empty", () => {
    cy.contains("Create an account").click();
    cy.get('input[name="username"]').type("autouser");
    cy.get('input[name="password"]').type("autouser");
    cy.contains("Sign up").click();
    cy.contains("Name is required");
  });
});
