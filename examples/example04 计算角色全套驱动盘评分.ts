import { calculateCharacterTotalScore } from '../rating_algorithm';

const testCharacterData = {
  characterName: '照',
  characterFullName: '照',
  level: 50,
  profession: 5,
  driveDiscs: [
    {
      position: 1,
      name: '摇摆爵士[1]',
      level: 0,
      rarity: 'S' as const,
      invalidProperty: 0,
      mainProperty: {
        name: '生命值',
        value: '550'
      },
      subProperties: [
        {
          name: '暴击率',
          value: '2.4%',
          level: 1,
          valid: false,
          add: 0
        },
        {
          name: '攻击力',
          value: '19',
          level: 1,
          valid: false,
          add: 0
        },
        {
          name: '生命值',
          value: '3%',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '防御力',
          value: '4.8%',
          level: 1,
          valid: false,
          add: 0
        }
      ]
    },
    {
      position: 2,
      name: '摇摆爵士[2]',
      level: 0,
      rarity: 'S' as const,
      invalidProperty: 0,
      mainProperty: {
        name: '攻击力',
        value: '79'
      },
      subProperties: [
        {
          name: '生命值',
          value: '112',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '穿透值',
          value: '9',
          level: 1,
          valid: false,
          add: 0
        },
        {
          name: '生命值',
          value: '3%',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '防御力',
          value: '4.8%',
          level: 1,
          valid: false,
          add: 0
        }
      ]
    },
    {
      position: 3,
      name: '摇摆爵士[3]',
      level: 0,
      rarity: 'S' as const,
      invalidProperty: 0,
      mainProperty: {
        name: '防御力',
        value: '62'
      },
      subProperties: [
        {
          name: '暴击率',
          value: '2.4%',
          level: 1,
          valid: false,
          add: 0
        },
        {
          name: '攻击力',
          value: '19',
          level: 1,
          valid: false,
          add: 0
        },
        {
          name: '生命值',
          value: '3%',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '防御力',
          value: '4.8%',
          level: 1,
          valid: false,
          add: 0
        }
      ]
    },
    {
      position: 4,
      name: '摇摆爵士[4]',
      level: 15,
      rarity: 'S' as const,
      invalidProperty: 0,
      mainProperty: {
        name: '能量自动回复',
        value: '12.0%'
      },
      subProperties: [
        {
          name: '生命值',
          value: '5%',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '生命值',
          value: '112',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '暴击率',
          value: '3.2%',
          level: 1,
          valid: false,
          add: 0
        },
        {
          name: '防御力',
          value: '4.8%',
          level: 1,
          valid: false,
          add: 0
        }
      ]
    },
    {
      position: 5,
      name: '摇摆爵士[5]',
      level: 15,
      rarity: 'S' as const,
      invalidProperty: 0,
      mainProperty: {
        name: '生命值',
        value: '12.0%'
      },
      subProperties: [
        {
          name: '生命值',
          value: '5%',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '生命值',
          value: '112',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '暴击率',
          value: '3.2%',
          level: 1,
          valid: false,
          add: 0
        },
        {
          name: '防御力',
          value: '4.8%',
          level: 1,
          valid: false,
          add: 0
        }
      ]
    },
    {
      position: 6,
      name: '摇摆爵士[6]',
      level: 15,
      rarity: 'S' as const,
      invalidProperty: 0,
      mainProperty: {
        name: '能量自动回复',
        value: '12.0%'
      },
      subProperties: [
        {
          name: '生命值',
          value: '5%',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '生命值',
          value: '112',
          level: 1,
          valid: true,
          add: 0
        },
        {
          name: '暴击率',
          value: '3.2%',
          level: 1,
          valid: false,
          add: 0
        },
        {
          name: '防御力',
          value: '4.8%',
          level: 1,
          valid: false,
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
