import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


// Custom screens
import ShoppingListsScreen from '../Screens/ShoppingLists';
import ItemTrackingScreen from '../Screens/ItemTracking';

// Icon libaries
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

/* 
SearchStack:
- Creates a stack which can be traversered via props when active
- When this stack is in use a bottom tab navigator is create with the createMaterialBottomTabNavigator method
Route Config:
- Screens are defined
- Each screen has an asssociated icon, for example barcode for barcode search
Tab config:
- An inital tab is specified
- BarStyle sets the backgroundColour which is currently blue

*/

export default TabStack = createMaterialBottomTabNavigator(
  {
    ShoppingLists: {
      screen: ShoppingListsScreen,
      navigationOptions: {
        tabBarLabel: "Shopping Lists",
        tabBarIcon: () => <MaterialIcons name="clipboard-text-outline" size={25} color="white"/>
      }
    },
    TrackItem: {
      screen: ItemTrackingScreen,
      navigationOptions: {
        tabBarLabel: "Find items",
        tabBarIcon: () => <MaterialIcons name="location-on" size={25} color="white"/>
      }
    }
  },
  {
	initialRouteName: "ShoppingLists",
    barStyle: { backgroundColor: '#0277bd' }
  }
);
