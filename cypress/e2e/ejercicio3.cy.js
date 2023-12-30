describe('API TESTING', () => {
  it('Validar la cantidad de productos encontrados', () => {
    cy.request(
      'https://api.mercadolibre.com/sites/MLA/search?q=motorola_g13'
    ).then((response) => {
      // Asegúrate de que la solicitud sea exitosa
      expect(response.status).to.eq(200);

      // Valida la estructura de la respuesta
      expect(response.body).to.have.property('results');

      // Extrae la cantidad de productos de la respuesta
      const totalProducts = response.body.results.length;

      // Imprime en la consola la cantidad de productos para verificación manual
      cy.log(`Se encontraron ${totalProducts} productos.`);
    });
  });

  it('Validar atributos de un producto elegido al azar', () => {
    cy.request(
      'https://api.mercadolibre.com/sites/MLA/search?q=motorola_g13'
    ).then((response) => {
      // Valida la estructura de la respuesta
      expect(response.body).to.have.property('results');

      // Extrae el array de productos de la respuesta
      const productsArray = response.body.results;

      // Elige un índice al azar del array
      const randomIndex = Cypress._.random(0, productsArray.length - 1);

      // Extrae el elemento al azar del array
      const randomProduct = productsArray[randomIndex];

      // Imprime en consola el titulo
      cy.log(randomProduct.title);

      // Imprime en consola la Moneda en la cual esta a la venta
      cy.log(`Se encuentra en la moneda ${randomProduct.currency_id}`);

      // Imprime en consola la condicion del producto
      if (randomProduct.condition !== 'new') {
        cy.log(`Es usado`);
      } else {
        cy.log(`Es nuevo`);
      }

      // Imprime en consola el precio
      cy.log(`Tiene un valor de $${randomProduct.price}`);

      // Valida por consola si tiene Envio Gratis
      if (randomProduct.shipping.free_shipping == true) {
        cy.log(`Tiene envio gratis !`);
      } else {
        cy.log(`NO tiene envio gratis !`);
      }
    });
  });
});
