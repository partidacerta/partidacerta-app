import { NativeModules, Platform } from 'react-native';
import Reactotron from 'reactotron-react-native';

const scriptURL = NativeModules.SourceCode.scriptURL;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

Reactotron.configure({
  host: Platform.OS === 'ios' ? scriptHostname : 'localhost',
})
  .useReactNative()
  .connect();

Reactotron.clear();

export default Reactotron;
