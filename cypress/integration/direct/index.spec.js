/// <reference types="Cypress" />
require("../../plugins/index");
require("cypress-xpath");
describe("Directing", function () {
    it("Visits the map4d website and check it done", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập')
    });

    it("Visits the map4d website and check direct button", function () {
        cy.visit("https://map.map4d.vn/");

        cy.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/button[3]').click()
        cy.contains('Tìm kiếm')
    });

    

    it("Visits the map4d website and check direct button have distance", function () {
        cy.visit("https://map.map4d.vn/");

        cy.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/button[3]').click()
        cy.xpath('//*[@id="root"]/div/div[2]/div/div/div[2]/div/div[2]/div[1]/div/div/div/div/div').type('230 Hàm Nghi')
        cy.wait(500)
        cy.xpath('/html/body/div[2]/div/ul/li[1]').click()
        
        cy.xpath('//*[@id="root"]/div/div[2]/div/div/div[2]/div/div[2]/div[2]/div/div/div/div/div').type('459 Tôn đức thắng')
        cy.wait(500)
        cy.xpath('/html/body/div[2]/div/ul/li[1]').click()
        cy.xpath('//*[@id="root"]/div/div[2]/div/div/ul/div[1]/div[2]/div[1]/p').contains('Tuyến đường nhanh nhất')
    });
})