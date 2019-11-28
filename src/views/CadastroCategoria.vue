<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>
                    Cadastro
                    <small class="text-muted"> | Nova Categoria</small>
                </h3>
            </div>
        </b-row>
        <categoria-form v-on:newCategory="createCategory"></categoria-form>
    </div>
</template>

<script>


    import CategoriaForm from "../components/CategoriaForm";
    import categoryService from "../services/categoria";
    export default {
        name: "CadastroCategoria",
        components: {
            CategoriaForm

        },
        methods: {
            createCategory(category){
                categoryService.create(category)
                    .then((response) => {
                        console.log(response)
                        this.$router.push('/categoria')
                    })
                    .catch((response) => {
                        console.log('Erro: ')
                        console.log(response)
                    })
            }
        }
    }
</script>

<style scoped>

</style>