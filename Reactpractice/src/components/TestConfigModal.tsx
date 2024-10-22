import { X } from 'lucide-react';
import { useState } from 'react';
import type { TestConfig, QuestionType, TestFormat, TestMode } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onStart: (config: TestConfig) => void;
}

export default function TestConfigModal({ isOpen, onClose, onStart }: Props) {
  const [config, setConfig] = useState<TestConfig>({
    chapters: [],
    format: 'CHAPTER_WISE',
    questionType: 'BOTH',
    mode: 'TEST',
    breakLargeQuestions: false,
  });

  if (!isOpen) return null;

  const chapters = [
    'Mathematical Analysis',
    'Linear Algebra',
    'Complex Analysis',
    'Differential Equations',
    'Abstract Algebra',
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Configure Your Test</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Chapters
            </label>
            <div className="space-y-2">
              {chapters.map((chapter) => (
                <label key={chapter} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={config.chapters.includes(chapter)}
                    onChange={(e) => {
                      setConfig(prev => ({
                        ...prev,
                        chapters: e.target.checked
                          ? [...prev.chapters, chapter]
                          : prev.chapters.filter(ch => ch !== chapter)
                      }));
                    }}
                  />
                  <span>{chapter}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Test Format
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={config.format}
              onChange={(e) => setConfig(prev => ({ ...prev, format: e.target.value as TestFormat }))}
            >
              <option value="CHAPTER_WISE">Chapter-wise</option>
              <option value="FULL_PAPER">Full Paper</option>
              <option value="PRACTICE">Practice Mode</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question Type
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={config.questionType}
              onChange={(e) => setConfig(prev => ({ ...prev, questionType: e.target.value as QuestionType }))}
            >
              <option value="MCQ">Multiple Choice Only</option>
              <option value="INTEGER">Integer Type Only</option>
              <option value="BOTH">Both Types</option>
            </select>
          </div>

          {config.format === 'CHAPTER_WISE' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Test Mode
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={config.mode}
                onChange={(e) => setConfig(prev => ({ ...prev, mode: e.target.value as TestMode }))}
              >
                <option value="TEST">Test Format</option>
                <option value="TEST_AND_LEARN">Test and Learn</option>
              </select>
            </div>
          )}

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                checked={config.breakLargeQuestions}
                onChange={(e) => setConfig(prev => ({ ...prev, breakLargeQuestions: e.target.checked }))}
              />
              <span className="text-sm text-gray-700">Break large questions into smaller ones</span>
            </label>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t flex justify-end space-x-3 rounded-b-lg">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => onStart(config)}
            disabled={config.chapters.length === 0}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
}