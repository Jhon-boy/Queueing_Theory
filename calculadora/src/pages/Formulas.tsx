import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';

const Formulas: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Formulas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
     
        <div>Hola</div>
      </IonContent>
    </IonPage>
  );
};

export default Formulas;
