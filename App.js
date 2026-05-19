import React from 'react';
import { View, Button, Text, TextInput, Alert } from 'react-native';

function App() {
  const [amount, setAmount] = React.useState('');

  const buyWithRakz = () => {
    Alert.alert("Success", `Buying BTC-P with ${amount} Rakz Tokens`);
  };

  const sellForStakz = () => {
    Alert.alert("Success", `Selling BTC-P for ${amount} Stakz Tokens`);
  };

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
        BTC-Pro Buy/Sell App
      </Text>
      <TextInput 
        placeholder="Amount of BTC-Pro"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginVertical: 15, fontSize: 18 }}
      />
      <Button title="Buy with Rakz Token" onPress={buyWithRakz} />
      <Button title="Sell for Stakz Token" onPress={sellForStakz} />
      <Text style={{ marginTop: 20, textAlign: 'center' }}>
        Connected to Grokchain Oracle + GrokDEX
      </Text>
    </View>
  );
}

export default App;
