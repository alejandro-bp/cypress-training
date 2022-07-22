class ShopingCartPage {
    private proceedToCheckout: string

    constructor() {
        this.proceedToCheckout = "a.standard-checkout[title='Proceed to checkout']"
    }

    public goToCheckoutSumary(): void{
        cy.get(this.proceedToCheckout).click()
    }
}

export { ShopingCartPage } 
