function waitTroll()
{
}

setTimeout("showTroll()",0);

function showTroll()
{
    document.getElementById('trollsheet').style.display = "block";
}

setTimeout("showTroll2()",1000);

function showTroll2()
{
    document.getElementById('errorbox').style.display = "block";
}

function stopTroll()
{
    document.getElementById('trollsheet').style.display = "none";
    document.getElementById('errorbox').style.display = "none";
}