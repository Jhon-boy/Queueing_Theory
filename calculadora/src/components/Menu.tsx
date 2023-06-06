import React from 'react';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { accessibilityOutline, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';


interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/page/Formulas',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'PICS',
    url: '/page/PICS',
    iosIcon: accessibilityOutline,
    mdIcon: accessibilityOutline
  },
  {
    title: 'PICM',
    url: '/page/PICM',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: ' PFCS',
    url: '/page/PFC',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'PFCM ',
    url: '/page/PFCM',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Spam',
    url: '/page/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  }
];

const labels = ['Family', 'Friends'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (

    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">

          <IonListHeader>Calculadora</IonListHeader>
          <IonNote>By John Cuvi</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Otras opciones</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
