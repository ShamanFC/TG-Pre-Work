function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
 return monitorCount(rows, columns)  * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// you can nest a function inside of a function to further help simplify the code. Any operation that's written more than once is worth making into a function.
