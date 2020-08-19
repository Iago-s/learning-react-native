import React, { useState } from 'react';
import { View, ScrollView, TextInput, Text, } from 'react-native';

import styles from './styles';

const Portfolio = ({ route, navigation }) => {
  const [cash, setCash] = useState('100');
  const [patrimony, setPatrimony] = useState('100');

  const { portfolioName } = route.params.value;
  const stocks = route.params.value.actives.stocks;
  const fiis = route.params.value.actives.fiis;
  const rf = route.params.value.actives.rf;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.walletContainer}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Patrimônio</Text>
          <TextInput
            editable={false}
            value={patrimony}
            style={styles.textIputHeader}
          />
          <Text style={styles.textHeader}>Caixa</Text>
          <TextInput
            style={styles.textIputHeader}
            value={cash}
            onChangeText={value => setCash(value)}
          />
        </View>
        <View style={styles.titlesContainer}>
          <Text style={styles.titlesText}>NOME</Text>
          <Text style={styles.titlesText}>PREÇO</Text>
          <Text style={styles.titlesText}>QTD</Text>
          <Text style={styles.titlesText}>PTM</Text>
          <Text style={styles.titlesText}>OBJ</Text>
          <Text style={styles.titlesText}>%</Text>
        </View>  
        {
          stocks.stocksInPortfolio.map((value, index) => {
            return (
              <View style={styles.stocksContainer} key={index}>
                <TextInput
                  placeholderTextColor="white"
                  value={value.name}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.price}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.amount}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.price * value.amount + ''}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.percentageGoal}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.currentPercentage}
                  style={styles.input}
                />
              </View>
            );
          })
        }
        {
          fiis.fiisInPortfolio.map((value, index) => {
            return (
              <View style={styles.stocksContainer} key={index}>
                <TextInput
                  placeholderTextColor="white"
                  value={value.name}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.price}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.amount}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.price * value.amount + ''}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.percentageGoal}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.currentPercentage}
                  style={styles.input}
                />
              </View>
            );
          })
        }
        {
          rf.rfInPortfolio.map((value, index) => {
            return (
              <View style={styles.stocksContainer} key={index}>
                <TextInput
                  placeholderTextColor="white"
                  value={value.name}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.price}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value=""
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.price}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.percentageGoal}
                  style={styles.input}
                />
                <TextInput
                  placeholderTextColor="white"
                  value={value.currentPercentage}
                  style={styles.input}
                />
              </View>
            );
          })
        }
        
      </ScrollView>
    </View>
  );
}

export default Portfolio;