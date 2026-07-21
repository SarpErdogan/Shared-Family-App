import { StyleSheet } from 'react-native';
import { colors, spacing } from './theme';

const styles = StyleSheet.create({
  button: {
    height: spacing.xxxl,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  textInput: {
    height: spacing.xxxl,
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: spacing.md,
    color: colors.white,
  },
  icon: {
    fontSize: spacing.xl,
    color: colors.grayLight,
  },
  labelActive: {
    color: colors.primary,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.base,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,
  },
  checkbox: {
    width: spacing.xl,
    height: spacing.xl,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.primaryAlt,
    marginRight: spacing.base,
  },
  container: {
    flex: 1,
    padding: spacing.lg,
    paddingTop: spacing.sectionTop,
    backgroundColor: colors.black,
  },
  title: {
    color: colors.white,
    fontSize: spacing.xxl,
    fontWeight: 'bold',
    marginBottom: spacing.lg,
    alignSelf: 'center',
  },
  page: {
    flex: 1,
    backgroundColor: colors.black,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: spacing.tabBarHeight,
    backgroundColor: colors.black,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingBottom: spacing.sm,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color:"#ffffff"
  },
  familyInfo: {
    backgroundColor: colors.black, 
    marginRight: spacing.base, 
    padding: spacing.xs, 
    borderRadius: spacing.xs,
  },
});

export default styles;