import { getPrivateVariable } from '../utils/getPrivateVariable';

const config = {
  TELEGRAM_ID: parseInt(getPrivateVariable('TELEGRAM_ID'), 10),
  TELEGRAM_HASH: getPrivateVariable('TELEGRAM_HASH'),
  TELEGRAM_PHONE: getPrivateVariable('TELEGRAM_HASH'),
  session: 'session',
  dbUri: 'mongodb://localhost:27017/telegramBot',
};

export default config;
