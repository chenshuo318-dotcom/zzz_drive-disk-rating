import { getCharacterWeights, getConfiguredCharacters } from '../rating_algorithm';

const characters = getConfiguredCharacters();
console.log('已配置的角色列表:', characters);

const testCharacters = ['叶瞬光', '照', '悠真', '妮可', '星见雅'];

testCharacters.forEach(characterName => {
  const weights = getCharacterWeights(characterName);
  console.log(`\n角色: ${characterName}`);
  console.log('权重配置:', weights);
});
