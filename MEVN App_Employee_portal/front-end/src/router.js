import Vue from "vue";
import Router from "vue-router";

//must import components used for routes
import EmployeeList from "./views/employee-list.vue";
import Employee from "./views/employee.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/employees"
    },
    {
      path: "/employees",
      component:  EmployeeList
    },
    {
      path: "/employee/:id", 
      component: Employee
    }
  ]
});
