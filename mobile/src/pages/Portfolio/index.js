import React, { useState, useEffect } from 'react';
import { View, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Portfolio = ({ navigation }) => {
  const [cash, setCash] = useState('0');
  const [patrimony, setPatrimony] = useState('0');

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [patrimonyHere, setPatrimonyHere] = useState('0');
  const [percentageGoal, setPercentageGoal] = useState('');
  const [currentPercentage, setCurrentPercentage] = useState('');

  const [actives, setActives] = useState([]);

  useEffect(() => {
    setPatrimony(eval(`${cash} + ${patrimonyHere}`) + '');

    setCurrentPercentage(eval(`(${patrimonyHere} * 100) / ${patrimony}`).toFixed(2) + '');
  }, [cash, patrimonyHere, amount]);

  useEffect(() => {

  }, [actives.currentPercentage]);

  const handleActive = () => {
    if (
      name === ''
      || amount === ''
      || percentageGoal === ''
    ) {
      return alert('Preencha todos os campos.');
    }

    setActives([...actives, {
      name,
      price,
      amount,
      patrimony: patrimonyHere,
      percentageGoal,
      currentPercentage,
    }]);

    setName('');
    setPrice('');
    setAmount('');
    setPatrimonyHere('0');
    setPercentageGoal('');
    setCurrentPercentage('');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.walletContainer}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Patrimônio</Text>
          <TextInput
            style={styles.textIputHeader}
            editable={false}
            value={patrimony}
          />
          <Text style={styles.textHeader}>Caixa</Text>
          <TextInput
            style={styles.textIputHeader}
            value={cash}
            onChangeText={value => {
              setCash(value);
            }}
            keyboardType="numeric"
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
        <View style={styles.stocksContainer}>
          <TextInput
            style={styles.inputEditable}
            placeholderTextColor="#F5F5F5"

            autoCorrect={false}
            autoCompleteType="off"
            autoCapitalize="characters"

            maxLength={6}
            value={name}
            onChangeText={value => {
              setName(value);

              if(value === 'ABEV3') {
                setPrice('15.99');
              }
            }}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#F5F5F5"
            keyboardType="numeric"

            editable={false}
            value={price}
          />
          <TextInput
            style={styles.inputEditable}
            placeholderTextColor="#F5F5F5"
            keyboardType="numeric"

            value={amount}
            onChangeText={value => {
              setAmount(value);

              if(price !== '' && value !== '') {
                setPatrimonyHere(eval(`${value} * ${price}`) + '');
                setPatrimony(eval(`${cash} + ${patrimonyHere}`) + '');
              }
            }}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#F5F5F5"
            keyboardType="numeric"

            editable={false}
            value={patrimonyHere}
          />
          <TextInput
            style={styles.inputEditable}
            placeholderTextColor="#F5F5F5"
            keyboardType="numeric"

            value={percentageGoal}
            onChangeText={value => {
              setPercentageGoal(value);
            }}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#F5F5F5"
            keyboardType="numeric"

            editable={false}
            value={currentPercentage}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleActive}
        >
          <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>

        {
          actives.map((value, index) => {
            return(
              <View key={index} style={styles.stocksContainer}>
                <TextInput 
                  style={styles.input}
                  defaultValue={value.name}

                  onChangeText={(name) => value.name = name}
                />
                <TextInput 
                  style={styles.input}
                  value={value.price}
                  editable={false}
                />
                <TextInput 
                  style={styles.input}
                  defaultValue={value.amount}

                  onChangeText={(amount) => value.name = amount}
                />
                <TextInput 
                  style={styles.input}
                  value={value.patrimony}
                  editable={false}
                />
                <TextInput 
                  style={styles.input}
                  defaultValue={value.percentageGoal}

                  onChangeText={(percentageGoal) => value.name = percentageGoal}
                />
                <TextInput 
                  style={styles.input}
                  value={value.currentPercentage}
                  editable={false}
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