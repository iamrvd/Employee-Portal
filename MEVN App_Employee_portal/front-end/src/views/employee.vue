<template>
    <section>
        <h2 class="headerText">Employee Details</h2>
        <div  id="employeeListing">
            <p class="mainText"><span class="descText">{{employee.firstName + " " + employee.lastName}}</span></p>
            <img v-bind:src="employee.image" alt="Employee image portrait" class="portrait">
            <p class="employeeText">Designation: <span class="descText">{{employee.designation}}</span></p>
            <p class="quote">Quote: <span class="quoteText"><span class="descText">" {{employee.quote}} "</span></span></p>
            <p class="castText">Cast: <span class="descText">{{employee.cast}}</span></p>
            <router-link to="/employees">Other Employees</router-link>
        </div>
    </section>
</template>

<script>
export default{
    data() {
        return {
            employee : {}
        }
    },
    created() {
        var vm = this;
        let id = this.$route.params.id;
        fetch(`http://localhost:${process.env.VUE_APP_API_PORT}/api/employee/${id}`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            vm.employee = data;
        })
    }
}

</script>
<style scoped>

</style>
