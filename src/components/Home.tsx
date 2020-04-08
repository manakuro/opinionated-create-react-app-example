import logo from 'src/logo.svg'
import React from 'react'
import { Box, Image, Flex, Link, Text } from 'theme-ui'
import { keyframes } from '@emotion/core'

const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <Flex
        as="header"
        sx={{
          minHeight: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 5,
        }}
      >
        <Image
          src={logo}
          alt="logo"
          sx={{
            pointerEvents: 'none',
            height: '40vmin',
            animationName: spin.toString(),
            animationIterationCount: 'infinite',
            animationDuration: '20s',
            animationTimingFunction: 'linear',
          }}
        />
        <Text>
          Edit <Box as="code">src/App.tsx</Box> and save to reload.
        </Text>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          Learn React
        </Link>
      </Flex>
    </Box>
  )
}

export default Home
