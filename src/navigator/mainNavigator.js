import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen29454Navigator from '../features/BlankScreen29454/navigator';
import BlankScreen19453Navigator from '../features/BlankScreen19453/navigator';
import BlankScreen39452Navigator from '../features/BlankScreen39452/navigator';
import BlankScreen29429Navigator from '../features/BlankScreen29429/navigator';
import BlankScreen19428Navigator from '../features/BlankScreen19428/navigator';
import BlankScreen39427Navigator from '../features/BlankScreen39427/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen29454: { screen: BlankScreen29454Navigator },
BlankScreen19453: { screen: BlankScreen19453Navigator },
BlankScreen39452: { screen: BlankScreen39452Navigator },
BlankScreen29429: { screen: BlankScreen29429Navigator },
BlankScreen19428: { screen: BlankScreen19428Navigator },
BlankScreen39427: { screen: BlankScreen39427Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
