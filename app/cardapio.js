import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';

export default function Cardapio() {
  const [pedidoRealizado, setPedidoRealizado] = useState(false);

  const itens = [
  {
      id: 1,
      nome: 'Hambúrgao',
      desc: 'Pão brioche, carne 150g e queijo cheddar.',
      preco: 'R$ 22,00',
      img: require('../assets/Hamburgao.webp'),
    },
    {
      id: 2,
      nome: 'Combo Coxinha + Suco',
      desc: 'A clássica coxinha da FIAP com suco natural.',
      preco: 'R$ 12,00',
      img: require('../assets/coxinha.jpg'),
    },
       {
      id: 3,
      nome: 'Croissant de Chocolate',
      desc: 'Venha Comer o melhor Croissant de Chocolate.',
      preco: 'R$ 11,00',
      img: require('../assets/croissant.jpg'),
    },
     {
      id: 4,
      nome: 'Coca-Cola 356ml',
      desc: 'Venha Tomar a melhor coca-cola que voce já viu.',
      preco: 'R$ 9,00',
      img: require('../assets/coca.jpg'),
    },
     {
      id: 5,
      nome: 'Pao de Queijo',
      desc: 'Pao de Queijo direto de minas apenas na FIAP.',
      preco: 'R$ 9,00',
      img: require('../assets/pao.jpg'),
    },
    {
      id: 6,
      nome: 'Café Quentinho',
      desc: 'VEnha tomar nosso café cuado na hora apenas na FIAP.',
      preco: 'R$ 7,00',
      img: require('../assets/cafe.jpg'),
    },
];

  const fazerReserva = (nome) => {
    Alert.alert("Reserva de Item", `Deseja reservar um(a) ${nome}?`, [
      { text: "Cancelar" },
      { text: "Confirmar", onPress: () => setPedidoRealizado(true) }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sessao}>Mais Pedidos 🔥</Text>
      
      {itens.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.img }} style={styles.img} />
          <View style={styles.info}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => fazerReserva(item.nome)}>
              <Text style={styles.btnTxt}>Reservar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {pedidoRealizado && (
        <View style={styles.toast}>
          <Text style={styles.toastTxt}>✅ Item reservado! Retire no balcão.</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  sessao: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#1A1A1A' },
  card: { flexDirection: 'row', backgroundColor: '#F9F9F9', borderRadius: 20, marginBottom: 15, overflow: 'hidden', borderWidth: 1, borderColor: '#eee' },
  img: { width: 110, height: 110 },
  info: { flex: 1, padding: 12, justifyContent: 'space-between' },
  nome: { fontSize: 16, fontWeight: 'bold' },
  preco: { fontSize: 18, color: '#E83D84', fontWeight: '800' },
  btn: { backgroundColor: '#1A1A1A', padding: 6, borderRadius: 8, alignItems: 'center' },
  btnTxt: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  toast: { backgroundColor: '#E8F5E9', padding: 15, borderRadius: 12, marginTop: 10, marginBottom: 30 }
});