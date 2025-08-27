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
    const systemLayers = [
      { name: '中科星图图层', verification: '界面右下角显示中科星图的审图号' },
      { name: '高德地形图层', verification: '界面右下角显示高德软件有限公司的审图号' },
      { name: '长光卫星图层', verification: '界面右下角显示长光卫星技术卫星图审图号' },
      { name: '天地图图层', verification: '界面右下角显示国家基础地理信息中心审图号' },
    ]
    // 步骤 1: 点击“图层”进入图层管理界面
    console.log('正在点击“图层”...');
    await agent.aiTap('界面右上角的图层按钮');
    for (const layer of systemLayers) {
      try {

        // 步骤 2: 在图层界面中，点击“系统图层”进行切换
        console.log(`正在切换到${layer.name}...`);
        await agent.aiTap(`${layer.name}`);
        // 步骤 3: 操作后返回首页
        console.log('正在返回首页...');
        await agent.aiTap('返回首页');
        // 步骤 4: 断言首页的图层状态，确保已成功切换
        console.log('正在验证图层是否切换成功...');
        await agent.aiAssert(`${layer.verification}`,
          '错误：切换系统图层失败或返回首页后状态不正确。'
        );
        console.log(`✅ 任务成功完成：${layer.name}已成功切换并验证。`);
        if (layer !== systemLayers[systemLayers.length - 1]) {
          console.log('正在切换到下一个图层...');
          await agent.aiTap('界面右上角的图层按钮');
        }
      } catch (error) {
        console.error(`切换图层${layer.name}失败:`, error);
        throw error;
      }
    }
    console.log('所有系统图层已经切换完成')
  } catch (error) {
    console.error('❌ 自动化脚本执行失败:', error);
    // 在实际测试中，您可能希望在这里抛出错误以中断测试流程
    throw error;
  }
}
