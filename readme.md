# Desafio Desenvolvedor Júnior TI 2022/2

## 📌 Uma API escalável e desacoplada.

Essa aplicação possui as funcões CRUD, autenticação e autorização de usuário e estruturas desacopladas prontas para aplicação de testes unitários.

### Seguem algumas features e boas práticas aplicadas a API:

✅ **Adicionado graceful shutdown para finalizar a operação do servidor da melhor forma.**

- utiliza-se sinais de comunicação entre processos do sistema operacional, para finalizar a aplicação sem que ela esteja no meio de uma requisição
  ou utilizando algum outro serviço como banco de dados.

✅ **Adicionado mais um nível de abstração das rotas para aumentar a escalabilidade e legibilidade do código.**

✅ **É adicionado também duas rotas extras, são elas:**

- Public: Rotas publicas da API onde não é necessário o serviço Authenticação e Autorização (como recuperação de senha e criação de usuário).
- Associate: foi criado um end-point e um controller específico para o seriviço de associação de usuário para aumentar
  o desacomplamento, segurança e testabilidade.

✅ **Adicionado mais um nível de abstração nos controllers, para tornar o código mais desacoplado e consequentemente mais testável.**

- Todo Controller agora é independente dos Models, assim é possivel aplicar testes unitários nessa estrutura.

✅ **Validações aplicadas nos models.**

✅ **Model de usuário alterado para encriptar a senha antes de salvar no banco de dados.**

- Funcionalidade aumenta a segurança contra possivel vazamento de dados sensíveis.

✅ **Adicionado serviço e middleware de autenticação JWT - Serviço: encarregado de gerar token JWT para futura autenticação de usuario e validar senha encriptada.**

- Caso o usuário não seja encontrado ou a senha não seja válida é retornado um erro.
- Middleaware: encarregado de verificar o token JWT enviado na requisicão de usuário e permitir aceso a aplicação.

✅ **Adicionado serviço ACL: Access Control List**

- Atributo Admin para o model de usuário o qual cede autorização para adição de curso para demais usuários.

- A role default é Admin, mas caso seja passado o atributo role:"user" durante a criação o usuário ficará com o acesso limitado a aluns recursos da API

✅ **Criado Serviço e Controlador de Associação e recuperação de senha**

- Serviço: verifica os dados e Associa um curso ao usuário. - Controlador: uma classe que recebe os models e o serviço que contém os métodos da rota de associação.
- recuperação de senha: caso o email exista é gerado um link contendo um Token jwt, quando o token descriptografado contem o id do usuário,
  logo depois é efetuada uma busca para alteração da senha. (futuramente o link seria enviado para o email através de outro serviço)

#

#

## 🚀 DESAFIO API

Aqui, você terá que criar uma API REST utilizando as boas práticas.

- Você vai precisar criar simplesmente a conexão local do seu servidor ( api ) com o seu banco de dados. Lembre-se de usar o voitto_desafio.sql é ele que possui nossa estrutura pronta

  - Uma dica, pode ser usar a conexão XAMPP + MySQL workbench

- Após ter feito toda a conexão, basta apenas criar as rotas e o sistema de CRUD ( CREATE READ UPDATE E DELETE) e integrar com o frontend

- Crie um sistema de login com autenticação, simples.
  - crie o endpoint criação de conta
  - crie o endpoint de login
  - E o endpoint de refatoração de senha, não é necessário, mas caso queira incrementar adicione o nodemail ( https://nodemailer.com/about/) onde vc enviará uma confirmação de de email da forma que achar melhor
  - A senha não pode ter menos de 8 digitos
