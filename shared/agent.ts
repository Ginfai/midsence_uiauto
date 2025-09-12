import { AndroidAgent, AndroidDevice, getConnectedDevices } from '@midscene/android';
import { execSync } from 'child_process';
import "dotenv/config"; // read environment variables from .env file

export async function initializeAgent() {
  // 本地连接
  // const devices = await getConnectedDevices();
  // if (devices.length === 0) {
  //   throw new Error('No connected Android devices found.');
  // }
  // const page = new AndroidDevice(devices[0].udid);

  //adb无线调试
  console.log('Attempting to connect to remote ADB device...');
  execSync('adb connect 10.31.0.142:37451');
  console.log('ADB connect command executed.');
  const page = new AndroidDevice('adb-2a36f8ac-KKMVtI._adb-tls-connect._tcp');

  //  init Midscene agent
  const agent = new AndroidAgent(page, {
    aiActionContext:
      'If any location, permission, user agreement, etc. popup, click agree. If login page pops up, close it.',
  });
  await page.connect();

  return { agent, page };
}
