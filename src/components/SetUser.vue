<template>
<md-card>
    <md-card-header>
        <md-card-header-text>
            User Settings
        </md-card-header-text>
    </md-card-header>
    <md-card-content>
        <md-field>
            <label for="userName" >Username </label>
            <md-input  type="text" v-model="setUserData.name" id="userName"/>
        </md-field>
        <md-field>
            <label for="userAge" >Age </label>
            <md-input  type="number" v-model="setUserData.age" id="userAge"/>
        </md-field>


    </md-card-content>
    <md-card-actions>
        <md-button class="md-raised md-primary" v-on:click="PiggyChain.setUser(setUserData)">Change User Profile</md-button>
    </md-card-actions>
</md-card>
</template>

<script>
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
            this.PiggyChain.getUserData().then(returnedData =>{
                if(returnedData.length === 2){
                    this.setUserData.name = returnedData[0];
                    this.setUserData.age = returnedData[1];
                }
            });
        }
    }
</script>

<style scoped>

</style>
