<template>
    <div id="nav">
      <h1>GNIGAME</h1>
                <ul>
                    <li><a href="#">GAMESⅴ</a></li>
                    
                    <li><a href="#">KIDS</a></li>
                    <li><a href="#">COMICS</a></li>
                    <li><a href="#">EVENT</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
    </div>
</template>
<script>
export default{
    name:'GNIGAME',
    props:{
    tit: String
  } 
}
</script>
<style>
#nav ul li {
        display: inline-block;
        font-size:14px;
        text-align: center;
        word-spacing: -20px;
    }
    #nav {
        background-color: black;
        display: flex;
        justify-content: space-between;
    }
    #nav ul{
      margin-right: 17%;
    }
    #nav h1{
      margin-left:20%;
      font-family: 'Katuri';
    }
     body {
        margin: 0;
        padding: 0;
    }
    #app a {
        color: gray;
        display: block;
        text-align: center;
        margin: .25rem;
        padding: .5rem 1rem;
        text-decoration: none;
        font-weight: bold;
        color: gray;
    }
    h1 {
        font-size: 35px;
        margin-left: 100px;
        color: white;
    }
        @font-face {
      font-family: 'Katuri';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_13@1.0/Katuri.woff') format('woff');
      font-weight: normal;
      font-style: normal;
} 
</style>
