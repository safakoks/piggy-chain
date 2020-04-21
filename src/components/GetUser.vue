<template>
    <md-card>
        <md-card-header>
            User Information
        </md-card-header>
        <md-card-content>
            <md-table>
                <md-table-row>
                    <md-table-cell>
                        Username
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

