<template>
    <div class="page-container">
        <md-app md-waterfall md-mode="flexible" class="page">
            <md-app-toolbar class="black-background md-large">
                <div class="md-toolbar-row">
                    <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                        <md-icon class="white-font">menu</md-icon>
                    </md-button>
                    <span class="md-title white-font height30">
                      <router-link to="/">
                        <img src="./assets/deloitte.png" alt="logo">
                      </router-link>
                    </span>
                </div>
            </md-app-toolbar>
            <md-app-drawer class="sidebar" :md-active.sync="menuVisible">
                <md-toolbar class="md-transparent" md-elevation="0">Deloitte Music</md-toolbar>
                <md-list>
                    <md-list-item v-for="(item,index) in links" :key="index" @click="menuVisible = false" :to="item.path">
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">{{item.name}}</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>
            <md-app-content>
                <router-view></router-view>
            </md-app-content>
        </md-app> 
    </div>
</template>

<script>

export default {    
    data() {
        return {
            menuVisible: false,
            title: 'Responsive City',
            links: this.$root.$data.routes
        }
    }
}
</script>

<style lang="scss" scoped>    
  .white-font {
      color:#ffffff!important
  }
  .height30 {
      height:30px;
  }
  .md-title {      
      margin-left: calc(50% - 100px);
      img {          
         width:100px;
      }
  }
  .black-background {
      background-color:#212121!important;
  }
  .sidebar {
      max-width:20%;
  }
  .md-app {
    min-height: 100vh;
  }
  .md-app-content {
    padding: 0px;
  }
  .page {
      min-height:100vh;
  }
   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>