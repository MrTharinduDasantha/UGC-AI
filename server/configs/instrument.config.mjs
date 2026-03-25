import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://5281d6609bb49c19850c12b6030c7317@o4511077847400448.ingest.us.sentry.io/4511077857951744",
  sendDefaultPii: true,
});
