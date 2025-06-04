import { sendSimpleTeamsMessage } from "./sendToTeams";

const webhookUrl ="https://bdmsgroup.webhook.office.com/webhookb2/37c6a24a-aa0e-4d45-adea-fa8400cbf5e4@325c40be-6d2b-4006-b2c5-078947c856d2/IncomingWebhook/51643aae01dc4242948769a5ac358336/d00d6fcd-747f-47b7-9fe1-55a34064c1fe/V2Q0mIuRhdLMJaYoFje039Zy4f7SIa-jgMbafbwv1bBKs1";
// const message = "Run from external file";

const message =
  `📊 *SSH-Backoffice Test Summary*\n\n` +
  `Report: https://mutto1003.github.io/playwright-ui-typescript/\n\n` +
  `**Total:** Hidden\n` +
  `✅ Passed: 10\n❌ Failed: 0\n⏭️ Skipped: 0`;

sendSimpleTeamsMessage(webhookUrl, message);
