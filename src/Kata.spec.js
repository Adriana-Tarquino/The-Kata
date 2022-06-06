describe("KATA", () => {
    it("deberia verficar si la cadena esta vacia", () => {
      const respuesta = verificarCadena(""); 
      expect(respuesta).toEqual("");
    });
});

function verificarCadena(cadena) {
    return cadena;
}