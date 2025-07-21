export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
};

export const calculateDiscount = (original, current) => {
  return Math.round(((original - current) / original) * 100);
};
