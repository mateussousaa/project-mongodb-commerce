# MongoDB Commerce

O projeto MongoDB Commerce consiste em uma série de desafios para elaborar consultas e atualizações no banco `commerce` a fim de praticar a elaboração de querys com um banco de dados não relacional que é o MongoDB.

## Tecnologias e Ferramentas
<div>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/> 
</div>

---

# Funcionamento da aplicação

Para iniciar o projeto, é necessário possuir o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

Para rodar o projeto, é necessário seguir os passos abaixo:

1. Acesse o terminal na pasta raíz do projeto;

2. Crie um container com um volume apontando para a pasta do projeto ```docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0```;

3. Com o container em execução, acesse o terminal do container ```docker exec -it nomeDoContainer bash```;

4. No terminal do container, acesse o diretório ```/app``` mapeado no volume conforme o passo 2;

5. Por fim, execute o script de testes do projeto: ```./scripts/evaluate.sh```. Se por algum motivo a execução do container for finalizada, basta iniciá-lo novamente com o comando docker start nomeDoContainer e seguir a partir do passo 3.

---

# Requisitos técnicos do desafio:

- ✅ 1. Retorne a quantidade de documentos inseridos na coleção produtos.

- ✅ 2. Ordene a coleção produtos pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o nome e a quantidade de lanches vendidos.

- ✅ 3. Retorne o lanche mais vendido, mostrando apenas o nome e a quantidade do lanche mais vendido.

- ✅ 4. Retorne os lanches que tiveram vendas maiores que 50 e menores que 100, mostrando apenas o nome e a quantidade de lanches vendidos em ordem crescente.

- ✅ 5. Retorne o nome, as curtidas e vendidos dos lanches que tiveram quantidade de curtidas igual a 36 ou tenham a quantidade de vendas igual a 85.

- ✅ 6. Retorne o nome e as curtidas dos lanches que tiveram curtidas maiores que 10 e menores que 100.

- ✅ 7. Retorne o nome e vendidos dos lanches que tenham sido vendidos com uma quantidade diferente de 50 e em que o campo tags não exista.

- ✅ 8. Delete os lanches com menos de 50 curtidas e retorne o nome dos lanches que restaram no banco.

- ✅ 9. Retorne o nome de todos os lanches que possuam calorias abaixo de 500.

- ✅ 10. Retorne o nome de todos os lanches que tenham o percentual de proteínas maior ou igual a 30 e menor ou igual a 40.

- ✅ 11. Retorne o nome do produto, a quantidade de curtidas e quantos itens foram vendidos dos produtos que não sejam iguais a Big Mac e McChicken.

- ✅ 12. Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.

- ✅ 13. Inclua o campo criadoPor em todos os documentos, colocando Ronald McDonald no valor desse campo.

- ✅ 14. Crie uma query que retorne todos os lanches que possuem picles em seus ingredientes e mostre apenas os 3 primeiros itens contidos no array valoresNutricionais.

- ✅ 15. Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo.

- ✅ 16. Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac.

- ✅ 17. Retorne a quantidade total de produtos em uma nova coleção chamada resumoProdutos.

- ✅ 18. Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo.

- ✅ 19. Remova o item cebola de todos os sanduíches.

- ✅ 20. Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo.

- ✅ 21. Remova o último ingrediente do sanduíche Cheddar McMelt.

- ✅ 22. Adicione a quantidade de vendas dos sanduíches por dia da semana.

- ✅ 23. Insira os valores combo e tasty no array tags de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z).

- ✅ 24. Ordene em todos os documentos os valores do array valoresNutricionais pelo campo percentual de forma decrescente.

- ✅ 25. Adicione o valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.

- ✅ 26. Adicione o valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.

- ✅ 27. Conte quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas.

- ✅ 28. Conte quantos produtos têm 4 ingredientes.

- ✅ 29. Renomeie o campo descricao para descricaoSite em todos os documentos.

- ✅ 30. Remova o campo curtidas do item Big Mac.

- ✅ 31. Retorne o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos.

- ✅ 32. Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5.

---
 
Desenvolvido por [Mateus Sousa](https://www.linkedin.com/in/mateus-angelino-de-sousa/), © 2022.
