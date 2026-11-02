import * as gp from './gestionPresupuesto'
import * as gpw from './gestionPresupuestoWeb'

gp.actualizarPresupuesto(1500)

gpw.mostrarDatoEnId('presupuesto', gp.mostrarPresupuesto())
