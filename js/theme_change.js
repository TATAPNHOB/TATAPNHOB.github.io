function togglemodes() {
    if (localStorage.mode == 'light') {
    turnondark();
    localStorage.mode = 'dark';
    }
    else {
        turnonlight();
    localStorage.mode = 'light';
    }
}
function localstoragesetup() {
    if (localStorage.getItem('mode') == null)
    localStorage.setItem('mode','light');
    else {
        if (localStorage.getItem('mode') == 'dark')
        turnondark();
    }
}
function turnondark() {
    document.getElementsByTagName('link')[1].toggleAttribute('disabled');
    
    document.getElementById('modewidget').setAttribute('src','img/sun.svg');
}
function turnonlight() {
    
    document.getElementsByTagName('link')[1].toggleAttribute('disabled');
    
    document.getElementById('modewidget').setAttribute('src','img/moon.svg');
}