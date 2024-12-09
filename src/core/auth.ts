// @ts-ignore
import input from 'input';
import client from './client';

export async function authenticate() {
  const phoneNumber = await input.text('Enter your phone number: ');

  await client.start({
    phoneNumber: async () => phoneNumber,
    password: async () => await input.text('Enter your password (if exist): '),
    phoneCode: async () => await input.text('Enter your telegram code: '),
    onError: (err) => console.log(err),
  });
  console.log(client.session.save());
  console.log('You have been authorized!');
  await client.sendMessage('me', { message: 'Hello!' });
}
