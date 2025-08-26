import type { AndroidAgent } from '@midscene/android';

/**
 * 脚本功能：
 * 1. 点击图层按钮
 * 2. 进入图层切换界面
 * 3. 选择并切换到系统图层
 * 4. 返回首页并验证切换是否成功
 */
export default async function (agent: AndroidAgent) {
  try {
    console.log('--- Running Switch Layer Test ---');
    // 步骤 1: 点击“图层”进入图层管理界面
    console.log('正在点击“图层”...');
    await agent.aiTap('界面右上角的图层按钮');

    // 步骤 2: 在图层界面中，点击“系统图层”进行切换
    console.log('正在切换到“系统图层”...');
    await agent.aiTap('高德影像图层');

    // 步骤 3: 操作后返回首页
    console.log('正在返回首页...');
    await agent.aiTap('返回首页');

    // 步骤 4: 断言首页的图层状态，确保已成功切换
    console.log('正在验证图层是否切换成功...');
    await agent.aiAssert(
      '界面右下角显示"高德软件有限公司的审图号"',
      '错误：切换系统图层失败或返回首页后状态不正确。'
    );

    console.log('✅ 任务成功完成：系统图层已成功切换并验证。');
  } catch (error) {
    console.error('❌ 自动化脚本执行失败:', error);
    // 在实际测试中，您可能希望在这里抛出错误以中断测试流程
    throw error;
  }
}
