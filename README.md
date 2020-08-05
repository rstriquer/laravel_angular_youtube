# Sobre aplicação

Aplicação construida para estudo de conceito de um servidor REST desenvolvido com
Angular no front-end e Laravel no backend.

## Estrutura de diretórios do projeto

* server: Local onde ficam os arquivos do servidor REST da aplicação
* client: Local onde ficam os arquivos de cliente da aplicação
* resources: Diretório contendo recursos diversos para auxilio ao projeto, em geral arquivos de análise de fluxo ou similares.

## Pre requisitos:
* Git 2.17.1
* Composer 1.10.1
* npm 6.14.6
* Node.js v10.22.0
* PHP 7.4.8
* docker 19.03.12

# Instalação

O projeto não foi aprimorado para deploy em servidor de produção, apenas
para ambiente de desenvolvimento.

Para armazenamento de dados no ambeinte de desenvolvimento foi selecionado o
mysql por meio do docker, conforme comandos na área de "Como executar em
ambiente de desenvolvimento", porem o projeto utiliza hibernate e portanto
estaria preparado para uso com qualquer banco de dados suportado por este.


## Como executar em ambiente de desenvolvimento

Para execução do projeto é necessário criar rodar o banco de dados com o docker
e criar o repositório, após esta criação sempre que for rodar o projeto o comando
do docker deve ser executado novamente e sempre que a execução não for mais
necessária é obrigatório parar o banco, como desctio no "Executar o banco de
dados" logo abaixo.

Depois de executar o banco é necessário realizar a migração do banco de dados e
ativar o servidor de página.

Por final é necessário rodar a instalação dos arquivos no projeto do cliente,
após a primeira execução basta rodar o servidor de página.

### Construir o banco de dados

Para executar o banco de dados localmente utilize o comando abaixo
```bash
cd [projeto]
docker-compose up -d
```

Após executar o comando acima é necessário **na primeira execução** conectar ao
banco e criar o repositório com o comando abaixo

```sql
CREATE DATABASE laravel;
```

### Construir o servidor

**Na primeira execução** é necessário realizar a instalação dos pacotes de apoio
e a criação da estrutura de banco de dados com os comandos abaixo:

Porem antes da execução abaixo ainda é necessário criar o arquivo ".env" a
partir do ".env.example" disponível no diretório "server" e alterar as
informações do banco de dados setando as informações conforme abaixo:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=123qwe
```

Em seguda continuar com a sequência dos comandos abaixo.

```bash
cd [projeto]/server
sudo composer install
./artisan migrate
```
## Construir o cliente
Para execução do ambiente de cliente:
```bash
cd [projeto]/client
npm i
```

## Executar o ambiente

Para iniciar a execução:
```bash
cd [projeto]
docker-compose up -d
cd server
./artisan serve &
cd client
npm start &
```

Para parar a execução
```bash
docker-compose down
kill -9 `pgrep -f php`
kill -9 $(lsof -t -i:4200)
```

## Acessar

Para acesso da aplicação é necessáio que tanto o cliente quanto o servidor estejam
em execução e para acesso ao ambiente web devemos acessar em um navegador o endereço
```http://localhost:4200/```.

É possível também utilizar os arquivos postman fornecidos no diretório
/resources/postman do repositório para interagir com o ambiente de servidor sem
a demanda de um cliente. O servidor deve estar acessível diretamente no endereço
```http://127.0.0.1:8000/```.



