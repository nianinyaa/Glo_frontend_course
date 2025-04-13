 //Усложненное 2

 const arr = ['2345', '75367', '32324', '4537', '2332', '4678', '37256'];
 const newArr = arr.filter(str => str.startsWith('2') || str.startsWith('4'));
 console.log('Строки, которые начинаются с "2" или "4":', newArr);
