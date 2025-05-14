import React from 'react';
import { Database, Clock, Settings } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

interface DataShowProps {
  bucket: {
    id: string;
    name: string;
    config: any;
    created_at: string;
    updated_at: string;
  };
}

export const DataShow: React.FC<DataShowProps> = ({ bucket }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`p-6 rounded-xl ${
      isDark ? 'bg-white/5' : 'bg-white'
    } border ${
      isDark ? 'border-white/10' : 'border-gray-200'
    }`}>
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <Database className={`w-6 h-6 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`} />
          <h2 className={`text-xl font-semibold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {bucket.name}
          </h2>
        </div>
        <button className={`p-2 rounded-lg transition-all ${
          isDark
            ? 'hover:bg-white/10 text-gray-400'
            : 'hover:bg-gray-100 text-gray-600'
        }`}>
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div className={`p-4 rounded-lg ${
          isDark ? 'bg-black/30' : 'bg-gray-50'
        }`}>
          <h3 className={`text-sm font-medium mb-2 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Configuration
          </h3>
          <pre className={`text-sm ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {JSON.stringify(bucket.config, null, 2)}
          </pre>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className={`w-4 h-4 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`} />
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Created: {new Date(bucket.created_at).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className={`w-4 h-4 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`} />
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Updated: {new Date(bucket.updated_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};