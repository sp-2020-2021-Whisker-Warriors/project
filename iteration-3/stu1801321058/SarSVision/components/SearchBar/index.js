import React from 'react';
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
  SearchIcon,
} from 'native-base';

export default function SearchBar() {
  return (
    <VStack
      space={5}
      width="90%"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }>
      <VStack width="100%" space={5} alignItems="center">
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.100"
          borderRadius="10"
          py="2"
          px="2"
          placeholderTextColor="gray.500"
          _hover={{bg: 'gray.200', borderWidth: 0}}
          borderWidth="0"
          _web={{
            _focus: {style: {boxShadow: 'none'}},
          }}
          InputLeftElement={
            <SearchIcon ml="2" size="5" color="gray.500" />
            // <Icon ml="2" size="5" color="gray.500" as={} />
          }
        />
      </VStack>
    </VStack>
  );
}
