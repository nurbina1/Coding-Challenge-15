// Define an array of assets, each asset has properties like id, name, type, price, and quantity
const assets = [
  { id: 1, name: "Apple Inc.", type: "stock", price: 175, quantity: 50 }, 
  { id: 2, name: "Tesla Inc.", type: "stock", price: 250, quantity: 30 }, 
  { id: 3, name: "US Treasury Bond", type: "bond", price: 1000, quantity: 10 }, 
  { id: 4, name: "Google LLC", type: "stock", price: 2900, quantity: 5 }, 
  { id: 5, name: "Corporate Bond", type: "bond", price: 1200, quantity: 7 }, 
];

// Function to retrieve details of an asset based on its unique id
// We use the `find` method to search through the assets array
export function getAssetById(id) {
  const asset = assets.find(asset => asset.id === id);

  // Return the asset if found, otherwise return undefined
  return asset;
}

// Export the assets array to be used elsewhere in the code
export { assets };
