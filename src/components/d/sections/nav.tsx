import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, Plus, Database } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

interface NavProps {
  onShowDocs: () => void;
  onNewBucket: () => void;
  onNewData: () => void;
}

export const Nav: React.FC<NavProps> = ({ onShowDocs, onNewBucket, onNewData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full py-6 px-4 backdrop-blur-lg border-b ${
      isDark ? 'bg-black/50 border-white/10' : 'bg-white/50 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className={`text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent`}>
            DataHub
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/datahub')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              location.pathname === '/datahub'
                ? 'bg-blue-500 text-white'
                : isDark
                  ? 'hover:bg-white/10 text-white'
                  : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <Home className="w-4 h-4" />
            Home
          </button>

          <button
            onClick={onShowDocs}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isDark
                ? 'hover:bg-white/10 text-white'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            Docs
          </button>

          <button
            onClick={onNewBucket}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all`}
          >
            <Database className="w-4 h-4" />
            New Bucket
          </button>

          <button
            onClick={onNewData}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:opacity-90 transition-all`}
          >
            <Plus className="w-4 h-4" />
            New Data
          </button>
        </div>
      </div>
    </div>
  );
};