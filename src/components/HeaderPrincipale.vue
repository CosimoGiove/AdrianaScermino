<script>
export default {
    name: "Header_",
    data() {

    }
}

</script>

<template>
    <header>
        <div class="container">
            <div class="nav1 contenitore">
                <div class="lii">
                    <div class="immagineheader">
                        <img src="/public/79c0e81e-773a-4a93-9d0e-a1baa3aea073-removebg-preview.png" alt="">
                    </div>
                </div>
                <div class="lii">Home</div>
                <div class="portfolio lii">
                    <a href="https://wa.me/+393886283201"><i class="fa-brands fa-square-whatsapp icona">  Contatta
                    </i></a>
                </div>
                <!-- <div class="lii">Chi sono</div> -->

            </div>
        </div>
        <div class="container-fluid">
          <div class="video1">
            <video autoplay loop muted  src="/src/assets/1858314-hd_1920_1080_30fps.mp4"></video>
            <div class="prova">
                Illumina la tua storia, un  <span class="fotogramma">fotogramma</span> alla volta!
            </div>
          </div>
          
        </div>
    </header>
</template>

<style scoped>
.icona{
    font-size: 1.2em;  
}

.portfolio a i{
    color:green;
}

.fotogramma{
    background-color: #2BADE2;
    border-radius: 5px;
    padding: 3px 3px;
}
.contenitore {
    justify-content: center;
    align-items: center;
    display: flex;
    position: fixed;
    z-index: 999;
    top: 0px;
    right: 0px;
    left: 0px;
    background-color: black;
    opacity: calc(0.8);

}

ul {
    list-style: none;
}

.nav1 {
    text-align: center;
}

.nav1 .lii {
    display: inline-block;
    margin-right: 10px;
    font-size: 20px;
}
.lii:hover{
    color: blue
}

header {
    background-color: #111111;
    color: white;
}

.portfolio {
    padding: 5px 5px;
    border-radius: 10px;
}

.immagineheader img {
    width: 70px;
    animation: animazione 5s infinite;

}
@keyframes animazione {
    0%{
        transform: rotate(360deg);
    }

    
}
video{
    width: 100%;
    opacity: 0.2;
    filter: blur(3px);
    margin-top: 100px;
    
}
.video1{
    position: relative;

}
.prova{
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50% , -50%);
    font-family: cursive;

}
</style>
