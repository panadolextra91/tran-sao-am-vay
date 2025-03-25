import React from 'react';
import TopBarWhite from './components/TopBarWhite';

const Survey = () => {
  return (
    <div className="min-h-screen bg-[var(--custom-red)]">
      <TopBarWhite />
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="max-w-3xl mx-auto bg-[var(--custom-yellow)] p-8 rounded-lg shadow-lg">
          <div className="text-center text-[var(--custom-red)]" style={{ fontFamily: 'Ale, serif' }}>
            <h1 className="text-3xl font-bold mb-4">The survey will be available here</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
