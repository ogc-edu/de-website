# Differential Evolution Research Dashboard

A modern React-based web application for visualizing and comparing the performance of different Differential Evolution (DE) algorithms across various benchmark fitness functions.

## Features

- **Interactive Charts**: Visual comparison of 10 different DE models using Chart.js
- **Multiple Fitness Functions**: Displays results for 6 benchmark functions:
  - Sphere Function
  - Rosenbrock Function
  - Rastrigin Function
  - Griewank Function
  - Ackley Function
  - Schwefel Function
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Research-Focused**: Specifically designed for academic research presentation

## DE Models Compared

The dashboard compares the following Differential Evolution variants:

1. **DE/rand/1** - Random base vector with one difference vector
2. **DE/best/1** - Best base vector with one difference vector
3. **DE/rand/2** - Random base vector with two difference vectors
4. **DE/best/2** - Best base vector with two difference vectors
5. **DE/current-to-best/1** - Current-to-best with one difference vector
6. **DE/current-to-rand/1** - Current-to-random with one difference vector
7. **jDE** - Self-adaptive DE with parameter control
8. **JADE** - Adaptive DE with external archive
9. **SHADE** - Success-History Based Adaptive DE
10. **L-SHADE** - Linear population size reduction SHADE

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd de-research-dashboard
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Usage

The dashboard automatically displays all fitness functions and their corresponding results. Each chart shows:

- **X-axis**: Different DE models
- **Y-axis**: Average lowest fitness values achieved
- **Tooltips**: Hover over bars to see exact fitness values
- **Responsive Layout**: Charts automatically adjust to screen size

## Customizing Data

To use your own research data:

1. **Edit the data file**: `src/data/fitnessData.js`
2. **Update fitness functions**: Add or modify functions in the `fitnessData` object
3. **Adjust model data**: Update the `models` array for each function with your results

### Data Structure

```javascript
functionName: {
  name: "Function Display Name",
  description: "Mathematical description",
  models: [
    { model: "Model Name", avgLowestFitness: 0.123 },
    // ... 10 models total
  ]
}
```

## Project Structure

```
de-research-dashboard/
├── src/
│   ├── components/
│   │   └── FitnessChart.js      # Reusable chart component
│   ├── data/
│   │   └── fitnessData.js       # Sample research data
│   ├── App.js                   # Main application layout
│   ├── App.css                  # Styling and responsive design
│   └── index.js                 # Application entry point
├── public/
└── package.json
```

## Technologies Used

- **React** - Frontend framework
- **Chart.js** - Data visualization library
- **react-chartjs-2** - React wrapper for Chart.js
- **CSS Grid** - Responsive layout system
- **Modern JavaScript (ES6+)** - Application logic

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Chart.js team for the excellent visualization library
- Create React App for the development setup
- The DE research community for the benchmark functions and algorithms

## Future Enhancements

- [ ] Add statistical significance testing
- [ ] Include convergence curves
- [ ] Export charts as images
- [ ] Add data import functionality
- [ ] Include more benchmark functions
- [ ] Add parameter sensitivity analysis
