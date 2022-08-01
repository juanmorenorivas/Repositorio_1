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
            "Dir":"Dirección de la demo",
            "Cursos":[
                {
                    "Nombre": "Php",
                    "Descripcion":"Lengua de programación Php"
                },
                {
                    "Nombre": "Java",
                    "Descripcion":"Lengua de programación Java "
                },
                {
                    "Nombre": "Python",
                    "Descripcion":"Lengua de programación Python"
                },
            ]
        }

        cy.log(datos.Nombre)
        cy.log(datos.Dir)
        cy.log(datos.Cursos)
        cy.log(datos.Cursos[1])
        cy.log(datos.Cursos[2].Nombre)
        cy.log(datos.Cursos[2].Descripcion)
    })
});