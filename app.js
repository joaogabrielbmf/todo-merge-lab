// app.js – funções simples para forçar conflitos controlados
function toggleDone(li) {
  li.classList.toggle('done');

  // Lógica do emoji teste
  if (li.classList.contains('done')) {
    li.dataset.originalText = li.dataset.originalText || li.textContent.replace(/^✅\s*/, '');
    li.textContent = `✅ ${li.dataset.originalText}`;
  } else {
    li.textContent = li.dataset.originalText || li.textContent.replace(/^✅\s*/, '');
  }
}

function formatUser(user) {
  // 🔥 PONTO DE CONFLITO: vários alunos alterarão este mesmo trecho
  // TODO: retornar uma string "Nome <email>" OU "NOME - email" OU outro formato padronizado
  // Exemplo inicial (mude aqui de forma diferente em branches distintas):
  return `${user.name} (${user.email})`;
}

function renderUserBox() {
  const el = document.getElementById('user-box');
  const user = { name: 'Usuário Demo', email: 'demo@example.com' };
  el.textContent = 'Usuário: ' + formatUser(user);
}

// Conflitos leves em funções diferentes (normalmente merge automático):
function renderMenu() {
  const menu = document.getElementById('menu');
  // Aluno A pode inserir itens aqui
}

function renderFooter() {
  const footer = document.querySelector('footer small');
  // Aluno B pode alterar o texto aqui
}

document.addEventListener('DOMContentLoaded', () => {
  renderUserBox();
  renderMenu();
  renderFooter();
});
