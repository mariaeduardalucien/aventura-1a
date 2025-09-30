const avanca = document.querySelectorAll('.btn-proximo')

avanca,array.forEach(button => {
    button,addEventListener('click',function () {
 const atual = this.document.querySelector ('.ativo');
 const proximoPasso = 'passo-' + this. getAttribut ('data-proximo')  

 atual.classList.remove('ativo')
 document.getElementById(proximoPasso).classList.add('ativo')
} )
})