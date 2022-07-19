import {MenuContentPage, ProductListPage, LoginPage, ShopingCartPage,
  AddressStepPage, ShippingStepPage, PaymentStepsPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const loginPage = new LoginPage();
const shopingCartPage = new ShopingCartPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepsPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // Visit Page
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    // Checkout process steps
    productListPage.addToCart();
    productListPage.goToCheckout();

    // Shoping cart steps
    shopingCartPage.goToCheckoutSumary();

    // Login process steps
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");

    // Address confirmation steps
    addressStepPage.goToCheckout();

    // Shipping steps
    shippingStepPage.acceptTerms();
    shippingStepPage.goToCheckoutShipping();

    // Payment Steps
    paymentStepPage.selectBankWire();
    paymentStepPage.confirmFinalOrders();
    paymentStepPage.orderConfirmations().should("have.text", "Your order on My Store is complete.");
  });
});
