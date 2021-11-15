import React from 'react';
import {Box, Heading, AspectRatio, Image, Text, Stack} from 'native-base';

export default function LocationInfo() {
  return (
    <Box>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            source={{
              uri: 'https://10619-2.s.cdn12.com/rests/original/407_503769832.jpg',
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Club Void
          </Heading>
          <Text
            fontSize="xs"
            _light={{color: 'tertiary.500'}}
            fontWeight="500"
            ml="-0.5"
            mt="-1">
            Best club in plovdiv!
          </Text>
        </Stack>
        <Stack space={0}>
          <Text fontSize="lg" fontWeight="500">
            Information:
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
            euismod tortor. Proin commodo risus ut urna convallis, et bibendum
            orci tristique.
          </Text>
        </Stack>
        <Stack space={0}>
          <Text fontSize="lg" fontWeight="500">
            Working hours:
          </Text>
          <Text>9PM-4AM</Text>
        </Stack>
        <Stack space={0}>
          <Text fontSize="lg" fontWeight="500">
            Address:
          </Text>
          <Text> ul. "Atanas Samokovetsa", 4000 Kapana, Plovdiv</Text>
        </Stack>
        <Stack space={0}>
          <Text fontSize="lg" fontWeight="500">
            Green pass:
          </Text>
          <Text>Yes</Text>
        </Stack>
      </Stack>
    </Box>
  );
}
