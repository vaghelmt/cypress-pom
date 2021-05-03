/// <reference types="Cypress" />
import 'cypress-iframe'

import { LoginPage } from '../pageObjects/admin/login.page'
import { HomePage } from '../pageObjects/admin/home.page'
import { AboutPage } from '../pageObjects/admin/about.page'
import { AboutSitePage } from '../pageObjects/site/about.site.page'
import { stripHtml } from "string-strip-html"
import { Page } from '../pageObjects/page'


describe("About page", () => {
    let testData;

    const page = new Page()
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const aboutPage = new AboutPage()
    const aboutSitePage = new AboutSitePage()

    before(() => {
        cy.fixture('about.json').then(function (data) {
            testData = data
        })
        loginPage.open()
        loginPage.login('root', 'root')
        homePage.pageComposerExists()

    })


    it("content added in admin area is displayed on the site", function () {
        homePage.openAboutPage()
        aboutPage.openEditor()
        aboutPage.writeTextInEditor(testData.textVal)
        aboutPage.savePost()
        aboutPage.publishPost()
        aboutSitePage.gotoAboutPage()
        aboutSitePage.validateNewTextExists(testData.textVal);

    })

    it("content added is returned by GraphQL", function (){
        cy.request(page.requestData).then(function(res){
            let richContentNodes = res.body.data.jcr.nodeByPath.children.nodes;
            let richContentVals = richContentNodes.map(c => stripHtml(c.renderedContent.output).result)
            expect(richContentVals).to.include(testData.textVal);
        })

    })
})