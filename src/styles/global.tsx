import React from 'react'
import { Global as EmotionGlobal } from '@emotion/core'
import { Theme } from 'src/styles/theme'

const Global: React.FC = () => {
  return (
    <EmotionGlobal
      styles={(theme: Theme) => ({
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          margin: 0,
          fontFamily: theme.fonts.body,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      })}
    />
  )
}

export default Global
