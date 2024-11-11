// Import the assets array from asset.js
import { assets } from './asset.js';

/**
 * Function to calculate the total value of the portfolio.
 * @returns {number} - The total value of all assets in the portfolio.
 */
export function calculatePortfolioValue() {
  // Use reduce to sum up the value of each asset (price * quantity) in the portfolio
  return assets.reduce((totalValue, asset) => {
    return totalValue + asset.price * asset.quantity;
  }, 0);
}

/**
 * Function to calculate the percentage allocation of each asset in the portfolio.
 * @returns {Array}
 */
export function getPortfolioAllocation() {
  // Calculate the total portfolio value for percentage allocation calculations
  const totalValue = calculatePortfolioValue();
  
  // Map over each asset to create an array of allocation data
  return assets.map(asset => ({
    name: asset.name,                   
    type: asset.type,                   
    allocation: ((asset.price * asset.quantity) / totalValue * 100).toFixed(2) + '%' // Percentage allocation rounded to 2 decimal places
  }));
}
