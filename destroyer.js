function destroyer(arr) {
  var args = Array.from(arguments);
  console.log(args);
  console.log(args[0], args[1], args[2]);
  args.splice(0, 1);
  //console.log('args aft splice applied, here splice removed args[0] index, splice(0,1)means, remove 1 element at 0th Index ', args);
  console.log("args are", arr);
  console.log("arr are", arr);
  return arr.filter((num) => {
    return args.indexOf(num) == -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
