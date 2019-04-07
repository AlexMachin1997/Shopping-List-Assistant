import {createStackNavigator} from 'react-navigation';

//Import screens here
import TabStack from './TabStack';
import ShoppingListScreen from '../Screens/ShoppingList';
import SettingsScreen from '../Screens/Settings';

export default RootStack = createStackNavigator(
    {
        Tabs: TabStack,
        ShoppingList: ShoppingListScreen,
        Settings: SettingsScreen,
    },
    {
        initialRouteName: 'Tabs'
    }
);
