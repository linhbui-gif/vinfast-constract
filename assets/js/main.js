let enabledButton  = {
  init:function(){
      this.enabled()
  },
  enabled:function(){
     const checkbox = document.querySelector('#checkbox-control')
     const button = document.querySelector('.TermOfUsePage-submit .Button')
     checkbox.onchange = function() {
      button.classList.toggle('disabled')
    };
  }
}
enabledButton.init()