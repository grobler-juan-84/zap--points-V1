export const env = {
  appName: import.meta.env.VITE_APP_NAME ?? 'Zap!-Points',
  appHeroTitle: import.meta.env.VITE_APP_HERO_TITLE ?? 'Lets get started.',
  appFeatureList: import.meta.env.VITE_APP_FEATURE_LIST ?? [
    'Classroom Management',
    'AI Teacher Assistance',
    'Teacher Resources',
  ],
} as const
