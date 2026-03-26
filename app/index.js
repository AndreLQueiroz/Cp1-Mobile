import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/fundo.webp')}
      style={styles.background}
      resizeMode="stretch"
    >
      {/* camada escura por cima */}
      <View style={styles.overlay}>
        <Text style={styles.titulo}> Cantina FIAP</Text>
        <Text style={styles.subtitulo}>VENHA COMER NA MELHOR CANTINA DO MUNDO, TEMOS VARIAS VARIEDADES!</Text>
        
        <TouchableOpacity 
          style={styles.botao} 
          onPress={() => router.push('/cardapio')}
        >
          <Text style={styles.botaoTexto}>Ver Cardápio</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // 🔥 fundo escuro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff' // branco pra contrastar
  },

  subtitulo: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 30,
    textAlign: 'center'
  },

  botao: {
    backgroundColor: '#E83D84',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center'
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
});