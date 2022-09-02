const selecionarProdutos = function (opção){
    let resultado = document.getElementById('resultado')
switch (opção) {
    case 'uva':
        console.log('2')
        resultado.innerHTML = "procendência: Norte"
        break;
    case 'laranja':
        console.log('1')
        resultado.innerHTML = "procendência: Sul"
        break;
    case 'maçã':
            console.log('5')
            resultado.innerHTML = "procendência: Nordeste"
         break;
    case 'morango':
            console.log('6')
            resultado.innerHTML = "procendência: Sudeste"
         break;
    case 'vergamota':
            console.log('3')
            resultado.innerHTML = "procendência: Leste"
        break;
    case 'manga':
            console.log('4')
            resultado.innerHTML = "procendência: Oeste"
        break;
    case 'abacate':
            console.log('7')
            resultado.innerHTML = "procendência: Centro-oeste"
             break;

    default:
            console.log('opção inválida')
            resultado.innerHTML = "Opção invalida"
            break;
        
}
}
             const selecionarProdutos1 = function (opção){
                let resultado = document.getElementById('resultado2')
            switch (opção) {
    case 'Uva':
        console.log('2')
        resultado.innerHTML = "Alimento perecível"
        break;
    case 'Laranja':
        console.log('2')
        resultado.innerHTML = "Alimento perecível"
        break;
    case 'Maça':
        console.log('2')
        resultado.innerHTML = "Alimento perecível"
        break;
    case 'Morango':
        console.log('2')
        resultado.innerHTML = "Alimento perecível"
        break;
    case 'Vergamota':
        console.log('2')
        resultado.innerHTML = "Alimento perecível"
    
        
}
}
