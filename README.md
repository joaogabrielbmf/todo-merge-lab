# Projeto Front-end para Exercício de Git (HTML/CSS/JS)

Este repositório será usado para praticar **merges e conflitos** em um projeto front‑end.

## Como começar
1. Crie sua branch a partir de `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/seu-nome
   ```

2. Rode um servidor local simples (opcional): use a extensão Live Server no VS Code ou:
   ```bash
   python -m http.server 5500
   ```

## ⚠️ Pontos de conflito propositais
- **Edite ESTA MESMA LINHA** substituindo por seu nome completo (apenas UMA linha): _SEU NOME AQUI_
- Em `app.js`, a função `formatUser()` contém um TODO para múltiplos alunos alterarem o mesmo trecho.
- Em `index.html`, o bloco `<nav>` deve ser alterado por duas branches diferentes.
- Em `style.css`, o seletor `nav ul li` deve ser alterado por dois alunos.

> Dica: Sempre faça `git fetch` + `git merge origin/develop` antes de abrir seu PR para ver conflitos localmente.
