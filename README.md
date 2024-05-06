# DotL Cursos

Plataforma de Cursos (E-Learning) Open-Source.
Projeto está em construção ainda...

## Tecnologias
- Docker
- MinIO (object storage server)
- NextJS
    - NextAuth
- React
- PostgreSQL

## RoadMap
- [x] Estrutura inicial
    - [x] Banco de Dados
    - [x] Servidor de arquivos
    - [x] Autenticação em rotas
- [ ] Usuários 
    - [x] Autenticação
    - [ ] Cadastrar / SignUp
- [x] Admin system
    - [x] Criar curso
    - [ ] Editar curso
    - [ ] Upload das aulas
- [x] Homepage
    - [x] Listar cursos
    - [ ] Cache da lista de cursos
- [ ] Assistir curso
    - [ ] Servidor HLS
    - [ ] Salvar e exibir o progresso
    - [ ] Certificado
- [ ] Fórum
- [ ] Checkout
    - [ ] Atribuir cursos ao usuário

## Executando o Projeto
Comece executando os containers do docker compose

`docker compose up`

Após isso, execute o script `run_migrations.sh` que está na pasta raíz do projeto. Execute também o script `run_seeds.sh`.

Para o primeiro login, veja (se quiser, modifique) as credenciais no arquivo de seed do usuário admin. (/src/seeds/user.ts)
