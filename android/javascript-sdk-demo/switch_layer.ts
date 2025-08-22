// 导入 Midscene agent，具体导入方式取决于您的项目设置
// 例如: import { agent } from './agent-setup';
import { AndroidAgent, AndroidDevice, getConnectedDevices } from '@midscene/android';
import "dotenv/config";
/**
 * 脚本功能：
 * 1. 点击图层按钮
 * 2. 进入图层切换界面
 * 3. 选择并切换到系统图层
 * 4. 返回首页并验证切换是否成功
 */
async function switchSystemLayer() {
  try {
    // 步骤 1: 点击“图层”进入图层管理界面
    console.log('正在点击“图层”...');
    await agent.aiTap('图层');

    // 步骤 2: 在图层界面中，点击“系统图层”进行切换
    console.log('正在切换到“系统图层”...');
    await agent.aiTap('系统图层');

    // 步骤 3: 操作后返回首页
    // 注意：这里的“返回首页”是一个示例，您可能需要根据应用的实际UI元素进行调整，
    // 例如可能是“返回按钮”、“关闭按钮”或特定的图标。
    console.log('正在返回首页...');
    await agent.aiTap('返回首页');

    // 步骤 4: 断言首页的图层状态，确保已成功切换
    console.log('正在验证图层是否切换成功...');
    await agent.aiAssert(
      '当前已成功切换到系统图层', 
      '错误：切换系统图层失败或返回首页后状态不正确。'
    );

    console.log('任务成功完成：系统图层已成功切换并验证。');

  } catch (error) {
    console.error('自动化脚本执行失败:', error);
    // 在实际测试中，您可能希望在这里抛出错误以中断测试流程
    throw error;
  }
}

// 执行脚本
// switchSystemLayer();
