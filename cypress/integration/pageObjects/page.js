/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export class Page {

    query = `query{
        jcr(workspace: LIVE) {
            nodeByPath(path: "/sites/digitall/home/about/landing") {
                name
                children {
                    nodes {
                        name
                        renderedContent {
                            output
                        }
                    }
                }
            }
        }
    }`;

    requestData = {
        method: 'POST',
        url: 'http://localhost:8080/modules/graphql', 
        body: { query: this.query },  
        auth: {
            username: 'root',
            password: 'root'
        },
        headers: {
            'Content-Type': 'application/json'
        },
    }

    get query() {
        return this.query
    }

    get requestData(){
        return this.requestData
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open() {
        return cy.visit(Cypress.env('admin_url'));
    }
}
