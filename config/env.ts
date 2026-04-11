import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

// will throw an error if any of the required env vars are missing

// needed a cleaner way to call environment variables. Had to look this one up as I wasn't quite sure how to write it

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export const env = {
  defaultPassword: requireEnv('defaultPassword'),
};

export interface LoginUser {
  username: string;
  password: string;
}
