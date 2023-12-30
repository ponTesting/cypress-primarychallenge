import { HomePage } from '../support/pages/homePage';
describe('Ejercicio 1', () => {
  let datos;
  const homePage = new HomePage();
  beforeEach(() => {
    cy.visit('/');
  });
  before(() => {
    cy.fixture('datos').then((data) => {
      datos = data;
    });
  });
  //  Categorías  Tecnología  Celulares y Smartphones
  it('Celulares y Smartphones', () => {
    homePage.hoverCategorias();
    homePage.hoverCategoryList(datos.categorias.cat1);
    homePage.clickCategory(datos.categorias.cat3);
    cy.get('.ui-search-breadcrumb__title').should(
      'have.text',
      datos.categorias.cat3
    );
  });

  //  Categorías  Hogar y Electrodomésticos  Climatización
  it('Climatización', () => {
    homePage.hoverCategorias();
    homePage.clickViewMoreCategories();
    homePage.clickCategory(datos.categorias.cat4);
    cy.get('.ui-search-breadcrumb__title').should(
      'have.text',
      datos.categorias.cat4
    );
  });
  //  Categorías  Belleza y Cuidado Personal  Perfumes Importados
  it('Perfumes', () => {
    homePage.hoverCategorias();
    homePage.clickViewMoreCategories();
    homePage.clickCategory(datos.categorias.cat5);
    cy.get('.ui-search-breadcrumb__title').should(
      'have.text',
      datos.categorias.cat5
    );
  });
  //  Categorías  Herramientas e Industria  Industria Textil
  it('Textil y Calzado', () => {
    homePage.hoverCategorias();
    homePage.clickViewMoreCategories();
    homePage.clickCategory(datos.categorias.cat6);
    cy.get('.ui-search-breadcrumb__title').should(
      'have.text',
      datos.categorias.cat6
    );
  });
  //  Categorías  Juguetes y Bebés  Cuarto del Bebé
  it('Cuarto del Bebé', () => {
    homePage.hoverCategorias();
    homePage.clickViewMoreCategories();
    homePage.clickCategory(datos.categorias.cat7);
    cy.get('.ui-search-breadcrumb__title').should(
      'have.text',
      datos.categorias.cat7
    );
  });
});
