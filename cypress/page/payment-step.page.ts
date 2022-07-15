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

    public orderConfirmations(){
        return cy.get(this.orderConfirmation)
    }
}

export { PaymentStepsPage } 
