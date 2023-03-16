<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase/index.js'
import router from './router'


const isSignedIn = ref (false)



onMounted(()=>{
    onAuthStateChanged(auth, function(user){
        if(user){
            
            isSignedIn.value = true
            router.push('/home')

        }else{
            router.push('/')
        }
    })
})

const logout = () =>{
  signOut(auth)
  .then(()=>{
    isSignedIn.value = false
    
  })
}

</script>

<template>
  <div>
        <header class="shadow">
            <div class="container_header">
              <ul v-show="!isSignedIn">
                <div class="d-flex float-end">
                    <RouterLink to="/" style="text-decoration: none;"><text class="text-white m-2 btn btn-success">Register</text></RouterLink>
                    <RouterLink to="/login" style="text-decoration: none;"><text class="text-white m-2 btn btn-success">Login</text></RouterLink>
                </div>
              </ul>
                
              <ul v-show="isSignedIn">
                <div class="d-flex float-end">
                    <RouterLink to="/home" style="text-decoration: none;"><text class="text-white m-2 btn btn-success">Home</text></RouterLink>
                    <a href="/" style="text-decoration: none;"><text class="text-white m-2 btn btn-success" @click="logout">Log Out</text></a>
                </div>
              </ul>
               
            </div>
        </header>
    </div>
    <div class="center_container m-3 rounded text-center">
      <RouterView />
    </div>
 
</template>

<style>
.container_header{  

}
.center_container{
  display: grid;
  place-content: center;
}

</style>

