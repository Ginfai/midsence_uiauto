// 通用工具函数
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const logSuccess = (message: string) => {
  console.log(`✅ ${message}`);
};

export const logError = (message: string) => {
  console.error(`❌ ${message}`);
};