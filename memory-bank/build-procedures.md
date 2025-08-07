# Procedimentos de Build

## Preparar build

Quando eu receber a instrução “preparar build”, devo executar os passos abaixo automaticamente:

1. Atualizar versão e data em `config.js`:
   - Incrementar a versão no formato SemVer (patch por padrão), em `APP_CONFIG.version`.
   - Atualizar `APP_CONFIG.buildDate` para a data atual no formato `YYYY-MM-DD`.
2. Service Worker e cache
   - O SW é versionado no nome do arquivo: `sw-X.Y.Z.js`.
   - No `index.html`, o registro usa `sw-${APP_CONFIG.version}.js`.
   - Publique sempre um novo arquivo de SW por versão para contornar cache de CDN/Pages.
3. Atualizar exibição de versão no app
   - A versão é carregada de `APP_CONFIG.version` e exibida no rodapé via `index.html`.
4. Conferir PWA/manifesto (manual, se aplicável)
   - Validar `manifest.json` se houver campos de versão/documentação externa a sincronizar.
5. Mensagem de commit sugerida (PT-BR, Conventional Commits):
   - `chore(release): prepara build vX.Y.Z (data YYYY-MM-DD)`
   - Exemplos de corpo: “Atualiza versão em config.js e buildDate; revisão de responsividade; etc.”

### Observações
- Caso você queira incremento de `minor` ou `major`, informe explicitamente: “preparar build minor” ou “preparar build major”.
- Caso deseje fixar uma versão específica: “preparar build vX.Y.Z”.
- A automação não realiza o commit; ele é feito pela IDE conforme sua preferência.
