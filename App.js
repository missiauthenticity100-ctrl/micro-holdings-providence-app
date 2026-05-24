import React from 'react';
import { View, Button, Text, TextInput, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [amount, setAmount] = React.useState('');

  const handleBuy = () => {
    if (amount) {
      Alert.alert("✅ Purchase Started", `Buying with ${amount} Rakz Tokens`);
    } else {
      Alert.alert("Error", "Please enter an amount");
    }
  };

  const handleSell = () => {
    if (amount) {
      Alert.alert("✅ Sale Started", `Selling for ${amount} Stakz Tokens`);
    } else {
      Alert.alert("Error", "Please enter an amount");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BTC-Pro Buy/Sell</Text>
      
      <TextInput
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Buy with Rakz" onPress={handleBuy} />
      <Button title="Sell for Stakz" onPress={handleSell} />

      <Text style={styles.info}>Connected to GrokDEX</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f0f0', justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  input: { borderWidth: 1, padding: 15, marginVertical: 15, fontSize: 18, borderRadius: 10 },
  info: { marginTop: 40, textAlign: 'center', fontSize: 16, color: '#555' },
});
