function validateLogin(event) {
    event.preventDefault(); 

    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

   
    if (user === 'vini' && password === '12345') {
       
        window.location.href = 'ola.html';
    } else {
        alert('Usuário ou senha incorretos.'); 
    }
}
  
  function showCuriosity(curiosity) {
    document.getElementById('curiosityContent').innerText = curiosity;
    var curiosityModal = new bootstrap.Modal(document.getElementById('curiosityModal'));
    curiosityModal.show();
  }   
  function submitQuiz() {
      // Obtenha as respostas corretas
      const correctAnswers = {
          q1: "Sandro Botticelli",
          q2: "1889",
          q3: "A ceia final de Jesus com seus apóstolos"
      };
  
      // Obtenha as respostas do formulário
      let score = 0;
      const userAnswers = {
          q1: document.querySelector('input[name="q1"]:checked')?.value,
          q2: document.querySelector('input[name="q2"]:checked')?.value,
          q3: document.querySelector('input[name="q3"]:checked')?.value
      };
  
      // Compare as respostas do usuário com as corretas
      for (let question in correctAnswers) {
          if (userAnswers[question] === correctAnswers[question]) {
              score++;
          }
      }
  
      // Exiba a pontuação final
      document.getElementById('score').innerText = score;
      document.getElementById('result').style.display = 'block';
  }
  
  
  
  document.getElementById('exitBtn').addEventListener('click', function() {
    const userConfirmed = confirm('Obrigado por nos visitar! Deseja realmente sair do site?');
    if (userConfirmed) {
        window.location.href = 'https://www.google.com'; // Redireciona para outro site ou fecha a aba
    }
});
