import React from 'react';
import { BarChart3, Users, Database, Activity } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

interface OverviewProps {
  bucket: {
    id: string;
    name: string;
    config: any;
  };
}

export const Overview: React.FC<OverviewProps> = ({ bucket }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const stats = [
    {
      label: 'Total Records',
      value: '1,234',
      icon: Database,
      color: 'text-blue-500'
    },
    {
      label: 'Active Users',
      value: '56',
      icon: Users,
      color: 'text-green-500'
    },
    {
      label: 'API Requests',
      value: '89.2k',
      icon: Activity,
      color: 'text-purple-500'
    },
    {
      label: 'Data Usage',
      value: '2.1 GB',
      icon: BarChart3,
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl ${
              isDark ? 'bg-white/5' : 'bg-white'
            } border ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${
                isDark ? 'bg-black/30' : 'bg-gray-50'
              }`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </p>
                <p className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};