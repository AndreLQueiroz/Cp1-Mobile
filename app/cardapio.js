import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';

export default function Cardapio() {
  const [selecionado, setSelecionado] = useState(null);

  const lanches = [
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

  const confirmarReserva = (nome) => {
    setSelecionado(nome);
    Alert.alert('Reserva Confirmada', `Seu ${nome} estará pronto em 10 minutos!`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.saudacao}>O que vamos comer hoje?</Text>
        <Text style={styles.categoria}>Populares na FIAP</Text>
      </View>

      {lanches.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.img} style={styles.fotoLanche} resizeMode="cover" />

          <View style={styles.infoLanche}>
            <Text style={styles.nomeLanche}>{item.nome}</Text>
            <Text style={styles.descLanche}>{item.desc}</Text>

            <View style={styles.footerCard}>
              <Text style={styles.preco}>{item.preco}</Text>
              <TouchableOpacity
                style={styles.botaoAdd}
                onPress={() => confirmarReserva(item.nome)}
              >
                <Text style={styles.textoBotao}>Reservar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}

      {selecionado && (
        <View style={styles.bannerSucesso}>
          <Text style={styles.textoSucesso}>Último pedido: {selecionado}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: {
    padding: 25,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    backgroundColor: "#810AAB"
  },
  saudacao: { fontSize: 24, fontWeight: '800', color: '#1A1A1A' },
  categoria: {
    fontSize: 14,
    color: '#E83D84',
    fontWeight: 'bold',
    marginTop: 5,
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  fotoLanche: {
    width: '100%',
    height: 150,
  },
  infoLanche: { padding: 15 },
  nomeLanche: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  descLanche: { fontSize: 14, color: '#777', marginVertical: 5 },
  footerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  preco: { fontSize: 18, fontWeight: 'bold', color: '#27ae60' },
  botaoAdd: {
    backgroundColor: '#E83D84',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBotao: { color: '#fff', fontWeight: 'bold' },
  bannerSucesso: {
    margin: 20,
    padding: 15,
    backgroundColor: '#E8F5E9',
    borderRadius: 15,
    alignItems: 'center',
  },
  textoSucesso: { color: '#2E7D32', fontWeight: 'bold' },
 
});