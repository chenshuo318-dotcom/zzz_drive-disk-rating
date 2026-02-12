import { calculateGrade, MAX_DISK_SCORE } from '../rating_algorithm';

// 基于 MAX_DISK_SCORE 动态生成测试分数
const testScores = [
  MAX_DISK_SCORE,        
  MAX_DISK_SCORE * 0.9,  
  MAX_DISK_SCORE * 0.8,  
  MAX_DISK_SCORE * 0.7,  
  MAX_DISK_SCORE * 0.6,  
  MAX_DISK_SCORE * 0.5,  
  MAX_DISK_SCORE * 0.4,  
  MAX_DISK_SCORE * 0.3,  
  MAX_DISK_SCORE * 0.2,  
  MAX_DISK_SCORE * 0.1,  
  0                      // 0 (零分)
];

testScores.forEach(score => {
  const result = calculateGrade(score);
  console.log(`评分: ${score} -> 等级: ${result.grade}, 类名: ${result.gradeClass}, 描述: ${result.gradeDesc}`);
});
