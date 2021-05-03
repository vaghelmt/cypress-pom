/// <reference types="Cypress" />

import { Page } from '../page'

/**
 * About page in the site area
 */
export class AboutSitePage extends Page {

    gotoAboutPage() {
        cy.wait(2000)
        cy.visit(`${Cypress.env('site_url')}/about.html`)
    }

    validateNewTextExists(textVal) {
        expect(cy.get(`.wrapper p:contains(${textVal})`).should("have.text",textVal))
    }
}