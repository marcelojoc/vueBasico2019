Vue.component('modal', {

    props: ['title'],   // propiedad  de el componente

    methods: {
      closeModal(){

        this.$emit('close', " pruebaaaaaaaaaa")

      },

      testmodal(){
        this.$emit('test', " pruebaaaaaaaaaa")
        
      }
    },

    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{title}}</h3>
            <div><slot> </slot></div>
            <footer>
              <button v-on:click="closeModal">Cerrar</button>
              <button v-on:click="testmodal">prueba</button>
            </footer>
          </div>
        </div>
      </div>`
  },

  )
  
  new Vue({
    el: '#app',
    data:{

      showModal: false,
    

    },
    methods:{

      toggleModal(){  // este metodo cambia falso  por  verdadero 

        this.showModal = !this.showModal

      },

      prueba(){

        alert('esto es una prueba  de un simple  boton emitiendo desde un componente');
      }

    }


  })