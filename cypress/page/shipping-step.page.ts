class ShippingStepPage {
    private termsAndConditions: string
    private proceedToCheckout: string

    constructor() {
        this.termsAndConditions = "#cgv"
        this.proceedToCheckout = ".cart_navigation > .button > span"
    }

    public acceptTemrs(): void{
        cy.get(this.termsAndConditions).click()
    }
    public goToCheckoutShipping(): void{
        cy.get(this.proceedToCheckout).click()
    }
}

export { ShippingStepPage } 
