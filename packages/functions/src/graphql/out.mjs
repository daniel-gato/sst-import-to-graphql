// packages/functions/src/graphql/builder.ts
import SchemaBuilder from "@pothos/core";
var builder = new SchemaBuilder({});
builder.queryType({});

// packages/functions/src/graphql/types/foo.ts

builder.enumType(Status, {
  name: "Status"
});
var FooType = builder.objectRef("Foo").implement({
  fields: t => ({
    status: t.field({
      type: Status,
      resolve: () => Status.Draft
    })
  })
});
builder.queryFields(t => ({
  foo: t.field({
    type: FooType
  })
}));

// packages/functions/src/graphql/schema.ts
var schema = builder.toSchema({});
export { schema };