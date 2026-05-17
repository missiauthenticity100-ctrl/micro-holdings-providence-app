import React from 'react';
import { View, Button, Text, TextInput } from 'react-native';

function ExchangeApp() {
  const [amount, setAmount] = React.useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>GrokDEX Exchange</Text>
      <TextInput 
        placeholder="Amount of BTC-Pro"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Buy BTC-P with Rakz" onPress={() => console.log("Swapping to BTC-P...")} />
      <Button title="Sell BTC-P for Stakz" onPress={() => console.log("Swapping to Stakz...")} />
      <Text>Connected to Grokchain Oracle for live prices</Text>
    </View>
  );
}

export default ExchangeApp;
