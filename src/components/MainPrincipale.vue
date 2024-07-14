<script>
import secondaSezione from "./secondaSezione.vue";
import portfolio from "./portfolio.vue";
import formcontatto from "./formcontatto.vue";
export default {
    name: "Main_",
    data() {

    },
    components: {
        secondaSezione,
        portfolio,
        formcontatto,
    }
}

</script>

<template>
    <main>
        <div class="container-fluid contenitoremain pt-5">
            <h1 class="text-center color">Chi sono?</h1>
            <div class="contenitoreflexato">
                <div class="col-12 imgtop">
                    Mi chiamo <span class="nome">Adriana Scermino</span>sono una giovane e talentuosa
                    fotografa,crescendo,
                    sono stata ispirata dall'amore di mio padre per la fotografia, ed è stato lui
                    a far nascere per primo il mio interesse per questa forma d'arte. Infatti, è
                    stato proprio con la sua macchina fotografica che ho scattato le mie prime fotografie,
                    segnando l'inizio di un viaggio lungo una vita dietro l'obiettivo.
                </div>
                <div class="col-12 imgtop">
                    <div class="contenitoreimmagine2">
                        <div class="col-12 img1">
                            <img src="/public/7a5929b0-22d2-42f2-8617-4ab5262a9c47.jpg" alt="">
                        </div>
                        <!-- <div class="col-6 img2">
                            <img src="/public/matteo-vistocco-ki4UgfcJfnY-unsplash.jpg" alt="">
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="palma">
                <img src="/public/content-pixie-XC_5LFrWvyo-unsplash-removebg-preview.png" alt="">
            </div>
            <div class="palma2">
                <img src="/public/adam-birkett-XmfcsYHEhoQ-unsplash-removebg-preview.png" alt="">
            </div>
        </div>
        <secondaSezione></secondaSezione>
        <portfolio></portfolio>
        <formcontatto></formcontatto>
    </main>
</template>

<style scoped>
 .contenitoreimmagine2.active{
        opacity: 1;
    transform: translateX(0); 
    }
 .contenitoreimmagine2{
        opacity: 0;
        transform: translateX(-100px);
        transition: opacity 3s, transform 2s;    
    }
.palma2{
    position: absolute;
    bottom: -70px;
    right: 0px;   
}
.palma2 img{
    width: 70px;
}
.palma{
    position: absolute;
    top: 10px;

}
.palma img{
width: 60px;
}
.img1 {
    /* border: 1px solid black; */
    text-align: center;
}

.img2 {
    text-align: center;
}

.img2 img {
    width: 80px;
    border-radius: 10px;
}

.contenitoreimmagine2 {
    display: flex;
    align-items: center;
}

.img1 img {
    width: 80%;

}

@media (min-width: 768px) {
    .img1 img{
        width: 30%;
    }
    .imgtop{
        text-align: center;
    }
}

.nome {
    background-color: #2BADE2;
    border-radius: 5px;
    padding: 2px 2px;
    margin-right: 3px;
}

.imgtop {
    /* word-wrap: break-word;
    overflow-wrap: break-word; */
    font-size: 17px;
    color: white;
    padding-bottom: 20px;
    margin-top: 20px;

}

.color {
    color: white;
}

.contenitoreflexato {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap
}

.contenitoremain {
    background-color: #161616;
    position: relative;
}
</style>