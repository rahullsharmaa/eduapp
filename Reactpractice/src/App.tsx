import { useState } from 'react';
import { BookOpen, Clock, GraduationCap } from 'lucide-react';
import Navbar from './components/Navbar';
import TestConfigModal from './components/TestConfigModal';
import ProfileSection from './components/ProfileSection';
import type { TestConfig, UserProgress } from './types';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock user progress data
  const userProgress: UserProgress = {
    strongTopics: ['Linear Algebra', 'Complex Analysis'],
    weakTopics: ['Abstract Algebra', 'Differential Equations'],
    testsCompleted: 15,
    averageScore: 78.5
  };

  const handleStartTest = (config: TestConfig) => {
    console.log('Starting test with config:', config);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Master IIT JAM with Firstque
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive preparation through previous year questions, full-length papers, and adaptive practice modes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-12 h-12 text-indigo-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Chapter-wise Practice</h2>
            <p className="text-gray-600 mb-4">
              Master topics one by one with focused practice sessions
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-indigo-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Full Length Papers</h2>
            <p className="text-gray-600 mb-4">
              20 years of previous papers for real exam simulation
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-indigo-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Adaptive Learning</h2>
            <p className="text-gray-600 mb-4">
              Personalized feedback and progress tracking
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transform transition hover:scale-105"
          >
            Start Practicing Now
          </button>
        </div>

        <ProfileSection progress={userProgress} />
      </main>

      <TestConfigModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStart={handleStartTest}
      />
    </div>
  );
}