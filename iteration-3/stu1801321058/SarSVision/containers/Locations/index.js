import React, {Fragment, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  Pressable,
  Avatar,
  VStack,
  Spacer,
  ChevronRightIcon,
  Input,
  IconButton,
  HamburgerIcon,
} from 'native-base';
import {ScrollView} from 'react-native';
import LocationItem from '../../components/LocationItem';
import SearchBar from '../../components/SearchBar';
import {FilterModal} from '../FilterModal';

export default function Locations(props) {
  const {navigation = {}} = props;

  const [isFilterModalOpen, setFilterModalVisibility] = useState(false);

  const locations = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb206594S',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2056',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb21222',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb22345',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2789',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2866',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2754',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2135',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2567',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2456',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2123',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
      name: 'Club Void',
      type: 'Bar/Club',
      image: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
    },
  ];

  const mapLocations = locations => {
    return locations.map(location => {
      const {id, name, type, image} = location;
      return (
        <LocationItem
          id={id}
          name={name}
          image={image}
          type={type}
          navigation={navigation}
        />
      );
    });
  };

  return (
    <Fragment>
      <HStack space={0} alignItems="center">
        <SearchBar />
        <IconButton
          icon={<HamburgerIcon size="5" />}
          onPress={() => setFilterModalVisibility(true)}
        />
      </HStack>
      <ScrollView>{mapLocations(locations)}</ScrollView>
      {isFilterModalOpen && (
        <FilterModal
          isOpen={isFilterModalOpen}
          closeModal={() => setFilterModalVisibility(false)}
        />
      )}
    </Fragment>
  );
}
