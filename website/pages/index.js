import React from 'react';
import { Box, Container, Image, Text } from 'fannypack';

export default function Index() {
  return (
    <Container
      isLayout
      minHeight="100vh"
      paddingTop="major-4"
      display="flex"
      alignItems="center"
      justifyContent={{ 'min-tablet': 'center' }}
      flexDirection="column"
    >
      <Box>
        <Image src="/gaytime.png" width={{ default: '500px', mobile: '300px' }} />
      </Box>
      <Box textAlign="center">
        <Text fontSize={{ default: '500', mobile: '300' }} fontWeight="semibold">
          Painless audience interaction
        </Text>
        <Box marginTop="major-1" />
        <Text fontSize={{ default: '400', mobile: '200' }}>Coming Mid 2020</Text>
      </Box>
    </Container>
  );
}
