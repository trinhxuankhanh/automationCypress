/// <reference types="Cypress" />
require("../../plugins/index");
require("cypress-xpath");
describe("Searching", function () {
    it("Visits the map4d website and check it done", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập')
    });

    it("Visits the map4d website and check search '230 nguyễn công hoan'", function () {
        cy.visit("https://map.map4d.vn/");

        cy.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/div/input').type('230 nguyễn công hoan')
        cy.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/button[2]').click()
        cy.xpath('//*[@id="root"]/div/div[2]/div/div[2]/div/div[1]/ul/div[1]/div[2]/p[1]').contains('230 Nguyễn Công Hoan')
    });

    it("Visits the map4d website and check search 'Case coffee'", function () {
        cy.visit("https://map.map4d.vn/");

        cy.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/div/input').type('Case coffee')
        cy.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/button[2]').click()
        cy.wait(500)
        cy.xpath('//*[@id="root"]/div/div[2]/div/div[2]/div/div[1]/ul/div').contains('Không tìm thấy kết quả "Case coffee" ở khu vực hiện tại')
    });

    it("Visits the map4d website and check search '230 hàm NGHI'", function () {
        cy.visit("https://map.map4d.vn/");

        cy.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/div/input').type('230 hàm NGHI')
        cy.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/button[2]').click()
        cy.wait(500)
        cy.xpath('//*[@id="root"]/div/div[2]/div/div[2]/div/div[1]/ul/div[1]/div[2]/p[1]').contains('230 P. Hàm Nghi')
    });

    it("Visits the map4d website and check search '230 ham nghi'", function () {
        cy.visit("https://map.map4d.vn/");

        cy.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/div/input').type('230 ham nghi')
        cy.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/button[2]').click()
        cy.wait(500)
        cy.xpath('//*[@id="root"]/div/div[2]/div/div[2]/div/div[1]/ul/div[1]/div[2]/p[1]').contains('230 P. Hàm Nghi')
    });

    it("Visits the map4d website and check search ' 230 ham nghi '", function () {
        cy.visit("https://map.map4d.vn/");

        cy.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/div/input').type(' 230 ham nghi ')
        cy.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/button[2]').click()
        cy.wait(500)
        cy.xpath('//*[@id="root"]/div/div[2]/div/div[2]/div/div[1]/ul/div[1]/div[2]/p[1]').contains('230 P. Hàm Nghi')
    });
})