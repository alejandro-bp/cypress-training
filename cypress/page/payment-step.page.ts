class PaymentStepsPage {
    private paymentMethod: string
    private confirmFinalOrder: string
    private orderConfirmation: string

    constructor() {
        this.paymentMethod = ".bankwire"
        this.confirmFinalOrder = "#cart_navigation > .button > span"
        this.orderConfirmation = "#center_column > div > p > strong"
    }

    public paymentMethods(): void{
        cy.get(this.paymentMethod).click()
    }

    public confirmFinalOrders(): void{
        cy.get(this.confirmFinalOrder).click()
    }

    public orderConfirmations(): void{
        cy.get(this.orderConfirmation).should("have.text", "Your order on My Store is complete.");
    }
}

export { PaymentStepsPage } 
