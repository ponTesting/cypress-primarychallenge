import { HomePage } from '../support/pages/homePage';

describe('Ejercicio 1', () => {
  let datos;
  const homePage = new HomePage();
  before(() => {
    cy.fixture('datos').then((data) => {
      datos = data;
    });
  });
  it('Climatizacion', () => {
    cy.visit('/');
    homePage.hoverCategorias();
    homePage.hoverCategoryList(datos.categorias.cat1);
    homePage.clickCategory(datos.categorias.cat2);
    cy.get('.ui-search-breadcrumb__title').should(
      'have.text',
      datos.categorias.cat2
    );
  });
});
