import type { AndroidAgent } from '@midscene/android';

export default async function (agent: AndroidAgent) {
    try{
        await agent.aiAction(
            '点击右下角的文件夹按钮，搜索名称为厦门的文件，断言：若出现关键字"澳门",则点击该文件，否则断言结果为失败'
        )
    }catch(error){
        console.error('❌ 自动化脚本执行失败:', error);
        throw error;
    }
}