import { getImagePath,getImagePathWithCheck } from '../shared/image_utils.js';
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
    await agent.ai('打开搜索，输入坐标118.167579 24.526063，点击GCJ02的坐标，然后点击底部的返回按钮来关闭底部弹窗')

    const normalUserLayers = [
      { name: '中科星图', image: getImagePath('中科.jpg') },
      { name: '长光卫星 (全国)', image: getImagePath('长光.jpg') },
      { name: '天地图', image: getImagePath('天地图.jpg') },
      { name: '高德影像', image: getImagePath('高德.jpg') },
    ];

    const whitelistUserLayers = [
      { name: '中科星图', image: getImagePath('中科.jpg') },
      { name: '长光卫星(全国)', image: getImagePath('长光.jpg') },
      { name: '天地图', image: getImagePath('天地图.jpg') },
      { name: '高德影像', image: getImagePath('高德.jpg') },
      { name: '图层特效3', image: getImagePath('特效3.jpg') },
      { name: '图层特效2', image: getImagePath('特效2.jpg') },
      { name: '遥感卫星数据', image: getImagePath('遥感.jpg') },
      { name: '图层特效优选', image: getImagePath('优选.jpg') },
    ];

    console.log('进入图层界面...');
    await agent.aiTap('界面右上角的图层按钮');
    const isWhitelistUser = await agent.aiBoolean('是否存在图"源服务"');
    console.log(`检测到用户类型: ${isWhitelistUser ? '白名单用户' : '普通用户'}`);
    const layersToTest = isWhitelistUser ? whitelistUserLayers : normalUserLayers;

    for (const layer of layersToTest) {
      try {
        console.log(`正在切换到${layer.name}...`);
        await agent.aiTap(layer.name);
      
        console.log('正在返回首页...');
        await agent.aiTap('返回');
     
        console.log('正在验证图层是否切换成功...');
        try {
          await agent.aiAssert(
            {
              prompt:'界面的卫星图像与指定图像一致',
              images:[
                {
                  name: layer.name,
                  url: layer.image
                }
              ]
            }
          )
        } catch (error) {
          console.error(`断言失败: ${layer.name} -`, error);
        }
  
        if (layer !== layersToTest[layersToTest.length - 1]) {
          console.log('正在切换到下一个图层...');
          await agent.aiTap('界面右上角的图层按钮');
        }
      } catch (error) {
        console.error(`切换图层${layer.name}失败:`, error);
      }
    }
    console.log('所有系统图层已经切换完成')
  } catch (error) {
    console.error('自动化脚本执行失败:', error);
    throw error;
  }
}
