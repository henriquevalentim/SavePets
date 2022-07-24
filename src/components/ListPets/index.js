import * as React from 'react';
import {List, Text} from 'react-native-paper';
import {SafeAreaView, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';

function ListPets({positions, title = '', navigation}) {
  return (
    <SafeAreaView>
      {!!title && (
        <Text style={{textAlign: 'center', marginVertical: 15, fontSize: 30}}>
          {title}
        </Text>
      )}
      <ScrollView style={{marginBottom: 100}}>
        {positions &&
          positions.map(pet => (
            <List.Item
              key={pet.id}
              title={pet.description}
              onPress={() => navigation.navigate('PetProfile', pet)}
              left={props => (
                <FastImage
                  key={pet.id}
                  style={{width: 100, height: 100, borderRadius: 50}}
                  source={{uri: pet.url_image}}
                />
              )}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ListPets;
