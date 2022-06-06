function verificarCadena(cadena) {
    if(cadena.at(0) === '['){
        return "OK";
    }
    return cadena;
}
export default verificarCadena;