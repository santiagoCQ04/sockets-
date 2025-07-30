import { Component } from "react"
import burgers from "../views/burgers.js"
import  perros_y_salchipapas from "../views/dogs and sausages and fries.js"
import drinks from "../views/drinks.js"
import extra_meals from "../views/extra meals.js"
import presentacion from "../views/presentation.js"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path: "/", Component:{presentacion}},
    {path: "/extra_meals", Component:{extra_meals}},
    {path: "/drinks", Component:{drinks}},
    {path: "/perros_y_salchipapas", Component:{perros_y_salchipapas}},
    {path: "burgers", Component:{burgers}}

]
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
