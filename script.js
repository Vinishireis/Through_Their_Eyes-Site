document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por entrar em contato! Responderemos em breve.');
  });
  

  //Script Firebase//
  const contatoForm = document.getElementById('contatoForm');

  contatoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    try {
      await db.collection('mensagens').add({
        nome: nome,
        email: email,
        mensagem: mensagem,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      alert('Mensagem enviada com sucesso!');
      contatoForm.reset();
    } catch (error) {
      console.error('Erro ao enviar mensagem: ', error);
      alert('Ocorreu um erro. Tente novamente.');
    }
  });

