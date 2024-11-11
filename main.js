// Import required functions and classes for portfolio calculations and transactions
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

console.log("===== Initial Portfolio Summary =====");

// Calculate and display the initial total portfolio value
const initialPortfolioValue = calculatePortfolioValue();
console.log(`Total Portfolio Value: $${initialPortfolioValue.toFixed(2)}`);

console.log("\n===== Portfolio Allocation =====");

// Calculate and display the percentage allocation of each asset in the portfolio
const initialAllocations = getPortfolioAllocation();
initialAllocations.forEach(allocation => {
  console.log(`${allocation.name} (${allocation.type}): ${allocation.allocation}`);
});

console.log("\n===== Performing Transactions =====");

try {
  // Perform several buy and sell transactions
  const buyAppleStock = new Transaction(1, 'buy', 20); 
  const sellTeslaStock = new Transaction(2, 'sell', 10); 
  const buyBond = new Transaction(3, 'buy', 5); 

  // Attempt an invalid transaction: sell more than available quantity, which should trigger an error
  try {
    const sellExcessBond = new Transaction(3, 'sell', 100); // Try to sell 100 units of bond, which may be more than available
  } catch (error) {
    // Log a clear error message for the failed transaction
    console.error(`Error: ${error.message}`);
  }

} catch (error) {
  // Catch and log any unexpected errors in the transaction process
  console.error(`Transaction Error: ${error.message}`);
}

console.log("\n===== Updated Portfolio Summary =====");

// Recalculate and display the updated total portfolio value after the transactions
const updatedPortfolioValue = calculatePortfolioValue();
console.log(`Total Portfolio Value: $${updatedPortfolioValue.toFixed(2)}`);

console.log("\n===== Updated Portfolio Allocation =====");

// Recalculate and display the updated allocation of each asset after the transactions
const updatedAllocations = getPortfolioAllocation();
updatedAllocations.forEach(allocation => {
  console.log(`${allocation.name} (${allocation.type}): ${allocation.allocation}`);
});
