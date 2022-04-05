let FirstNumber=prompt('Введите первое число');
let UserOperation=prompt('Введите математическую операцию (*/+-)');
let SecondNumber=prompt('Введите второе число');

if (!((FirstNumber+1)*(SecondNumber+1)) || FirstNumber === '' || SecondNumber === '' ){
    alert('Одно из чисел введено неправильно');
}
else{
if (UserOperation==='*')
    alert(`Ваш результат ${Number(FirstNumber)*Number(SecondNumber)}`);
else if(UserOperation==='/')
    alert(`Ваш результат ${Number(FirstNumber)/Number(SecondNumber)}`);
else if(UserOperation==='+')
    alert(`Ваш результат ${Number(FirstNumber)+Number(SecondNumber)}`);
else if(UserOperation==='-')
    alert(`Ваш результат ${Number(FirstNumber)-Number(SecondNumber)}`);
else
    alert('Такой операции не существует');}