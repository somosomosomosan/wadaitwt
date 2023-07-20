'use client';

import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Link from 'next/link';
import { Button, ButtonGroup } from '@chakra-ui/react';
const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
};
const theme = extendTheme({ colors });

export default function Home() {
	return (
		<ChakraProvider theme={theme}>
			<div>
				<Link href='./smash'>スマブラ</Link>
				<Button colorScheme='blue'>Button</Button>
			</div>
		</ChakraProvider>
	);
}
