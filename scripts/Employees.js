import { getEmployees } from './database.js';
import { getOrders } from './database.js';

const orders = getOrders();
const employees = getEmployees();

export const Employees = () => {
  let html = '<ul>';

  for (const employee of employees) {
    html += `<li id="employee--${employee.id}">${employee.name}</li>`;
  }

  html += '</ul>';

  return html;
};

const employeeOrders = (employee) => {
  const fulfilledOrders = [];

  const employees = [];

  for (const order of orders) {
    if (order.employeeId === employee.id) {
      // Increment the number of fulfilled orders
      fulfilledOrders.push(order.productId);
    }
  }
  return fulfilledOrders;
};

document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith('employee')) {
    const [, employeeId] = itemClicked.id.split('--');

    for (const employee of employees) {
      if (employee.id === parseInt(employeeId)) {
        const orderCount = employeeOrders(employee);

        window.alert(` ${employee.name} sold ${orderCount.length} products `);
      }
    }
  }
});
