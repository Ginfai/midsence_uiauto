import type { AndroidAgent } from '@midscene/android';

export default async function (agent: AndroidAgent) {
    try{
        await agent.aiAction(
            '进入图层设置，切换到高德卫星影像图层，返回首页'
        )
        await agent.aiAssert('首页右下角显示遥感卫星影像字样')
    }catch(error){
        console.error('❌ 自动化脚本执行失败:', error);
        throw error;
    }
}