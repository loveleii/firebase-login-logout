<template>
    <div class="card">
     
        <div class="card-body float-left">
            <div class="form-group m-2">
                <div v-show="error" class="alert alert-danger">
                    {{ errorMsg }}
                </div>
                <div v-show="success" class="alert alert-success">
                    {{ successMsg }}
                </div>
            </div>
            <div class="form-group m-2">
                <label for="" class="form-label float-start">Email</label>
                <input type="text" name="" id="" class="form-control" v-model="email">
            </div>

            <div class="form-group m-2">
                <label for="" class="form-label float-start">Password</label>
                <input type="password" name="" id="" class="form-control" v-model="password">
            </div>

        </div>
        <div class="card-footer p-3">
            <div class="form-group float-end">
                Don't have an account?  <Router-Link to="/" class="me-4">register here</Router-Link>
                <button class="btn btn-success" @click="login">Login</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { onMounted, ref } from 'vue'
import { auth } from '../firebase/index.js'
// import { RouterLink } from 'vue-router'

import router from '../router'

const email = ref('')
const password = ref('')
const error = ref('')
const errorMsg = ref('')
const success = ref('')
const successMsg = ref('')






const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((cred)=>{
        router.push('/home')
    })
    .catch((err)=>{
        error.value = true
        errorMsg.value = err.message
    })
}


</script>