import fs from 'fs'
import * as ts from 'typescript'

export const generateResources = (files: string[]) => {
  for (const filename of files) {
    const source = fs.readFileSync(filename, { encoding: 'utf8' })

    const ast = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true)

    // now we have the file as ast
    console.log(source, ast)
  }
}
