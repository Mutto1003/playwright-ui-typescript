export async function sendSimpleTeamsMessage(webhookUrl: string, summaryText: string) {
  const payload = { text: summaryText };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    console.log("✅ Message sent to Teams.");
  } else {
    console.error("❌ Failed to send message:", await res.text());
  }
}
