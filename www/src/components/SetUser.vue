<template>

<div>
    <div>
        <label for="userName" >Name : </label>
        <input type="text" v-model="setUserData.name" placeholder="Enter a username" id="userName">
        <br>
        <br>
        <label for="userAge" >Age : </label>
        <input type="number" v-model="setUserData.age" id="userAge">
        <br>
        <button v-on:click="setUser(setUserData)">Change User Profile</button>
    </div>
</div>
</template>

<script>
    import MainService  from "../services/MainService";

    export default {
        name: "SetUser",
        data : ()=>{
            return {
                setUserData : {
                    name : '',
                    age : 20
                }
            }
        },
        created() {
            MainService.PiggyChain.getUserData().then(returnedData =>{
                if(returnedData.length === 2){
                    this.setUserData.name = returnedData[0];
                    this.setUserData.age = returnedData[1];
                }
            });
        },
        methods : {
            setUser : async (userData)=>{
                MainService.PiggyChain.setUser(userData);
            }
        }
    }
</script>

<style scoped>

</style>
