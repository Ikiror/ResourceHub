function newStyle() {
    let newColor = '';
    let newFont = ''; 
    let x = Math.floor(Math.random()*8); 
    switch (x){
        case 0:
            newColor = '#020100';
            newFont = 'Alegreya'; 
            break;
        case 1: 
            newColor = '#3B28CC';
            newFont = 'Alegraya Sans'; 
            break;
        case 2:
            newColor = '#8E0606';
            newFont = 'Black Ops One';
            break; 
        case 3:
            newColor= '#1E6478';
            newFont = 'Josefin Slab';
            break
        case 4:
            newColor = '#4B6A12';
            newFont = 'Junge'; 
            break;
        case 5:
            newColor = '#451E71';
            newFont = 'Lato';
            break;
        case 6: 
            newColor = '#A1005E';
            newFont = 'Neucha';
            break;
        case 7:
            newColor = "#941B0C";
            newFont = "BioRhyme";
    }
    let elem = document.getElementById('topOfScreen');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont; 
  }
  
//   maybe make a dark mode with a button?