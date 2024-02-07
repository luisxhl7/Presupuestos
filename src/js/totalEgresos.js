import { egresos } from "./egresos"

export const totalEgresos = () => {
    let totalEgreso = 0
    for (const egreso of egresos) {
        totalEgreso += egreso._valor
    }
    return totalEgreso
}
