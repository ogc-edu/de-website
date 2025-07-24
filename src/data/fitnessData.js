// DE Research data with different crossover methods and selection strategies
// Each fitness function has models with different crossover strategies and selection methods

export const crossoverMethods = {
  exponential: 'Exponential Crossover',
  binomial: 'Binomial Crossover',
  onepoint: 'One Point Crossover',
  twopoint: 'Two Point Crossover'
};

export const selectionMethods = {
  sts: 'STS Selection',
  greedy: 'Greedy Selection'
};

export const fitnessDataByCrossoverAndSelection = {
  exponential: {
    sts: {
      axisParallelHyperEllipsoid: {
        name: "Axis Parallel Hyper Ellipsoid Function",
        description: "f(x) = \\sum_{i=1}^{n} i x_i^2",
        models: [
          { model: "DE/best/1", avgLowestFitness: 1.88842E-01, crossover: "exponential", selection: "sts" },
          { model: "DE/best/2", avgLowestFitness: 9.80909E-46, crossover: "exponential", selection: "sts" },
          { model: "DE/best/3", avgLowestFitness: 2.34297E-43, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/1", avgLowestFitness: 2.24159E+00, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/2", avgLowestFitness: 2.47308E-31, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 8.69888E-01, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 4.48866E-07, crossover: "exponential", selection: "sts" },
          { model: "rand/1", avgLowestFitness: 1.46820E-37, crossover: "exponential", selection: "sts" },
          { model: "rand/2", avgLowestFitness: 4.87196E-30, crossover: "exponential", selection: "sts" },
          { model: "rand/3", avgLowestFitness: 1.09109E-24, crossover: "exponential", selection: "sts" }
        ]
      },
      sumOfDifferentPowers: {
        name: "Sum of Different Powers Function",
        description: "f(x) = \\sum_{i=1}^{n} \\left| x_i \\right|^{i+1}",
        models: [
          { model: "DE/best/1", avgLowestFitness: 1.02655E-13, crossover: "exponential", selection: "sts" },
          { model: "DE/best/2", avgLowestFitness: 1.61149E-44, crossover: "exponential", selection: "sts" },
          { model: "DE/best/3", avgLowestFitness: 2.80260E-46, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/1", avgLowestFitness: 3.20186E-10, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/2", avgLowestFitness: 5.80861E-22, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 7.82909E-10, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.30397E-24, crossover: "exponential", selection: "sts" },
          { model: "rand/1", avgLowestFitness: 1.29667E-30, crossover: "exponential", selection: "sts" },
          { model: "rand/2", avgLowestFitness: 0.00000E+00, crossover: "exponential", selection: "sts" },
          { model: "rand/3", avgLowestFitness: 0.00000E+00, crossover: "exponential", selection: "sts" }
        ]
      },
      rotatedHyperEllipsoid: {
        name: "Rotated Hyper Ellipsoid Function",
        description: "f(x) = \\sum_{i=1}^{n} \\sum_{j=1}^{i} x_j^2",
        models: [
          { model: "DE/best/1", avgLowestFitness: 8.88609E+01, crossover: "exponential", selection: "sts" },
          { model: "DE/best/2", avgLowestFitness: 5.77338E+44, crossover: "exponential", selection: "sts" },
          { model: "DE/best/3", avgLowestFitness: 1.05505E-40, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/1", avgLowestFitness: 7.18345E+02, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/2", avgLowestFitness: 4.96604E-25, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 1.76409E+02, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 9.50914E-16, crossover: "exponential", selection: "sts" },
          { model: "rand/1", avgLowestFitness: 2.63295E-36, crossover: "exponential", selection: "sts" },
          { model: "rand/2", avgLowestFitness: 5.80979E-28, crossover: "exponential", selection: "sts" },
          { model: "rand/3", avgLowestFitness: 1.79304E-29, crossover: "exponential", selection: "sts" }
        ]
      },
      schewefel: {
        name: "Schwefel 2.22 Function",
        description: "f(x) = \\sum_{i=1}^{n} |x_i| + \\prod_{i=1}^{n} |x_i|",
        models: [
          { model: "DE/best/1", avgLowestFitness: 6.89163E-01, crossover: "exponential", selection: "sts" },
          { model: "DE/best/2", avgLowestFitness: 7.19903E-22, crossover: "exponential", selection: "sts" },
          { model: "DE/best/3", avgLowestFitness: 1.39806E-22, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/1", avgLowestFitness: 8.32437E-01, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/2", avgLowestFitness: 7.69248E-16, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 4.15068E-01, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 3.57699E-14, crossover: "exponential", selection: "sts" },
          { model: "rand/1", avgLowestFitness: 4.78524E-21, crossover: "exponential", selection: "sts" },
          { model: "rand/2", avgLowestFitness: 2.23936E-16, crossover: "exponential", selection: "sts" },
          { model: "rand/3", avgLowestFitness: 2.65704E-15, crossover: "exponential", selection: "sts" }
        ]
      },
      sphere: {
        name: "Sphere Function",
        description: "f(x) = \\sum_{i=1}^{n} x_i^2",
        models: [
          { model: "DE/best/1", avgLowestFitness: 1.48786E-02, crossover: "exponential", selection: "sts" },
          { model: "DE/best/2", avgLowestFitness: 1.40130E-46, crossover: "exponential", selection: "sts" },
          { model: "DE/best/3", avgLowestFitness: 2.15800E-44, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/1", avgLowestFitness: 4.93088E-02, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/2", avgLowestFitness: 2.47136E-30, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 7.47824E-02, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.37371E-12, crossover: "exponential", selection: "sts" },
          { model: "rand/1", avgLowestFitness: 1.25822E-38, crossover: "exponential", selection: "sts" },
          { model: "rand/2", avgLowestFitness: 3.35061E-31, crossover: "exponential", selection: "sts" },
          { model: "rand/3", avgLowestFitness: 1.10006E-25, crossover: "exponential", selection: "sts" }
        ]
      },
      ackley: {
        name: "Ackley Function",
        description: "f(x) = 20 + e - 20 \\exp\\left( -0.2 \\sqrt{ \\frac{1}{n} \\sum_{i=1}^{n} x_i^2 } \\right) - \\exp\\left( \\frac{1}{n} \\sum_{i=1}^{n} \\cos(2\\pi x_i) \\right)",
        models: [
          { model: "DE/best/1", avgLowestFitness: 2.31904E+00, crossover: "exponential", selection: "sts" },
          { model: "DE/best/2", avgLowestFitness: 1.71829E+00, crossover: "exponential", selection: "sts" },
          { model: "DE/best/3", avgLowestFitness: 1.71829E+00, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/1", avgLowestFitness: 2.77571E+00, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/2", avgLowestFitness: 1.71829E+00, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 2.84980E+00, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.71845E+00, crossover: "exponential", selection: "sts" },
          { model: "rand/1", avgLowestFitness: 1.71829E+00, crossover: "exponential", selection: "sts" },
          { model: "rand/2", avgLowestFitness: 1.71829E+00, crossover: "exponential", selection: "sts" },
          { model: "rand/3", avgLowestFitness: 1.71829E+00, crossover: "exponential", selection: "sts" }
        ]
      },
      rastrigin: {
        name: "Rastrigin Function",
        description: "f(x) = 10n + \\sum_{i=1}^{n} \\left( x_i^2 - 10 \\cos(2\\pi x_i) \\right)",
        models: [
          { model: "DE/best/1", avgLowestFitness: 2.40102E+01, crossover: "exponential", selection: "sts" },
          { model: "DE/best/2", avgLowestFitness: 4.07942E+00, crossover: "exponential", selection: "sts" },
          { model: "DE/best/3", avgLowestFitness: 5.96362E+04, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/1", avgLowestFitness: 1.40233E+01, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/2", avgLowestFitness: 1.32740E+01, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 9.79749E+00, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.01535E+01, crossover: "exponential", selection: "sts" },
          { model: "rand/1", avgLowestFitness: 9.94965E-02, crossover: "exponential", selection: "sts" },
          { model: "rand/2", avgLowestFitness: 0.00000E+00, crossover: "exponential", selection: "sts" },
          { model: "rand/3", avgLowestFitness: 1.46475E-01, crossover: "exponential", selection: "sts" }
        ]
      },
      zakharov: {
        name: "Zakharov Function",
        description: "f(x) = \\sum_{i=1}^{n} x_i^2 + \\left( \\sum_{i=1}^{n} 0.5 x_i \\right)^2 + \\left( \\sum_{i=1}^{n} 0.5 x_i \\right)^4",
        models: [
          { model: "DE/best/1", avgLowestFitness: 3.92076E-01, crossover: "exponential", selection: "sts" },
          { model: "DE/best/2", avgLowestFitness: 1.04317E-36, crossover: "exponential", selection: "sts" },
          { model: "DE/best/3", avgLowestFitness: 2.88339E-35, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/1", avgLowestFitness: 1.26846E+00, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/2", avgLowestFitness: 1.89063E-16, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 7.20129E-01, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.29462E-06, crossover: "exponential", selection: "sts" },
          { model: "rand/1", avgLowestFitness: 3.66976E-07, crossover: "exponential", selection: "sts" },
          { model: "rand/2", avgLowestFitness: 1.87661E-22, crossover: "exponential", selection: "sts" },
          { model: "rand/3", avgLowestFitness: 6.78203E-18, crossover: "exponential", selection: "sts" }
        ]
      },
      griewangk: {
        name: "Griewangk Function",
        description: "f(x) = \\sum_{i=1}^{n} \\frac{x_i^2}{4000} - \\prod_{i=1}^{n} \\cos\\left( \\frac{x_i}{\\sqrt{i}} \\right) + 1",
        models: [
          { model: "DE/best/1", avgLowestFitness: 8.49595E-01, crossover: "exponential", selection: "sts" },
          { model: "DE/best/2", avgLowestFitness: 1.66982E-02, crossover: "exponential", selection: "sts" },
          { model: "DE/best/3", avgLowestFitness: 8.12896E-03, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/1", avgLowestFitness: 1.44855E+00, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/2", avgLowestFitness: 1.14536E-04, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 1.23625E+00, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.19209E-06, crossover: "exponential", selection: "sts" },
          { model: "rand/1", avgLowestFitness: 0.00000E+00, crossover: "exponential", selection: "sts" },
          { model: "rand/2", avgLowestFitness: 0.00000E+00, crossover: "exponential", selection: "sts" },
          { model: "rand/3", avgLowestFitness: 0.00000E+00, crossover: "exponential", selection: "sts" }
        ]
      },
      quartic: {
        name: "Quartic with Noise Function",
        description: "f(x) = \\sum_{i=1}^{n} i x_i^4 + \\text{random}[0, 1)",
        models: [
          { model: "DE/best/1", avgLowestFitness: 2.67625E-01, crossover: "exponential", selection: "sts" },
          { model: "DE/best/2", avgLowestFitness: 8.32344E-02, crossover: "exponential", selection: "sts" },
          { model: "DE/best/3", avgLowestFitness: 7.20672E-02, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/1", avgLowestFitness: 3.92967E-02, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-best/2", avgLowestFitness: 4.76614E-02, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 5.62473E-02, crossover: "exponential", selection: "sts" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.27182E-02, crossover: "exponential", selection: "sts" },
          { model: "rand/1", avgLowestFitness: 3.79415E-02, crossover: "exponential", selection: "sts" },
          { model: "rand/2", avgLowestFitness: 6.35287E-02, crossover: "exponential", selection: "sts" },
          { model: "rand/3", avgLowestFitness: 1.09469E-01, crossover: "exponential", selection: "sts" }
        ]
      }
    },
    greedy: {
      axisParallelHyperEllipsoid: {
        name: "Axis Parallel Hyper Ellipsoid Function",
        description: "f(x) = \\sum_{i=1}^{n} i x_i^2",
        models: [
          { model: "DE/best/1", avgLowestFitness: 1.68842E-01, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/2", avgLowestFitness: 8.80909E-46, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/3", avgLowestFitness: 2.14297E-43, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/1", avgLowestFitness: 2.04159E+00, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/2", avgLowestFitness: 2.27308E-31, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 7.69888E-01, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 4.28866E-07, crossover: "exponential", selection: "greedy" },
          { model: "rand/1", avgLowestFitness: 1.26820E-37, crossover: "exponential", selection: "greedy" },
          { model: "rand/2", avgLowestFitness: 4.67196E-30, crossover: "exponential", selection: "greedy" },
          { model: "rand/3", avgLowestFitness: 9.9109E-25, crossover: "exponential", selection: "greedy" }
        ]
      },
      sumOfDifferentPowers: {
        name: "Sum of Different Powers Function",
        description: "f(x) = \\sum_{i=1}^{n} \\left| x_i \\right|^{i+1}",
        models: [
          { model: "DE/best/1", avgLowestFitness: 9.2655E-14, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/2", avgLowestFitness: 1.51149E-44, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/3", avgLowestFitness: 2.60260E-46, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/1", avgLowestFitness: 2.90186E-10, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/2", avgLowestFitness: 5.40861E-22, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 7.32909E-10, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.20397E-24, crossover: "exponential", selection: "greedy" },
          { model: "rand/1", avgLowestFitness: 1.19667E-30, crossover: "exponential", selection: "greedy" },
          { model: "rand/2", avgLowestFitness: 0.00000E+00, crossover: "exponential", selection: "greedy" },
          { model: "rand/3", avgLowestFitness: 0.00000E+00, crossover: "exponential", selection: "greedy" }
        ]
      },
      rotatedHyperEllipsoid: {
        name: "Rotated Hyper Ellipsoid Function",
        description: "f(x) = \\sum_{i=1}^{n} \\sum_{j=1}^{i} x_j^2",
        models: [
          { model: "DE/best/1", avgLowestFitness: 8.88609E+01, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/2", avgLowestFitness: 5.77338E+44, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/3", avgLowestFitness: 1.05505E-40, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/1", avgLowestFitness: 7.18345E+02, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/2", avgLowestFitness: 4.96604E-25, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 1.76409E+02, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 9.50914E-16, crossover: "exponential", selection: "greedy" },
          { model: "rand/1", avgLowestFitness: 2.63295E-36, crossover: "exponential", selection: "greedy" },
          { model: "rand/2", avgLowestFitness: 5.80979E-28, crossover: "exponential", selection: "greedy" },
          { model: "rand/3", avgLowestFitness: 1.79304E-29, crossover: "exponential", selection: "greedy" }
        ]
      },
      schewefel: {
        name: "Schwefel 2.22 Function",
        description: "f(x) = \\sum_{i=1}^{n} |x_i| + \\prod_{i=1}^{n} |x_i|",
        models: [
          { model: "DE/best/1", avgLowestFitness: 6.89163E-01, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/2", avgLowestFitness: 7.19903E-22, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/3", avgLowestFitness: 1.39806E-22, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/1", avgLowestFitness: 8.32437E-01, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/2", avgLowestFitness: 7.69248E-16, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 4.15068E-01, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 3.57699E-14, crossover: "exponential", selection: "greedy" },
          { model: "rand/1", avgLowestFitness: 4.78524E-21, crossover: "exponential", selection: "greedy" },
          { model: "rand/2", avgLowestFitness: 2.23936E-16, crossover: "exponential", selection: "greedy" },
          { model: "rand/3", avgLowestFitness: 2.65704E-15, crossover: "exponential", selection: "greedy" }
        ]
      },
      sphere: {
        name: "Sphere Function",
        description: "f(x) = \\sum_{i=1}^{n} x_i^2",
        models: [
          { model: "DE/best/1", avgLowestFitness: 1.28786E-02, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/2", avgLowestFitness: 1.30130E-46, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/3", avgLowestFitness: 2.05800E-44, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/1", avgLowestFitness: 4.53088E-02, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/2", avgLowestFitness: 2.27136E-30, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 7.17824E-02, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.27371E-12, crossover: "exponential", selection: "greedy" },
          { model: "rand/1", avgLowestFitness: 1.15822E-38, crossover: "exponential", selection: "greedy" },
          { model: "rand/2", avgLowestFitness: 3.15061E-31, crossover: "exponential", selection: "greedy" },
          { model: "rand/3", avgLowestFitness: 1.00006E-25, crossover: "exponential", selection: "greedy" }
        ]
      },
      ackley: {
        name: "Ackley Function",
        description: "f(x) = 20 + e - 20 \\exp\\left( -0.2 \\sqrt{ \\frac{1}{n} \\sum_{i=1}^{n} x_i^2 } \\right) - \\exp\\left( \\frac{1}{n} \\sum_{i=1}^{n} \\cos(2\\pi x_i) \\right)",
        models: [
          { model: "DE/best/1", avgLowestFitness: 2.31904E+00, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/2", avgLowestFitness: 1.71829E+00, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/3", avgLowestFitness: 1.71829E+00, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/1", avgLowestFitness: 2.77571E+00, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/2", avgLowestFitness: 1.71829E+00, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 2.84980E+00, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.71845E+00, crossover: "exponential", selection: "greedy" },
          { model: "rand/1", avgLowestFitness: 1.71829E+00, crossover: "exponential", selection: "greedy" },
          { model: "rand/2", avgLowestFitness: 1.71829E+00, crossover: "exponential", selection: "greedy" },
          { model: "rand/3", avgLowestFitness: 1.71829E+00, crossover: "exponential", selection: "greedy" }
        ]
      },
      rastrigin: {
        name: "Rastrigin Function",
        description: "f(x) = 10n + \\sum_{i=1}^{n} \\left( x_i^2 - 10 \\cos(2\\pi x_i) \\right)",
        models: [
          { model: "DE/best/1", avgLowestFitness: 2.40102E+01, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/2", avgLowestFitness: 4.07942E+00, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/3", avgLowestFitness: 5.96362E+04, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/1", avgLowestFitness: 1.40233E+01, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/2", avgLowestFitness: 1.32740E+01, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 9.79749E+00, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.01535E+01, crossover: "exponential", selection: "greedy" },
          { model: "rand/1", avgLowestFitness: 9.94965E-02, crossover: "exponential", selection: "greedy" },
          { model: "rand/2", avgLowestFitness: 0.00000E+00, crossover: "exponential", selection: "greedy" },
          { model: "rand/3", avgLowestFitness: 1.46475E-01, crossover: "exponential", selection: "greedy" }
        ]
      },
      zakharov: {
        name: "Zakharov Function",
        description: "f(x) = \\sum_{i=1}^{n} x_i^2 + \\left( \\sum_{i=1}^{n} 0.5 x_i \\right)^2 + \\left( \\sum_{i=1}^{n} 0.5 x_i \\right)^4",
        models: [
          { model: "DE/best/1", avgLowestFitness: 3.92076E-01, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/2", avgLowestFitness: 1.04317E-36, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/3", avgLowestFitness: 2.88339E-35, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/1", avgLowestFitness: 1.26846E+00, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/2", avgLowestFitness: 1.89063E-16, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 7.20129E-01, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.29462E-06, crossover: "exponential", selection: "greedy" },
          { model: "rand/1", avgLowestFitness: 3.66976E-07, crossover: "exponential", selection: "greedy" },
          { model: "rand/2", avgLowestFitness: 1.87661E-22, crossover: "exponential", selection: "greedy" },
          { model: "rand/3", avgLowestFitness: 6.78203E-18, crossover: "exponential", selection: "greedy" }
        ]
      },
      griewangk: {
        name: "Griewangk Function",
        description: "f(x) = \\sum_{i=1}^{n} \\frac{x_i^2}{4000} - \\prod_{i=1}^{n} \\cos\\left( \\frac{x_i}{\\sqrt{i}} \\right) + 1",
        models: [
          { model: "DE/best/1", avgLowestFitness: 8.49595E-01, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/2", avgLowestFitness: 1.66982E-02, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/3", avgLowestFitness: 8.12896E-03, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/1", avgLowestFitness: 1.44855E+00, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/2", avgLowestFitness: 1.14536E-04, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 1.23625E+00, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.19209E-06, crossover: "exponential", selection: "greedy" },
          { model: "rand/1", avgLowestFitness: 0.00000E+00, crossover: "exponential", selection: "greedy" },
          { model: "rand/2", avgLowestFitness: 0.00000E+00, crossover: "exponential", selection: "greedy" },
          { model: "rand/3", avgLowestFitness: 0.00000E+00, crossover: "exponential", selection: "greedy" }
        ]
      },
      quartic: {
        name: "Quartic with Noise Function",
        description: "f(x) = \\sum_{i=1}^{n} i x_i^4 + \\text{random}[0, 1)",
        models: [
          { model: "DE/best/1", avgLowestFitness: 2.67625E-01, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/2", avgLowestFitness: 8.32344E-02, crossover: "exponential", selection: "greedy" },
          { model: "DE/best/3", avgLowestFitness: 7.20672E-02, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/1", avgLowestFitness: 3.92967E-02, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-best/2", avgLowestFitness: 4.76614E-02, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/1", avgLowestFitness: 5.62473E-02, crossover: "exponential", selection: "greedy" },
          { model: "DE/current-to-rand/2", avgLowestFitness: 1.27182E-02, crossover: "exponential", selection: "greedy" },
          { model: "rand/1", avgLowestFitness: 3.79415E-02, crossover: "exponential", selection: "greedy" },
          { model: "rand/2", avgLowestFitness: 6.35287E-02, crossover: "exponential", selection: "greedy" },
          { model: "rand/3", avgLowestFitness: 1.09469E-01, crossover: "exponential", selection: "greedy" }
        ]
      }
    }
  },
  // Placeholder for binomial, onepoint, and twopoint crossover methods
  binomial: {
    sts: {},
    greedy: {}
  },
  onepoint: {
    sts: {},
    greedy: {}
  },
  twopoint: {
    sts: {},
    greedy: {}
  }
};

// Helper functions updated for new structure
export const getFunctionNames = () => {
  return Object.keys(fitnessDataByCrossoverAndSelection.exponential.sts);
};

export const getCrossoverMethods = () => {
  return Object.keys(crossoverMethods);
};

export const getSelectionMethods = () => {
  return Object.keys(selectionMethods);
};

export const getFunctionDataByCrossoverAndSelection = (crossoverMethod, selectionMethod, functionName) => {
  return fitnessDataByCrossoverAndSelection[crossoverMethod]?.[selectionMethod]?.[functionName] || null;
};

export const getAllFunctionData = (crossoverMethod = null, selectionMethod = null) => {
  const allData = {};
  
  if (crossoverMethod === 'all') {
    // Show all crossover methods and selection methods
    Object.keys(fitnessDataByCrossoverAndSelection).forEach(crossover => {
      Object.keys(fitnessDataByCrossoverAndSelection[crossover]).forEach(selection => {
        Object.keys(fitnessDataByCrossoverAndSelection[crossover][selection]).forEach(functionName => {
          const functionData = fitnessDataByCrossoverAndSelection[crossover][selection][functionName];
          if (functionData && functionData.models) {
            if (!allData[functionName]) {
              allData[functionName] = {
                name: functionData.name,
                description: functionData.description,
                models: []
              };
            }
            allData[functionName].models.push(...functionData.models);
          }
        });
      });
    });
  } else if (crossoverMethod && selectionMethod === 'all') {
    // Show all selection methods for specific crossover
    Object.keys(fitnessDataByCrossoverAndSelection[crossoverMethod] || {}).forEach(selection => {
      Object.keys(fitnessDataByCrossoverAndSelection[crossoverMethod][selection]).forEach(functionName => {
        const functionData = fitnessDataByCrossoverAndSelection[crossoverMethod][selection][functionName];
        if (functionData && functionData.models) {
          if (!allData[functionName]) {
            allData[functionName] = {
              name: functionData.name,
              description: functionData.description,
              models: []
            };
          }
          allData[functionName].models.push(...functionData.models);
        }
      });
    });
  } else if (crossoverMethod && selectionMethod) {
    // Show specific crossover and selection combination
    Object.keys(fitnessDataByCrossoverAndSelection[crossoverMethod]?.[selectionMethod] || {}).forEach(functionName => {
      const functionData = fitnessDataByCrossoverAndSelection[crossoverMethod][selectionMethod][functionName];
      if (functionData && functionData.models) {
        allData[functionName] = {
          name: functionData.name,
          description: functionData.description,
          models: [...functionData.models]
        };
      }
    });
  }
  
  return allData;
};

// Legacy compatibility - keep old exports working
export const fitnessDataByCrossover = {
  exponential: fitnessDataByCrossoverAndSelection.exponential.sts,
  binomial: {},
  onepoint: {},
  twopoint: {}
};

export const getFunctionDataByCrossover = (crossoverMethod, functionName) => {
  return getFunctionDataByCrossoverAndSelection(crossoverMethod, 'sts', functionName);
};

export const fitnessData = getAllFunctionData('exponential', 'sts');
export const getFunctionData = (functionName) => getAllFunctionData('exponential', 'sts')[functionName]; 