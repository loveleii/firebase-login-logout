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
                <RouterLink to="/login" class="me-5">Already have an Account?</RouterLink>
                <button class="btn btn-success" @click="register">Register</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase/index.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { RouterLink } from 'vue-router'
import router from '../router'

const email = ref('')
const password = ref('')
const error = ref('')
const errorMsg = ref('')
const success = ref('')
const successMsg = ref('')

const register = () => {
    if(email.value!='' || password.value!=''){
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((cred) => {
                email.value = ""
                password.value = ""
                error.value = false
                success.value = true
                successMsg.value = "Registered Successfully"

                
                
            })
            .catch(()=>{
                error.value = true
                errorMsg.value = "invalid Email"
            })
           
        }
        else{
            error.value = true
            errorMsg.value = "Please fill out all the fields"
        }
        
}
</script>
<style>
.card{
    width: 400px;
}
</style>