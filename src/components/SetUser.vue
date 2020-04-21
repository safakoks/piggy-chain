<!--
Copyright 2020 - Şafak Öksüzer, Berkay Korkmaz

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

<template>
<md-card>
    <md-card-header>
        <md-card-header-text class="h4">
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
