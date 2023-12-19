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
    let r;
    cy.visit('/');
    homePage.hoverCategorias();
    homePage.hoverCategoryList(datos.categorias.cat1);
    homePage.clickCategory(datos.categorias.cat3);
    cy.get("[class='seo-ui-trends-entry-keyword']")
      .eq(1)
      .click({ force: true });
    cy.get('.ui-search-item__title')
      .its('length')
      .then((n) => {
        r = Math.floor(Math.random() * n);
        cy.get('.ui-search-item__title')
          .eq(r)
          .invoke('text')
          .then((texto) => {
            cy.get('.ui-search-item__title').eq(r).click();
            const newText = texto.trim();
            cy.get('.ui-pdp-title').should('have.text', newText);
          });
      });
  });
});
