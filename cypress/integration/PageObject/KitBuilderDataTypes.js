class KitBuilderDataTypes {
  //getIframeBody()
  //this above function OR custome command (customize) coming from support/index.js
  //for accessing the iframe to interact the Data Types on Canvas(Kit Builder)

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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(UrlName);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Url Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(TextName);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Text Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(FileName);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("File Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(Telephone);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Telephone Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(TextAera);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("TextAera Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(Slider);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Slider Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(Currency);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Currency Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(Measure);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Measure Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(Email);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Email Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(Address);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Address Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(Number);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Number Data Type has been Created");
  }

  Section(Section) {
    //Click on Section
    cy.getIframeBody()
      .find('[data-gjs-type="control-section"]')
      .click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Section);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    cy.log("Section Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Time);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Time Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Date);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Date Data Type has been Created");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Toggle);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Toggle Data Type has been Created");
  }

  SelectList(
    SelectList,
    SelectListName,
    Value1,
    Value2,
    Value3,
    Value4,
    Value5
  ) {
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(SelectList);

    //SelectList customize name
    //Click on +
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    //write customize SelectList Name
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div.v-dialog__container > div > div > form > div > div.pr-2.col.col-6 > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(SelectListName);

    //Click on Save btn of customize SelectListName
    cy.get(".v-btn--text:nth-child(2) > .v-btn__content").last().click();
    cy.wait(2000);
    //Click on Assertion to close msg
    cy.get(".closeBtn .v-icon").click();
    cy.wait(1000);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    cy.log("SelectList Data Type has been Created");
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
      .type(Value1);
    //Click on Value 1(default)
    cy.get(
      "#result > div > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value1);
    //Icon
    cy.get(
      "#result > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(1) .v-list-item__title").click();

    cy.wait(2000);

    //Click on + to Add 2nd Value to SelectList
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value2);
    //Click on Value 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value2);
    //Icon
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(2) .v-list-item__title").first().click();

    cy.wait(2000);

    //Click on + to Add 3rd Value to SelectList
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value3);
    //Click on Value 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value3);
    //Icon
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(3) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 4th Value to SelectList
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value4);
    //Click on Value 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value4);
    //Icon
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(4) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 5th Value to SelectList
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value5);
    //Click on Value 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value5);
    //Icon
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(5) .v-list-item__title").first().click();

    //Save SelectList
    cy.get(".col-2 .v-btn__content").click();
    //Assetion to close msg
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("SelectList has been created with its Value");
  }

  RadioSelect(
    RadioSelect,
    RadioSelectName,
    Value1,
    Value2,
    Value3,
    Value4,
    Value5
  ) {
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(RadioSelect);

    //RadioSelect customize name
    //Click on +
    cy.wait(3000);
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    //write customize RadioSelectName
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div.v-dialog__container > div > div > form > div > div.pr-2.col.col-6 > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(RadioSelectName);

    //Click on Save btn of customize RadioSelectName
    cy.get(".v-btn--text:nth-child(2) > .v-btn__content").last().click();
    cy.wait(2000);
    //Click on Assertion to close msg
    cy.get(".closeBtn .v-icon").click();
    cy.wait(1000);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    cy.log("RadioSelect Data type has been Created");
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
      .type(Value1);
    //Click on Value 1(default)
    cy.get(
      "#result > div > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value1);
    //Icon dropdown
    cy.get(
      "#result > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    //Select Icon
    cy.get(".v-list-item:nth-child(6) .v-list-item__title").click();

    cy.wait(2000);

    //Click on + to Add 2nd Value to RadioSelect
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value2);
    //Click on Value 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value2);
    //Icon DropDown
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    //Select Icon
    cy.get(".v-list-item:nth-child(7) .v-list-item__title").first().click();

    cy.wait(2000);

    //Click on + to Add 3rd Value to RadioSelect
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value3);
    //Click on Value 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value3);
    //Icon Drop Down
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    //Select Icon
    cy.get(".v-list-item:nth-child(8) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 4th Value to RadioSelect
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value4);
    //Click on Value 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value4);
    //Icon DropDown
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    //Select Icon
    cy.get(".v-list-item:nth-child(9) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 5th Value to RadioSelect
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value5);
    //Click on Value 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value5);
    //Icon Drop Down
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    //Select Icon
    cy.get(".v-list-item:nth-child(10) .v-list-item__title").first().click();

    //Save RadioSelect
    cy.get(".col-2 .v-btn__content").click();
    //Assetion to close msg
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("RadioSelect has been created with its Value");
  }

  CheckboxSelect(
    CheckboxSelect,
    CheckboxSelectName,
    Value1,
    Value2,
    Value3,
    Value4,
    Value5
  ) {
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(CheckboxSelect);

    //API Name
    // cy.get(
    //   "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(3) > div > div > div > div.v-input__slot > div"
    // )
    //   .click({ force: true })
    //   .type(CheckboxSelectName);

    //CheckboxSelect customize name
    //Click on +
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    //write customize CheckboxSelect Name
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div.v-dialog__container > div > div > form > div > div.pr-2.col.col-6 > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(CheckboxSelectName);

    //Click on Save btn of customize CheckboxSelectName
    cy.get(".v-btn--text:nth-child(2) > .v-btn__content").last().click();
    cy.wait(2000);
    //Click on Assertion to close msg
    cy.get(".closeBtn .v-icon").click();
    cy.wait(1000);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    cy.log("CheckboxSelect Data Type has been created");
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
      .type(Value1);
    //Click on Value 1(default)
    cy.get(
      "#result > div > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value1);
    //Icon DropDown
    cy.get(
      "#result > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    //Select Icon
    cy.get(".v-list-item:nth-child(11) .v-list-item__title").click();

    cy.wait(2000);

    //Click on + to Add 2nd Value to CheckboxSelect
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value2);
    //Click on Value 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value2);
    //Icon Dropdown
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    //Select Icon
    cy.get(".v-list-item:nth-child(12) .v-list-item__title").first().click();

    cy.wait(2000);

    //Click on + to Add 3rd Value to CheckboxSelect
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value3);
    //Click on Value 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value3);
    //Icon
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    //Select Icon
    cy.get(".v-list-item:nth-child(13) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 4th Value to CheckboxSelect
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value4);
    //Click on Value 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value4);
    //Icon
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    //Select Icon
    cy.get(".v-list-item:nth-child(14) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 5th Value to CheckboxSelect
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value5);
    //Click on Value 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value5);
    //Icon
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    //Select Icon
    cy.get(".v-list-item:nth-child(15) .v-list-item__title").first().click();

    //Save RadioSelect
    cy.get(".col-2 .v-btn__content").click();
    //Assetion to close msg
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("CheckboxSelect has been created with its Value");
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(UserSelector);

    //API Name
    // cy.get(
    //   "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(3) > div > div > div > div.v-input__slot > div"
    // )
    //   .click({ force: true })
    //   .type(UserSelector);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("UserSelector Data Type has been Created");
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

    //Element Friendly Description
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(ContactSelector);

    //API Name
    // cy.get(
    //   "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(3) > div > div > div > div.v-input__slot > div"
    // )
    //   .click({ force: true })
    //   .type(ContactSelector);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("ContactSelector Data Type has been Created");
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

    //Element Friendly Description
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(Assigning);

    //API Name
    // cy.get(
    //   "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(3) > div > div > div > div.v-input__slot > div"
    // )
    //   .click({ force: true })
    //   .type(Assigning);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Assigning Data Type has been Created");
  }

  Stepper(Stepper, StepperName, Value1, Value2, Value3, Value4, Value5) {
    //Click on Add StepperName
    cy.getIframeBody()
      .find('[data-gjs-type="control-stepper"]')
      .click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Stepper);
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Stepper);

    //Stepper customize name
    //Click on +
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    //write customize StepperName
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div.v-dialog__container > div > div > form > div > div.pr-2.col.col-6 > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(StepperName);

    //Click on Save btn of customize StepperName
    cy.get(".v-btn--text:nth-child(2) > .v-btn__content").last().click();
    cy.wait(2000);
    //Click on Assertion to close msg
    cy.get(".closeBtn .v-icon").click();
    cy.wait(1000);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    cy.log("Stepper Data Type has been Created");

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
      .type(Value1);
    //Click on Value 1(default)
    cy.get(
      "#result > div > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value1);
    //Icon
    cy.get(
      "#result > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(1) .v-list-item__title").click();

    cy.wait(2000);

    //Click on + to Add 2nd Value to Stepper
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value2);
    //Click on Value 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value2);
    //Icon
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(2) .v-list-item__title").first().click();

    cy.wait(2000);

    //Click on + to Add 3rd Value to Stepper
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value3);
    //Click on Value 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value3);
    //Icon
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(3) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 4th Value to Stepper
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value4);
    //Click on Value 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value4);
    //Icon
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(4) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 5th Value to Stepper
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value5);
    //Click on Value 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value5);
    //Icon
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(5) .v-list-item__title").first().click();

    //Save Stepper
    cy.get(".col-2 .v-btn__content").click();
    //Assetion to close msg
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Stepper Data Type has been Created with its Values");
  }

  Icon(Icon) {
    //Click on Icon
    cy.getIframeBody()
      .find('[data-gjs-type="control-icon"]')
      .click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Icon);
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

    //Element Friendly Description
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Icon);

    //API Name
    // cy.get(
    //   "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(3) > div > div > div > div.v-input__slot > div"
    // )
    //   .click({ force: true })
    //   .type(Icon);

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    cy.log("Icon Data Type has been Created");
    //Assertion to close
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.wait(2000);
  }

  Inspection(
    Inspection,
    InspectionName,
    Value1,
    Value2,
    Value3,
    Value4,
    Value5
  ) {
    //Click on Add Inspection
    cy.getIframeBody().contains("Inspection").click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(Inspection);
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(Inspection);

    //API Name
    // cy.get(
    //   "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(3) > div > div > div > div.v-input__slot > div"
    // )
    //   .click({ force: true })
    //   .type(InspectionName);

    //Inspection customize name
    //Click on +
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    //write customize Inspection Name
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div.v-dialog__container > div > div > form > div > div.pr-2.col.col-6 > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(InspectionName);

    //Click on Save btn of customize InspectionName
    cy.get(".v-btn--text:nth-child(2) > .v-btn__content").last().click();
    cy.wait(2000);
    //Click on Assertion to close msg
    cy.get(".closeBtn .v-icon").click();
    cy.wait(1000);
    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    cy.log("Inspection Data Type has been Created");
    //Assertion to close msg
    //cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(5000);
    //Click on Configure the Inspection to Add Values
    cy.get(".v-size--small:nth-child(1)").click();

    //1st Value to Inspection
    //Click on Lable 1(default)
    cy.get(
      "#result > div > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value1);
    //Click on Value 1(default)
    cy.get(
      "#result > div > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value1);
    //Icon
    cy.get(
      "#result > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(1) .v-list-item__title").click();

    cy.wait(2000);

    //Click on + to Add 2nd Value to Inspection
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value2);
    //Click on Value 2
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value2);
    //Icon
    cy.get(
      "#result > div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(2) .v-list-item__title").first().click();

    cy.wait(2000);

    //Click on + to Add 3rd Value to Inspection
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value3);
    //Click on Value 3
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value3);
    //Icon
    cy.get(
      "#result > div:nth-child(3) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(3) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 4th Value to Inspection
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value4);
    //Click on Value 4
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value4);
    //Icon
    cy.get(
      "#result > div:nth-child(4) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(4) .v-list-item__title").first().click();
    cy.wait(2000);

    //Click on + to Add 5th Value to Inspection
    cy.get(
      "div.v-dialog__container.option-set-dialog > div > div > div.row.d-flex.pa-0.ma-0 > div > div.d-flex.pa-0.col.col-4 > button > span"
    ).click();
    //Click on Lable 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(1) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value5);
    //Click on Value 5
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(2) > div > div > div.v-input__slot > div"
    )
      .click()
      .type(Value5);
    //Icon
    cy.get(
      "#result > div:nth-child(5) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click();
    cy.get(".v-list-item:nth-child(5) .v-list-item__title").first().click();

    //Save Inspection
    cy.get(".col-2 .v-btn__content").click();
    //Assetion to close msg
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Inspection Data Type has been Created with its Values");
  }

  OneToOneRelation(
    RelationName,
    KitToBeRelate,
    ElementToBeRelate,
    RelatedNewName,
    RelatedEditName,
    MapViewName,
    SearchViewName
  ) {
    //Click on Icon
    cy.getIframeBody().contains("Relation 1-1").click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(RelationName);
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

    //Element Friendly Description
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(RelationName);

    //Click on DropDown to Select Kit type to Relate with 1-One Relation
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(4) > div.pr-2.pa-0.pr-1.col.col-6 > div > div > div.v-input__slot > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Kit type
    //Value is comming form KitBuilderDataTypes.json(Fixtures file)
    cy.wait(20000);
    cy.contains(KitToBeRelate).click({ force: true });
    cy.wait(3000);

    //Select 1-One Realtion
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(4) > div.pa-0.pl-1.col.col-6 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click();
    cy.log("OneToOne Relation Data Type has been created");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click();
    cy.wait(5000);

    //Click on Allow Delete
    cy.get(".gjs-trt-trait__wrp:nth-child(15) .gjs-chk-icon").click({
      force: true,
    });

    //Click on Allow View Details
    cy.get(".gjs-trt-trait__wrp:nth-child(16) .gjs-chk-icon").click({
      force: true,
    });

    cy.wait(10000);

    //CreateView(Related New)
    cy.get(".gjs-trt-trait__wrp:nth-child(17) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(17) select").select(RelatedNewName);
    cy.wait(1000);

    //DetailView(Related Edit)
    cy.get(".gjs-trt-trait__wrp:nth-child(18) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(18) select").select(RelatedEditName);
    cy.wait(1000);

    //MapView
    cy.get(".gjs-trt-trait__wrp:nth-child(19) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(19) select").select(MapViewName);
    cy.wait(1000);

    //SearchView
    cy.get(".gjs-trt-trait__wrp:nth-child(20) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(20) select").select(SearchViewName);
    cy.wait(1000);

    //Click on Configure
    cy.get(".v-size--small:nth-child(1)").click();

    cy.wait(5000);

    //Select the Elements for 1-N Realtion
    cy.contains(ElementToBeRelate).click({ force: true });
    cy.log("OneToOne's Related kitType Element has been Selected");
    //Save Relation
    cy.get(".v-btn--text:nth-child(2)").click();
    cy.log(
      "OneToOne Relation Data Type has been created with its Configuration"
    );
  }

  OneToManyRelation(
    RelationName,
    KitToBeRelated,
    RelatedTableView,
    Ele1,
    Ele2,
    Ele3,
    Ele4,
    Ele5,
    RelatedNewName,
    RelatedEditName,
    MapViewName,
    SearchViewName
  ) {
    //Click on Icon
    cy.getIframeBody().contains("Relation 1-N").click({ force: true });
    //cy.getIframeBody().contains("OneToManyRelation").click({ force: true });
    cy.wait(3000);

    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(RelationName);
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

    //Element Friendly Description
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(RelationName);

    //Click on DropDown to Select Kit type to Relate with 1-N Relation
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(4) > div.pr-2.pa-0.pr-1.col.col-6 > div > div > div.v-input__slot > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });

    cy.wait(20000);
    //Select Kit type
    //Value is comming form KitBuilderDataTypes.json(Fixtures file)
    cy.wait(20000);
    cy.contains(KitToBeRelated).click({ force: true });
    cy.wait(3000);

    //Select 1-N Realtion
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(4) > div.pa-0.pl-1.col.col-6 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    cy.contains("More Than One").click({ force: true });

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log("OneToMany Relation Data Type has been Created");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(5000);

    //Click on Allow Delete
    cy.get(".gjs-trt-trait__wrp:nth-child(15) .gjs-chk-icon").click({
      force: true,
    });

    //Click on Allow View Details
    cy.get(".gjs-trt-trait__wrp:nth-child(16) .gjs-chk-icon").click({
      force: true,
    });

    //CreateView(Related New)
    cy.get(".gjs-trt-trait__wrp:nth-child(17) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(17) select").select(RelatedNewName);
    cy.wait(1000);

    //DetailView(Related Edit)
    cy.get(".gjs-trt-trait__wrp:nth-child(18) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(18) select").select(RelatedEditName);
    cy.wait(1000);

    //MapView
    cy.get(".gjs-trt-trait__wrp:nth-child(19) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(19) select").select(MapViewName);
    cy.wait(1000);

    //SearchView
    cy.get(".gjs-trt-trait__wrp:nth-child(20) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(20) select").select(SearchViewName);
    cy.wait(1000);

    //Table View
    cy.get(".gjs-trt-trait__wrp:nth-child(21) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(21) select").select("New Table View");

    //Creating New Table List View for the Kit(Child Kit) which is to be Related

    //ListView Lable
    cy.get(
      "div:nth-child(4) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(RelatedTableView);

    //ListView Description
    cy.get(
      "div:nth-child(4) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(RelatedTableView);

    //Icon
    cy.get(
      "div:nth-child(4) > div > div > div > div.container > div > div > form > div:nth-child(4) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.get(".v-list-item:nth-child(1) .v-list-item__title").click({
      force: true,
    });
    //Checkbox
    // cy.contains("Default View for Kit").click({ force: true });

    //Click on Save
    cy.get(".v-btn--text:nth-child(2) > .v-btn__content")
      .first()
      .click({ force: true });
    //Assertion Close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });

    cy.wait(3000);
    //Click on Edit btn to add Elements
    cy.get(".editTableListBtn").click({ force: true });
    //Add List Results Elements
    cy.contains("Add List Results").click({ force: true });
    //cy.get('.v-window-item:nth-child(1) .v-btn__content').click({force:true})

    cy.wait(3000);
    //Click on Close Window of Add Elements
    //cy.get('div.v-dialog__container.editListViewDialog > div > div > div > div.v-overlay.v-overlay--active.theme--dark > div.v-overlay__content > div > div > div > div.row.d-flex.ma-0.pa-0 > div > div.d-flex.align-center.pa-0.col.col-auto > button > span')
    //.click({force:true});
    //OR 2nd Css of cross icon
    cy.get(".grey--text .v-icon").click({ force: true });
    cy.wait(2000);
    //Click on Add List Results Again
    cy.contains("Add List Results").click({ force: true });
    //cy.get('.v-window-item:nth-child(1) .v-btn__content').click({force:true})
    cy.wait(2000);
    //Change feature(old)
    //Add List Results Values coming from json file
    // cy.contains(Ele1).click({ force: true });
    // cy.contains(Ele2).click({ force: true });
    // cy.contains(Ele3).click({ force: true });
    // cy.contains(Ele4).click({ force: true });
    // cy.contains(Ele5).click({ force: true });

    //Add table List Results Values index wise
    cy.get('[role="checkbox"]').eq(0).click({ force: true });
    cy.get('[role="checkbox"]').eq(1).click({ force: true });
    cy.get('[role="checkbox"]').eq(2).click({ force: true });
    cy.get('[role="checkbox"]').eq(3).click({ force: true });
    cy.get('[role="checkbox"]').eq(4).click({ force: true });
    cy.get('[role="checkbox"]').eq(5).click({ force: true });
    cy.wait(2000);
    cy.contains("Add Selected").click({ force: true });
    cy.log("OneToMany's Related kitType Elements has been Selected");
    cy.log("Table List Results Element has been Added to OneToMany Relation");
    cy.wait(3000);
    //Click on to select Enabled sort and Default sort
    //Index 0,2,4,6,8 for Enabled sort elements(for selected elements) and Index 1 for Default sort
    cy.get('[role="checkbox"]').eq(0).click({ force: true });
    cy.get('[role="checkbox"]').eq(1).click({ force: true });
    cy.get('[role="checkbox"]').eq(2).click({ force: true });
    cy.get('[role="checkbox"]').eq(4).click({ force: true });
    cy.get('[role="checkbox"]').eq(6).click({ force: true });
    cy.get('[role="checkbox"]').eq(8).click({ force: true });
    cy.log(
      "Enabled sort and Default sort Elements has been Selected for OneToMany Relation"
    );
    cy.wait(2000);

    //Add Table List Filters Element
    cy.contains(" Filters ").click({ force: true });
    cy.wait(2000);
    //Add List Filters
    cy.contains("Add List Filters").click({ force: true });
    //Add Table List Filters Values index wise
    cy.get('[role="checkbox"][type="checkbox"]').eq(12).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(13).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(14).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(15).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(16).click({ force: true });
    cy.wait(2000);
    //Click on Save Selected
    cy.contains("Save Selected").click({ force: true });
    cy.wait(3000);
    cy.log(
      "Table List Filters Element has been Selected for OneToMany Relation"
    );
    //Save Table List
    cy.get(
      ".v-toolbar__items:nth-child(4) > .justify-end .v-btn__content"
    ).click({ force: true });
    cy.log(
      "OneToMany Relation Data Type has been created with its Configuration"
    );
  }

  SquareCard(
    SquareCardName,
    CardKitToBeRelated,
    SquareCardTableView,
    Ele1,
    Ele2,
    Ele3,
    Ele4,
    Ele5,
    RelatedNewName,
    RelatedEditName,
    MapViewName,
    SearchViewName
  ) {
    //Click on Icon
    cy.getIframeBody().contains("SquareCard").click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input")
      .click()
      .type(SquareCardName);
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
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot"
    )
      .click({ force: true })
      .type(SquareCardName);

    //Click on DropDown to Select Kit type to Relate with Square Card Relation
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(4) > div.pr-2.pa-0.pr-1.col.col-6 > div > div > div.v-input__slot > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Kit type
    //Value is comming form KitBuilderDataTypes.json(Fixtures file)
    cy.wait(20000);
    cy.contains(CardKitToBeRelated).click({ force: true });
    cy.wait(5000);

    //Select Square Card Realtion
    cy.get(
      "div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(4) > div.pa-0.pl-1.col.col-6 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    cy.contains("More Than One").click({ force: true });

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log("Square Card Relation Data Type has been Created");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(5000);

    //Click on Allow Delete
    cy.get(".gjs-trt-trait__wrp:nth-child(15) .gjs-chk-icon").click({
      force: true,
    });

    //Click on Allow View Details
    cy.get(".gjs-trt-trait__wrp:nth-child(16) .gjs-chk-icon").click({
      force: true,
    });

    //CreateView(Related New)
    cy.get(".gjs-trt-trait__wrp:nth-child(17) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(17) select").select(RelatedNewName);
    //cy.get('.gjs-trt-trait__wrp:nth-child(16) select').select('6079df7a-5f2a-4361-a5b7-fac092b04537');
    cy.wait(1000);

    //DetailView(Related Edit)
    cy.get(".gjs-trt-trait__wrp:nth-child(18) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(18) select").select(RelatedEditName);
    //cy.get('.gjs-trt-trait__wrp:nth-child(17) select').select('26df3dc5-f483-4857-8c85-4d61bd0d3b8b');
    cy.wait(1000);

    //MapView
    cy.get(".gjs-trt-trait__wrp:nth-child(19) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(19) select").select(MapViewName);
    // cy.get('.gjs-trt-trait__wrp:nth-child(18) select').select('7440b850-515f-40ad-bfd8-f66b53570da1');
    cy.wait(1000);

    //SearchView
    cy.get(".gjs-trt-trait__wrp:nth-child(20) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(20) select").select(SearchViewName);
    //cy.get('.gjs-trt-trait__wrp:nth-child(19) select').select('9d2f7838-0074-459c-b3e3-dd35a035118c');
    cy.wait(1000);

    //Table View
    cy.get(".gjs-trt-trait__wrp:nth-child(21) select").select("Select View");
    cy.get(".gjs-trt-trait__wrp:nth-child(21) select").select("New Table View");

    //Creating New Table List View for the Kit(Child Kit) which is to be Related

    //ListView Lable
    cy.get(
      "div:nth-child(4) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(SquareCardTableView);

    //ListView Description
    cy.get(
      "div:nth-child(4) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(SquareCardTableView);

    //Icon
    cy.get(
      "div:nth-child(4) > div > div > div > div.container > div > div > form > div:nth-child(4) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.get(".v-list-item:nth-child(1) .v-list-item__title").click({
      force: true,
    });
    //Checkbox
    //cy.contains("Default View for Kit").click({ force: true });

    //Click on Save
    cy.get(".v-btn--text:nth-child(2) > .v-btn__content")
      .first()
      .click({ force: true });
    //Assertion Close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });

    cy.wait(3000);
    //Click on Edit btn to add Elements
    cy.get(".editTableListBtn").click({ force: true });
    //Add List Results
    cy.contains("Add List Results").click({ force: true });
    //cy.get('.v-window-item:nth-child(1) .v-btn__content').click({force:true})

    cy.wait(3000);
    //Click on Close Window of Add Elements
    //cy.get('div.v-dialog__container.editListViewDialog > div > div > div > div.v-overlay.v-overlay--active.theme--dark > div.v-overlay__content > div > div > div > div.row.d-flex.ma-0.pa-0 > div > div.d-flex.align-center.pa-0.col.col-auto > button > span')
    // .click({force:true});
    //OR 2nd Css of cross icon
    cy.get(".grey--text .v-icon").click({ force: true });

    cy.wait(2000);
    //Click on Add List Results Again
    cy.contains("Add List Results").click({ force: true });
    //cy.get('.v-window-item:nth-child(1) .v-btn__content').click({force:true})
    cy.wait(2000);
    //Change feature(old)
    //Add List Results Values coming from json file
    // cy.contains(Ele1).click({ force: true });
    // cy.contains(Ele2).click({ force: true });
    // cy.contains(Ele3).click({ force: true });
    // cy.contains(Ele4).click({ force: true });
    // cy.contains(Ele5).click({ force: true });

    //Add table List Results Values index wise
    cy.get('[role="checkbox"]').eq(0).click({ force: true });
    cy.get('[role="checkbox"]').eq(1).click({ force: true });
    cy.get('[role="checkbox"]').eq(2).click({ force: true });
    cy.get('[role="checkbox"]').eq(3).click({ force: true });
    cy.get('[role="checkbox"]').eq(4).click({ force: true });
    cy.get('[role="checkbox"]').eq(5).click({ force: true });
    cy.wait(2000);
    cy.contains("Add Selected").click({ force: true });
    cy.log("SquareCard's Related kitType Elements has been Selected");
    cy.log("Table List Results Element has been Added to SquareCard Relation");
    cy.wait(3000);
    //Click on to select Enabled sort and Default sort
    //Index 0,2,4,6,8 for Enabled sort elements(for selected elements) and Index 1 for Default sort
    cy.get('[role="checkbox"]').eq(0).click({ force: true });
    cy.get('[role="checkbox"]').eq(1).click({ force: true });
    cy.get('[role="checkbox"]').eq(2).click({ force: true });
    cy.get('[role="checkbox"]').eq(4).click({ force: true });
    cy.get('[role="checkbox"]').eq(6).click({ force: true });
    cy.get('[role="checkbox"]').eq(8).click({ force: true });
    cy.log(
      "Enabled sort and Default sort Elements has been Selected for SquareCard Relation"
    );
    cy.wait(2000);

    //Add Table List Filters Element
    cy.contains(" Filters ").click({ force: true });
    cy.wait(2000);
    //Add List Filters
    cy.contains("Add List Filters").click({ force: true });
    //Add Table List Filters Values index wise
    cy.get('[role="checkbox"][type="checkbox"]').eq(12).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(13).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(14).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(15).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(16).click({ force: true });
    cy.wait(2000);
    //Click on Save Selected
    cy.contains("Save Selected").click({ force: true });
    cy.wait(3000);
    cy.log(
      "Table List Filters Element has been Selected for SquareCard Relation"
    );
    //Save Table List
    cy.get(
      ".v-toolbar__items:nth-child(4) > .justify-end .v-btn__content"
    ).click({ force: true });
    cy.log(
      "SquareCard Relation Data Type has been created with its Configuration"
    );
  }

  ReactiveControl(RCName) {
    //Click on ReactiveControl
    cy.getIframeBody()
      .find('[data-gjs-type="control-reaction"]')
      .click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(RCName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    cy.wait(2000);

    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);

    // cy.get('[value="Configure"]').last().click({ force: true });

    // //Click on dropdown
    // cy.get(
    //   "div.v-dialog__container.reactive-control-popup > div > div > div > div.container.reactive-control-body > div > div > div > div.v-stepper__items > div:nth-child(1) > div > form > div > div:nth-child(1) > div.row.justify-center.condition-repeater-container > div > div.py-0.pl-0.d-flex.align-center.justify-start.condition-control.col.col-2 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner"
    // ).click({ force: true });

    // cy.contains("URL").click({ force: true });

    // cy.get(
    //   "div.v-dialog__container.reactive-control-popup > div > div > div > div.container.reactive-control-body > div > div > div > div.v-stepper__items > div:nth-child(1) > div > form > div > div:nth-child(1) > div.row.justify-center.condition-repeater-container > div > div.py-0.pl-0.d-flex.align-center.justify-start.condition-condition.col.col-2 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    // ).click({ force: true });

    // cy.contains("Not Equal").click({ force: true });

    // //Click on Action
    // cy.get(".v-stepper__step--inactive > .v-stepper__step__step").click();
    // cy.contains("Actions").click({ force: true });

    // cy.contains("add new action").click({ force: true });

    // //cy.get('.font-weight-medium > .v-btn--text > .v-btn__content').click();

    // //Action -Click on DropDown
    // cy.get(
    //   "div.v-dialog__container.reactive-control-popup > div > div > div > div.container.reactive-control-body > div > div > div > div.v-stepper__items > div:nth-child(2) > div > form > div > div.row.justify-center.action-repeater-container.no-gutters > div > div > div.d-flex.py-0.pl-0.align-top.justify-start.action-type.col.col-2 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner"
    // ).click({ force: true });

    // cy.contains("Control").click({ force: true });

    // //DD
    // cy.get(
    //   "div.v-dialog__container.reactive-control-popup > div > div > div > div.container.reactive-control-body > div > div > div > div.v-stepper__items > div:nth-child(2) > div > form > div > div.row.justify-center.action-repeater-container.no-gutters > div > div > div.d-flex.py-0.pl-0.align-center.justify-start.col.col-9 > div > div.d-flex.py-0.pl-0.align-center.justify-start.action-control.col.col-4 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    // ).click({ force: true });

    // cy.contains("URL").click({ force: true });

    // //DD
    // cy.get(
    //   "div.v-dialog__container.reactive-control-popup > div > div > div > div.container.reactive-control-body > div > div > div > div.v-stepper__items > div:nth-child(2) > div > form > div > div.row.justify-center.action-repeater-container.no-gutters > div > div > div.d-flex.py-0.pl-0.align-center.justify-start.col.col-9 > div > div.d-flex.py-0.pl-0.align-center.justify-start.action-property.col.col-4 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    // ).click({ force: true });

    // cy.contains("Set Editable").click({ force: true });
  }

  ReactiveVriable(RVName) {
    //Click on ReactiveVriable
    cy.getIframeBody()
      .find('[data-gjs-type="control-variable"]')
      .click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(RVName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    cy.wait(2000);

    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
    //cy.get('[value="Configure"]').last().click({ force: true });
  }

  Reminder(ReminderName) {
    //Click on Assigning
    cy.getIframeBody().contains("Set Reminder").click({ force: true });
    cy.wait(3000);
    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(ReminderName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);
  }

  TextBlock(TextBlockName, TextBlockData) {
    //Click on TextBlock

    cy.getIframeBody()
      .find('[data-gjs-type="control-textblock"]')
      .click({ force: true })
      .type(TextBlockData);
    cy.log("Text Block data has been Entered");
    cy.wait(3000);

    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input")
      .click()
      .type(TextBlockName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    //Select a Value
    cy.wait(2000);

    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
  }

  Button(ButtonName) {
    //Click on Button
    cy.getIframeBody()
      .find('[data-gjs-type="control-button"]')
      .click({ force: true });
    cy.wait(3000);

    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(ButtonName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    cy.wait(2000);

    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
  }

  Link(LinkName, EnterUrl) {
    //Click on Link
    cy.getIframeBody()
      .find('[data-gjs-type="control-link"]')
      .click({ force: true });
    cy.wait(3000);

    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(LinkName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    cy.wait(2000);

    //Enter Url
    cy.get(".gjs-trt-trait__wrp:nth-child(15) input").click().type(EnterUrl);

    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
  }

  CreatedBy(CreatedByName) {
    //Click on Button
    cy.getIframeBody()
      .find('[data-gjs-type="control-createdby"]')
      .click({ force: true });
    cy.wait(3000);

    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input")
      .click()
      .type(CreatedByName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    cy.wait(2000);

    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
  }

  ModifiedBy(ModifiedByName) {
    //Click on Button
    cy.getIframeBody()
      .find('[data-gjs-type="control-modifiedby"]')
      .click({ force: true });
    cy.wait(3000);

    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input")
      .click()
      .type(ModifiedByName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    cy.wait(2000);

    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
  }

  CreatedOn(CreatedOnName) {
    //Click on Button
    cy.getIframeBody()
      .find('[data-gjs-type="control-createdon"]')
      .click({ force: true });
    cy.wait(3000);

    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input")
      .click()
      .type(CreatedOnName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    cy.wait(2000);

    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
  }

  ModifiedOn(ModifiedOnName) {
    //Click on Button
    cy.getIframeBody()
      .find('[data-gjs-type="control-modifiedon"]')
      .click({ force: true });
    cy.wait(3000);

    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input")
      .click()
      .type(ModifiedOnName);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    cy.wait(2000);

    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
  }

  KitItemId(KitItemId) {
    //Click on Button
    cy.getIframeBody()
      .find('[data-gjs-type="control-itemidforaccount"]')
      .click({ force: true });
    cy.wait(3000);

    //Click on Lable
    cy.get(".gjs-trt-trait__wrp:nth-child(1) input").click().type(KitItemId);
    //Click on Name
    cy.get(".gjs-trt-trait__wrp:nth-child(2) input").click();
    cy.wait(2000);

    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
  }
}

export default KitBuilderDataTypes;
