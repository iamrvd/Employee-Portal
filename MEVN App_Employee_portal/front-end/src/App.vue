<template>
<div>
    <nav id="mainNav">
      <h1 class="hidden">Employee Portal</h1>
      <img id="mainLogo" src="static/logo.svg" alt="company logo">
    </nav>
    <transition name="fade" mode="out-in">
        <router-view v-bind:employees="theEmployees" the-title="Employee List"></router-view>
    </transition>
</div>
</template>

<script>
    export default{
        data() {
            return {theEmployees : []};
        },
        created() {
            var vm = this;
            fetch("http://localhost:"+process.env.VUE_APP_API_PORT+"/api/employees")
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                vm.theEmployees = data;
            })
        }
    }

</script>

<style lang="scss">
</style>
