<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
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
        name:'hello',
        // mounted() {
        //     console.log('Component mounted.')
        // }

        computed: {
            store(){
               return this.$store.state.data;
            }
        },
    }
</script>
