import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
        source={require('@/assets/images/picpay.png')}
        style={styles.headerImage}
      />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Serviços:</ThemedText>
      </ThemedView>
      <ThemedText>Seu saldo: R$279,00

      </ThemedText>
      <Collapsible title=" Shopping.">
        <ThemedText>
         Use suas milhas para os beneficios do shopping do PicPay!{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
        </ThemedText>
        <ExternalLink href="https://picpay.com/picpay-shop">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Empréstimos:">
        <ThemedText>
          Você pode fazer o empréstimo de até R$10.000,00{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> Fale com um de nossos colaboradores em caso dúvida ou com a IAra!
        </ThemedText>
      </Collapsible>
      <Collapsible title="Investimentos">
        <ThemedText>
          Existe vários tipos de investimento, descubra qual é seu melhor perfil. <ThemedText
           type="defaultSemiBold"></ThemedText>{' '}
         
          <ThemedText type="defaultSemiBold">Saldo disponível para invertir: R$279,00</ThemedText> 
        </ThemedText>
        <Image source={require('@/assets/images/moeda.png')} style={{ alignSelf: 'center' }} />
        
      </Collapsible>
      <Collapsible title="Central de ajuda">
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://picpay.com/canais-de-atendimento">
          <ThemedText type="link">Clique aqui!</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
         
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
           <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
        </ThemedText>
       
        
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    height: 260,
    width: 430,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
