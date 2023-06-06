import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const PICS: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>MODELO INFINITO CON UN SERVIDOR</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <div>BEBE </div>
        <div>Hola</div>
      </IonContent>
    </IonPage>
  );
};

export default PICS;
