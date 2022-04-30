/// <reference types="Cypress" />
require("../../plugins/index");
require("cypress-xpath");
require("cypress-real-events/support");
describe("Sign-in", function () {
    it("Visits the map4d website and check login page", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains('Register')
    });

    it("Visits the map4d website and check login page switch language", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains('English')
    });

    it("Visits the map4d website and check login page switch language", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains('English')
        cy.contains('Vietnamese')
    });

    it("Visits the map4d website and check login page switch language", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains('English')
        cy.contains('Vietnamese')
    });

    it("Visits the map4d website and check login page switch language", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        
        cy.contains("a", "English").realHover('mouse').then($el=>{
            cy.wrap($el).invoke('show')
            cy.wrap($el).xpath('//*[@id="kc-locale-dropdown"]/ul/li[1]/a').click({force: true})
        })
    });

    it("Visits the map4d website and check login page switch language", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains("a", "English").realHover('mouse').then($el=>{
            cy.wrap($el).invoke('show')
            cy.wrap($el).xpath('//*[@id="kc-locale-dropdown"]/ul/li[1]/a').click({force: true})
        })
        cy.wait(1000)

        cy.contains("a", "Tiếng Việt").realHover('mouse').then($el=>{
            cy.wrap($el).invoke('show')
            cy.wrap($el).xpath('//*[@id="kc-locale-dropdown"]/ul/li[2]/a').click({force: true})
        })

        cy.contains('Register')
    });

    it("Visits the map4d website and check login page login failed", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.xpath('//*[@id="username"]').type('phamhonghanh2500@gmail.com')
        cy.xpath('//*[@id="password"]').type('Phh!@#02052000')
        cy.xpath('//*[@id="kc-login"]').click()
        cy.contains('Invalid username or password.')
    });

    it("Visits the map4d website and check login page login failed", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.xpath('//*[@id="username"]').type('phamhonghanh2500@gmail.com')
        cy.xpath('//*[@id="kc-login"]').click()
        cy.contains('Invalid username or password.')
    });

    it("Visits the map4d website and check login page login failed", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.xpath('//*[@id="password"]').type('Phh!@#02052000')
        cy.xpath('//*[@id="kc-login"]').click()
        cy.contains('Invalid username or password.')
    });

    it("Visits the map4d website and check login page login success", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.xpath('//*[@id="username"]').type('phamhonghanh2500@gmail.com')
        cy.xpath('//*[@id="password"]').type('honghanh020500hhp')
        cy.xpath('//*[@id="kc-login"]').click()
        cy.url().should('include', 'map.map4d.vn')
    });

    it("Visits the map4d website and check login page forgot password", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains('Forgot Password?').click()
        cy.xpath('//*[@id="username"]').type('abc')
        cy.xpath('//*[@id="kc-form-buttons"]/input').click()
        cy.contains('You should receive an email shortly with further instructions.')
    });

    it("Visits the map4d website and check login page forgot password", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains('Forgot Password?').click()
        cy.xpath('//*[@id="username"]').type('phamhonghanh2500@gmail.com')
        cy.xpath('//*[@id="kc-form-buttons"]/input').click()
        cy.contains('You should receive an email shortly with further instructions.')
    });

    it("Visits the map4d website and check login page forgot password", function () {
        cy.visit("https://map.map4d.vn/");
    
        cy.contains('Đăng nhập').click()
        cy.contains('Forgot Password?').click()
        cy.xpath('//*[@id="kc-form-options"]/div/span/a').click()
        cy.contains('Register')
    });
})