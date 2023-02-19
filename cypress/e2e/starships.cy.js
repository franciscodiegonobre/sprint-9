describe("Before login", () => {
  it("should navigate to the login page if not logged in", () => {
    cy.visit("http://localhost:3000/home");
    cy.url().should("not.include", "/home");
    cy.visit("http://localhost:3000/starships");
    cy.url().should("not.include", "/starships");
  });
});

describe("After login", () => {
  beforeEach(() => {
    const userRegistration = [
      { name: "Automated User", username: "autouser", password: "12345" },
    ];
    cy.window().then((win) => {
      win.localStorage.setItem("userList", JSON.stringify(userRegistration));
    });
    cy.visit("http://localhost:3000/");
    cy.get('input[name="username"]').type("autouser");
    cy.get('input[name="password"]').type("12345");
    cy.contains("Sign in").click();
  });

  it("should navigate to the home page after login", () => {
    cy.url().should("include", "/home");
  });

  it("should navigate to the Starships page after clicking Start", () => {
    cy.get(".cta-button").click();
    cy.url().should("include", "/starships");
  });

  it("should load only 10 ShipCards on first load", () => {
    cy.get(".cta-button").click();
    cy.get("div.container")
      .children("div.shipcard") // select all child div elements
      .should("have.length", 10);
  });

  it("should expand the ShipCardDetails after clicking the ShipCard", () => {
    cy.get(".cta-button").click();
    cy.get("div.shipcard").first().click();
    cy.get(".shipcardDetails.container").first().should("be.visible");
  });

  it("should collapse the ShipCardDetails after clicking the ShipCard", () => {
    cy.get(".cta-button").click();
    cy.get("div.shipcard").first().click();
    cy.get(".shipcardDetails.container").first().should("be.visible");
    cy.get("div.shipcard").first().click();
    cy.get(".shipcardDetails.container").first().should("not.be.visible");
  });

  it("should scroll and load 10 more ShipCards, 20 in total", () => {
    cy.get(".cta-button").click();
    cy.scrollTo("bottom");
    cy.get("div.container").children("div.shipcard").should("have.length", 20);
  });

  it("should check spinner is present and scroll until no more results are displayed", () => {
    cy.get(".cta-button").click();
    cy.get(".spinner-div");
    cy.scrollTo("bottom");
    cy.wait(2000);
    cy.scrollTo("bottom");
    cy.wait(2000);
    cy.scrollTo("bottom");
    cy.get(".no-results-message").should("be.visible");
  });

  it("should go back to Home when clicking Home", () => {
    cy.get(".cta-button").click();
    cy.get('a[href="/home"]').click();
    cy.url().should("include", "/home");
  });

  it("can logout", () => {
    cy.get(".cta-button").click();
    cy.get(".header--logout").click();
    cy.url().should("not.include", "/starships");
    cy.visit("http://localhost:3000/home");
    cy.url().should("not.include", "/home");
  });
});
