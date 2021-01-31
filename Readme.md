<h1 align="center">
  <br>Simetrik<br>
</h1>
<p align="center"><p>


<div align="center">

> Demo Web App: https://simetrik-dun.vercel.app   
</div>


## Instalacion

1. Clona el projecto: `git clone https://github.com/<your username>/simetrik`
2. Instala dependencias: `npm install` or use `npm i`
3. Correr el projecto: `npm run dev`



## Cuestionario:


#### 1. ¿Por qué no debería usar la librería JQuery , si estoy usando ReactJS ?

 No se debe usar JQuery porque este modifica el DOM directamente, debemos recordar que React tiene un virtual DOM
 y esto nos puede generar conflictos

#### 2. ¿Porque usarias Hooks de las nuevas versiones de ReactJS, en lugar de class component ?

Uso los hooks porque hacen mas sencillo el desarrollo ya que las classes  tienen conceptos como el 'this'
que aveces puede voverse algo complejo, tambien en en temas de performance es algo que ayuda ya que las classes no minifican tan bien como las funciones y si usamos hooks estariamos reduciendo el peso de nuestros archivos 

#### 3. ¿Que es un archivo JSX ?

es una extension de la sintaxis de javascript, y como proposito tiene proveer una sintaxis 
la cual luce como si escribieramos html dentro de nuestro javascript.

#### 4. ¿Que diferencia hay entre una function y una arrow function de Javascript?

La principal diferencia es el contexto, para ser mas exacto hablo del trato del el elemento 'this',
otra diferencia que hay a simple vista es la sintaxis.

#### 5. ¿Qué es Redux y cómo nos ayuda en los proyectos?

Es una herramienta creada por Dan Abramov cuyo objetivo es la gestion de estados en aplicaciones de 
javascript y se basa en la arquitectura Flux

#### 6. ¿Por qué usuarios pruebas unitarias en tu código?

Para probar pequeñas partes de nuestro codigo asegurandonos y garantizando que realmente el codigo esta haciendo lo que se espera de el.

#### 7. ¿Que nos permite hacer la siguiente declaración?
 ```
  const anyFunction = ( param_1 ) => ( param_2 ) => param_1 + param_2
  ```

  Esto es un closure lo cual es una función que es libre de variables, esto quiere decir que son funciones que manejan funciones independientes. Es decir dentro de una función podemos implementar otra función