import {View, Text, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import CodePush from 'react-native-code-push';
import {Button} from 'react-native';

// let codePushOptions = {
//   deploymentKey: 'SE4MKM2UivRy7_zSZ_Q7CNLyRkN2X6kwxJsEt',
//   checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
//   installMode: CodePush.InstallMode.IMMEDIATE,
// };

let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.IMMEDIATE,
};

let App = () => {
  const [colour, setColour] = useState('green');
  // useEffect(() => {
  //   CodePush.sync(
  //     {installMode: CodePush.InstallMode.IMMEDIATE},
  //     // syncWithcodePush(),
  //     // DownloadProgress(),
  //   );
  // }, []);
  // const syncWithcodePush = status => {
  //   console.log('Status123', status);
  // };
  // const DownloadProgress = downloadStatus => {
  //   console.log('downloadStatus123', downloadStatus);
  // };
  const btnPress = btn => {
    if (btn === 1) {
      setColour('red');
    } else if (btn === 2) {
      setColour('blue');
    } else {
      setColour('grey');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: colour, justifyContent: 'center'}}>
      <Text style={{alignSelf: 'center', fontSize: 50, fontWeight: 'bold'}}>
        Hello World !!!
      </Text>
      <Button title="Press me 1" onPress={() => btnPress(1)} />
      <Button title="Press me 2" onPress={() => btnPress(2)} />
      <Button title="Press me 2" onPress={() => btnPress(3)} />
    </View>
  );
};

App = CodePush(codePushOptions)(App);

export default App;
