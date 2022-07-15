class ShopingCartPage {
    private proceedToCheckout: string

    constructor() {
        this.proceedToCheckout = ".cart_navigation span"
    }

    public goToCheckoutSumary(): void{
        cy.get(this.proceedToCheckout).click()
    }
}

export { ShopingCartPage } 
