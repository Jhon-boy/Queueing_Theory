import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const PFCM: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>MODELO FINITO CON MULTIPLES SERVIDORES</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
     
        <div>Hola</div>
      </IonContent>
    </IonPage>
  );
};

export default PFCM;
