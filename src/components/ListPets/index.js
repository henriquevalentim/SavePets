import * as React from 'react';
import {List, Avatar} from 'react-native-paper';
import {SafeAreaView, ScrollView} from 'react-native';

function ListPets({positions}) {
  return (
    <SafeAreaView>
      <ScrollView>
        {positions &&
          positions.map(pet => (
            <List.Item
              title={pet.description}
              // description={pet.description}
              left={props => (
                <Avatar.Image size={100} source={{uri: pet.url_image}} />
              )}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ListPets;
