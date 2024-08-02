import axios from 'axios';

const guardar = async (productoBody) => {
    const data = axios.post(`http://localhost:8082/API/v1.0/Facturacion/productos`, productoBody).then(r=>r.data);
    return data;
}

const buscar = async (barras) => {
    const data = axios.get(`http://localhost:8082/API/v1.0/Facturacion/productos/${barras}`).then(r=>r.data);
    return data;
}

//Fachada 

export const guardarFachada= async(productoBody)=>{
    return await guardar(productoBody);
}

export const buscarFachada= async(barras)=>{
    return await buscar(barras);
}
