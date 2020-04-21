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
        <div class="page-container">
            <md-app md-waterfall md-mode="fixed">
                <md-app-toolbar>
                    <span class="md-title"></span>
                </md-app-toolbar>

                <md-app-drawer md-permanent="full">
                    <router-link
                            to="/"
                            v-slot="{ href }"
                    >
                    <md-toolbar class="md-transparent h4" md-elevation="0">
                        <a :href="href">
                            <img class="piggy-logo" src="./assets/piggy.svg"/>
                        </a>
                        <span class="app-title">Piggy Chain</span>

                    </md-toolbar>
                    </router-link>

                    <md-list>
                        <router-link
                                to="/"
                                v-slot="{ href }"
                        >
                            <md-list-item :href="href">
                                <md-icon>home</md-icon>
                                <span class="md-list-item-text" >Home</span>
                            </md-list-item>
                        </router-link>
                        <router-link
                                to="/money"
                                v-slot="{ href }"
                        >
                        <md-list-item :href="href">
                            <md-icon>account_balance_wallet</md-icon>
                            <span class="md-list-item-text" >Money</span>
                        </md-list-item>
                        </router-link>

                        <router-link
                                to="/user"
                                v-slot="{ href }"
                        >
                        <md-list-item :href="href">
                            <md-icon>account_circle</md-icon>
                            <span class="md-list-item-text">User</span>
                        </md-list-item>
                        </router-link>
                    </md-list>
                </md-app-drawer>

                <md-app-content v-if="!Web3Error" >
                    <router-view></router-view>
                </md-app-content>
                <md-app-content v-if="Web3Error" >
                    <md-card class="col-md-6 md-accent">
                        <md-card-header class="h3"> Connection Error</md-card-header>
                        <md-card-content> {{Web3Error}}</md-card-content>
                    </md-card>
                </md-app-content>

            </md-app>
        </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
    .md-toolbar{
        font-weight: bolder;
    }

    .md-list-item-text{
        font-size: 20px;
        font-weight: inherit;
    }
    .md-app-toolbar{
        background-color: #ffb8b8 !important;
    }

    .app-title {
        margin-left: 10%;
        font-size: 30px;
        font-family: Helvetica;
        font-weight: bolder;
        color: #22559C;
    }

    .md-title{
        font-size: 25px;
        font-weight: bolder;
        color: white !important;
    }

    .piggy-logo {
        width: 75px;
        margin: 5px;
    }
    .md-app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 10px;
    }

    .md-content {
        padding: 1px 16px;
    }

</style>
