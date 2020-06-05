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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(UrlName);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Text(TextName) {
    //Click on Text
    cy.getIframeBody().find('[placeholder="Text"]').click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(TextName);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  File(FileName) {
    //Click on File
    cy.getIframeBody()
      .find('[placeholder="Tooltip for File"]')
      .click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(FileName);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Telephone(Telephone) {
    //Click on Telephone
    cy.getIframeBody().find('[placeholder="Telephone"]').click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Telephone);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  TextAera(TextAera) {
    //Click on TextAera
    cy.getIframeBody().contains("Text Area").click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(TextAera);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Slider(Slider) {
    //Click on Slider
    cy.getIframeBody().contains("Slider").click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Slider);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Currency(Currency) {
    //Click on Currency
    cy.getIframeBody().find('[placeholder="Currency"]').click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Currency);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Measure(Measure) {
    //Click on Measure
    cy.getIframeBody().find('[placeholder="Measure"]').click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Measure);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Email(Email) {
    //Click on Email
    cy.getIframeBody().find('[placeholder="Email"]').click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Email);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Address(Address) {
    //Click on Address
    cy.getIframeBody().find('[placeholder="Address"]').click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Address);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Number(Number) {
    //Click on Number
    cy.getIframeBody().find('[placeholder="Number"]').click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Number);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Time(Time) {
    //Click on Time
    cy.getIframeBody().find('[placeholder="Time"]').click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Time);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Date(Date) {
    //Click on Add Date
    cy.getIframeBody().find('[placeholder="Add Date"]').click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Date);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Toggle(Toggle) {
    //Click on Add Toggle
    cy.getIframeBody().contains("Toggle").click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
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
    cy.getIframeBody().contains("Select List").click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(SelectList);

    //SelectList customize name
    //Click on +
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    //write customize SelectList Name
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div.v-dialog__container > div > div > form > div > div.pr-2.col.col-6 > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type("Country");

    //Click on Save btn of customize SelectListName
    cy.get(".v-btn--text:nth-child(2) > .v-btn__content").last().click();
    cy.wait(2000);
    //Click on Assertion to close msg
    cy.get(".closeBtn .v-icon").click();
    cy.wait(1000);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close msg
    //cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(5000);
    //Click on Configure the SelectList to Add Values
    cy.get(".v-size--small:nth-child(1)").click();

    //1st Value to SelectList
    //Click on Lable 1(default)
    cy.get(
      "#result > div > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("A");
    //Click on Value 1(default)
    cy.get(
      "#result > div > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("A");
    //Icon
    cy.get(
      "#result > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(1) .v-list-item__title").click();

    cy.wait(2000);

    //Click on + to Add 2nd Value to SelectList
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("B");
    //Click on Value 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("B");
    //Icon
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(2) .v-list-item__title").first().click();

    cy.wait(2000);

    //Click on + to Add 3rd Value to SelectList
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("C");
    //Click on Value 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("C");
    //Icon
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(3) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 4th Value to SelectList
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("D");
    //Click on Value 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("D");
    //Icon
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(4) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 5th Value to SelectList
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("E");
    //Click on Value 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("E");
    //Icon
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(5) .v-list-item__title").first().click();

    //Save SelectList
    cy.get(".col-2 .v-btn__content").click();
    //Assetion to close msg
    cy.get(".v-btn__content > .theme--dark").click();
  }

  RadioSelect(RadioSelect) {
    //Click on Add RadioSelect
    cy.getIframeBody().contains("Radio").click({ force: true });
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(RadioSelect);

    //RadioSelect customize name
    //Click on +
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    //write customize RadioSelect Name
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div.v-dialog__container > div > div > form > div > div.pr-2.col.col-6 > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type("Language");

    //Click on Save btn of customize RadioSelectName
    cy.get(".v-btn--text:nth-child(2) > .v-btn__content").last().click();
    cy.wait(2000);
    //Click on Assertion to close msg
    cy.get(".closeBtn .v-icon").click();
    cy.wait(1000);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close msg
    //cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(5000);
    //Click on Configure the RadioSelect to Add Values
    cy.get(".v-size--small:nth-child(1)").click();

    //1st Value to RadioSelect
    //Click on Lable 1(default)
    cy.get(
      "#result > div > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("Java");
    //Click on Value 1(default)
    cy.get(
      "#result > div > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("Java");
    //Icon
    cy.get(
      "#result > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(1) .v-list-item__title").click();

    cy.wait(2000);

    //Click on + to Add 2nd Value to RadioSelect
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(".Net");
    //Click on Value 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("B");
    //Icon
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(2) .v-list-item__title").first().click();

    cy.wait(2000);

    //Click on + to Add 3rd Value to RadioSelect
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("PHP");
    //Click on Value 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("PHP");
    //Icon
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(3) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 4th Value to RadioSelect
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("Python");
    //Click on Value 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("Python");
    //Icon
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(4) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 5th Value to RadioSelect
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("C");
    //Click on Value 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("C");
    //Icon
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(5) .v-list-item__title").first().click();

    //Save RadioSelect
    cy.get(".col-2 .v-btn__content").click();
    //Assetion to close msg
    cy.get(".v-btn__content > .theme--dark").click();
  }

  CheckboxSelect(CheckboxSelect) {
    //Click on Add Checkbox
    cy.getIframeBody().contains("Checkbox Select").click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input")
      .click()
      .type(CheckboxSelect);
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(CheckboxSelect);

    //CheckboxSelect customize name
    //Click on +
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    //write customize CheckboxSelect Name
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div.v-dialog__container > div > div > form > div > div.pr-2.col.col-6 > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type("Automation Tool");

    //Click on Save btn of customize CheckboxSelectName
    cy.get(".v-btn--text:nth-child(2) > .v-btn__content").last().click();
    cy.wait(2000);
    //Click on Assertion to close msg
    cy.get(".closeBtn .v-icon").click();
    cy.wait(1000);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close msg
    //cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(5000);
    //Click on Configure the CheckboxSelect to Add Values
    cy.get(".v-size--small:nth-child(1)").click();

    //1st Value to CheckboxSelect
    //Click on Lable 1(default)
    cy.get(
      "#result > div > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("Selenium");
    //Click on Value 1(default)
    cy.get(
      "#result > div > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("Selenium");
    //Icon
    cy.get(
      "#result > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(1) .v-list-item__title").click();

    cy.wait(2000);

    //Click on + to Add 2nd Value to CheckboxSelect
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("Cypress");
    //Click on Value 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("Cypress");
    //Icon
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(2) .v-list-item__title").first().click();

    cy.wait(2000);

    //Click on + to Add 3rd Value to CheckboxSelect
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("Appium");
    //Click on Value 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("Appium");
    //Icon
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(3) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 4th Value to CheckboxSelect
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("Test Studio");
    //Click on Value 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("Test Studio");
    //Icon
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(4) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 5th Value to CheckboxSelect
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("SoapUI");
    //Click on Value 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("SoapUI");
    //Icon
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(5) .v-list-item__title").first().click();

    //Save RadioSelect
    cy.get(".col-2 .v-btn__content").click();
    //Assetion to close msg
    cy.get(".v-btn__content > .theme--dark").click();
  }

  UserSelector(UserSelector) {
    //Click on UserSelector
    cy.getIframeBody()
      .find('[placeholder="Tooltip for User Selector"]')
      .click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(UserSelector);
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(UserSelector);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  ContactSelector(ContactSelector) {
    //Click on ContactSelector
    cy.getIframeBody()
      .find('[placeholder="Tooltip for Contact Selector"]')
      .click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input")
      .click()
      .type(ContactSelector);
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(ContactSelector);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Assigning(Assigning) {
    //Click on Assigning
    cy.getIframeBody()
      .find('[placeholder="Tooltip for Assigning"]')
      .click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Assigning);
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Assigning);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Stepper(StepperName) {
    //Click on Add StepperName
    cy.getIframeBody().find('[data-gjs-type="control-stepper"]').click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input")
      .click()
      .type(StepperName);
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(StepperName);

    //Stepper customize name
    //Click on +
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    //write customize Stepper Name
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div.v-dialog__container > div > div > form > div > div.pr-2.col.col-6 > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type("Stepper");

    //Click on Save btn of customize StepperName
    cy.get(".v-btn--text:nth-child(2) > .v-btn__content").last().click();
    cy.wait(2000);
    //Click on Assertion to close msg
    cy.get(".closeBtn .v-icon").click();
    cy.wait(1000);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close msg
    //cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(5000);
    //Click on Configure the Stepper to Add Values
    cy.get(".v-size--small:nth-child(1)").click();

    //1st Value to Stepper
    //Click on Lable 1(default)
    cy.get(
      "#result > div > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("StepperValue 1");
    //Click on Value 1(default)
    cy.get(
      "#result > div > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("StepperValue 1");
    //Icon
    cy.get(
      "#result > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(1) .v-list-item__title").click();

    cy.wait(2000);

    //Click on + to Add 2nd Value to Stepper
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("StepperValue 2");
    //Click on Value 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("StepperValue 2");
    //Icon
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(2) .v-list-item__title").first().click();

    cy.wait(2000);

    //Click on + to Add 3rd Value to Stepper
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("StepperValue 3");
    //Click on Value 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("StepperValue 3");
    //Icon
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(3) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 4th Value to Stepper
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("StepperValue 4");
    //Click on Value 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("StepperValue 4");
    //Icon
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(4) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 5th Value to Stepper
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("StepperValue 5");
    //Click on Value 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type("StepperValue 5");
    //Icon
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(5) .v-list-item__title").first().click();

    //Save RadioSelect
    cy.get(".col-2 .v-btn__content").click();
    //Assetion to close msg
    cy.get(".v-btn__content > .theme--dark").click();
  }

  Icon(Icon) {
    //Click on Icon
    cy.getIframeBody()
      .find('[data-gjs-type="control-icon"]')
      .click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input")
      .click()
      .type(Icon);
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
    cy.get(
      "#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Icon);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
  }
































}

export default KitBuilderDataTypes;
