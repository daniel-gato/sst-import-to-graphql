
var Foo_possibleTypes = ['Foo']
export var isFoo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFoo"')
  return Foo_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}
