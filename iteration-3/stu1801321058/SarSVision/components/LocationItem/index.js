import React, {Fragment} from 'react';
import {
  Box,
  Text,
  HStack,
  Pressable,
  Avatar,
  VStack,
  Spacer,
  ChevronRightIcon,
} from 'native-base';

export default function LocationItem(props) {
  const {id = '', name = '', type = '', image = '', navigation = {}} = props;
  console.log(navigation);
  return (
    <Fragment>
      <Box rounded="lg" overflow="hidden" marginTop="5px" shadow={1} key={id}>
        <Pressable
          onPress={() => navigation.navigate('LocationInfo')}
          bg="white">
          <Box pl="4" pr="5" py="2">
            <HStack alignItems="center" space={3}>
              <Avatar size="48px" source={{uri: image}} />
              <VStack>
                <Text color="coolGray.800" bold>
                  {name}
                </Text>
                <Text color="coolGray.600">{type}</Text>
              </VStack>
              <Spacer />
              <ChevronRightIcon size="7" />
            </HStack>
          </Box>
        </Pressable>
      </Box>
    </Fragment>
  );
}
