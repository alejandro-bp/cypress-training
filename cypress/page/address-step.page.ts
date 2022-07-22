class AddressStepPage {
    private proceedToCheckout: string

    constructor() {
        this.proceedToCheckout = "button[name='processAddress']"
    }

    public goToCheckout(): void{
        cy.get(this.proceedToCheckout).click()
    }
}

export { AddressStepPage } 
