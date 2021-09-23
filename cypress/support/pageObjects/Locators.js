class Locators
{
    getUsername()
    {
        return cy.get('#user-name')
    }

    getPassword()
    {
        return cy.get('#password')
    }

    getLoginbutton()
    {
        return cy.get('#login-button')
    }

    getBackpack()
    {
        return cy.get('#add-to-cart-sauce-labs-backpack')
    }

    getBikelight()
    {
        return cy.get('#add-to-cart-sauce-labs-bike-light')
    }

    getBoltTshirt()
   {
         return cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
   }

   getFleecejacket()
   {
        return cy.get('#add-to-cart-sauce-labs-fleece-jacket')
   }

   getOnesie()
   {
        return cy.get('#add-to-cart-sauce-labs-onesie')
   }

   getRedTshirt()
   {
        return cy.get('button[name="add-to-cart-test.allthethings()-t-shirt-(red)"]')
   }

   getShoppingcart()
   {
        return cy.get('.shopping_cart_link')
   }

   getCheckoutbutton()
   {
        return cy.get('#checkout')
   }

   getFirstname()
   {
       return cy.get('#first-name')
   }

   getLastname()
   {
       return cy.get('#last-name')
   }

   getPostalcode()
   {
        return cy.get('#postal-code')
   }

   getContinuebutton()
   {
       return cy.get('#continue')
   }

   getItemsprice_in_the_Cart()
   {
        return cy.get('.inventory_item_price')
   }

   getTotallabel()
   {
        return cy.get('.summary_subtotal_label')
   }

   getFinishbutton()
   {
       return cy.get('#finish')
   }

   getTitle()
   {
        return cy.get('.title')
   }

   getCompleteheader()
   {
       return cy.get('.complete-header')
   }

   getCompletetext()
   {
        return cy.get('.complete-text')
   }

   getBacktoproducts()
   {
       return cy.get('#back-to-products')
   }

   getBurgerbutton()
   {
       return cy.get('.bm-burger-button')
   }

   getLogoutlink()
   {
       return cy.get('#logout_sidebar_link')
   }

   getErrormsg()
   {
       return cy.get('h3')
   }
}

export default Locators