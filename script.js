document.addEventListener ('DOMContentLoaded',function(){
    const aumentaFonteBotao = document.getElementById ('aumentar-fonte');

    let tamanhoAtualFonte = 1;
    
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte +-

        document.body.style.fontSize = '${tamanhoAtualFonte}rem'
    })


)}