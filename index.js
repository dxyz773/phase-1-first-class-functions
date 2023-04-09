function receivesAFunction(func) {
  return func();
}
function returnsANamedFunction() {
  return function named() {};
}

function returnsAnAnonymousFunction() {
  return () => "";
}
