import {GraphQLScalarType, Kind} from 'graphql'

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value: Date) {
    return value.toString()
  },
  parseValue(value: string) {
    return new Date(value)
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10)
    }
    return null
  },
})

export {dateScalar}
