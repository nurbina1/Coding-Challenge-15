// Import the assets array and getAssetById function from asset.js
import { assets, getAssetById } from './asset.js';

/**
 * Class representing a transaction, which could be either a "buy" or "sell" of a specific asset.
 */
export class Transaction {
  /**
   * Constructor for a Transaction instance.
   * @param {number} assetId 
   * @param {string} type 
   * @param {number} quantity 
   */
  constructor(assetId, type, quantity) {
    this.assetId = assetId;
    this.type = type.toLowerCase(); // Ensure transaction type is lowercase for consistency
    this.quantity = quantity;

    this.asset = getAssetById(assetId);

    // Throw an error if the asset doesn't exist in the assets array
    if (!this.asset) {
      throw new Error(`Asset with ID ${assetId} not found`);
    }

    // Process the transaction (buy or sell) immediately upon creation
    this.processTransaction();
  }

  /**
   * Method to process the transaction by adjusting the asset's quantity based on the transaction type.
   */
  processTransaction() {
    if (this.type === 'buy') {
      // If buying, increase the asset's quantity by the specified amount
      this.asset.quantity += this.quantity;
      console.log(`Purchased ${this.quantity} of ${this.asset.name}. New quantity: ${this.asset.quantity}`);
      
    } else if (this.type === 'sell') {
      // If selling, first check if there is enough quantity to sell
      if (this.quantity > this.asset.quantity) {
        throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
      }
      // Decrease the asset's quantity if sale is possible
      this.asset.quantity -= this.quantity;
      console.log(`Sold ${this.quantity} of ${this.asset.name}. New quantity: ${this.asset.quantity}`);
      
    } else {
      // If the transaction type is invalid, throw an error
      throw new Error(`Invalid transaction type: ${this.type}. Use "buy" or "sell"`);
    }
  }
}
