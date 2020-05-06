/*

 cy.get('.v-btn__content > .menu-items-icon')
 .each(function($el, index, $listofEle){
    debugger
    cy.log($listofEle.text())  //return all element text

    cy.log($listofEle.length)  

   if($el.text=='Work Request'){

         $el.click()
      }

      else(index==4)
      {
          $el.click()
      }

      debugger;

 })

 */