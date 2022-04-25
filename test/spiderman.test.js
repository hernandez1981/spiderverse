const Spiderman = require('./../app/spiderman');
describe("Unit Tests for Spiderman class", () => {
    test('1) Create an spiderman object', () => {

        //Aqui escribimos el código que queremos usar tal cual
        //Quiero poder instanciar un objeto Spiderman con esta información
      const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Galfield", 2, "Sony")
      expect(andrewGarfield.name).toBe("Spiderman Sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe(31);
      expect(andrewGarfield.studio).toBe("Sony");
      
    });
  })