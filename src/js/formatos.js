export const formatoMoneda = (valor) => {
    // return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
    return valor.toLocaleString('es-CO', {style: 'currency', currency: 'COP', minimumFractionDigits: 2});

}

export const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2});
}