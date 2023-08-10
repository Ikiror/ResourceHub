function newStyle() {
    let newColor = '';
    let newFont = ''; 
    let x = Math.floor(Math.random()*8); 
    switch (x){
        case 0:
            newColor = '#020100';
            newFont = 'Arial'; 
            break;
        case 1: 
            newColor = '#3B28CC';
            newFont = 'Verdana, cursive'; 
            break;
        case 2:
            newColor = '#38023B';
            newFont = 'Tahoma';
            break; 
        case 3:
            newColor= '#1E6478';
            newFont = 'Georgia';
            break
        case 4:
            newColor = '#4B6A12';
            newFont = 'Brush Script MT, cursive'; 
            break;
        case 5:
            newColor = '#451E71';
            newFont = 'Palatino';
            break;
        case 6: 
            newColor = '#A1005E';
            newFont = 'Impact';
            break;
        case 7:
            newColor = "#941B0C";
            newFont = "BioRhyme";
    }
    let elem = document.getElementById('header');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont; 
  }
  
//   maybe make a dark mode with a button?