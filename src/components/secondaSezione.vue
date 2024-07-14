<script>
export default {
    name: "sezione2_",
    data() {

    }
}

</script>

<template>
    <section>
        <h2 class="text-center dicono pt-5">Cosa dicono di me</h2>
        <div class="carosello ">
            <!-- <div id="carouselExampleInterval" class="carousel slide foto" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/public/bf51cdbe-381c-4457-9ea0-bf642a2254b8-removebg-preview.png"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/public/21e469eb-189b-4926-a572-e5aa0c8405db-removebg-preview.png"
                            class="d-block w-100 img-fluid" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/public/f1f1ea03-a7ed-4a48-847f-14ceba7903bd.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/public/ad610beb-6793-4d68-bc8a-2bdcc45bec7f.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> -->
            <div id="carouselExample" class="carousel slide foto">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/public/prima.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/public/seconda.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/public/terza.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/public/quarta.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon successivo" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon successivo" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <hr>
        <div>
            <div class="container contenitorefoto">
                <div class="col-6 col-md-4 imgsfondo">
                    <img src="/public/fotoo1.jpg" alt="">
                    <h2 class="shooting">Shooting</h2>
                </div>
                <div class="col-6 col-md-4 imgsfondo">
                    <img src="/public/video1.jpg" alt="">
                    <h2 class="shooting">Video</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.successivo{
   background-color: #2BADE2
}
.eventi {
    color: white;
    margin-top: 20px;
}

.shooting {
    position: absolute;
    bottom: 10px;
    color: #2BADE2;
    font-weight: bold;
    left: 50%;
    transform: translate(-50%);
}

.carosello {
    display: flex;
    justify-content: center;
}
.dicono.active{
        opacity: 1;
    transform: translateY(0); 
    }
 .dicono{
        opacity: 0;
        transform: translateY(-100px);
        transition: opacity 3s, transform 2s;    
    }


.foto {
    width: 80%;
}
@media (min-width: 768px) {
  .foto{
    width: 40%;
  }
}

.imgsfondo img {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
}

.imgsfondo img:hover {
    opacity: 0.2;
    transition: 0.5s;
}

.imgsfondo {
    border: 1px solid;
    margin-top: 20px;
    position: relative;
    border-radius: 10px;
}


.contenitorefoto {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;


}

.foto {
    margin-top: 50px;
}

.dicono {
    color: white;
}

section {
    background-color: #161616;
    text-align: center;
}
</style>