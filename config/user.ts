import { env } from './env';

// depending on how deep I go with this, may want to split users into Roles and have the function pick any user with that role. However, that may not work as a lot of the workflows need to check a specific user. Something to come back to later
export type UserKey = 'demo' | 'admin' | 'mgrDoc';

export interface LoginUser {
  username: string;
  password: string;
}


export const users: Record<UserKey, LoginUser> = {
  demo: {
    username: 'demo',
    password: env.defaultPassword,
  },
  admin: {
    username: 'admin',
    password: env.defaultPassword,
  },
  mgrDoc: {
    username: 'mgrDoc',
    password: env.defaultPassword,
  },
};