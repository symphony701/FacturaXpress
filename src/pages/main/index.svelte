<div class="body" >
    <h1>FacturaXpress</h1>
    <div class="formulario">
        <h3>¿Que deseas realizar?</h3>
        
        <!-- svelte-ignore a11y-missing-attribute -->
        <a  class="waves-effect  btn-large">Realizar Factura</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a  class="waves-effect  btn-large">Soporte</a>
    </div>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');
    .body{
        width: 100%;
        height: 100%;
        background-image: url("../../images/Fondo.png");
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        font-family: 'ABeeZee', sans-serif;

    }
    h1{
        color:white;
        font-size:bold;
    }
    .formulario{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        color:white
    }

    /*.formulario h5{
        color: white;
        font-size:bold;
    }
    .input-login{
        display: flex;
        width: 25%;
        justify-content: space-between;
        font-weight: bold;
    }
    input{
        width: 50% !important;
        color:white !important;

    }*/
    .formulario a{
        margin-top: 1.4%;
    }
</style>