class ShippingStepPage {
    private termsAndConditions: string
    private proceedToCheckout: string

    constructor() {
        this.termsAndConditions = "#cgv"
        this.proceedToCheckout = "button[name='processCarrier']"
    }

    public acceptTerms(): void{
        cy.get(this.termsAndConditions).click()
    }
    public goToCheckoutShipping(): void{
        cy.get(this.proceedToCheckout).click()
    }
}

export { ShippingStepPage } 
