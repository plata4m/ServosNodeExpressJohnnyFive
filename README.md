# Iot - Controlando um Servo Motor Pela Internet <br />com JavaScript, NodeJS, ReactJS, Express, Cors, JohnnyFive e Arduino

Nesse projeto de Iot, controlo um servo Motor com JavaScript, NodeJS, Express, Cors, JohnnyFive e Arduino
Onde o componente Range do HTML5 puro controla o ângulo em tempo real do servo motor.

<br />
O projeto é bem simples e está separado em três partes. 

# Parte NodeJS

Contém os fontes e dependências para rodar o express e JohnnyFive no NodeJS permitindo acessos ao hardware. Basta mudar o ip para o seu projeto e iniciar o nodejs.

# Parte Web

Contém os fontes HTML e JavaScript. Script bem simples onde um component Range do HTML, a cada movimento chama um serviço do express no NodeJS, onde recebe o valor selecionado no range para girar o servo motor. 

# Arduino

Exemplo já existente no ambiente dentro da IDE do arduino, vá em: Arquivo->Exemplos->Firmata->StandardFirmata. Enviapara o arduino. Pronto. Pode fechar a IDE e continuar com o projeto Web e NodeJS. 

<br />
Basta baixar e rodar. Projeto de estudos Iot com Servo Motor com JavaScript, NodeJS, Express, Cors, JohnnyFive e Arduino. 

Você pode utilizar o container/servidor de sua preferência para rodar os fontes como Jboss, Tomcat, Apache etc. <br />
Nesse projeto utilizei o Apache, apenas para rodar o HTML dentro de um contexto de servidor, para permitir as chamadas assincronas aos seviços do express no NodeJS. A parte web não roda em React por ser 100% open source. Mas você pode fazer algumas simples mudanças para rodar nesse framework.

O projeto funcionando no Youtube
https://www.youtube.com/watch?v=LqB1nf5IGY8


![Alt Text](https://github.com/plata4m/ServosNodeExpressJohnnyFive/blob/master/iot2.jpg)







