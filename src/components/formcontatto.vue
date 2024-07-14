<script>
 const WEB3FORMS_ACCESS_KEY = "48a29d9d-0a85-4034-83b6-fa70d19278d9";
export default {
    data() {
        return {
            name: "",
        email: "",
        message: "",

        }
    },
    methods: {
      async submitForm() {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          console.log(result);
        }
      },
    },

}
</script>

<template>
    <section>
    <div class="pt-3 pb-3 formcontatto container">
        <h1 class="text-center">Contattami</h1>
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="48a29d9d-0a85-4034-83b6-fa70d19278d9">
            a94a8263-a494-47af-99af-92392812f110
            <input type="hidden" name="redirect" value="https://localhost:5174/index2.html">
            <input type="hidden" name="from_name" value="Sito di Adriana">
            <input type="hidden" name="subject" value="nuovo messaggio">
            <input class="form-control" type="text" name="nome" required placeholder="inserisci il tuo nome">
            <input class="form-control" type="email" name="email" placeholder="inserisci la tua email">
            <input class="form-control" type="number" name="numero" required placeholder="inserisci numero di telefono">
            <input type="checkbox" required name="" id="">
            <span class="mx-2 accetto">accetto di inviare i miei dati</span>
            <button class="btn btn-success"type="submit">invia</button>
        </form>
    </div>
</section>

</template>

<style scoped>
h1{
    color: white;
}
.accetto{
    color: white;
}
.formcontatto{
    width: 300px;
    background-color: #111111;
    border-radius: 20px;
}
form input{
    margin-top: 10px;
    margin-bottom: 10px;
}
button{
    margin-left: 10px;
}
section{
    background-color: #161616;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>
