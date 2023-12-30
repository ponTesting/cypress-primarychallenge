export class HomePage {
  constructor() {
    this.categorias = '.nav-menu-categories-link';
  }
  hoverCategorias() {
    cy.get(this.categorias).realHover();
  }

  hoverCategoryList(categoria) {
    cy.contains('a', categoria).realHover();
  }
  clickCategory(categoria) {
    cy.contains('a', categoria).click();
  }
  clickViewMoreCategories() {
    cy.contains('Ver más categorías').click();
  }
}
