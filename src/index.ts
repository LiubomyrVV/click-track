import dotenv from 'dotenv';

dotenv.config();

import { startClient } from './core/client';
import { authenticate } from './core/auth';

async function main() {
  await startClient();
  await authenticate();
}

main().catch(console.error);
