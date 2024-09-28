  function printPrams(p1 : string = "p1", p2 : number = 0 , p3 : boolean = false) : void{
    console.log(`${p1} -- ${p2}  -- ${p3} \n`);
  }

  printPrams();
  printPrams(undefined,  50, true);
  printPrams("sss", 12, false);

  // rest function

  function total( ...nums : number[]) : string{
    let total : number = 0;

    nums.forEach((value) => {
        total += value;
    })

    return `Total : ${total}. \n`;
  }

  console.log(total(213,2323,32123,123,213,2,211, +true, +false, +[]))