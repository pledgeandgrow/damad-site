/**
 * Environment Variable Validator
 * Ensures all required environment variables are set at startup
 */

export interface EnvConfig {
  // Email Configuration
  EMAIL_HOST: string;
  EMAIL_PORT: string;
  EMAIL_SECURE: string;
  EMAIL_USER: string;
  EMAIL_PASSWORD: string;
  EMAIL_FROM: string;
  EMAIL_TO: string;

  // Site Configuration
  NEXT_PUBLIC_SITE_URL?: string;
  NODE_ENV?: string;
}

/**
 * Validate environment variables
 */
export function validateEnv(): EnvConfig {
  const requiredVars = [
    'EMAIL_HOST',
    'EMAIL_PORT',
    'EMAIL_SECURE',
    'EMAIL_USER',
    'EMAIL_PASSWORD',
    'EMAIL_FROM',
    'EMAIL_TO',
  ];

  const missing: string[] = [];

  requiredVars.forEach(varName => {
    if (!process.env[varName]) {
      missing.push(varName);
    }
  });

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please check your .env.local or .env.production file.\n' +
      'See ENVIRONMENT_SETUP.md for configuration details.'
    );
  }

  return {
    EMAIL_HOST: process.env.EMAIL_HOST!,
    EMAIL_PORT: process.env.EMAIL_PORT!,
    EMAIL_SECURE: process.env.EMAIL_SECURE!,
    EMAIL_USER: process.env.EMAIL_USER!,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD!,
    EMAIL_FROM: process.env.EMAIL_FROM!,
    EMAIL_TO: process.env.EMAIL_TO!,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NODE_ENV: process.env.NODE_ENV,
  };
}

/**
 * Get environment variable with fallback
 */
export function getEnv(key: string, defaultValue?: string): string {
  const value = process.env[key];
  
  if (!value && !defaultValue) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  
  return value || defaultValue || '';
}

/**
 * Check if running in production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Check if running in development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

/**
 * Get site URL
 */
export function getSiteUrl(): string {
  if (isProduction()) {
    return process.env.NEXT_PUBLIC_SITE_URL || 'https://dmd-ascenseur.fr';
  }
  return 'http://localhost:3000';
}
