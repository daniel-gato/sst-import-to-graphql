import { SSTConfig } from "sst";
import { Api } from "./stacks/Api"

export default {
  config(_input) {
    return {
      name: "sst-import-to-graphql",
      region: "us-east-1",
      profile: "sandbox",
    };
  },
  stacks(app) {
    app
      .stack(Api)
  },
} satisfies SSTConfig;
