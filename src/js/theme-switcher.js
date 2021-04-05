const Theme = {
      LIGHT: 'light-theme',
      DARK: 'dark-theme',
    };

  const input = document.querySelector('input')

  function checkThem(){
  if(input.checked){
  document.body.classList.add('dark-theme');
  document.body.classList.remove('light-theme');
  localStorage.setItem('them', 'dark-theme')   
  }
  else{
      document.body.classList.replace('dark-theme', 'light-theme');
      localStorage.setItem('them', 'light-theme')
  }
  }

  function themMenu(){
  if (localStorage.getItem('them')==='dark-theme'){
      document.body.classList.add('dark-theme')
      input.checked = true
  }
  }

  themMenu()

  input.addEventListener('change', checkThem)
