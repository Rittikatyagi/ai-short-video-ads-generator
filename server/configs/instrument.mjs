import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://3ca00e3c7724c7413957436300533f96@o4511065537183744.ingest.us.sentry.io/4511065541509120",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});