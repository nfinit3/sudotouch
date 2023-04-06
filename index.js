#!/usr/bin/env node

const { exec } = require('child_process');

const grepCommand = "grep -q 'pam_tid.so' /etc/pam.d/sudo";
const sedCommand =
    "sed -i '' '2i\\\nauth       sufficient     pam_tid.so\n' /etc/pam.d/sudo";

exec(
    `sudo ${grepCommand} && echo 'TouchID Already Enabled' || sudo ${sedCommand}`,
    (error, stdout, stderr) => {
        if (error) {
            console.error(`\x1b[41mError executing command: ${error}\x1b[41m`);
            return;
        }
        if (stdout) console.log(`\x1b[42m${stdout}\x1b[42m`);
        else if (stderr) console.error(`\x1b[31m${stderr}\x1b[31m`);
        else
            console.log(
                '\x1b[32mSuccessfully Enabled TouchID for Sudo\x1b[32m'
            );
    }
);
