import React from 'react';
import {
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  Select,
  CheckIcon,
} from 'native-base';
import {useState} from 'react';

export const FilterModal = props => {
  const {isOpen = false, closeModal} = props;

  const [state, setState] = useState({category: null});

  const setInputValue = (propName, propValue) => {
    setState({...state, [propName]: propValue});
  };

  return (
    <Center flex={1} px="3">
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Content maxWidth="500px">
          <Modal.CloseButton />
          <Modal.Header>Filters</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label
                _text={{color: 'muted.700', fontSize: 'xs', fontWeight: 500}}>
                Category
              </FormControl.Label>
              <Select
                selectedValue={state.category}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue =>
                  setInputValue('category', itemValue)
                }>
                <Select.Item label="Restaurant" value="restaurant" />
                <Select.Item label="Bar" value="bar" />
                <Select.Item label="Club" value="club" />
                <Select.Item label="Café" value="café" />
              </Select>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={closeModal}>
                Cancel
              </Button>
              <Button
                colorScheme="tertiary"
                _text={{color: 'white'}}
                onPress={closeModal}>
                Apply
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
