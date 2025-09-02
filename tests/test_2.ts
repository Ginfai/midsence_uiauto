import type { AndroidAgent } from '@midscene/android';
export default async function (agent: AndroidAgent) {
    try{
        console.log('正在点击日期（历史影像）按钮')
        await agent.ai('点击日期按钮，进入历史影像，拖动底部时间轴的蓝色箭头')
        console.log('执行断言')
        await agent.aiAssert('屏幕中心显示历史影像图片')
    }catch(error){
        console.error('历史影像脚本执行失败',error)
        throw error;
    }
}