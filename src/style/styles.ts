import { StyleSheet } from 'react-native';
import { colors, spacing, radius, typography } from './theme';

const styles = StyleSheet.create({
  // Layout
  page: {
    flex: 1,
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    padding: spacing.lg,
    paddingTop: spacing.sectionTop,
    backgroundColor: colors.black,
  },

  // Text
  title: {
    color: colors.white,
    fontSize: typography.title,
    fontWeight: 'bold',
    marginBottom: spacing.lg,
    alignSelf: 'center',
  },
  subtitle: {
    color: colors.grayLight,
    fontSize: typography.body,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  text: {
    color: colors.white,
    fontSize: typography.body,
  },
  linkText: {
    color: colors.grayLight,
    textAlign: 'center',
    marginTop: spacing.sm,
    fontSize: typography.small,
  },
  labelActive: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: typography.body,
  },
  importantText: {
    fontSize: typography.label,
    color: colors.red,
    fontWeight: '600',
  },
  rowLabel: {
    fontSize: typography.body,
    color: colors.white,
    fontWeight: '600',
  },
  icon: {
    fontSize: typography.icon,
    color: colors.grayLight,
  },
  chevron: {
    fontSize: typography.label,
    color: colors.grayLight,
    marginLeft: 'auto',
  },

  // Buttons
  button: {
    height: spacing.xxxl,
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  buttonSecondary: {
    height: spacing.xxxl,
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  textSecondary: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: typography.body,
  },
  buttonDanger: {
    height: spacing.xxxl,
    backgroundColor: colors.red,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  // Inputs
  textInput: {
    height: spacing.xxxl,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: spacing.base,
    marginBottom: spacing.md,
    color: colors.white,
    fontSize: typography.body,
  },

  // Rows / cards
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingVertical: spacing.base,
    paddingHorizontal: spacing.base,
    marginBottom: spacing.sm,
    borderRadius: radius.md,
  },
  checkbox: {
    width: typography.icon,
    height: typography.icon,
    borderRadius: radius.sm,
    borderWidth: 1.5,
    borderColor: colors.primaryAlt,
    marginRight: spacing.base,
  },
  familyInfo: {
    backgroundColor: colors.surfaceAlt,
    marginRight: spacing.base,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.sm,
  },

  // Empty / loading state
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacing.xxxl,
  },
  emptyStateText: {
    color: colors.grayLight,
    fontSize: typography.body,
    textAlign: 'center',
  },

  // Floating action button
  fab: {
    position: 'absolute',
    right: spacing.lg,
    bottom: spacing.tabBarHeight + spacing.lg,
    width: 56,
    height: 56,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  fabText: {
    color: colors.white,
    fontSize: 28,
    lineHeight: 30,
  },

  // Tab bar
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: spacing.tabBarHeight,
    backgroundColor: colors.surface,
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
  tabIconActive: {
    fontSize: typography.icon,
    color: colors.primary,
  },
  tabLabel: {
    fontSize: typography.small,
    color: colors.grayLight,
    marginTop: 2,
  },
  tabLabelActive: {
    fontSize: typography.small,
    color: colors.primary,
    marginTop: 2,
    fontWeight: '600',
  },
});

export default styles;