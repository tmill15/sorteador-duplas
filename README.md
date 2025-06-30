# Sorteador de Duplas 🏖️

> Aplicativo PWA para sorteio de duplas no Beach Tennis

[![PWA](https://img.shields.io/badge/PWA-Ready-blue.svg)](https://web.dev/progressive-web-apps/)
[![Version](https://img.shields.io/badge/version-0.1.0-green.svg)](https://github.com/tmill15/sorteador-duplas)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

## 📋 Descrição

O **Sorteador de Duplas** é uma aplicação web progressiva (PWA) desenvolvida para facilitar o sorteio de duplas em torneios e partidas de Beach Tennis. Com uma interface moderna e responsiva, o app permite adicionar jogadores e gerar pares aleatórios de forma rápida e eficiente.

## ✨ Funcionalidades

- 🎯 **Gerenciamento de Jogadores**: Adicione, edite e remova jogadores facilmente
- 🎲 **Sorteio Aleatório**: Algoritmo inteligente para gerar duplas balanceadas
- 📱 **PWA**: Instalável como app nativo no celular
- 🌙 **Modo Escuro**: Suporte automático a tema escuro/claro
- 📱 **Responsivo**: Interface otimizada para desktop e mobile
- ⚡ **Offline**: Funciona sem conexão com internet
- 🎨 **UI Moderna**: Design com gradientes e animações suaves

## 🚀 Como Usar

### Instalação
1. Acesse o aplicativo no seu navegador
2. Clique em "Instalar" quando aparecer o prompt
3. O app será adicionado à tela inicial do seu dispositivo

### Uso Básico
1. **Adicionar Jogadores**: Digite o nome e clique em "Adicionar"
2. **Gerar Duplas**: Vá para a aba "Sorteio" e clique em "Sortear"
3. **Visualizar Resultados**: As duplas serão exibidas de forma clara

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **PWA**: Service Worker, Web App Manifest
- **UI**: CSS Custom Properties, Flexbox, Grid
- **Ícones**: [Lucide Icons](https://lucide.dev/)
- **Design**: Mobile-first, Responsivo

## 📁 Estrutura do Projeto

```
sorteador-duplas/
├── index.html          # Aplicação principal
├── config.js           # Configurações do app
├── manifest.json       # Manifesto PWA
├── icon.svg           # Ícone do aplicativo
├── memory-bank/       # Documentação técnica
│   ├── project-overview.md
│   ├── technical-architecture.md
│   ├── development-guidelines.md
│   ├── feature-specifications.md
│   └── README.md
└── README.md          # Este arquivo
```

## 🎨 Características Técnicas

### Design System
- **Cores**: Gradiente azul (#4facfe, #00f2fe)
- **Tipografia**: Segoe UI
- **Espaçamento**: Sistema consistente
- **Bordas**: 10px-20px para visual moderno
- **Sombras**: Sistema em camadas para profundidade

### PWA Features
- ✅ Instalação nativa
- ✅ Funcionamento offline
- ✅ Splash screen
- ✅ Ícone na tela inicial
- ✅ Suporte iOS/Android

## 📱 Compatibilidade

- ✅ Chrome 70+
- ✅ Firefox 68+
- ✅ Safari 11.1+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🔧 Desenvolvimento

### Pré-requisitos
- Navegador web moderno
- Servidor local (para desenvolvimento)

### Executando Localmente
```bash
# Clone o repositório
git clone https://github.com/tmill15/sorteador-duplas.git

# Navegue até o diretório
cd sorteador-duplas

# Abra o index.html em um servidor local
# Recomendado: usar Live Server (VS Code) ou similar
```

### Estrutura de Desenvolvimento
- **Arquivo Único**: Toda a aplicação está em `index.html`
- **Configuração**: `config.js` para metadados
- **PWA**: `manifest.json` e `icon.svg`
- **Documentação**: Pasta `memory-bank/` com especificações completas

## 📚 Documentação

Para informações técnicas detalhadas, consulte a [Memory Bank](./memory-bank/):

- [Visão Geral do Projeto](./memory-bank/project-overview.md)
- [Arquitetura Técnica](./memory-bank/technical-architecture.md)
- [Diretrizes de Desenvolvimento](./memory-bank/development-guidelines.md)
- [Especificações de Features](./memory-bank/feature-specifications.md)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Thiago Milhomem**

- GitHub: [@tmill15](https://github.com/tmill15)

## 🙏 Agradecimentos

- [Lucide Icons](https://lucide.dev/) pelos ícones
- Comunidade PWA por recursos e documentação
- Contribuidores e testadores do projeto

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
