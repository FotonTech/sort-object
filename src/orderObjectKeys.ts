import ts from 'typescript'
import sortBy from 'lodash/sortBy'

export const orderObjectKeys = (ast: ts.SourceFile) => {
  const { statements } = ast

  for (const statement of statements) {
    if (ts.isVariableStatement(statement)) {
      const { declarationList } = statement
      const { declarations } = declarationList

      for (const declaration of declarations) {
        if (ts.isVariableDeclaration(declaration) && ts.isObjectLiteralExpression(declaration.initializer as ts.Node)) {
          const { properties } = declaration.initializer as ts.ObjectLiteralExpression

          const orderedProperties = orderProperties(properties)

          declaration.initializer = ts.createObjectLiteral(orderedProperties, true)
        }
      }

      statement.declarationList = ts.createVariableDeclarationList(declarations)
    }
  }

  ast.statements = statements
  return ast
}

export const orderProperties = (properties: ts.NodeArray<ts.ObjectLiteralElementLike>) => {
  // @ts-ignore
  return sortBy(properties, [o => o.name?.escapedText])
}
