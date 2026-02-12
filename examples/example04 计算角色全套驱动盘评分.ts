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
      name: '沧浪行歌[3]',
      level: 15,
      rarity: 'S' as const,
      invalidProperty: 3,
      mainProperty: {
        name: '防御力',
        value: '184'
      },
      subProperties: [
        {
          name: '攻击力',
          value: '6%',
          level: 2,
          valid: true,
          add: 1
        },
        {
          name: '暴击率',
          value: '2.4%',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '攻击力',
          value: '57',
          level: 3,
          valid: false,
          add: 2
        },
        {
          name: '防御力',
          value: '9.6%',
          level: 2,
          valid: false,
          add: 1
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
      position: 5,
      name: '沧浪行歌[5]',
      level: 15,
      rarity: 'S' as const,
      invalidProperty: 1,
      mainProperty: {
        name: '物理伤害加成',
        value: '30%'
      },
      subProperties: [
        {
          name: '暴击率',
          value: '4.8%',
          level: 2,
          valid: true,
          add: 1
        },
        {
          name: '攻击力',
          value: '9%',
          level: 3,
          valid: true,
          add: 2
        },
        {
          name: '攻击力',
          value: '38',
          level: 2,
          valid: false,
          add: 1
        },
        {
          name: '防御力',
          value: '15',
          level: 1,
          valid: false,
          add: 0
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
console.log('角色全套驱动盘评分结果:');
console.log(`角色: ${testCharacterData.characterFullName}`);
console.log(`总评分: ${result.totalScore}`);
console.log('\n各部位评分:');
for (let i = 1; i <= 6; i++) {
  console.log(`位置${i}: ${result.discScores[i]}分`);
}
