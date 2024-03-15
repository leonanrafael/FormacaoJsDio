/* Elaborar um algorítmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima sua média e sua classificação comforme a tabela abaixo:

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
-Média acima de 7, aprovado;
*/

let aluno = 'Leonan Rafael';
let nota1 = 7.1;
let nota2 = 7;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3;
let situacaoAluno;

if (media < 5) {
    situacaoAluno = 'Reprovado';
    console.log('Aluno: ' + aluno + '\nMédia do semetre: ' + media.toFixed(2) + '\nSituação do aluno: ' + situacaoAluno);
} else if (media <= 7) {
    situacaoAluno = 'Precisa realizar a prova de recupeção';
    console.log('Aluno: ' + aluno + '\nMédia do semetre: ' + media.toFixed(2) + '\nSituação do aluno: ' + situacaoAluno);
} else {
    situacaoAluno = 'Aprovado';
    console.log('Aluno: ' + aluno + '\nMédia do semetre: ' + media.toFixed(2) + '\nSituação do aluno: ' + situacaoAluno);
}