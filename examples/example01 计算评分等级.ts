import { calculateGrade } from '../rating_algorithm';

const testScores = [98, 95, 92, 85, 75, 65, 55, 45, 35, 0];

testScores.forEach(score => {
  const result = calculateGrade(score);
  console.log(`评分: ${score} -> 等级: ${result.grade}, 类名: ${result.gradeClass}, 描述: ${result.gradeDesc}`);
});
