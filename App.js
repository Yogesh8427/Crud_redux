import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Routes from './src/Navigations/Routes';
import store from './src/Redux/store';
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    </Provider>
  );
}
