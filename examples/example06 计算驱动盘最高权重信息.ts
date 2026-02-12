import { calculateMaxWeightInfo, getCharacterWeights } from '../rating_algorithm';

/**
 * 示例：计算驱动盘最高权重信息
 * 
 * 此示例展示如何使用 calculateMaxWeightInfo 函数计算不同位置驱动盘的最高权重信息
 * 最高权重信息包括：副词条最大权重、主属性最大权重、最大权重总和和计算公式
 */

// 获取叶瞬光的权重配置
const characterName = '叶瞬光';
const weightConfig = getCharacterWeights(characterName);

console.log(`=== 计算 ${characterName} 的驱动盘最高权重信息 ===\n`);

// 计算每个位置的最高权重信息
for (let position = 1; position <= 6; position++) {
  const maxWeightInfo = calculateMaxWeightInfo(position, weightConfig);
  
  console.log(`位置${position}:`);
  console.log(`  副词条最大权重: ${maxWeightInfo.subPropertyMax.toFixed(4)}`);
  console.log(`  主属性最大权重: ${maxWeightInfo.mainPropertyMax.toFixed(4)}`);
  console.log(`  最大权重总和: ${maxWeightInfo.maxWeightSum.toFixed(4)}`);
  console.log(`  计算公式: ${maxWeightInfo.maxWeightFormula}`);
  console.log('');
}

// 示例：计算不同角色的驱动盘最高权重信息
console.log('=== 计算不同角色的驱动盘最高权重信息 ===\n');

const testCharacters = ['叶瞬光', '照', '悠真', '妮可'];
const testPosition = 5; // 选择一个固定位置进行比较

testCharacters.forEach(charName => {
  const charWeightConfig = getCharacterWeights(charName);
  const maxWeightInfo = calculateMaxWeightInfo(testPosition, charWeightConfig);
  
  console.log(`${charName} (位置${testPosition}):`);
  console.log(`  最大权重总和: ${maxWeightInfo.maxWeightSum.toFixed(4)}`);
  console.log(`  计算公式: ${maxWeightInfo.maxWeightFormula}`);
  console.log('');
});
