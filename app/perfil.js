import { View, Text, StyleSheet, Image } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      {/* Cartão de Saldo Premium */}
      <View style={styles.cartao}>
        <Text style={styles.cartaoLabel}>Saldo na Cantina</Text>
        <Text style={styles.cartaoValor}>R$ 45,90</Text>
        <View style={styles.cartaoFooter}>
          <Text style={styles.cartaoUser}>JOÃO D. ALUNO</Text>
          <Text style={styles.cartaoChip}>FIAP Card</Text>
        </View>
      </View>

      <View style={styles.listaInfo}>
        <View style={styles.itemInfo}>
          <Text style={styles.label}>RM</Text>
          <Text style={styles.valor}>99999</Text>
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.label}>Curso</Text>
          <Text style={styles.valor}>Análise e Desenv. de Sistemas</Text>
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.label}>Unidade</Text>
          <Text style={styles.valor}>Campus Paulista</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 25, alignItems: 'center' },
  cartao: { width: '100%', height: 200, backgroundColor: '#E83D84', borderRadius: 25, padding: 25, justifyContent: 'space-between', elevation: 12, shadowColor: '#E83D84', shadowOpacity: 0.4, shadowRadius: 15, marginTop: 40 },
  cartaoLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: '600' },
  cartaoValor: { color: '#fff', fontSize: 38, fontWeight: 'bold' },
  cartaoFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  cartaoUser: { color: '#fff', fontSize: 14, letterSpacing: 1 },
  cartaoChip: { color: '#fff', fontWeight: 'bold', fontSize: 12, opacity: 0.5 },
  listaInfo: { width: '100%', marginTop: 40 },
  itemInfo: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  label: { fontSize: 12, color: '#999', textTransform: 'uppercase', marginBottom: 4 },
  valor: { fontSize: 16, color: '#333', fontWeight: '500' }
});