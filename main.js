const form = document.getElementById('form-atividade');
const apvImg = '<img src="./images/aprovado.png" alt="Emoji Festejando"/>';
const repImg = '<img src="./images/reprovado.png" alt="Emoji Decepcionado"/>';
const atividade = [];
const nota = [];
const spAprv = '<span class="resultado aprovado">Aprovado</span>'
const spRepro = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a média minima: '))



linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinhas();
    atualizaTabela();
    calculaMedia();
})

function adicionaLinhas(){
    
    let inputMateria = document.getElementById('materia-atividade');
    let inputNota = document.getElementById('nota-atividade');
    
    if (atividade.includes(inputMateria.value)){
        alert(`A matéria "${inputMateria.value}" já foi inserida :c`)
    }
    else{
        atividade.push(inputMateria.value);
        nota.push(parseFloat(inputNota.value));

        let linha = `<tr>`
        linha += `<td>${inputMateria.value}</td>`;
        linha += `<td>${inputNota.value}</td>`;
        linha += `<td>${inputNota.value <= notaMinima? repImg : apvImg}</td>`;
        linha += `</tr>`;

        linhas+=linha
    }
    inputMateria.value ='';
    inputNota.value='';

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;
}


function calculaMedia(){
    let somaDasNotas = 0;
    
    for(let i = 0; i < nota.length; i++)
    {
        somaDasNotas += nota[i];
    }
    let dividir = somaDasNotas / nota.length;
    
    const finalM = dividir;
    document.getElementById('media-final').innerHTML = finalM;
    document.getElementById('resultado-final').innerHTML = finalM <=notaMinima ? spRepro : spAprv; 

}