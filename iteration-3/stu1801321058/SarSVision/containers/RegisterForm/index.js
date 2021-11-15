import React, {Fragment, useState} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Select,
  CheckIcon,
  Radio,
  HStack,
} from 'native-base';

export default function RegisterForm(props) {
  const {navigation = {}} = props;
  const color = 'tertiary.500';

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    age: null,
    city: '',
    hasGreenPass: null,
  });

  const setInputValue = (propName, propValue) => {
    setState({...state, [propName]: propValue});
  };

  return (
    <ScrollView>
      <Box safeArea flex={1} p="2" w="90%" mx="auto" py="8">
        <Heading size="lg" color={color} fontWeight="600">
          Welcome
        </Heading>
        <Heading mt="1" color={color} fontWeight="medium" size="xs">
          Add info to see location you can visit
        </Heading>

        <VStack space={3} mt="5">
          <FormControl isRequired>
            <FormControl.Label
              _text={{color: 'muted.700', fontSize: 'xs', fontWeight: 500}}>
              First Name
            </FormControl.Label>
            <Input
              value={state.firstName}
              onChangeText={value => setInputValue('firstName', value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label
              _text={{color: 'muted.700', fontSize: 'xs', fontWeight: 500}}>
              Last Name
            </FormControl.Label>
            <Input
              value={state.lastName}
              onChangeText={value => setInputValue('lastName', value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label
              _text={{color: 'muted.700', fontSize: 'xs', fontWeight: 500}}>
              Age
            </FormControl.Label>
            <Input
              value={state.age}
              onChangeText={value => setInputValue('age', value)}
              type="number"
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label
              _text={{color: 'muted.700', fontSize: 'xs', fontWeight: 500}}>
              City
            </FormControl.Label>
            <Select
              selectedValue={state.city}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={itemValue => setInputValue('city', itemValue)}>
              <Select.Item label="Sofia" value="sofia" />
              <Select.Item label="Plovdiv" value="plovdiv" />
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label
              _text={{color: 'muted.700', fontSize: 'xs', fontWeight: 500}}>
              Do you have a green pass?
            </FormControl.Label>
            <Radio.Group
              colorScheme="tertiary"
              name="myRadioGroup"
              value={state.hasGreenPass}
              onChange={nextValue => {
                setInputValue('hasGreenPass', nextValue);
              }}>
              <HStack space={5} alignItems="center">
                <Radio value={true} my={1}>
                  Yes
                </Radio>
                <Radio value={false} my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>
          </FormControl>
          <Button
            mt="5"
            colorScheme="tertiary"
            _text={{color: 'white'}}
            onPress={() => navigation.navigate('Locations')}>
            Register
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
}
