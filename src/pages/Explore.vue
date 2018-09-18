<template>
  <div class="page-container">
      <section class="channels">
        <div class="content">
          <h2>Explorar</h2>
          <section>
            <div class="md-layout">
              <div v-for="channel in channels" class="md-layout-item md-size-33 md-small-size-100">
                <md-card>
                  <md-card-header>
                    <md-card-header-text>
                      <div class="md-title">{{channel.title}}</div>
                    </md-card-header-text>

                    <md-card-media>
                      <img :src="channel.urls.logo_image.original" alt="Image">
                    </md-card-media>
                  </md-card-header>

                  <md-card-actions>
                    <md-button @click="getAudio(channel.id)">Escuchar</md-button>
                  </md-card-actions>
                </md-card>
              </div>
            </div>            
          </section>
        </div>
      </section>
      <Modal :showDialog="showDialog" :audio="audio"></Modal>
  </div>
  
</template>

<style lang="scss" scoped> 
  .md-app, section {
    min-height: 100vh;
  }
  .channels{
    padding:5%;
    h2{      
      text-align:center;  
      font-size: 30pt;
      font-weight: 100;
    }
    .md-layout-item{
      margin-bottom:20px;
    }    
  }
  .md-app-content {
    padding: 0px;
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>

import Axios from 'axios'
import Modal from '../components/Modal.vue'

export default {
  name: 'Explore',
  components: {
    Modal
  },
  created(){
    this.getChannels()
  },
  data(){
    return {
      showDialog: false,
      channels: [],
      audio: {}
    }    
  },  
  methods: {
    getChannels: function(){
      Axios.get('https://api.audioboom.com/channels/recommended').then(response =>{
        this.channels = response.data.body;
      })
    },
    getAudio: function(id){
      Axios.get('https://api.audioboom.com/audio_clips/' + id + '.mp3').then(response =>{
        this.audio = response.data.body.audio_clip;
        this.showDialog = true
      })
    }
  } 
}
</script>