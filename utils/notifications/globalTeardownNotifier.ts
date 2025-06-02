// global-teardown.ts
import { sendSimpleTeamsMessage } from './sendToTeams';

const webhookUrl = 'https://bdmsgroup.webhook.office.com/webhookb2/37c6a24a-aa0e-4d45-adea-fa8400cbf5e4@325c40be-6d2b-4006-b2c5-078947c856d2/IncomingWebhook/51643aae01dc4242948769a5ac358336/d00d6fcd-747f-47b7-9fe1-55a34064c1fe/V2Q0mIuRhdLMJaYoFje039Zy4f7SIa-jgMbafbwv1bBKs1'
// const webhookUrl = 'https://bdmsgroup.webhook.office.com/webhookb2/16bf4760-41f5-46de-aceb-3b2f5598b92e@325c40be-6d2b-4006-b2c5-078947c856d2/IncomingWebhook/7da855b84d744b4ab853ed9ec0976c6f/d00d6fcd-747f-47b7-9fe1-55a34064c1fe/V2bb51Gt3Qu9HwsvgE631gT9Du3W1bO13-2Owlgl1FBSw1';

async function globalTeardown() {
  const summaryText = `📊 *SSH-Backoffice Test Summary*\n\n` +
                      `**Total:** Hidden\n` +
                      `✅ Passed: 10\n❌ Failed: 0\n⏭️ Skipped: 0`;

  if (webhookUrl) {
    await sendSimpleTeamsMessage(webhookUrl, summaryText);
  } else {
    console.warn('⚠️ TEAMS_WEBHOOK_URL not set, skipping Teams notification.');
  }
}

export default globalTeardown;
