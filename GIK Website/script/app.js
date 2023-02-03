// Credit management logic
const creditLimit = 1500;
let customerCredit = 1500;

const topupCredit = () => {
  customerCredit = creditLimit;
};

const spendCredit = (amount) => {
  customerCredit -= amount;
};

// Initialize customer credit at the beginning of each month
setInterval(topupCredit, 30 * 24 * 60 * 60 * 1000);

// Example usage
spendCredit(300);
console.log(`Customer credit: ${customerCredit}`); // 1200