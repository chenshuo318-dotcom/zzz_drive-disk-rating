import { calculateCharacterTotalScore } from '../rating_algorithm';

const testCharacterData = {
  characterName: '叶瞬光',
  characterFullName: '叶瞬光',
  level: 60,
  profession: 1,
  driveDiscs: [
    {
      position: 1,
      name: '沧浪行歌[1]',
      level: 15,
      rarity: 'S' as const,
      invalidProperty: 0,
      mainProperty: {
        name: '生命值',
        value: '2200'
      },
      subProperties: [
        {
          name: '攻击力',
          value: '9%',
          level: 3,
          valid: true,
          add: 2
        },
        {
          name: '攻击力',
          value: '19',
          level: 1,
          valid: false,
          add: 0
        },
        {
          name: '暴击率',
          value: '9.6%',
          level: 4,
          valid: true,
          add: 3
        },
        {
          name: '生命值',
          value: '3%',
          level: 1,
          valid: false,
          add: 0
        }
      ]
    },
    {
      position: 2,
      name: '折枝剑歌[2]',
      level: 15,
      rarity: 'S' as const,
      invalidProperty: 1,
      mainProperty: {
        name: '攻击力',
        value: '316'
      },
      subProperties: [
        {
          name: '暴击率',
          value: '2.4%',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '暴击伤害',
          value: '14.4%',
          level: 3,
          valid: true,
          add: 2
        },
        {
          name: '攻击力',
          value: '6%',
          level: 2,
          valid: true,
          add: 1
        },
        {
          name: '生命值',
          value: '224',
          level: 2,
          valid: false,
          add: 1
        }
      ]
    },
    {
      position: 3,
      name: '无效驱动盘[3]',
      level: 15,
      rarity: 'S' as const,
      invalidProperty: 0,
      mainProperty: {
        name: '防御力',
        value: '184'
      },
      subProperties: [
        {
          name: '防御力',
          value: '9%',
          level: 3,
          valid: true,
          add: 2
        },
        {
          name: '生命值',
          value: '19',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '防御力',
          value: '9.6%',
          level: 4,
          valid: true,
          add: 3
        },
        {
          name: '生命值',
          value: '3%',
          level: 1,
          valid: true,
          add: 0
        }
      ]
    },
    {
      position: 4,
      name: '沧浪行歌[4]',
      level: 15,
      rarity: 'S' as const,
      invalidProperty: 2,
      mainProperty: {
        name: '暴击率',
        value: '24%'
      },
      subProperties: [
        {
          name: '攻击力',
          value: '9%',
          level: 3,
          valid: true,
          add: 2
        },
        {
          name: '异常精通',
          value: '9',
          level: 1,
          valid: false,
          add: 0
        },
        {
          name: '暴击伤害',
          value: '4.8%',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '防御力',
          value: '14.4%',
          level: 3,
          valid: false,
          add: 2
        }
      ]
    },
    {
      position: 6,
      name: '折枝剑歌[6]',
      level: 0,
      rarity: 'A' as const,
      invalidProperty: 0,
      mainProperty: {
        name: '异常掌控',
        value: '5%'
      },
      subProperties: [
        {
          name: '攻击力',
          value: '2%',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '暴击伤害',
          value: '3.2%',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '暴击率',
          value: '1.6%',
          level: 1,
          valid: true,
          add: 0
        }
      ]
    }
  ]
};

const result = calculateCharacterTotalScore(testCharacterData);
console.log('角色全套驱动盘评分结果（测试区分缺失和无效驱动盘）:');
console.log(`角色: ${testCharacterData.characterFullName}`);
console.log(`总评分: ${result.totalScore}`);
console.log('\n各部位评分:');
for (let i = 1; i <= 6; i++) {
  const score = result.discScores[i];
  const discDetail = result.discDetails.find(detail => detail.position === i);
  const status = !discDetail ? ' (缺失)' : '';
  console.log(`位置${i}: ${score}分${status}`);
}

console.log('\n驱动盘详细信息:');
result.discDetails.forEach(detail => {
  console.log(`\n位置${detail.position} - ${detail.name} (${detail.rarity}级, Lv.${detail.level})`);
  console.log(`  主词条: ${detail.mainProperty.name} (${detail.mainProperty.value})`);
  console.log(`  评分: ${detail.score}分`);
});

console.log('\n测试说明:');
console.log('- 位置3: 存在驱动盘但属性全为防御力和生命值，对叶瞬光无效，评分为0分');
console.log('- 位置5: 真正缺失驱动盘，评分为0分');
