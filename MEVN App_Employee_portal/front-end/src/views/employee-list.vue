<template>
    <section>
        <h2 class="headerText">{{theTitle}}</h2>
        <div id="employeeContainer">
            <ul>
            <li v-for="employee in employees" v-bind:key="employee.id">
                    <div class="thumbnailDiv">
                        <img v-bind:src="employee.image" alt="Employee image thumbnail" class="thumbnail">
                    </div>
                
                    <p>
                        <router-link :to="`/employee/${employee._id}`">{{employee.firstName + " " + employee.lastName}}
                        </router-link>    
                    </p>
            </li>
        </ul>
        </div>
    </section>
</template>

<script>
    export default {
        props: ["theTitle", "employees"]
    }
</script>
