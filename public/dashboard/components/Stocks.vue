<template>
    <div class="container">

        <!-- <nav>
            <router-view></router-view>
        </nav> -->
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">This is from the Stock components</div>
                    <div class="card-body">
                        im from the stocks
                    </div>

                    <div>
                        <h1>Datas</h1>

                        <ul>
                            <li v-for="data in store">{{ data.one }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'stocks',
        // mounted() {
        //     console.log('Component mounted.')
        // }

        computed: {
            store(){
               return this.$store.state.datas;
            }
        },
    }
</script>
