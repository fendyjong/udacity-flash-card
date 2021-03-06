import { Button, Anchor, ActionButton } from './Button'
import { Label, Heading, Headline, Paragraph } from './Text'
import { Box, CardBox, Header } from './Container'
import { InputText } from './Input'
import Card from './Card'

/**
 * Theme
 *
 * @type {{colorIndex: {brand: string, accent-1: string, accent-1-t: string, grey-1: string, grey-1-a: string, grey-2: string, grey-2-a: string, grey-3: string, grey-3-a: string, grey-4: string, grey-4-a: string, border: string, light-1: string, light-2: string, critical: string, warning: string, ok: string, unknown: string}, black_color: string, white_color: string, primary_color: string, secondary_color: string, pad: string}}
 */
export const THEME = {
  colorIndex: {
    brand: '#865cd6',

    // Accent
    'accent-1': '#00CCEB',
    'accent-1-t': '#0DCFEC',

    // Neutral


    // Grey
    'grey-1': '#000001',
    'grey-1-a': '#000001CC',
    'grey-2': '#333333',
    'grey-2-a': '#333333CC',
    'grey-3': '#3B3B3B',
    'grey-3-a': '#3B3B3BCC',
    'grey-4': '#434343',
    'grey-4-a': '#434343CC',
    border: '#D0D0D0',

    // Light
    'light-1': '#FFFFFF',
    'light-2': '#F5F5F5',

    // Status
    critical: '#FF324D',
    warning: '#FFD602',
    ok: '#8CC800',
    unknown: '#A8A8A8',
  },

  black_color: '#212121',
  white_color: '#FAFAFA',
  primary_color: '#2196F3',
  secondary_color: '#448AFF',
  pad: '16px',
}

export {
  // Layout
  Box,
  CardBox,
  Card,

  // Structure
  Header,

  // Button
  Button,
  Anchor,
  ActionButton,

  // Label
  Label,
  Heading,
  Headline,
  Paragraph,

  // Forms
  InputText,
}


/*
100% — FF
95% — F2
90% — E6
85% — D9
80% — CC
75% — BF
70% — B3
65% — A6
60% — 99
55% — 8C
50% — 80
45% — 73
40% — 66
35% — 59
30% — 4D
25% — 40
20% — 33
15% — 26
10% — 1A
5% — 0D
0% — 00
 */
