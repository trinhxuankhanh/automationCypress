/// <reference types="Cypress" />
require("../../plugins/index");
require("cypress-xpath");
describe("Setting", function () {
  it("Visits the map4d website and check setting", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')

    cy.contains('Tùy chọn hiển thị')
  });

  it("Visits the map4d website and check auto button in weather", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.get('div[aria-label="text alignment"]').find('button[value="4"]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check sun button in weather", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.get('div[aria-label="text alignment"]').find('button[value="2"]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check rain button in weather", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.get('div[aria-label="text alignment"]').find('button[value="0"]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check snow button in weather", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.get('div[aria-label="text alignment"]').find('button[value="1"]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check auto button in time", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.get('img[src="/mapAppRoot/icon/settingEffectIcon/adjust.svg"]').eq(1).click('center')
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check morning button in time", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.xpath('/html/body/div[3]/div[3]/div/div[2]/div[2]/div[3]').find('button[value="1"]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check lunch button in time", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.xpath('/html/body/div[3]/div[3]/div/div[2]/div[2]/div[3]').find('button[value="2"]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check afternoon button in time", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.xpath('/html/body/div[3]/div[3]/div/div[2]/div[2]/div[3]').find('button[value="3"]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check night button in time", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.xpath('/html/body/div[3]/div[3]/div/div[2]/div[2]/div[3]').find('button[value="4"]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check shadow", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.xpath('/html/body/div[3]/div[3]/div/div[2]/div[3]/div/div/label[1]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check weather effect", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.xpath('/html/body/div[3]/div[3]/div/div[2]/div[3]/div/div/label[2]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check 3D model", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.xpath('/html/body/div[3]/div[3]/div/div[2]/div[3]/div/div/label[3]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check walter effect", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.xpath('/html/body/div[3]/div[3]/div/div[2]/div[3]/div/div/label[4]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check POI", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.xpath('/html/body/div[3]/div[3]/div/div[2]/div[3]/div/div/label[5]').click()
    cy.contains("Đóng").click()
  });

  it("Visits the map4d website and check close button", function () {
    cy.visit("https://map.map4d.vn/");

    cy.get('.jss12').find('button.MuiButtonBase-root').eq(0).click('center')
    cy.get('ul[aria-label="Menu Setting"]').find('div.jss475:nth-child(2)').eq(0).click('center')
    cy.contains("Đóng").click()
  });
});