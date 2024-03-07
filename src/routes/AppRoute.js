import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Settings } from "../componentes";

const Tab = createBottomTabNavigator();

const AppRoute = () => {
    return (
        <NavigationContainer>
            <TabNavigator>
                <Tab.Screen>
                    name="Home"
                    component={Home}
                </Tab.Screen>
                <Tab.Screen>
                    name="Settings"
                    component={Settings}
                </Tab.Screen>
            </TabNavigator>
        </NavigationContainer>
    );
}