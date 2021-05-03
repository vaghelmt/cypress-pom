/// <reference types="Cypress" />

import { Page } from '../page'

/**
 * Home page - opens up immediately after successful login
 */
export class HomePage extends Page {

    /**
    * this method help validates that we are on home page
    */
    pageComposerExists() {
       cy
       .getIframeBody('#page-composer-frame')

    }

    openAboutPage() {
        cy
        .getIframeBody('#page-composer-frame')
        .find("#JahiaGxtPagesTab .x-grid3-body span:contains(About)")
        .should('have.text','About')
        .click({force: true})
    }

}