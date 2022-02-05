import * as React from 'react';
import {Text, View} from 'react-native';
import {
  Box,
  Circle,
  Image,
  TitlePosition,
  Title,
  DescriptionBox,
  Description,
  DescriptionPosition,
} from './styles';

function CategoryItem(props) {
  return (
    <Box>
      <Circle>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          resizeMode={'stretch'}
        />
      </Circle>
      <DescriptionBox>
        <TitlePosition>
          <Title>{props.title}</Title>
        </TitlePosition>
        <DescriptionPosition>
          <Description>{props.description}</Description>
        </DescriptionPosition>
      </DescriptionBox>
    </Box>
  );
}

export default CategoryItem;
