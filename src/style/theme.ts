export const colors = {
  primary: '#4f46e5',
  primaryAlt: '#4A90D9',
  white: '#ffffff',
  black: '#000000',
  surface: '#121212',
  surfaceAlt: '#1c1c1e',
  gray: 'gray',
  grayLight: '#9ca3af',
  border: '#2a2a2d',
  placeholder: '#6b7280',
  red: '#d30000',
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

export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  pill: 999,
} as const;

export const typography = {
  small: 13,
  body: 15,
  label: 16,
  icon: 20,
  title: 26,
} as const;

export type ThemeColor = keyof typeof colors;
export type ThemeSpacing = keyof typeof spacing;
export type ThemeRadius = keyof typeof radius;
export type ThemeTypography = keyof typeof typography;

export const theme = {
  colors,
  spacing,
  radius,
  typography,
} as const;

export type Theme = typeof theme;

export default theme;