import { AndroidAgent, AndroidDevice, getConnectedDevices } from '@midscene/android';
import "dotenv/config"; // read environment variables from .env file

export async function initializeAgent() {
  const devices = await getConnectedDevices();
  if (devices.length === 0) {
    throw new Error('No connected Android devices found.');
  }
  const page = new AndroidDevice(devices[0].udid);
  //const page = new AndroidDevice('YOUR_REMOTE_IP:PORT');

  //  init Midscene agent
  const agent = new AndroidAgent(page, {
    aiActionContext:
      'If any location, permission, user agreement, etc. popup, click agree. If login page pops up, close it.',
  });
  await page.connect();

  return { agent, page };
}
