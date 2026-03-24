import React, { useEffect, useState } from 'react';
import { IonGrid, IonRow, IonCol, IonIcon, IonSkeletonText, IonText } from '@ionic/react';
import { addOutline, cubeOutline, chevronForwardOutline, createOutline } from 'ionicons/icons';
import MainLayout from '../components/MainLayout';
import { useHistory } from 'react-router-dom';
import { Producto, escucharProductos } from '../service/productoService';

const Inicio: React.FC = () => {
    const [producto, setProducto] = useState<Producto[]>([]);
    const history = useHistory();

    useEffect(() => {
        const unsubscribe = escucharProductos((data) => {
            setProducto(data)
        });
        return () => unsubscribe();
    }, [])

    return(
        <MainLayout title='Inicio'>
            <div className='p-4 space-y-6 max-w-lg mx-auto'>
                <div>
                    <h2 className='text-lg font-semibold mb-4'>Acciones</h2>
                    <IonGrid className='ion-no-padding'>
                        {/* BOTON DE PRODUCTOS */}
                        <IonRow>
                            <IonCol size='6' className='ion-no-padding pr-2'>
                                <div
                                    className='bg-[#65d380] p-6 rounded-3xl flex flex-col items-center justify-center gap-2'
                                    onClick={() => history.push('/home')}
                                >
                                    <IonIcon icon={addOutline} className='text-black text-2xl'/>
                                    <span className='text-black font-bold text-sn text-center'>Agregar producto</span>
                                </div>
                            </IonCol>

                            {/* BOTON DE INVENTARIO */}
                            <IonCol size='6' className='ion-no-padding pr-2'>
                                <div
                                    className='bg-[#181A1F] p-6 rounded-3xl flex flex-col items-center justify-center gap-2'
                                    onClick={() => history.push('/home')}
                                >
                                    <IonIcon icon={cubeOutline} className='text-white text-2xl'/>
                                    <span className='text-white font-bold text-sn text-center'>Inventario</span>
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
                
                {/* PRODUCTOS RECIENTES */}
                <div>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-lg font-semibold'>Productos recientes</h2>
                        <div
                            onClick={() => history.push('/productos')}
                        >
                        Ver todo
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Inicio;