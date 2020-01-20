import { message, danger } from 'danger';

const modifiedMD = danger.git.modified_files.join('- ');
message('Changed Files in this PR: \n - ' + modifiedMD);

const len = danger.git.commits.length
message('commits: \n - ' + len);
message('Changed Files in this PR: \n - ' + modifiedMD);
