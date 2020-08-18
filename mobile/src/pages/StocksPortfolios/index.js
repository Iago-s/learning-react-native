import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';

import logo from '../../assets/logo.png';
import iconAdd from '../../assets/logo.png';

const StocksPortfolios = ({ navigation, route }) => {
  const portfolios = [{
    portfolioName: 'Previdenciaria',
    actives: {
      stocks: {
        percentageGoal: 50,
        stocksInPortfolio: [{
          name: 'ABEV3',
          price: 15.99,
          percentageGoal: 10,
          currentPercentage: 10,
        }, {
          name: 'EGIE3',
          price: 45.99,
          percentageGoal: 10,
          currentPercentage: 5,
        }, {
          name: 'WEGE3',
          price: 65.99,
          percentageGoal: 10,
          currentPercentage: 5,
        }, {
          name: 'RDL3',
          price: 100.00,
          percentageGoal: 10,
          currentPercentage: 15,
        }, {
          name: 'ITUB3',
          price: '25.99',
          percentageGoal: 10,
          currentPercentage: 10,
        },]
      },

      fiis: {
        percentageGoal: 30,
        fiisInPortfolio: [{
          name: 'KNRI11',
          price: 100.40,
          percentageGoal: 10,
          currentPercentage: 10,
        }, {
          name: 'HGLG11',
          price: 135.54,
          percentageGoal: 10,
          currentPercentage: 10,
        }, {
          name: 'HGBS11',
          price: 120.45,
          percentageGoal: 10,
          currentPercentage: 10,
        }, {
          name: 'XPLG11',
          price: 129.56,
          percentageGoal: 10,
          currentPercentage: 10,
        }, {
          name: 'VRTA11',
          price: 125.42,
          percentageGoal: 10,
          currentPercentage: 10,
        }]
      },

      rf: {
        percentageGoal: 20,
        rfInPortfolio: [{
          name: 'Poupança',
          price: 333.11,
          percentageGoal: 10,
          currentPercentage: 5,
        }, {
          name: 'Tesouro SELIC',
          price: 226.56,
          percentageGoal: 10,
          currentPercentage: 10
        }]
      },
    }
  }, {
    portfolioName: 'Previdenciaria',
    actives: {
      stocks: {
        percentageGoal: 50,
        stocksInPortfolio: [{
          name: 'ABEV3',
          price: 15.99,
          percentageGoal: 10,
          currentPercentage: 10,
        }, {
          name: 'EGIE3',
          price: 45.99,
          percentageGoal: 10,
          currentPercentage: 5,
        }, {
          name: 'WEGE3',
          price: 65.99,
          percentageGoal: 10,
          currentPercentage: 5,
        }, {
          name: 'RDL3',
          price: 100.00,
          percentageGoal: 10,
          currentPercentage: 15,
        }, {
          name: 'ITUB3',
          price: '25.99',
          percentageGoal: 10,
          currentPercentage: 10,
        },]
      },

      fiis: {
        percentageGoal: 30,
        fiisInPortfolio: [{
          name: 'KNRI11',
          price: 100.40,
          percentageGoal: 10,
          currentPercentage: 10,
        }, {
          name: 'HGLG11',
          price: 135.54,
          percentageGoal: 10,
          currentPercentage: 10,
        }, {
          name: 'HGBS11',
          price: 120.45,
          percentageGoal: 10,
          currentPercentage: 10,
        }, {
          name: 'XPLG11',
          price: 129.56,
          percentageGoal: 10,
          currentPercentage: 10,
        }, {
          name: 'VRTA11',
          price: 125.42,
          percentageGoal: 10,
          currentPercentage: 10,
        }]
      },

      rf: {
        percentageGoal: 20,
        rfInPortfolio: [{
          name: 'Poupança',
          price: 333.11,
          percentageGoal: 10,
          currentPercentage: 5,
        }, {
          name: 'Tesouro SELIC',
          price: 226.56,
          percentageGoal: 10,
          currentPercentage: 10
        }]
      },
    }
  }];

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {
          portfolios.length > 1 ?
            <Text style={styles.text}>Acompanhe as suas carteiras</Text> :
            <Text style={styles.text}>Acompanhe sua carteira</Text>
        }
      </View>
      <ScrollView style={styles.portfoliosContainer}>


        {portfolios.map((value, index) => {
          return (
            <TouchableOpacity
              style={styles.button}
              key={index}
              onPress={() => navigation.push('Portfolio', { value })}
            >
              <Image
                style={styles.logo}
                source={logo}
              />
              <Text style={styles.textButton}>{value.portfolioName}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={styles.buttonAdd}>
        <Image
          style={styles.iconAdd}
          source={iconAdd}
        />
      </TouchableOpacity>
    </View>
  );
};

export default StocksPortfolios;