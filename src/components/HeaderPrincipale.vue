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
                <div class="portfolio lii">Portfolio</div>
                <div class="lii">Chi sono</div>

            </div>
        </div>
        <div class="container-fluid">
          <div class="video1">
            <video autoplay loop muted  src="/src/assets/1858314-hd_1920_1080_30fps.mp4"></video>
            <div class="prova">
                
            </div>
          </div>
          
        </div>
    </header>
</template>

<style scoped>
.contenitore {
    justify-content: center;
    align-items: center;
    display: flex;
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

header {
    background-color: #111111;
    color: white;
}

.portfolio {
    background-color: #269b93;
    padding: 5px 5px;
    border-radius: 10px;
}

.immagineheader img {
    width: 70px;

}
video{
    width: 100%;
    opacity: 0.2;
}
.video1{
    position: relative;

}
.prova{
    position: absolute;
    top: 1px;
}
</style>
