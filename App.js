import React from 'react';
import { View, Text, ScrollView } from 'react-native';
const app = () => (
  <ScrollView>
      <View style={{
        flexDirection: 'row',
        flex: 1
      }}>
        {
          [1,1,1].map(num => (
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={{ flex: 1, height: 50, backgroundColor: 'yellow' }} />
              <View style={{ flex: 1 }}>
                {/* <Text>Costa já marcou reuniões com partidos de esquerda para quarta-feira quarta-feira</Text> */}
                <View style={{
                  flex: 1,
                  alignContent: 'flex-end',
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}>
                  {[
                    'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente',                     'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente',
                    'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente',
                    'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente',
                    'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente',
                    'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente',
                    'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente'
                  ].map(author => <Text>{author}</Text>)}
                </View>
              </View>
            </View>
          ))
        }
      </View>
      <View style={{
        flexDirection: 'row',
        marginHorizontal: 8,
      flex: 1
      }}>
      {
        [1,1,1,1].map(num => (
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={{ flex: 1, height: 50, backgroundColor: 'yellow' }} />
            <View style={{ flex: 1 }}>
              <Text>Costa já marcou reuniões com partidos de esquerda para quarta-feira quarta-feira</Text>
              <View style={{
                flex: 1,
                alignContent: 'flex-end',
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}>
                {[
                  'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente',                   'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente',
                  'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente',
                  'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente',
                  'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente',
                  'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente',
                  'Maria Lopes', 'Liliana Borges', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente', 'Liliana Valente'
                ].map(author => <Text>{author}</Text>)}
              </View>
            </View>
          </View>
        ))
      }
      </View>
  </ScrollView>
)
export default app;