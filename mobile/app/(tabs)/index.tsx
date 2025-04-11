import {Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { green, red } from 'react-native-reanimated/lib/typescript/Colors';



export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/picpay.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá Dara!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Seu saldo é de R$478,90</ThemedText>
        <ThemedText style={styles.buttons}>
         
           <Button color={'green'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Pix" 
/>

<Button color={'green'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Transferências" 

/>

<Button color={'green'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Cartões" 

/>


           <ThemedText type="defaultSemiBold"></ThemedText>  
  
    
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Agência: **12  Conta: ***07-8</ThemedText>
        <ThemedText>
          Em caso de dúvida fale com a IAra! Nossa inteligência artificial!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {/* <ThemedText type="subtitle">Para seu dia</ThemedText> */}
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">PARA SEU DIA:</ThemedText> Limites de créditos,{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> Comprovantes,{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>recargas, e mais!{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>.
        </ThemedText> <br />
        <ThemedText>
          <center>
            
          </center>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
    
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 260,
    width: 430,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  buttons:{
    display: 'flex',
    gap:10
  }
});
