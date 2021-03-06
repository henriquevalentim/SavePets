import * as React from 'react';
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
    <Box onPress={() => props.navigate()}>
      <Circle
        style={{
          backgroundColor: '#FFF',
          borderRadius: props.size / 2,
          width: props.size,
          height: props.size,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Image source={props.image} resizeMode={'stretch'} />
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
