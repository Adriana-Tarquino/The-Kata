import verificarCadena from "./cadena"

describe("KATA", () => {
    it("deberia verficar si la cadena esta vacia", () => {
      const respuesta = verificarCadena(""); 
      expect(respuesta).toEqual("");
    });
    it("Deberia verficar si el primer parentesis es el correcto", () => {
        const respuesta = verificarCadena("["); 
        expect(respuesta).toEqual("OK");
    });
    it("Deberia verficar si parentesis de abierto y cerrado es el correcto", () => {
        const respuesta = verificarCadena("[]"); 
        expect(respuesta).toEqual("OK");
    });
});

