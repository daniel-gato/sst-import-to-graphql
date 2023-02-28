import { builder } from "../builder";
import { Status } from "@sst-import-to-graphql/core/status";

builder.enumType(Status, {
  name: "Status",
});

const FooType = builder.objectRef("Foo").implement({
  fields: (t) => ({
    status: t.field({
      type: Status,
      resolve: () => Status.Draft,
    }),
  }),
});

builder.queryFields((t) => ({
  foo: t.field({
    type: FooType,
    resolve: () => {
      return {};
    },
  }),
}));
