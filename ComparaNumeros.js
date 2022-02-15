
ComparaNumeros(30,30);

function ComparaNumeros(num1, num2){

    const primeiraFrase = CriarPrimeiraFrase(num1, num2);
    const segundaFrase = CriarSegundaFrase(num1,num2);

    console.log(`${primeiraFrase} ${segundaFrase}`);

    function CriarPrimeiraFrase(num1,num2){
        
        let saoIguais = "";

        if(num1 !== num2){
            saoIguais = "não";
        }

        return( `Os numeros ${num1} e ${num2} ${saoIguais} são iguais.`);
    };

    function CriarSegundaFrase(num1,num2){
        
        const soma = (num1 + num2);
        const compra10 = soma>10;
        const compara20 = soma>20;

        let resultado10 ='menor';
        let resultado20 ='menor';

        if(compra10)
        resultado10='maior';

        if(compara20)
        resultado20='maior';

        return `A soma dos numero é ${soma}, que é ${resultado10} do que 10 e ${resultado20} do que 20` ;
    }
}