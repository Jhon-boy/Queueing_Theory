import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const PICM: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>MODELO INFINITO CON MULTIPLES SERVIDORES</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
     
        <div>Hola</div>
      </IonContent>
    </IonPage>
  );
};

export default PICM;