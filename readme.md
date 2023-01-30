
# Login Simples em CodeceptJS

Esse projeto tem como objetivo realizar um Login com 4 steps diferentes, sendo apenas um funcional positivo e 3 funcionais negativos.



## Stack utilizada

**Ferramentas:** 
  - Node: https://nodejs.org/en/download/ 
  - Visual Studio Code: https://code.visualstudio.com/



## Rodando os testes

Para rodar os testes, rode o seguinte comando (Interface)

```bash
  npx codececptjs run
```

Para rodar os testes, rode o seguinte comando (Rodando a TAG)
```bash
  npx codececptjs run --grep '@sucesso'
```
## Documentação do CodeceptJS 

### A forma como esse projeto foi construído segue esse passo a passo:
-----

   - **Iniciar um pacote npm:**
```bash
  npm init
```
-----
  - **Instalar o fremework CodeceptJS e Playwright:**
```bash
  npm install codeceptjs playwright --save
```
-----
  - **Iniciar o Projeto:**
  ```bash
  npx codeceptjs init
```
