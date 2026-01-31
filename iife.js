//Immediately Invoked Function Expression (IIFE)
(function chai() {
  //named IIfe
  console.log("DB is Connected");
})();

((name) => {
  // unnamed Iife
  console.log(`DB is Connected to ${name}`);
})();
