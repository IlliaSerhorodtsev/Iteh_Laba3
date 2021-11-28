
function ChangeSize()
{
    var WidthI = parseInt(document.getElementById('Wid').value);
    var HeightI = parseInt(document.getElementById('Hei').value);
    var BoardI = parseInt(document.getElementById('Boa').value);
    var MyImg = document.getElementById('IMG');
if(MyImg && MyImg.style)
{
    MyImg.style.height = ''+HeightI+'px';
    MyImg.style.width = ''+WidthI+'px';
    MyImg.style.border=''+BoardI+'px solid black'

}
}
function ChangeImg()
{
    sha = Math.floor(Math.random() * 9)+1;
    imagez = ('<img src="images/'+sha+'.png" id="IMG">');
    document.getElementById("My").innerHTML = imagez;
    var WidthI = parseInt(document.getElementById('Wid').value);
    var HeightI = parseInt(document.getElementById('Hei').value);
    var BoardI = parseInt(document.getElementById('Boa').value);
    var MyImg = document.getElementById('IMG');
 if(MyImg && MyImg.style)
{
    MyImg.style.height = ''+HeightI+'px';
    MyImg.style.width = ''+WidthI+'px';
    MyImg.style.border=''+BoardI+'px solid black'
}
}   
