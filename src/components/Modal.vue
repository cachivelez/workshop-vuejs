<template>
  <div class="page-container">
      <md-dialog :md-active.sync="showDialog">
          <md-dialog-title>{{audio.title}}</md-dialog-title>

          <md-dialog-content>
            <div v-if="audio.urls">
              <audio controls>
                <source :src="audio.urls.high_mp3" type="audio/mpeg"/>
              </audio>
            </div>
          </md-dialog-content>         

          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog = false">Cerrar</md-button>
          </md-dialog-actions>
      </md-dialog>      
  </div>
  
</template>

<style lang="scss" scoped>   
  audio{
      margin-top:60px;
      width:100%;
  }
</style>

<script>
console.log()
import Axios from 'axios'
export default {
  name: 'Modal',
  props: ['showDialog','audio']  
}
console.log(this)
</script>