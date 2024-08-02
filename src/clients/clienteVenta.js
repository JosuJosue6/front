import axios from "axios";


//Metodos 
const guardar = (ventaBody)=> {
    const data = axios.post(`http://localhost:8082/API/v1.0/Facturacion/ventas`,ventaBody).then(r=>r.data);
    return data;
}



//Fachadas

export const guardarFachada = async (ventaBody)=>{
    return await guardar(ventaBody);
}