class KitBuilder {
  
  KitBuilderUrl() {
    cy.visit("http://serviceproviders.ca-build.com/ClientAdmin/KitBuilder#/");
    
  }


  AdminUrl() {
    cy.visit("http://serviceproviders.ca-build.com/ClientAdmin/Index/#/");
    
  }

  ClickOnKitBuilder() {
    const btn = cy.contains("Kit Builder");
    btn.click();
  }

  ClickOnCreateNewKit() {
    const btn = cy.get(".v-btn--depressed");
    btn.click();
  }

  ClickOnNewForm() {
    const btn = cy.get(
      ".col:nth-child(1) .detail-view-block:nth-child(1) .v-icon:nth-child(1)"
    );
    btn.click();
  }

  ClickOnEditForm() {
    const btn = cy.get(
      ".col:nth-child(1) > .v-responsive:nth-child(1) .v-icon:nth-child(1)"
    );
    btn.click({ force: true });
  }

  ClickOnSharedForm() {
    const btn = cy.get(
      ".col:nth-child(1) > .v-responsive:nth-child(1) .v-icon:nth-child(1)"
    );
    btn.click();
  }

  ClickOnEmailForm() {
    const btn = cy.get(
      ".col:nth-child(1) > .v-responsive:nth-child(1) .v-icon:nth-child(1)"
    );
    btn.click();
  }

  ClickOnMapForm() {
    const btn = cy.get(
      ".col:nth-child(1) > .v-responsive:nth-child(1) .v-icon:nth-child(1)"
    );
    btn.click();
  }

  ClickOnScheduleForm() {
    const btn = cy.get(
      ".col:nth-child(1) > .v-responsive:nth-child(1) .v-icon:nth-child(1)"
    );
    btn.click();
  }

  ClickOnCommonPlanForm() {
    const btn = cy.get(
      ".col:nth-child(1) > .v-responsive:nth-child(1) .v-icon:nth-child(1)"
    );
    btn.click();
  }

  ClickOnRelatedNewForm() {
    const btn = cy.get(
      ".col:nth-child(1) > .v-responsive:nth-child(1) .v-icon:nth-child(1)"
    );
    btn.click();
  }

  ClickOnRelatedEditForm() {
    const btn = cy.get(
      ".col:nth-child(2) > .v-responsive:nth-child(1) .v-icon:nth-child(1)"
    );
    btn.click();
  }

  //ListViews

  ClickOnTableList() {
    const btn = cy.get(
      ".col:nth-child(2) .list-view-block:nth-child(1) .v-icon:nth-child(1)"
    );
    btn.click();
  }

  ClickOnSearchList() {
    const btn = cy.get(".col:nth-child(3) .list-view-block .v-btn__content");
    btn.click();
  }

  ClickOnTimelineList() {
    const btn = cy.get(
      ".col:nth-child(1) .list-view-block:nth-child(1) .v-icon:nth-child(1)"
    );
    btn.click();
  }

  KBSearchBox(KitTypeName){
    cy.get('[placeholder="Search"]').type(KitTypeName)
  }

  ClickOnCrossIcon(){
    const btn =cy.xpath("//button[@class='v-btn v-btn--fab v-btn--flat v-btn--icon v-btn--round v-btn--text theme--light v-size--default']//i[@class='v-icon notranslate material-icons theme--light'][contains(text(),'close')]")
    btn.click({force:true})
  }
}

export default KitBuilder;
