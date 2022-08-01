/// <reference types="Cypress" />
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe ("Demo de una Rest Api.",()=>{
    it("Test uno",()=>{

        const_datos={
            "Nombre":"Juan",
            "Ap":"Moreno",
            "Am":"Rivas",
            "Tel":"987987",
            "Dir":"Dirección de la demo"
        }

        cy.log(datos["Nombre"])
        cy.log(datos["Ap"])
        cy.log(datos["Am"])
        cy.log(datos["Tel"])
        cy.log(datos["Dir"])
    })
});
