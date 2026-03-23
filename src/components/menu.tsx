import { IonContent, IonIcon, IonItem, IonMenu, IonMenuToggle, IonHeader, IonToolbar } from '@ionic/react';
import { gridOutline, listOutline, addCircleOutline, settingsOutline, logOutOutline, chevronForwardOutline, cubeOutline, personCircleOutline, closeOutline } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';

const Menu: React.FC = () => {

    const location = useLocation(); // Sirve para marcar cual item del menu está activo
    
    const menuItems = [
        {title: 'Inicio', url: '/', icon: gridOutline},
        {title: 'Producto', url: '/', icon: listOutline},
        {title: 'Agregar Producto', url: '/home', icon: addCircleOutline},
        {title: 'Configuración', url: '/', icon: settingsOutline},
    ];

    return(
        <IonMenu contentId='main-content' type='overlay' style={{'--width':'280px'}}>
            <IonContent>
                <div className='flex flex-col h-full'>
                    <div>
                        <div>
                            <IonIcon icon={cubeOutline} className='text-xl'/>
                            <span className='text-xl font-bold'>Tienda</span>
                        </div>

                        <IonMenuToggle>
                            <IonIcon icon={closeOutline} className='text-2xl text-gray-400'/>
                        </IonMenuToggle>
                    </div>
                </div>
            </IonContent>
        </IonMenu>
    )
}

export default Menu;