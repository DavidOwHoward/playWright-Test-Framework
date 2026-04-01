import { exec } from 'child_process';
import { tags } from './index';

const common = `./src/features/*.feature \
--require-module ts-node/register \
--require ./src/step-definitions/**/*.ts \
--require ./src/support/**/*.ts`;

interface ProfileCommands {
  [key: string]: string;
};

const profiles: ProfileCommands = {
    navigation: `${common} --tags "@navigation"`,
    login: `${common} --tags "@login"`,
    e2e: `${common} --tags "@e2e"`,
};

const profile = process.argv[2];

if (!profile || !profiles[profile]) {
    console.error(`Please provide a valid profile. Available profiles: ${Object.keys(profiles).join(', ')}`);
    process.exit(1);
};

let command = `npx cucumber-js ${profiles[profile as 'navigation' | 'login' | 'e2e']}`;

exec(command, {encoding: 'utf-8'}, (error: Error | null, stdout: string) => {

    console.log(stdout);

    if(error) {
        throw new Error('One or more tests have failed. Please review.');
        process.exit(1);
    }
});



