import { createStackNavigator } from 'react-navigation';
import Home from './src/Home';
import demoList from './src/demoList'

const getOptions = title => ({
  title,
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: 'white',
});

const scenes = {
  Home: {
    screen: Home,
    navigationOptions: getOptions('rn-demos'),
  }
};

demoList.map((component) => {
  const Module = component.module.default;
  scenes[component.title] = {
    screen: Module,
    navigationOptions: getOptions(component.title),
  };
})

const App = createStackNavigator(scenes);

export default App;
