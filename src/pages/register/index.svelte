<script>
    import { metatags } from '@roxi/routify'
    import { url } from '@roxi/routify'
    metatags.title = 'FacturaXpress'
    metatags.description = 'Description coming soon...'
</script>
<div class="body" >
    <h1>FacturaXpress</h1>
    <div class="formulario">
        <div class="input-login">
            <h5>Nombre:</h5>
            <input type="text">
        </div>
        <div class="input-login">
            <h5>Correo:</h5>
            <input type="email">
        </div>
        <div class="input-login">
            <h5>Contraseña:</h5>
            <input type="password">
        </div>
        <div class="input-login">
            <h5>Repetir Contraseña:</h5>
            <input type="password">
        </div>
        
        <!-- svelte-ignore a11y-missing-attribute -->
        <a href={$url('.././main')} class="waves-effect  btn-large">Registrarse</a>
    </div>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');
    .body{
        width: 100%;
        height: 100%;
        background-image: url("./../../Images/Fondo.png");
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

    .formulario h5{
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

    }
    .formulario a{
        margin-top: 1.4%;
    }
</style>