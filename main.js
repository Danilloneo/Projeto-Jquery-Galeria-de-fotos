$(document).ready(function(){
    //outra DIFERENÇA IMPORTANTE
    //NO JS PEGAMOS UM SELETOR ASSIM

    //console.log(document.querySelector('header button'));

    //JÁ NO JQUERY OLHA A DIFERENÇA

    //console.log($('header button'));

    //callback a function que executa depois da primeira function

    //document.querySelector('header button').addEventListener('click',function(){

    //}) mesma coisa que esse de cima do javascript é esse de baixo do jquery.

    //EVENTO DE CLICK NO BOTAO NOVA IMAGEM EXPANDE FORMULÁRIO
    $('header button').click(function(){
        //alert('expandir formulário.');
        $('form').slideDown(); //slideDown Arrastar para baixo efeito.
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp(); 
        //recolher Fomulário.
    })

    
    //outra forma de acessar o elemento é através do .ON
    //vamos desabilitar o formulário ser submetido e atualizar a pagina.
    //EVENTO NO SUBMIT ADICIONAR.
    $('form').on('submit', function(e){
        //console.log('submit');
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        //criamos uma constante para pegar com o jquery o input no JAVA SCRIPT PRUO É ID.VALUE aqui é assim .val() e é uma function.
        let novoItem = $('<li style = "display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        /*AppendTo pega o elemento e insere no li abertura e fechamento */
        $(`<div class="overlay-image-link">
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
        Ver imagem em tamanho real
        </a><button type="button" class="btn-excluir">Excluir</button>
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000)
        /* Pegando o link e colocando dentro da li tambem */

        /*Limpar o Campo após enviar uma imagem */
        $('#endereco-imagem-nova').val('');
        $('.btn-excluir').click(function(event){
            var elementoClicado = event.target;
            if (elementoClicado.classList.contains("btn-excluir")) {
                var elementoPai = elementoClicado.parentNode;
                    var elementoVo = elementoPai.parentNode;
                    elementoVo.remove();
            }
            
        })
    

    })

    /*
        adicionamos o botão excluir em um elemento e fizemos varios testes com console.log fui clicado e tal.
        depois qeu deu certo jogamos dentro do escopo do submit para aparecer em novos itens.
        Ali nos var Elementopai com a propriedade parent e remove fomos subindo ate apagar tudo.*/

        /*Deixamos ele aqui fora também para poder apagar das imagens de exemplo que já estão fora antes de ser submetida.*/
    $('.btn-excluir').click(function(event){
        var elementoClicado = event.target;
        if (elementoClicado.classList.contains("btn-excluir")) {
            var elementoPai = elementoClicado.parentNode;
                var elementoVo = elementoPai.parentNode;
                elementoVo.remove();
        }
        
    })


})
    

