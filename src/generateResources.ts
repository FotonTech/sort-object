import fs from 'fs'
import ts from 'typescript'

import { orderObjectKeys } from './orderObjectKeys'

export const generateResources = (files: string[]) => {
  for (const filename of files) {
    const source = fs.readFileSync(filename, { encoding: 'utf8' })

    const ast = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true)

    const orderedAst = orderObjectKeys(ast)

    const printer = ts.createPrinter()
    const data = printer.printFile(orderedAst)
    fs.writeFileSync(filename, data, { encoding: 'utf8' })
  }
}
