'use strict';
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(value) {
    if(value >= 0 && typeof(value) === 'number'){
        presupuesto = value;
        return presupuesto
    }
    else{
        console.log('Ha ocurrido un error')
        return -1;
    }
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    this.descripcion = descripcion;

    if(!isNaN(Date.parse(fecha)) && fecha){
        this.fecha = Date.parse(fecha)
    }
    else{
        this.fecha = Date.now();
    }

    if(valor >= 0 && typeof(valor) === 'number'){
        this.valor = valor
    }
    else{
        this.valor = 0;
    }

    this.mostrarGasto = function(){
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`
    }

    this.actualizarDescripcion = function(descripcion){
        this.descripcion = descripcion
    }

    this.actualizarValor = function(valor){
        if(valor >= 0 && typeof(valor) === 'number'){
            this.valor = valor;
        }
    }

    this.etiquetas = [];

    this.anyadirEtiquetas = function(...nuevasEtiquetas){
        for(let etiqueta of nuevasEtiquetas){
            if(!this.etiquetas.includes(etiqueta)){
                this.etiquetas.push(etiqueta)
            }
        }
    }
    
    if(etiquetas.length > 0){
        this.anyadirEtiquetas(...etiquetas)
    }

    this.mostrarGastoCompleto = function(){
        let texto = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\n`;
        texto += `Fecha: ${new Date(this.fecha).toLocaleString()}\n`;
        texto += `Etiquetas:\n`;

        for(let etiqueta of this.etiquetas){
            texto += `- ${etiqueta}\n`;
        }
        return texto;
    }

    this.actualizarFecha = function(fechaNueva){
        if(fechaNueva && !isNaN(Date.parse(fechaNueva))){
            this.fecha = Date.parse(fechaNueva)
        }
    }

    this.borrarEtiquetas = function(...etiquetas){
        for(let i = this.etiquetas.length - 1; i >= 0; i--){
            if(etiquetas.includes(this.etiquetas[i])){
                this.etiquetas.splice(i, 1)
            }
        }
    }
}

function listarGastos(){
    return gastos;
}

function anyadirGasto(){

}

function borrarGasto(){

}

function calcularTotalGastos(){

}

function calcularBalance(){

}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}
