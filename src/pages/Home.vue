<template>
  <div class="page-container">
      <section class="hero">
        <div class="content">
          <img src="../assets/logo.png" alt="logo">
          <p>La mejor música para el tablón</p>
        </div>
      </section>
      <section class="about">
        <div class="content">
          <h2>Acerca</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, fames nisi mus id suscipit feugiat malesuada curabitur, vel taciti facilisi commodo viverra enim.</p>
          <div class="item">
            <img src="../assets/1.png" alt="logo">
            <p>lorem</p>
          </div>
          <div class="item">
            <img src="../assets/2.png" alt="logo">
            <p>lorem</p>
          </div>
          <div class="item">
            <img src="../assets/3.png" alt="logo">
            <p>lorem</p>
          </div>
        </div>
      </section>
      <section class="explore">
        <div class="content">
          <h2>Explorar</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, fames nisi mus id suscipit feugiat.</p>
          <router-link to="/explorar">
            <md-button class="md-raised md-primary">Ver podcast's</md-button>
          </router-link>
        </div>
      </section>
  </div>
</template>

<style lang="scss" scoped> 
  .md-app, section {
    min-height: 100vh;
  }
  .hero{
    background-image:url('../assets/music.jpg');
    background-size: cover;
    .content{
      color:white;
      width:33%;
      padding: 5%;
      h1{
        margin:0; 
      }
      p{
        font-size:20pt;
        font-weight: 100;
        font-size: 30pt;
        line-height: 1.2;
      }
    }
  }
  .about{
    background:white;
    .content{
      padding: 5%;
      h2{
        margin:0; 
        text-align:center;  
        font-size: 30pt;
        font-weight: 100;
      }
      p{
        font-size: 20pt;
        font-weight: 100;
        margin: 60px 0px;
        text-align: center;
        line-height: 1; 
      }
    }
    .item{
      width:33.33%;
      float:left;
      img{
        display:block;
        margin: 0 auto;
      }
    }
  }
  .explore{
    min-height:initial;
    .content{
      padding: 5%;
      height:100%;
      background:#343741;
      h2{
        text-align:center;
        font-size: 30pt;
        color: white;
        font-weight: 100;
      }
      p{
        color:white;
        font-size: 20pt;
        font-weight: 100;
        margin: 60px 0px;
        text-align: center;
        line-height: 1; 
      }
      button{
        margin: 0 auto;
        display: block;
      }
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
export default {
  name: 'Home'
}
</script>