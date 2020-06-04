class KitBuilderDataTypes {


    Url(UrlName) {
    //Click on Url
    cy.getIframeBody().find('[placeholder="Url"]').click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(UrlName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(UrlName);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Text(TextName) {
    //Click on Text
    cy.getIframeBody().find('[placeholder="Text"]').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(TextName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(TextName);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  File(FileName) {
    //Click on File
    cy.getIframeBody().find('[placeholder="Tooltip for File"]').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(FileName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(FileName);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Telephone(Telephone) {
    //Click on Telephone
    cy.getIframeBody().find('[placeholder="Telephone"]').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Telephone);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(Telephone);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }


  TextAera(TextAera) {
    //Click on TextAera
    cy.getIframeBody().contains('Text Area').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(TextAera);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(TextAera);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Slider(Slider) {
    //Click on Slider
    cy.getIframeBody().contains('Slider').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Slider);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(Slider);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Currency(Currency) {
    //Click on Currency
    cy.getIframeBody().find('[placeholder="Currency"]').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Currency);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(Currency);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Measure(Measure) {
    //Click on Measure
    cy.getIframeBody().find('[placeholder="Measure"]').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Measure);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(Measure);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Email(Email) {
    //Click on Email
    cy.getIframeBody().find('[placeholder="Email"]').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Email);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(Email);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }


  Address(Address) {
    //Click on Address
    cy.getIframeBody().find('[placeholder="Address"]').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Address);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(Address);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  
  Number(Number) {
    //Click on Number
    cy.getIframeBody().find('[placeholder="Number"]').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Number);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(Number);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }


  Time(Time) {
    //Click on Time
    cy.getIframeBody().find('[placeholder="Time"]').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Time);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(Time);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Date(Date) {
    //Click on Add Date
    cy.getIframeBody().find('[placeholder="Add Date"]').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Date);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(Date);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Toggle(Toggle) {
    //Click on Add Toggle
    cy.getIframeBody().contains('Toggle').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Toggle);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(Toggle);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  //

 
   

    

    SelectList(SelectList) {
    //Click on Add SelectList
    cy.getIframeBody().contains('Select List').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(SelectList);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(SelectList);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }


  RadioSelect(RadioSelect) {
    //Click on Add RadioSelect
    cy.getIframeBody().contains('Radio Select').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(RadioSelect);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(RadioSelect);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }


  CheckboxSelect(CheckboxSelect) {
    //Click on Add Toggle
    cy.getIframeBody().contains('Checkbox Select').click({force:true})
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(CheckboxSelect);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("Select a value");
    //Select New Kit Element
    cy.wait(1000);
    cy.get(".gjs-trt-trait__wrp:nth-child(3) select").select("New Kit Element");
    cy.wait(2000);

    cy.contains("Element Label").click({ force: true });

    cy.contains("Element Name").click({ force: true });

    //cy.contains("Element Friendly Description")
    cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
      .click({ force: true })
      .type(CheckboxSelect);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }





































































































}

export default KitBuilderDataTypes;
