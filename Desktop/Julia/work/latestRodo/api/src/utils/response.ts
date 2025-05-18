import { t } from "elysia";

const ServerResponse = t.Object({
  success: t.Optional(
    t.Boolean({
      default: false,
      description: "Indicates if the request action was successful or not",
      title: "Success",
    })
  ),
  message: t.String({
    default: "An error occurred",
    description: "A message describing the result of the request",
    title: "Message",
  }),
  data: t.Optional(
    t.Any({
      default: null,
      description: "The data returned by the request",
      title: "Data",
    })
  ),
});
export default ServerResponse;
