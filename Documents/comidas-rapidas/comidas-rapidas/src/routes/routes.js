
import burgers from "../views/burgers.vue"
import dogs_and_sausages_and_fries from "../views/dogs and sausages and fries.vue"
import drinks from "../views/drinks.vue"
import extra_meals from "../views/extra meals.vue"
import presentation from "../views/presentation.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path: "/", component:presentation},
    {path: "/extra_meals", component:extra_meals},
    {path: "/drinks", component:drinks},
    {path: "/dogs_and_sausages_and_fries", component:dogs_and_sausages_and_fries},
    {path: "/burgers", component:burgers}

]
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
