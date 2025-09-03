// utils/imageHelper.js
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function getImagePath(filename:string) {
  return join(__dirname, '../tests/images', filename);
}

export function getImagePathWithCheck(filename:string) {
  const imagePath = join(__dirname, '../tests/images', filename);
  
  //检查文件是否存在
  if (!existsSync(imagePath)) {
    throw new Error(`图片文件不存在: ${imagePath}`);
  }
  
  return imagePath;
}