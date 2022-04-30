/// <reference types="Cypress" />
require("../../plugins/index");
require("cypress-xpath");
describe("Sign-up", function () {
    it("Visits the map4d website and check register page", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains('Register').click()
        cy.contains('Register')
    });

    it("Visits the map4d website and check register page submit success", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains('Register').click()
        cy.xpath('//*[@id="firstName"]').type('tun')
        cy.xpath('//*[@id="lastName"]').type('dtrai')
        cy.xpath('//*[@id="email"]').type(`tundtrai${(new Date).getSeconds()}@gmail.com`)
        cy.xpath('//*[@id="password"]').type('TUNprocutephomaique123123!')
        cy.xpath('//*[@id="password-confirm"]').type('TUNprocutephomaique123123!')
        cy.xpath('//*[@id="user.attributes.phone"]').type('0123456789')
        cy.xpath('//*[@id="kc-register-form"]/div[7]/div[2]/div/div[1]').click()
        cy.xpath('//*[@id="kc-register-form"]/div[7]/div[2]/div/div[2]/div/div[1]').click()
        cy.contains('Register').click()
        cy.contains('You need to verify your email address to activate your account.')
    });

    it("Visits the map4d website and check register page submit false", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains('Register').click()
        cy.xpath('//*[@id="firstName"]').type('tun')
        cy.xpath('//*[@id="lastName"]').type('dtrai')
        cy.xpath('//*[@id="email"]')
        cy.xpath('//*[@id="password"]').type('TUNprocutephomaique123123!')
        cy.xpath('//*[@id="password-confirm"]').type('TUNprocutephomaique123123!')
        cy.xpath('//*[@id="user.attributes.phone"]').type('0123456789')
        cy.xpath('//*[@id="kc-register-form"]/div[7]/div[2]/div/div[1]').click()
        cy.xpath('//*[@id="kc-register-form"]/div[7]/div[2]/div/div[2]/div/div[1]').click()
        cy.contains('Register').click()
        cy.contains('Please specify email.')
    });

    it("Visits the map4d website and check register page submit false", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains('Register').click()
        cy.xpath('//*[@id="firstName"]').type('tun')
        cy.xpath('//*[@id="lastName"]').type('dtrai')
        cy.xpath('//*[@id="email"]')
        cy.xpath('//*[@id="password"]')
        cy.xpath('//*[@id="password-confirm"]')
        cy.xpath('//*[@id="user.attributes.phone"]').type('0123456789')
        cy.xpath('//*[@id="kc-register-form"]/div[7]/div[2]/div/div[1]').click()
        cy.xpath('//*[@id="kc-register-form"]/div[7]/div[2]/div/div[2]/div/div[1]').click()
        cy.contains('Register').click()
        cy.contains('Please specify password.')
    });

    it("Visits the map4d website and check register page submit false", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains('Register').click()
        cy.xpath('//*[@id="firstName"]').type('tun')
        cy.xpath('//*[@id="lastName"]').type('dtrai')
        cy.xpath('//*[@id="email"]').type('tundtrai@gmail.com')
        cy.xpath('//*[@id="password"]').type('tun123456')
        cy.xpath('//*[@id="password-confirm"]').type('tun123456')
        cy.xpath('//*[@id="user.attributes.phone"]').type('0123456789')
        cy.xpath('//*[@id="kc-register-form"]/div[7]/div[2]/div/div[1]').click()
        cy.xpath('//*[@id="kc-register-form"]/div[7]/div[2]/div/div[2]/div/div[1]').click()
        cy.contains('Register').click()
        cy.contains('Please choose a stronger password. Try a mix of letters, numbers, and symbols.')
    });
})