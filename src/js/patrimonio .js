
export class Patrimonio{
    
    eliminarEgreso = (id) => {
        try {
            const movementData = JSON.parse(localStorage.getItem('movementData')) || [];

            let indiceEliminar = movementData.findIndex(movementData => movementData.id === id)
            movementData.splice(indiceEliminar, 1)
            localStorage.setItem('movementData', JSON.stringify(movementData))
            return movementData
            
        } catch (error) {
            console.log(error);
        }
    }







    getSaldoDisponible = () => {
        try {
            const movementData = JSON.parse(localStorage.getItem('movementData')) || 0;

            if (movementData) {
                const filterIngresos = movementData?.filter(element => element.tipo === 'ingreso')
                const filterEgresos = movementData?.filter(element => element.tipo === 'egreso')
    
                let totalEgresos = 0
                let totalIngresos = 0
                let total = 0
    
                filterEgresos?.forEach(item => {
                    totalEgresos += item?.valor;
                });

                filterIngresos?.forEach(item => {
                    totalIngresos += item?.valor;
                });

                total = totalIngresos - totalEgresos

                return total
            }else{
                return movementData;
            }
    
        } catch (error) {
            console.log(error);
        }
    }

    agregarDato = async(descripcion, valor, tipo) => {
        try {
            const movementData = JSON.parse(localStorage.getItem('movementData')) || [];
            const id = movementData.length + 1
            movementData.push({ id, descripcion, valor: Number(valor), tipo});
    
            localStorage.setItem('movementData', JSON.stringify(movementData));
    
            return movementData;
        } catch (error) {
            console.log(error);
        }
    }
    
    getIngresos = () => {
        const movementData = JSON.parse(localStorage.getItem('movementData')) || []
        const esto = movementData.filter(element => element.tipo === 'ingreso')
        return esto
    }
    
    getEgresos = () => {
        const movementData = JSON.parse(localStorage.getItem('movementData')) || []
        const esto = movementData.filter(element => element.tipo === 'egreso')
        return esto
    }

    totalIngresos = () => {
        try {
            const movementData = JSON.parse(localStorage.getItem('movementData')) || 0;

            if (movementData) {
                const filterEgresos = movementData?.filter(element => element.tipo === 'ingreso')
    
                let total = 0
    
                filterEgresos?.forEach(item => {
                    total += item?.valor;
                });

                return total
            }else{
                return movementData;
            }
    
        } catch (error) {
            console.log(error);
        }
    }
    totalEgresos = () => {
        try {
            const movementData = JSON.parse(localStorage.getItem('movementData')) || 0;

            if (movementData) {
                const filterEgresos = movementData?.filter(element => element.tipo === 'egreso')
    
                let total = 0
    
                filterEgresos?.forEach(item => {
                    total += item?.valor;
                });

                return total
            }else{
                return movementData;
            }
    
        } catch (error) {
            console.log(error);
        }
    }
}
