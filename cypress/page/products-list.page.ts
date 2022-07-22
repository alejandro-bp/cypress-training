class ProductListPage {
    private addCart: string;
    private proceedToCheckout: string

    constructor() {
        this.addCart = ".button-container > a[title='Add to cart']"
        this.proceedToCheckout = "a[title='Proceed to checkout']"

    }
    public addToCart(): void {
        cy.get(this.addCart).click()
    }
    public goToCheckout(): void {
        cy.get(this.proceedToCheckout).click()
    }
}

export { ProductListPage } 
