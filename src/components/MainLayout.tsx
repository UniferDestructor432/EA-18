import { IonPage,IonHeader,IonToolbar,IonTitle,IonButtons,IonMenuButton,IonButton,IonIcon,IonContent } from '@ionic/react';
import Menu from './menu';
import { notificationsOutline, searchOutline } from 'ionicons/icons';

interface MainLayoutProps {
    title: string;
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({title, children}) => {
    return(
        <>
        <Menu/>
        <IonPage id='main-content'>
            <IonHeader className='ion-no-border'>
                <IonToolbar style={{'--background': '#0f1115', '--color': 'white'} as React.CSSProperties}>
                    <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>

                    <IonTitle className='font-bold'>{title}</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton>
                            <IonIcon icon={searchOutline}/>
                        </IonButton>

                        <IonButton>
                            <IonIcon icon={notificationsOutline}/>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>{children}</IonContent>
        </IonPage>
        </>
    )
}

export default MainLayout;