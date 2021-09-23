/// <reference types="Cypress" />
import Locators from '../../support/pageObjects/Locators';
const locators=new Locators();

before(function() {
    // read the fixture file 
cy.fixture('example').then(function(data)
{
  this.data=data
})
})

describe('My Swag Test Suite', function()
{
  
it('Buy all the items',function() {

cy.visit(Cypress.env('url'))

//Login with standard user
locators.getUsername().type(this.data.standard_username)
locators.getPassword().type(this.data.common_password)
locators.getLoginbutton().click()

//Add all the items to the cart
locators.getBackpack().click()
locators.getBikelight().click()
locators.getBoltTshirt().click()
locators.getFleecejacket().click()
locators.getOnesie().click()
locators.getRedTshirt().click()

//Checkout
locators.getShoppingcart().click()
locators.getCheckoutbutton().click()

//Enter your information
locators.getFirstname().type(this.data.firstname)
locators.getLastname().type(this.data.lastname)
locators.getPostalcode().type(this.data.postalcode)
locators.getContinuebutton().click()

//Calculate the sum of the items 
var sum=0
locators.getItemsprice_in_the_Cart().each(($el, index, $list) => {
 const amount=$el.text()
 var price = amount.replace( /^\D+/g, '')
sum = Number(sum)+Number(price)
}).then(function()
{
    cy.log(sum)
})

//Compare the sum with the displayed total  
locators.getTotallabel().then(function(element)
{
    const total_amount = element.text()
    var total_amount1 = total_amount.replace( /^\D+/g, '')
    expect(Number(total_amount1)).to.equal(sum)
})

locators.getFinishbutton().click()

//Assert the success messages after finishing the purchase
locators.getTitle().should('have.text','Checkout: Complete!')
locators.getCompleteheader().should('have.text','THANK YOU FOR YOUR ORDER')
locators.getCompletetext().should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!')
locators.getBacktoproducts().click()

//Logout
locators.getBurgerbutton().click()
locators.getLogoutlink().click()
})


it('Locked out user test',function() {
//Login with locked out user
locators.getUsername().type(this.data.locked_username)
locators.getPassword().type(this.data.common_password)
locators.getLoginbutton().click()

//Assert the error message
locators.getErrormsg().should('have.text','Epic sadface: Sorry, this user has been locked out.')
})
})