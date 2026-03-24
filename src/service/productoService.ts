import { db } from "../firebaseConfig";
import { collection, addDoc, query, orderBy, limit, onSnapshot, doc,updateDoc, deleteDoc } from "firebase/firestore";

export interface Producto {
    id?:string;
    nombre: string;
    descripcion?: string;
    categoria: string;
    cantidad: number;
    precio: number;
    codigo: string
    fechaCreacion?: any;
}

// Mostrar productos en tiempo real
export const escucharProductos = (callback: (Productos: Producto[]) => void) => {

    // Consulta filtrada
    const q = query(
        collection(db, 'productos'),
        orderBy('fechaCreacion', 'desc'),
        limit(3)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        const docs: Producto[] = [];

        QuerySnapshot.forEach((doc) => {
            docs.push({
                id: doc.id,
                ...doc.data(),
            } as Producto);
        })

        callback(docs); // Documentos ya listos
    });
    
    return unsubscribe;
}