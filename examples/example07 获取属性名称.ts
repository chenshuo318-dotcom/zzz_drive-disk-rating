import { getPropertyName } from '../rating_algorithm';
import type { SubProperty} from '../types';

/**
 * 示例：获取属性名称（区分大属性和小属性）
 * 
 * 此示例展示如何使用 getPropertyName 函数处理不同类型的副词条
 * 函数会自动区分百分比属性（大属性）和数值属性（小属性）
 */

// 测试不同类型的副词条（使用 SubProperty 接口）
const testSubProperties: SubProperty[] = [
  // 大属性（百分比属性）
  { name: '攻击力', value: '9%', level: 3, valid: true, add: 2 },
  { name: '暴击率', value: '9.6%', level: 4, valid: true, add: 3 },
  { name: '暴击伤害', value: '14.4%', level: 3, valid: true, add: 2 },
  { name: '生命值', value: '5%', level: 1, valid: true, add: 0 },
  { name: '防御力', value: '4.8%', level: 1, valid: false, add: 0 },
  
  // 小属性（数值属性）
  { name: '攻击力', value: '19', level: 1, valid: false, add: 0 },
  { name: '生命值', value: '112', level: 1, valid: true, add: 0 },
  { name: '防御力', value: '62', level: 1, valid: false, add: 0 },
  
  // 其他属性（不受影响）
  { name: '异常精通', value: '9', level: 1, valid: false, add: 0 },
  { name: '穿透值', value: '9', level: 1, valid: false, add: 0 },
  { name: '能量自动回复', value: '12.0%', level: 1, valid: true, add: 0 },
];

console.log('=== 测试 getPropertyName 函数 ===\n');

testSubProperties.forEach((prop, index) => {
  const propertyName = getPropertyName(prop);
  const propertyType = propertyName !== prop.name ? '小属性' : '大属性';
  
  console.log(`测试 ${index + 1}:`);
  console.log(`  原始属性名: ${prop.name}`);
  console.log(`  属性值: ${prop.value}`);
  console.log(`  转换后属性名: ${propertyName}`);
  console.log(`  属性类型: ${propertyType}`);
  console.log('');
});

// 实际应用示例
console.log('=== 实际应用示例 ===\n');

const driveDiscSubProperties: SubProperty[] = [
  { name: '攻击力', value: '9%', level: 3, valid: true, add: 2 },
  { name: '攻击力', value: '19', level: 1, valid: false, add: 0 },
  { name: '暴击率', value: '9.6%', level: 4, valid: true, add: 3 },
  { name: '生命值', value: '3%', level: 1, valid: false, add: 0 },
];

console.log('驱动盘副词条处理结果：');
driveDiscSubProperties.forEach((prop, index) => {
  const propertyName = getPropertyName(prop);
  console.log(`  副词条${index + 1}: ${prop.name}(${prop.value}) -> ${propertyName}`);
});
