//import React from "react"
import { useEffect } from "react"

import Category  from "../../assets/category.png"

import { Container, CategoryImg  } from "./styles"
import api from "../../services/api"


export function CategoryCarousel(){

   useEffect( ()=> {
    
      async function loadCategories() {
         const response = await api.get("categories")
         console.log(response)
      }
      loadCategories()
},[])



return (
   <Container>
    < CategoryImg  src={Category} alt="logo da category" />
   </Container>
)


}

export default CategoryCarousel