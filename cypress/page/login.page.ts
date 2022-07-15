class LoginPage {
    private emailField: string;
    private passwordField: string
    private SubmitLogin: string

    constructor() {
        this.emailField= "#email"
        this.passwordField = "#passwd"
        this.SubmitLogin = "#SubmitLogin > span"
    }
    public login(email: string, password: string): void {
        cy.get(this.emailField).type(email);
        cy.get(this.passwordField).type(password)
    }
    public submitLogin(): void {
        cy.get(this.SubmitLogin).click()
    }
}

export { LoginPage } 
