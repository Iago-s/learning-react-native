import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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
        },{
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
        },{
          name: 'ITUB3',
          price: '25.99',
          percentageGoal: 10,
          currentPercentage: 10,
        }, ]
      },

      fiis: {
        percentageGoal: 50,
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
      }
    }
  }];

  return(
    <View>
      <Button 
        title="Adicionar carteira."
      />

      {portfolios.map((value, index) => {
        return(
          <Button 
            key={index}
            title={value.portfolioName}
            onPress={() => navigation.push('Portfolio', { value })}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({

});

export default StocksPortfolios;