function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Create a copy of i using an Immediately Invoked Function Expression (IIFE)
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, 0);
    })(i);
  }
}

printNumbers2(5); // This now prints 1, 2, 3, 4, 5 correctly