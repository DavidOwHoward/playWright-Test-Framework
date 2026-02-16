import { env } from './env';

// depending on how deep I go with this, may want to split users into Roles and have the function pick any user with that role. However, that may not work as a lot of the workflows need to check a specific user. Something to come back to later
export type UserKey = 'demo' | 'admin' | 'mgrDoc';

export interface LoginUser {
  username: string;
  password: string;
  defaultSite?: string;
  defaultDomain?: string;
}


export const users: Record<UserKey, LoginUser> = {
  demo: {
    username: 'demo',
    password: env.defaultPassword,
    defaultDomain: '10USA - USA Domain',
    defaultSite: '10-200 - Auto Industrial Mfg'
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