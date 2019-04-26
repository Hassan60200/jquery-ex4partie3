var height= 20;


$('#rectangle').css({'width' : '20px',
                    'height' : height+'px',
                    'background-color' : 'red'});
//if je clique sur le 1er bouton
$('#first').click(function(){
    // j'augmente la hauteur de 10
    height+=10;
    // si elle est plus grande que 100 elle repasse à 10
    if (height > 100 ){
        height=10;
    }
    $('#rectangle').css('height', height+'px')
});
//if je clique sur le second bouton
$('#second').click(function(){
    $('#rectangle').css('background-color', 'green')
});
//if je clique sur le bouton third
$('#third').click(function(){
    $('#rectangle').css('background-color', 'red')
});
//if je clique sur le bouton fourth
$('#fourth').click(function(){
    $('#rectangle').hide();
});
//if je clique sur le bouton fifth
$('#fifth').click(function(){
    $('#rectangle').show();
});
