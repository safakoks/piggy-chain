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
        <md-card-header class="h4">
            User Information
        </md-card-header>
        <md-card-content>
            <md-table>
                <md-table-row >
                    <md-table-cell>
                     <md-icon class="md-size-2x">account_circle</md-icon>   Username
                    </md-table-cell>
                    <md-table-cell v-if="userData.name">
                        {{userData.name}}
                    </md-table-cell>
                    <md-table-cell v-if="!userData.name">
                        Not Defined Yet
                    </md-table-cell>
                </md-table-row>
                <md-table-row>
                    <md-table-cell>
                        <md-icon class="md-size-2x">event</md-icon>
                        Age
                    </md-table-cell>
                    <md-table-cell v-if="userData.age">
                        {{userData.age}}
                    </md-table-cell>
                    <md-table-cell v-if="!userData.age">
                        Not Defined Yet
                    </md-table-cell>


                </md-table-row>
            </md-table>
        </md-card-content>
    </md-card>
</template>

<script>
    export default {
        name: "GetBalance",
        data: ()=> {
            return {
                userData: {
                    name: undefined,
                    age : undefined
                }
            }
        },
        created() {
            this.PiggyChain.getUserData().then(result=>{
                this.userData.name  =     result[0];
                this.userData.age   =     result[1];
            });
        }
    }
</script>


<style lang="scss">
.md-table-cell {
    font-size: 18px !important;

}

</style>
