Faça uma aplicação para cadastrar dados de clientes e funcionários de um banco. Um cliente deve ter cpf, nome, idade e endereço; um funcionário deve ter cpf, nome, telefone e cargo. A view dos formulários deve ser o único template do programa: 'cadastro.ejs'. Além disso, utilize o seguinte roteamento:

Requisições GET em '/' devem ser respondidas com uma página com links para o cadastro de um novo cliente ou um novo funcionário. As requisições devem ser pelo método GET em '/clientes/novo' e '/funcionarios/novo', respectivamente. 
O GET em '/clientes' deve ser respondido com o template 'cadastro.ejs', apresentando o formulário de cadastro do cliente. O formulário deve ser submetido como POST para '/clientes'.
O GET em '/funcionarios' deve ser respondido com o template 'cadastro.ejs', apresentando o formulário de cadastro do funcionário. O formulário deve ser submetido como POST para '/funcionarios'.
Requisições POST em '/clientes' ou '/funcionarios' devem redirecionar para '/'.
O POST em '/clientes' deve receber os dados do formulário como um objeto JSON e armazená-lo em um array.
O POST em '/funcionarios' deve receber os dados do formulário como um objeto JSON e armazená-lo em um array.
A página de GET em '/' deve conter, além dos links para cadastro de clientes e funcionários, links para listar todos os clientes e funcionários, com GET em '/clientes' e  '/funcionarios'. Estas listagens devem ser implementadas utilizando um único template: 'apresenta.ejs''.
O GET em '/clientes' deve ser respondido com o template 'apresenta.ejs', listando as informações no array de clientes.
O GET em '/funcionarios' deve ser respondido com o template 'apresenta.ejs', listando as informações no array de funcionários.
Utilize o arquivo package.json, criando-o com o comando npm init, e inserindo seu nome.
Não enviar o diretório node_modules.
