import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
import config from '../config/config';

const TELEGRAM_ID = Number(process.env.TELEGRAM_ID);
const TELEGRAM_HASH = String(process.env.TELEGRAM_HASH);
console.log(config);
const client = new TelegramClient(new StringSession(''), TELEGRAM_ID, TELEGRAM_HASH, {
  connectionRetries: 5,
});

export async function startClient() {
  await client.connect();
  console.log('Client connected');
}

export async function disconnectClient() {
  await client.disconnect();
  console.log('Client disconnected');
}

export default client;
