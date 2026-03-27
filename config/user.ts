import { env } from './env';

// depending on how deep I go with this, may want to split users into Roles and have the function pick any user with that role. However, that may not work as a lot of the workflows need to check a specific user. Something to come back to later
export type UserKey = 'demo' | 'admin' | 'mgrDoc' | 'quality' | 'ls-buy' | 'itar' | '31S1002QM' | 'mgrDoc2'| 'quality1' | 'Audit';

export interface LoginUser {
  username: string;
  password: string;
  defaultSite?: string;
  defaultDomain?: string;
}


export const users: Record<UserKey, LoginUser> = {
  demo: {
    username: 'Demo',
    password: env.defaultPassword,
    defaultDomain: '10USA - USA Domain',
    defaultSite: '10-200 - Auto Industrial Mfg'
  },
  admin: {
    username: 'admin',
    password: env.defaultPassword,
  },
  mgrDoc: {
    username: 'MgrDoc',
    password: env.defaultPassword,
  },
  quality: {
    username: 'Quality',
    password: env.defaultPassword,
  },
  'ls-buy': {
    username: 'LS-BUY',
    password: env.defaultPassword,
  },
  itar: {
    username: 'itar',
    password: env.defaultPassword,
  },
  '31S1002QM': {
    username: '31S1002QM',
    password: env.defaultPassword,
  },
  mgrDoc2: {
    username: 'MgrDoc2',
    password: env.defaultPassword,
  },
  quality1: {
    username: 'Quality1',
    password: env.defaultPassword,
  },
  Audit: {
    username: 'Audit',
    password: env.defaultPassword,
  },

};
