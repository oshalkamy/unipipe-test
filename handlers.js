
/**
 Here's a full example for a handlers.js file that you can pass to unipipe transform --registry-of-handlers and that writes service instance parameters into a custom directory structure:

  /
  `-- customers
      `-- unipipe-osb-dev
          `-- osb-dev
              `-- params.json

  For more information about handlers please review the official unipipe-cli documentation
  at https://github.com/meshcloud/unipipe-service-broker/tree/master/cli
*/

class MyHandler {
  name = "My Handler";

  handle(service) {
    const params = service.instance.parameters;

    const context = service.instance.context;

    return {
      name: "customers",
      entries: [{
        name: context.customer_id,
        entries: [
          {
            name: context.project_id,
            entries: [
              { name: "params.json", content: JSON.stringify(params, null, 2) },
            ],
          },
        ],
      }],
    };
  }
}

const handlers = {
  // Check your service id and replace the following key. You can find the service ids inside of your catalog.yml file.
  "e46f927c-ce4e-4561-9208-91cb4b27b4a2": new MyHandler(),
};

handlers;
