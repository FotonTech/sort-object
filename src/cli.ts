import yargs from 'yargs'
import shell from 'shelljs'

import { generateResources } from './generateResources'

export const run = () => {
  const argv = yargs(process.argv)
    .usage('Sort an object’s key within source code automatically as part of linting')
    .describe('src', 'The source to sort object’s keys')
    .default('src', process.cwd())
    .describe('regex', 'Regex to match files')
    .default('regex', /./g).argv

  const jsFiles = shell.find(argv.src).filter(path => /\.(js|ts|tsx)$/.test(path))

  const regex = new RegExp(argv.regex)

  generateResources(jsFiles.filter(file => regex.test(file)))
}
