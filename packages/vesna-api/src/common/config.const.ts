export function getEnvOrFail(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment token ${key}`);
  }

  return value;
}

// Database
export const DATABASE_HOST: string = getEnvOrFail('DATABASE_HOST');
export const DATABASE_USER: string = getEnvOrFail('DATABASE_USER');
export const DATABASE_PASS: string = getEnvOrFail('DATABASE_PASS');
export const DATABASE_NAME: string = getEnvOrFail('DATABASE_NAME');

// Authentication
export const JWT_SECRET: string = getEnvOrFail('JWT_SECRET');
export const JWT_EXPIRATION_IN_HOURS = Number(getEnvOrFail('JWT_EXPIRES'));
