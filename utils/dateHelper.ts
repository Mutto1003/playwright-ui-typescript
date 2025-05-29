export function generateRandomEmail(domain: string = 'test.com'): string {
  const timestamp = Date.now();
  return `user_${timestamp}@${domain}`;
}