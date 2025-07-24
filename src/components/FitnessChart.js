import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { crossoverMethods, selectionMethods } from '../data/fitnessData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const FitnessChart = ({ functionData, crossoverMethod = 'all', showSTS = true, showGreedy = true, chartType = 'bar' }) => {
  if (!functionData || !functionData.models) {
    return <div>No data available</div>;
  }

  // Separate models by selection method
  const stsModels = functionData.models.filter(model => model.selection === 'sts');
  const greedyModels = functionData.models.filter(model => model.selection === 'greedy');
  
  // Get unique model names for x-axis
  const allModelNames = [...new Set(functionData.models.map(model => model.model))];
  
  // Process data for STS
  const processStsData = () => {
    return allModelNames.map(modelName => {
      const model = stsModels.find(m => m.model === modelName);
      if (!model) return null;
      let value = model.avgLowestFitness;
      if (value === 0 || value < 1e-100) {
        value = 1e-100;
      }
      return value;
    });
  };

  // Process data for Greedy
  const processGreedyData = () => {
    return allModelNames.map(modelName => {
      const model = greedyModels.find(m => m.model === modelName);
      if (!model) return null;
      let value = model.avgLowestFitness;
      if (value === 0 || value < 1e-100) {
        value = 1e-100;
      }
      return value;
    });
  };

  const stsData = processStsData();
  const greedyData = processGreedyData();
  
  // Determine if we should use logarithmic scale
  const allValues = [...stsData, ...greedyData].filter(v => v !== null && v > 0);
  const maxValue = Math.max(...allValues);
  const minValue = Math.min(...allValues);
  const useLogScale = allValues.length > 0 && maxValue / minValue > 1000;

  const getCrossoverLabel = () => {
    if (crossoverMethod === 'all') {
      return 'All Crossover Methods';
    }
    return crossoverMethods[crossoverMethod] || 'Unknown Crossover';
  };

  const getVisibilityLabel = () => {
    if (showSTS && showGreedy) {
      return 'STS vs Greedy Comparison';
    } else if (showSTS) {
      return 'STS Selection Only';
    } else if (showGreedy) {
      return 'Greedy Selection Only';
    }
    return '';
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: chartType === 'line',
          pointStyle: chartType === 'line' ? 'circle' : 'rect'
        }
      },
      title: {
        display: true,
        text: `${functionData.name}`,
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const modelName = allModelNames[context.dataIndex];
            const isSTSDataset = context.datasetIndex === 0;
            const models = isSTSDataset ? stsModels : greedyModels;
            const model = models.find(m => m.model === modelName);
            
            if (!model) return '';
            
            const value = model.avgLowestFitness;
            const selectionType = isSTSDataset ? 'STS' : 'Greedy';
            
            let valueStr;
            if (value === 0) {
              valueStr = '0.00000E+00';
            } else if (value < 0.001 || value > 1000) {
              valueStr = value.toExponential(5);
            } else {
              valueStr = value.toFixed(6);
            }
            
            return `${selectionType}: ${valueStr}`;
          },
          afterLabel: function(context) {
            const modelName = allModelNames[context.dataIndex];
            const isSTSDataset = context.datasetIndex === 0;
            const models = isSTSDataset ? stsModels : greedyModels;
            const model = models.find(m => m.model === modelName);
            
            if (!model) return '';
            
            const labels = [];
            if (model.crossover) {
              labels.push(`Crossover: ${crossoverMethods[model.crossover] || model.crossover}`);
            }
            return labels;
          }
        }
      }
    },
    scales: {
      y: {
        type: useLogScale ? 'logarithmic' : 'linear',
        beginAtZero: !useLogScale,
        min: useLogScale ? 1e-100 : 0,
        title: {
          display: true,
          text: useLogScale ? 'Average Lowest Fitness Value (Log Scale)' : 'Average Lowest Fitness Value'
        },
        ticks: {
          callback: function(value) {
            if (value === 0) return '0';
            if (value < 0.001 || value > 1000) {
              return value.toExponential(0);
            }
            return value.toFixed(2);
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'DE Models'
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45
        }
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart'
    },
    // Line chart specific options
    ...(chartType === 'line' && {
      elements: {
        line: {
          tension: 0.2, // Smooth curves
        },
        point: {
          radius: 5,
          hoverRadius: 8,
        }
      }
    })
  };

  // Create datasets
  const datasets = [];
  
  if (showSTS && stsModels.length > 0) {
    datasets.push({
      label: 'STS Selection',
      data: stsData,
      backgroundColor: chartType === 'bar' ? 'rgba(54, 162, 235, 0.6)' : 'rgba(54, 162, 235, 0.1)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: chartType === 'bar' ? 1.5 : 3,
      borderRadius: chartType === 'bar' ? 4 : undefined,
      borderSkipped: chartType === 'bar' ? false : undefined,
      fill: chartType === 'line' ? false : undefined,
      pointBackgroundColor: chartType === 'line' ? 'rgba(54, 162, 235, 1)' : undefined,
      pointBorderColor: chartType === 'line' ? 'rgba(54, 162, 235, 1)' : undefined,
      pointBorderWidth: chartType === 'line' ? 2 : undefined,
    });
  }
  
  if (showGreedy && greedyModels.length > 0) {
    datasets.push({
      label: 'Greedy Selection',
      data: greedyData,
      backgroundColor: chartType === 'bar' ? 'rgba(40, 167, 69, 0.6)' : 'rgba(40, 167, 69, 0.1)',
      borderColor: 'rgba(40, 167, 69, 1)',
      borderWidth: chartType === 'bar' ? 1.5 : 3,
      borderRadius: chartType === 'bar' ? 4 : undefined,
      borderSkipped: chartType === 'bar' ? false : undefined,
      fill: chartType === 'line' ? false : undefined,
      pointBackgroundColor: chartType === 'line' ? 'rgba(40, 167, 69, 1)' : undefined,
      pointBorderColor: chartType === 'line' ? 'rgba(40, 167, 69, 1)' : undefined,
      pointBorderWidth: chartType === 'line' ? 2 : undefined,
    });
  }

  const data = {
    labels: allModelNames,
    datasets: datasets,
  };

  // Choose the appropriate chart component
  const ChartComponent = chartType === 'bar' ? Bar : Line;

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>{functionData.name}</h3>
        <div className="function-description">
          <InlineMath math={functionData.description.replace(/\$/g, '')} />
        </div>
      </div>
      <div className="chart-wrapper">
        <ChartComponent options={options} data={data} />
      </div>
    </div>
  );
};

export default FitnessChart; 