import React, { useState } from 'react';
import './App.css';
import FitnessChart from './components/FitnessChart';
import CrossoverNavigation from './components/CrossoverNavigation';
import { 
  getFunctionNames, 
  getFunctionDataByCrossoverAndSelection,
  getAllFunctionData 
} from './data/fitnessData';

function App() {
  const [activeCrossover, setActiveCrossover] = useState('exponential');
  const [showSTS, setShowSTS] = useState(true);
  const [showGreedy, setShowGreedy] = useState(true);
  const [chartType, setChartType] = useState('bar');
  const functionNames = getFunctionNames();

  const handleCrossoverChange = (crossoverMethod) => {
    setActiveCrossover(crossoverMethod);
  };

  const handleToggleSTS = () => {
    setShowSTS(!showSTS);
  };

  const handleToggleGreedy = () => {
    setShowGreedy(!showGreedy);
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  const getFilteredData = () => {
    const filteredData = {};
    
    if (activeCrossover === 'all') {
      // For "all", we need to combine data from all crossover methods
      functionNames.forEach(functionName => {
        const combinedModels = [];
        
        // Get STS data from all crossover methods
        if (showSTS) {
          ['exponential', 'binomial', 'onepoint', 'twopoint'].forEach(crossover => {
            const stsData = getFunctionDataByCrossoverAndSelection(crossover, 'sts', functionName);
            if (stsData && stsData.models) {
              combinedModels.push(...stsData.models);
            }
          });
        }
        
        // Get Greedy data from all crossover methods
        if (showGreedy) {
          ['exponential', 'binomial', 'onepoint', 'twopoint'].forEach(crossover => {
            const greedyData = getFunctionDataByCrossoverAndSelection(crossover, 'greedy', functionName);
            if (greedyData && greedyData.models) {
              combinedModels.push(...greedyData.models);
            }
          });
        }
        
        if (combinedModels.length > 0) {
          const baseData = getFunctionDataByCrossoverAndSelection('exponential', 'sts', functionName);
          if (baseData) {
            filteredData[functionName] = {
              name: baseData.name,
              description: baseData.description,
              models: combinedModels
            };
          }
        }
      });
    } else {
      // For specific crossover method, get both STS and Greedy data
      functionNames.forEach(functionName => {
        const combinedModels = [];
        
        if (showSTS) {
          const stsData = getFunctionDataByCrossoverAndSelection(activeCrossover, 'sts', functionName);
          if (stsData && stsData.models) {
            combinedModels.push(...stsData.models);
          }
        }
        
        if (showGreedy) {
          const greedyData = getFunctionDataByCrossoverAndSelection(activeCrossover, 'greedy', functionName);
          if (greedyData && greedyData.models) {
            combinedModels.push(...greedyData.models);
          }
        }
        
        if (combinedModels.length > 0) {
          const baseData = getFunctionDataByCrossoverAndSelection(activeCrossover, showSTS ? 'sts' : 'greedy', functionName) ||
                           getFunctionDataByCrossoverAndSelection('exponential', 'sts', functionName);
          if (baseData) {
            filteredData[functionName] = {
              name: baseData.name,
              description: baseData.description,
              models: combinedModels
            };
          }
        }
      });
    }
    
    return filteredData;
  };

  const filteredData = getFilteredData();
  const hasData = Object.keys(filteredData).length > 0;

  const getFilterDescription = () => {
    const crossoverDesc = activeCrossover === 'all' ? 'all crossover methods' : `${activeCrossover} crossover`;
    const selectionDesc = showSTS && showGreedy ? 'STS and Greedy selection' :
                         showSTS ? 'STS selection only' :
                         showGreedy ? 'Greedy selection only' : 'no selection methods';
    const chartDesc = chartType === 'bar' ? 'bar charts' : 'line charts';
    return `${crossoverDesc} with ${selectionDesc} displayed as ${chartDesc}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Differential Evolution Research</h1>
        <p>Comparison of DE Models across Various Fitness Functions, Crossover Methods, and Selection Strategies</p>
      </header>
      
      <main className="dashboard-content">
        {/* Minimalist Chart Controls - Top Right */}
        <div className="chart-controls-minimal">
          {/* Crossover Selection */}
          <div className="control-group">
            <CrossoverNavigation 
              activeCrossover={activeCrossover}
              onCrossoverChange={handleCrossoverChange}
            />
          </div>
          {/* Chart Type Toggle */}
          <div className="control-group">
            <button
              className={`control-btn ${chartType === 'bar' ? 'active' : ''}`}
              onClick={() => handleChartTypeChange('bar')}
              title="Bar Chart"
            >
              📊
            </button>
            <button
              className={`control-btn ${chartType === 'line' ? 'active' : ''}`}
              onClick={() => handleChartTypeChange('line')}
              title="Line Chart"
            >
              📈
            </button>
          </div>

          {/* Selection Toggles */}
          <div className="control-group">
            <button
              className={`control-btn ${showSTS ? 'active sts' : ''}`}
              onClick={handleToggleSTS}
              title="Toggle STS Selection"
            >
              STS
            </button>
            <button
              className={`control-btn ${showGreedy ? 'active greedy' : ''}`}
              onClick={handleToggleGreedy}
              title="Toggle Greedy Selection"
            >
              GRD
            </button>
          </div>
        </div>

        {/* Content Area */}
        {hasData ? (
          <div className="charts-grid">
            {Object.entries(filteredData).map(([functionName, functionData]) => (
              <div key={`${functionName}-${activeCrossover}-${showSTS}-${showGreedy}-${chartType}`} className="chart-item">
                <FitnessChart 
                  functionData={functionData} 
                  crossoverMethod={activeCrossover}
                  showSTS={showSTS}
                  showGreedy={showGreedy}
                  chartType={chartType}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-data-message">
            <div className="no-data-content">
              <h3>No Data</h3>
              <p>Insert data</p>
            </div>
          </div>
        )}
      </main>
      
      <footer className="App-footer">
        <p>
          Displaying average lowest fitness values for 10 different DE models 
          using {getFilterDescription()}
        </p>
      </footer>
    </div>
  );
}

export default App;
