import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css'
import Formulas from './pages/Formulas';
import  PICS  from './pages/PICS';
import PICM from './pages/PICM';
import PFC  from './pages/PFC';
import PFCM from './pages/PFCM';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>

          <IonSplitPane contentId="main">
          <Menu  />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Inbox" />
            </Route>
            <Route path="/page/Formulas" exact={true}>
              <Formulas />
            </Route>
            <Route path="/page/PICS" exact={true}>
              <PICS />
            </Route>
            <Route path="/page/PICM" exact={true}>
              <PICM />
            </Route>
            <Route path="/page/PFC" exact={true}>
              <PFC />
            </Route>
            <Route path="/page/PFCM" exact={true}>
              <PFCM />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
        
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
