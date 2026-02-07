import { calculateDriveDiscScore } from '../rating_algorithm';

const testDriveDisc = {
  position: 4,
  name: '摇摆爵士[4]',
  level: 15,
  rarity: 'S' as const,
  invalidProperty: 0,
  mainProperty: {
    name: '暴击率',
    value: '12.0%'
  },
  subProperties: [
    {
      name: '暴击伤害',
      value: '6.4%',
      level: 1,
      valid: true,
      add: 0
    },
    {
      name: '暴击率',
      value: '3.2%',
      level: 1,
      valid: true,
      add: 0
    },
    {
      name: '攻击力',
      value: '5%',
      level: 1,
      valid: true,
      add: 0
    },
    {
      name: '生命值',
      value: '3%',
      level: 1,
      valid: false,
      add: 0
    }
  ]
};

const result = calculateDriveDiscScore(testDriveDisc, '叶瞬光');
console.log('驱动盘评分结果:');
console.log(`评分: ${result.score}`);
console.log(`副词条权重: ${result.subPropertiesWeight.toFixed(4)}`);
console.log(`主词条权重: ${result.mainPropertyWeight.toFixed(4)}`);
console.log(`品质权重: ${result.qualityWeight}`);
console.log(`等级权重: ${result.levelWeight}`);
console.log(`最大权重总和: ${result.maxWeightInfo.maxWeightSum.toFixed(4)}`);
console.log(`最大权重公式: ${result.maxWeightInfo.maxWeightFormula}`);
console.log(`有效副词条:`, result.validProperties);
console.log(`等级: ${result.gradeResult?.grade}, ${result.gradeResult?.gradeDesc}`);
