// function calculadora(){
//     const operacao = 
//     Number(prompt('Escolha uma operacao: \n 1 - soma(+) \n 2 - multiplicação(*) \n 3 - divisaõ(/) \n 4 - subtração(-) \n',));

//     let n1 = Number(prompt('insira um valor'));
//     let n2 = Number(prompt('insira um segundo valor'));
//     let resultado;

//     function soma() {
        
//         resultado = n1 + n2;
//         // alert(`${n1} + ${n2} = ${resultado}` )
//         alert(`${n1} + ${n2} = ${resultado}`)
//     }
//     function mult() {
//         resultado = n1 * n2;
//         // alert(`${n1} + ${n2} = ${resultado}` )
//         alert(`${n1} * ${n2} = ${resultado}`)
//     }
//     function div() {
//         resultado = n1 / n2;
//         // alert(`${n1} + ${n2} = ${resultado}` )
//         alert(`${n1} / ${n2} = ${resultado}`)
//     }
//     function sub() {
//         resultado = n1 - n2;
//         // alert(`${n1} + ${n2} = ${resultado}` )
//         alert(`${n1} - ${n2} = ${resultado}`)
//     }

//     if(operacao == 1){
//         soma()
//     } else if (operacao == 2){
//         mult()
//     } else if (operacao == 3){
//         div()
//     } else if (operacao == 4){
//         sub()
//     }else if(operacao == null){
//         alert('Arrombado')
//     }

//     // let condição = prompt('Deseja continuar? S/N')
//     // condição.toUpperCase;
//     // if(condição == 'S'){
//     //     calculadora();
//     // }else{
//     //     alert('Tchau')
//     // }


//     // switch(operacao){
//     //     case 1:
//     //         soma();
//     //     break;
//     //     case 2:
//     //         mult();
//     //     break;
//     //     case 3:
//     //         div();
//     //     break;
//     //     case 4:
//     //         sub();
//     //     break;
//     //     default:
//     //         alert('erro')
//     // };
// }

// calculadora();

function escopoLocal() {
	let escopoLocalInterno = 'local'
}
console.log(escopoLocalInterno);