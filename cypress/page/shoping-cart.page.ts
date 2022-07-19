class ShopingCartPage {
    private proceedToCheckout: string

    constructor() {
        this.proceedToCheckout = ".standard-checkout"
    }

    public goToCheckoutSumary(): void{
        cy.get(this.proceedToCheckout).click()
    }
}

export { ShopingCartPage } 
