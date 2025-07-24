import React from 'react';
import { crossoverMethods } from '../data/fitnessData';

const CrossoverNavigation = ({ 
  activeCrossover, 
  onCrossoverChange
}) => {
  const crossoverButtons = [
    { key: 'all', label: 'All Crossovers', description: 'Show all available crossover methods' },
    { key: 'exponential', label: 'Exponential', description: crossoverMethods.exponential },
    { key: 'binomial', label: 'Binomial', description: crossoverMethods.binomial },
    { key: 'onepoint', label: 'One Point', description: crossoverMethods.onepoint },
    { key: 'twopoint', label: 'Two Point', description: crossoverMethods.twopoint }
  ];

  return (
    <div className="crossover-navigation">
      {/* Crossover Methods Section */}
      <div className="navigation-section">
        <div className="navigation-header">
          <h2>Crossover Methods</h2>
          <p>Select a crossover method to filter the results</p>
        </div>
        <div className="navigation-buttons">
          {crossoverButtons.map(button => (
            <button
              key={button.key}
              className={`navigation-button crossover-button ${activeCrossover === button.key ? 'active' : ''}`}
              onClick={() => onCrossoverChange(button.key)}
              title={button.description}
            >
              <span className="button-label">{button.label}</span>
              {button.key !== 'all' && (
                <span className="button-description">{button.description}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filter Info */}
      <div className="active-filter-info">
        <div className="filter-summary">
          <div className="filter-item">
            <strong>Crossover:</strong> {' '}
            {activeCrossover === 'all' 
              ? 'All methods' 
              : crossoverButtons.find(btn => btn.key === activeCrossover)?.label || 'Unknown'
            }
          </div>
        </div>
        
        {activeCrossover !== 'exponential' && activeCrossover !== 'all' && (
          <p className="data-status">
            <em>Note: Results for {activeCrossover} crossover will be available once research data is imported.</em>
          </p>
        )}
      </div>
    </div>
  );
};

export default CrossoverNavigation; 