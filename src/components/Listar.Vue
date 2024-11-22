<template>
    <div>
        Hola Ronaldo
    </div>
</template>
<script>
export default {
    created:function(){

        this.consultarComuna();
    },

    methods:{
        consultarComuna(){
            fetch('http://localhost/comunas')
            .then(respuesta=>respuesta.json())
            .then(datosRespuesta)=>{
                console.log(datosRespuesta)
            })
            .catch(console.log)

        }
    }
}
</script>