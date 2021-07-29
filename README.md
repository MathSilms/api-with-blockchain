# Blockchain-with-nodejs
> Implementação do conceito de blockchain com node.js
             
![width:200px](block.png)                                     

## O que é blockchain ? 

blockchain é um sistema que permite rastrear, o enviar e receber alguns tipos de dados pela internet. São pedaços de código gerados online que carregam informações, semelhante a blocos. Cada bloco é formado por um conjunto de dados listados a baixo na aba *composição do bloco*. O fato de um bloco possuir o hash do bloco anterior, faz com que todos estejam ligados entre si, por isso o nome blockchain( corrente de blocos ).

## Segurança

Os dados desses blocos são criptografados para garantir a segurança dos mesmos, dando origem ao Hash ( definição na aba abaixo ).

Outra coisa importante é o fato de cada bloco possuir o seu código e o código do anterior. Caso haja uma tentativa de quebrar esse código, teria que ser decodificado não apenas um, mas os dois blocos ( no caso de uma rede com um considerável tempo de existência, pense como isso seria difícil ).

A blockchain não possuiu um dono específico, mas possui um registro público que pode ser acessado por qualquer um. Algumas informações não terão como serem verificadas, já que foram criptografadas.

# Composição do bloco 

## Timestamp

Data de quando o bloco foi criado.

## Hash

 É uma operação criptográfica que gera identificadores únicos e irrepetíveis a partir de uma determinada informação. O hash é composto por lastHash ( definição abaixo ), timestamp e os dados do atual bloco.
 
## lastHash

Hash do bloco anterior que vai ser utilizado para criar o hash do bloco atual.

## Dados

Os dados são o conteudo contido no bloco, geralmente uma transação. Esses dados são criptografados através do hash.

# Descrição dos métodos do bloco

## genesis

Método utilizado para gerar o bloco genesis.

- O bloco genesis é o primeiro bloco presente em uma blockchain. Para criar ele, utilizamos dados fakes e aleatórios com o intuito de apenas criar um bloco mesmo, já que no começo não temos nenhum dado para validar.
 Como todo bloco gerado precisa do hash do bloco anterior, precisamos do genesis para que os outros funcionem corretamente. ( o bloco genesis possui hash aleatório também, feito apenas para dar inicio á corrente ).
 
 obs.: A blockchain de fato só começa a partir do segundo bloco.

## mineBlock

Método utilizado para criar um novo bloco.

## hash

Método que cria o hash do bloco utilizando o timestamp, lastHash e os dados presentes no bloco.

## blockHash

Método utilizado para criar um novo hash, baseado nos dados do bloco atual.

- O blockHash recebe o bloco atual, pega todos os dados dentro dele e cria um novo hash. A finalidade dessa função na verdade é comparar o novo hash criado com o hash atual do bloco. Se tudo ocorrer bem, os hash serão identicos ( já que os dados utilizados nos dois são idênticos ). O ponto é que, se os dados não forem idênticos, identificamos que o bloco pode ter sido corrompido.



# Descrição dos métodos da blockchain

## addBlock

Método utilizado para adicionar novos blocos na corrente ( chain ).

## isValidChain

Método utilizado para validar se a corrente pode ser adicionada na blockchain ou não.
deve seguir essas regras de validação :

- validar o bloco genesis : se o primeiro bloco da corrente não for igual ao bloco genesis, então a corrente não é valida e deve ser descartada
- validar o hash do bloco : 

  * Se o lastHash ( hash do bloco anterior PRESENTE NO BLOCO ATUAL ) for diferente do hash do BLOCO ANTERIOR, ou seja, se tiver       alguma divergência nos hashs dos blocos a corrente não é valida.
  * Se o hash ( bloco atual ) for diferente de uma nova versão do proprio hash( ele não é igual a uma nova versão dele mesmo ), significa que em um determinado momento ele foi corrompido. Nesses casos a corrente também não é valida.

obs.: Esse conceito pode ser um pouco difícil de assimilar no começo, tente ler e interpretar o código em conjunto para que compreenda como funciona esse processo de validação ( tem comentários no código também para facilitar ;) )

## replaceChain

Método utilizado para validar um fork de uma corrente e caso seja válido, ele substitui a corrente atual pelo fork.
as regras para esse replace são :

- A nova corrrente ( fork ) deve ser MAIOR que a corrente atual, caso contrário esse fork não assume como corrente atual.
- A nova corrente deve passar pelo método *isValidChain* e se não for validado por todas as regras desse método, o fork não assume como corrente atual

### NPM

```sh
npm install
```

### yarn

```sh
yarn install
```

essa ação irá instalar os seguintes módulos:

"crypto-js": "^4.0.0"
"jest": "^27.0.6"

## Configuração para Desenvolvimento

Depois de instalado os módulos, execute o script criado para inicializar o projeto: 

### NPM

```sh
npm dev
```
### yarn

```sh
yarn dev
```

o script de desenvolvimento vai rodar o arquivo teste.js, que vai simular o funcionamento da blockchain e printar no console para verificar os seguintes itens :

- bloco genesis
- primeiro bloco da corrente ( depois do genesis )
- array de blocos com o primeiro, segundo e terceiro bloco da blockchain
- a corrente com todos os blocos já dentro dela

teremos após esses itens, a simulação de erros:

- erro de corrente com tamanho que não atende aos requisitos para virar a corrente principal
- erro de corrente corrompida, que não passou no processo de validação

![](./return.png) 

qualquer duvida ou sugestão:

Matheus de Oliveira Mendonça – [@MathSilms](https://www.linkedin.com/in/mathsilms/) – mateheusoliver@gmail.com
