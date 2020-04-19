<template>

<div>
    <div>
        <h3>
            <CurrentAccountComp></CurrentAccountComp>
        </h3>
    </div>
<!--    <div v-if="userData['0']">-->
<!--        <p>{{userData[0]}}({{userData[1]}})</p>-->
<!--    </div>-->

    <div>
        <label for="userName" >Name : </label>
        <input type="text" v-model="setUserData.name" id="userName">
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
    import PiggyChainService from "../services/PiggyChainService";
    import CurrentAccountComp from './../components/CurrentAccount'

    export default {
        name: "SetUser",
        components: {
            CurrentAccountComp
        },
        data : ()=>{
            return {
                userData : undefined,
                setUserData : {
                    name : '',
                    age : 0
                }
            }
        },
        created() {
            let currentPiggyChain = new PiggyChainService();
            currentPiggyChain.getUserData().then(returnedData =>{
                this.userData = returnedData;
            });

        },
        methods : {
            setUser : async (userData)=>{
                let currentPiggyChain = new PiggyChainService();
                await currentPiggyChain.setUser(userData);
            }
        }
    }
</script>

<style scoped>

</style>
