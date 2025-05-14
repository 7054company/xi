import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from './nav';
import { Overview } from './overview';
import { DataShow } from './datashow';
import { getBucketById } from '../api';
import { useTheme } from '../../../contexts/ThemeContext';

interface Bucket {
  id: string;
  name: string;
  config: any;
  created_at: string;
  updated_at: string;
}

export const SinglePage = () => {
  const { id } = useParams<{ id: string }>();
  const [bucket, setBucket] = useState<Bucket | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<'overview' | 'data' | 'docs'>('overview');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const fetchBucket = async () => {
      try {
        if (id) {
          const data = await getBucketById(id);
          setBucket(data);
        }
      } catch (error) {
        console.error('Error fetching bucket:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBucket();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!bucket) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className={isDark ? 'text-white' : 'text-gray-900'}>Bucket not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Nav
        onShowDocs={() => setActiveSection('docs')}
        onNewBucket={() => {}}
        onNewData={() => {}}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {activeSection === 'overview' && <Overview bucket={bucket} />}
          {activeSection === 'data' && <DataShow bucket={bucket} />}
          {/* Add Docs component when needed */}
        </div>
      </div>
    </div>
  );
};