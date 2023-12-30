import { HomePage } from '../support/pages/homePage';

describe('Ejercicio 2', () => {
  let datos;
  const homePage = new HomePage();
  before(() => {
    cy.fixture('datos').then((data) => {
      datos = data;
    });
  });
  it('Celulares y Smartphones', () => {
    // Ingresar categoria comun
    let r;
    cy.visit('/');
    homePage.hoverCategorias();
    homePage.clickViewMoreCategories();
    homePage.clickCategory(datos.categorias.cat2);
    cy.get("[class='seo-ui-trends-entry-keyword']")
      .eq(1)
      .click({ force: true });
    // Filtrar Capital Federal
    cy.get(
      ':nth-child(8) > ul > :nth-child(1) > .ui-search-link > .ui-search-filter-name'
    ).click();
    // Obtener titulo de una publicacion
    cy.get('.ui-search-item__title')
      .its('length')
      .then((n) => {
        r = Math.floor(Math.random() * n);
        cy.get('.ui-search-item__title')
          .eq(r)
          .invoke('text')
          .then((texto) => {
            // Ingresar a la misma publicacion
            cy.get('.ui-search-item__title').eq(r).click({ force: true });
            const newText = texto;
            // Validar que el titulo coincida con el titulo de la lista anterior
            cy.get('.ui-pdp-title').should('have.text', newText);
          });
      });
  });
});
