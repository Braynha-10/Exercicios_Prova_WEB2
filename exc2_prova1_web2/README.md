Faça uma aplicação com Node.js e Express.js que permita enviar via formulário ao servidor, com método GET, os lados de um retângulo ou os lados de um triângulo, e retornar ao cliente, como resposta, o perímetro da figura geométrica. Considere os seguintes requisitos:

Parametrize a URL para determinar a figura geométrica a ter o perímetro calculado. Exemplo: no parâmetro '/resposta/:figuraGeometrica' espera-se obter valor 'retangulo' ou 'triangulo'. Retorne uma mensagem de erro caso o parâmetro não tenha o valor 'retangulo' ou 'triangulo'. 
Estas requisições devem ser feitas via formulário em um template EJS único. O template deve ser servido como resposta ao GET na rota parametrizada '/:figuraGeometrica'. Retorne uma mensagem de erro caso o parâmetro não tenha o valor 'retangulo' ou 'triangulo'. 
Utilize o arquivo package.json, criando-o com o comando npm init, e inserindo seu nome.
Não enviar o diretório node_modules.