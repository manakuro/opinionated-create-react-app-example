import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from 'src/styles/theme'
import Home from 'src/components/Home'
import Global from 'src/styles/global'

const App: React.FC = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        <Home {...props} />
      </>
    </ThemeProvider>
  )
}

export default App
