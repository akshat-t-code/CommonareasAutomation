class KitTypePage{

SearchKitType(KitName){
    cy.get('[placeholder="Search Item"]').first().type(KitName)
}

OpenKitType(KitName){

    cy.contains(KitName).click({force:true})
}

}

export default KitTypePage;