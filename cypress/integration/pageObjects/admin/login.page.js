/// <reference types="Cypress" />

import {Page} from '../page'

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return cy.get("[name='username']") }
    get inputPassword () { return cy.get("[name='password']") }
    get btnSubmit () { return  cy.get("button:contains(Login)") }

    /**
     * a method tologin using username and password
     */
    login (username, password) {
        this.inputUsername.type(username);
        this.inputPassword.type(password);
        this.btnSubmit.click();
    }

    /**
     * opens the application
     */
    open () {
        return super.open();
    }
}