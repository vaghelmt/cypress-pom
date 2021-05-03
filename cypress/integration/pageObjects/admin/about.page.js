/// <reference types="Cypress" />

import { Page } from '../page'

/**
 * About page, opens up after user clicks on about link in the admin screen
 */
export class AboutPage extends Page {

    /**
     * opens the editor where new content will be written
    */
    openEditor() {
        cy
            .getIframeBody('#page-composer-frame')
            .find('.gwt-Frame.window-iframe.x-noshim.x-component')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find(".editmodeArea .button-placeholder div:contains(Any)").click()

        cy.get("input[placeholder='Search for types of content']").type('rich')

        cy.get("div[data-sel-role='content-type-tree'] span:contains(Rich)").click()

        cy.get("button[data-sel-role='content-type-dialog-create']").click()

        cy.wait(2000)

    }

    /**
    * writes text into rich text editor
    * @param textVal value to be written
    */
    writeTextInEditor(textVal) {
        cy
            .getIframeBody('.cke_wysiwyg_frame.cke_reset')
            .find('p').type(textVal)

    }

    savePost() {
        cy.get("button[data-sel-role='createButton']").click()

    }

    publishPost() {
        cy.get("button[data-sel-role='publishAction']").click()
    }



}