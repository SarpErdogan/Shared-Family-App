export const colors = {
  primary: '#4f46e5',
  primaryAlt: '#4A90D9',
  white: '#ffffff',
  black: '#000000',
  gray: 'gray',
  grayLight: '#9ca3af',
  border: '#e5e5e5',
  placeholder: '#ff0000',
} as const;

export const spacing = {
  xs: 5,
  sm: 8,
  md: 10,
  base: 14,
  lg: 20,
  xl: 22,
  xxl: 24,
  xxxl: 40,
  tabBarHeight: 64,
  sectionTop: 80,
} as const;

export type ThemeColor = keyof typeof colors;
export type ThemeSpacing = keyof typeof spacing;

export const theme = {
  colors,
  spacing,
} as const;

export type Theme = typeof theme;

export default theme;