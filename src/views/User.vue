<template>
<div>
    <div class="row">
        <div class="col-md-6">
            <GetUser></GetUser>

        </div>
        <div class="col-md-6">
            <SetUser></SetUser>
        </div>
    </div>
</div>
</template>

<script>7
import SetUser from "../components/SetUser";
import GetUser from "../components/GetUser";
    export default {
        name: "User",
        created() {
            this.menuTitle = 'User'
        },
        components:{
            SetUser,
            GetUser
        }
    }
</script>

<style lang="scss" scoped>
    .md-card {
        margin: 15px;
    }
</style>
