<template>
    <div>
        <md-card>
            <md-card-header>
                <div class="md-title">Current Account Address</div>
            </md-card-header>

            <md-card-content>
                <CurrentAccount></CurrentAccount></md-card-content>

        </md-card>
    </div>

</template>

<script>
    import CurrentAccount from "../components/CurrentAccount";

    export default {
        name: "home",
        data: ()=>{
          return {
              title:'DENE'
          }
        },
        created() {
            this.menuTitle = 'Home';
        },
        components:{
            CurrentAccount
        }
    }
</script>

<style scoped>

</style>
