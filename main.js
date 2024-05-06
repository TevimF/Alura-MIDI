function tocaSom(idTagAudio) {
  if (idTagAudio === null || idTagAudio === undefined || idTagAudio === '') {
    alert('Elemento não encontrado');
  }
  else {
    try {
      document.querySelector(idTagAudio).play();
    }
    catch (error) {
      alert('Erro ao tocar o som');
    }
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++){  
  const tecla = listaDeTeclas[i];  
  const idTagAudio = '#som_' + tecla.classList[1];

  listaDeTeclas[i].onclick = function(){
    tocaSom(idTagAudio);
  }
  tecla.onkeydown = function(event){
    console.log(event.code);
    
    if (event.code == 'Space' || event.code == 'Enter'){
      tecla.classList.add('ativa');
      tocaSom('#som_' + tecla.classList[1]);
    }
  }
  tecla.onkeyup = function(event){
    if (event.code == 'Space' || event.code == 'Enter'){
      tecla.classList.remove('ativa');
    }
  }
} 

