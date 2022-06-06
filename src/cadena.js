function verificarCadena(cadena) {
    var respuesta = cadena;
   for(var i=0; i<cadena.length; i++) {
    if(cadena[i] == '[' && cadena[i+1] == ']'){
        respuesta = "OK";
    }
    if(cadena[i] == '['){
        respuesta = "OK";
    }
   }
   return respuesta;
}
export default verificarCadena;