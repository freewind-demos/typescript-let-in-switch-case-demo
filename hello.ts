function test(x: number) {
  switch (x) {
    case 1:
      let aaa = 1;
      console.log(aaa);
    case 2:
      aaa = 2;
      console.log(aaa);
      break;
    case 3:
      aaa = 3;
      console.log(aaa);
      break;
  }
}

test(1);
test(2);
test(3);
