export const calculateCategorySums = (transactions, selectedDate) => {
  return transactions.reduce((acc, transaction) => {
    const { category, amount, date } = transaction;

    const transactionDate = new Date(date);
    const transactionMonth = transactionDate.getMonth();
    const transactionYear = transactionDate.getFullYear();

    if (
      transactionMonth === selectedDate.monthIndex &&
      transactionYear === selectedDate.year
    ) {
      acc[category] = acc[category] ? acc[category] + amount : amount;
    }

    return acc;
  }, {});
};

export const addMissingCategories = (icons, sums) => {
  icons.forEach((icon) => {
    if (!sums[icon[1]]) {
      sums[icon[1]] = 0;
    }
  });

  return sums;
};

export const getNonZeroCategories = (icons, sums) => {
  return icons.filter(icon => sums[icon] > 0);
};

