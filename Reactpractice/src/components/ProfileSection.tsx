import { BookOpen, Brain, Target, Trophy } from 'lucide-react';
import type { UserProgress } from '../types';

interface Props {
  progress: UserProgress;
}

export default function ProfileSection({ progress }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <div>
              <h3 className="font-semibold">Strong Topics</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {progress.strongTopics.map(topic => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Target className="w-6 h-6 text-red-500" />
            <div>
              <h3 className="font-semibold">Areas for Improvement</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {progress.weakTopics.map(topic => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            <div>
              <h3 className="font-semibold">Tests Completed</h3>
              <p className="text-2xl font-bold text-indigo-600">{progress.testsCompleted}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Brain className="w-6 h-6 text-green-500" />
            <div>
              <h3 className="font-semibold">Average Score</h3>
              <p className="text-2xl font-bold text-green-600">{progress.averageScore}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}