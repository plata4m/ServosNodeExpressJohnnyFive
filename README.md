# Iot - Controlando um Servo Motor Pela Internet <br />com JavaScript, NodeJS, Express, Cors, JohnnyFive e Arduino

Nesse projeto com Iot, controlo um servo Motor com JavaScript, NodeJS, HTML, Express, Cors, JohnnyFive e Arduino
Onde o componente Range do HTML controla o ângulo em tempo real do servo motor.

<br />
O projeto é bem simples e está separado em três partes. 

# Parte NodeJS

Contém os fontes para rodar o express e JohnnyFive no NodeJS permitindo acessos ao arduino e o servomotor. Basta mudar o ip para o seu projeto e iniciar o nodejs. Atenção apenas aos números das portas no código para plugar o servo no arduino. Pois você pode utilizar as portas que escolher.

# Parte Web

Contém os fontes HTML e JavaScript. Script faz com que a cada iteração com o component Range do HTML, chama um serviço do express no NodeJS, onde recebe o valor selecionado no range para girar o servo motor. O cors ficou liberado para o servidor não pensar que a enxurrada de requisição seja um ataque ddos. Permitindo controlar o servo motor em tempo real.  

# Arduino

Exemplo já existente no ambiente dentro da IDE do arduino, vá em: Arquivo->Exemplos->Firmata->StandardFirmata. Envia para o arduino. Pronto. Pode fechar a IDE e continuar com o projeto Web e NodeJS. Lembre-se apenas verificar no script do nodejs os números das portas para a comunicação.  

<br />
Basta baixar e rodar. Projeto de Iot com um Servo Motor sendo controlado em tempo real pela internet com JavaScript, NodeJS, Express, Cors, JohnnyFive e Arduino. 

Para o front-end você pode utilizar o container/servidor de sua preferência para rodar os fontes como Jboss, Tomcat, Apache ou, NodeJs. <br />
Para o back end deve se utilizar o NodeJS. Foi a arquitetura mais simples que achei para colocar hardwares na internet. <br />

Nesse projeto utilizei o Apache e NodeJS como testes, para rodar o HTML dentro de um contexto de servidor, para permitir as chamadas assincronas aos seviços do express no NodeJS. 

O projeto funcionando no Youtube
https://www.youtube.com/watch?v=LqB1nf5IGY8


![Alt Text](https://github.com/plata4m/ServosNodeExpressJohnnyFive/blob/master/iot2.jpg)







