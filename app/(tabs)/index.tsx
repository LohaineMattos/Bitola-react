import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Bitola() {
  const [corrente, setCorrente] = useState('');
  const [distancia, setDistancia] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const i = parseFloat(corrente);
    const d = parseFloat(distancia);

    if (!i || !d) {
      setResultado('Preencha os campos corretamente.');
      return;
    }

    const bit110 = (2 * i * d) / 294.64;
    const bit220 = (2 * i * d) / 510.4;

    setResultado(`110V: ${bit110.toFixed(2)} mm²\n220V: ${bit220.toFixed(2)} mm²`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bitola Elétrica</Text>
      <TextInput placeholder="Corrente (A)" keyboardType="numeric" value={corrente} onChangeText={setCorrente} style={styles.input} />
      <TextInput placeholder="Distância (m)" keyboardType="numeric" value={distancia} onChangeText={setDistancia} style={styles.input} />
      <Button title="Calcular" onPress={calcular} />
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a2a43ff',
    justifyContent: 'center',
  },
  innerContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F9F7F7',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffffff',
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#06222bff',
  },
  button: {
    backgroundColor: '#06222bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#F9F7F7',
    fontSize: 18,
    fontWeight: '600',
  },
  resultado: {
    marginTop: 25,
    fontSize: 18,
    color: '#F9F7F7',
    textAlign: 'center',
  },
});