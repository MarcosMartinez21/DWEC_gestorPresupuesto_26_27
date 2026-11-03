function mostrarDatoEnId(idElemento, valor){
    document.getElementById(idElemento).textContent = valor
}

function mostrarGastoWeb(idElemento, gasto){
    const nodoPadre = document.createElement("div")
    nodoPadre.className = "gasto"
    
    const nodoHijo1 = document.createElement("div")
    nodoHijo1.className = "gasto-descripcion"
    nodoHijo1.textContent = gasto.descripcion
    nodoPadre.append(nodoHijo1)

    const nodoHijo2 = document.createElement("div")
    nodoHijo2.className = "gasto-fecha"
    nodoHijo2.textContent = gasto.fecha
    nodoPadre.append(nodoHijo2)

    const nodoHijo3 = document.createElement("div")
    nodoHijo3.className = "gasto-valor"
    nodoHijo3.textContent = gasto.valor
    nodoPadre.append(nodoHijo3)

    const nodoHijo4 = document.createElement("div")
    nodoHijo4.className = "gasto-etiquetas"
    nodoPadre.append(nodoHijo4)

    for(let etiqueta of gasto.etiquetas){
        const nodoHijo4_1 = document.createElement("span")
        nodoHijo4_1.className = "gasto-etiquetas-etiqueta"
        nodoHijo4_1.textContent = etiqueta
        nodoHijo4.append(nodoHijo4_1)
    }
    const contenedor = document.getElementById(idElemento)
    if(contenedor){
        contenedor.append(nodoPadre)
    }
}

export{
    mostrarDatoEnId,
    mostrarGastoWeb
}