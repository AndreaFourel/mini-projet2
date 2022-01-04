// fonction qui applique un blur pour les écranx dont widht < 768px
// on pourrait faire la mm chose en CSS avec @media
function applyBgBlur() {
  if(window.innerWidth < 768) {
    document.body.className = 'bg-blur';
  }
  else {
    document.body.className = '';
  }
}

window.addEventListener('resize', applyBgBlur); //comme on est sur window, il n'est pas necessaire de le préciser: addEventListener('resize', applyBgBlur) serait suffisant

