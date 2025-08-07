/* Compatibilidade: carregador do Service Worker mais recente
   Este arquivo existe para instalações antigas que registravam `sw.js`.
   Sempre que fizer um novo release, atualize a constante abaixo para apontar para o SW versionado. */
const LATEST_SW = 'sw-0.3.1.js';
try {
  importScripts(LATEST_SW);
} catch (e) {
  // Se não carregar, o SW anterior permanece ativo.
}
