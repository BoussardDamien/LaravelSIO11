<template>
  <h1>Je suis dans le CRM</h1>
  <button @click="search()" class="btn btn-primary">Récupérer les clients</button>
  <div class="container">
    <br>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nom</th>
        <th scope="col">Prenom</th>
        <th scope="col">Tel</th>
        <th scope="col">Email</th>
        <th scope="col">Adresse</th>
        <th scope="col">Code Postal</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="client in clients">
        <th scope="row">{{ client.id}}</th>
        <td>{{ client.nom}}</td>
        <td>{{ client.prenom}}</td>
        <td>{{ client.num_tel}}</td>
        <td>{{ client.email}}</td>
        <td>{{ client.adresse}}</td>
        <td>{{ client.code_postal}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      clients: []
    };
  },
  methods: {
    search() {
      axios
          .get("http://localhost/back/laravelSIO11/public/api/Clients")
          .then(response => {
                this.clients = response.data;
              }
          )
          .catch(err => {
            console.log("Aucun Client")
          })
      console.log(this.clients)
    }
  },
  mounted() {
    this.search();
  }
};
</script>
