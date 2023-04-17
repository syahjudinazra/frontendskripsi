
<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Product Page
                <RouterLink to="/product/create" class="btn btn-primary float-end">Add New Product</RouterLink>
            </h4>
        </div>
        <div class="card-body">

            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Serial Number</th>
                        <th>Nama Device</th>
                        <th>RAM</th>
                        <th>Android</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody v-if="this.product.length > 0 ">
                    <tr v-for="(product, index) in this.product" :key="index">
                        <td>{{ product.id }}</td>
                        <td>{{ product.serialnumber }}</td>
                        <td>{{ product.nama }}</td>
                        <td>{{ product.ram }}</td>
                        <td>{{ product.android }}</td>
                        <td>
                            <RouterLink to="/" class="btn btn-warning">Edit</RouterLink>
                            <button type="button" class="btn btn-danger" style="margin-left: 10px;">Delete</button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="3">Loading.....</td>
                    </tr>
                </tbody>
            </table>
        </div>    
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'product',
    data(){
        return {
            product: []
        }
    },
    mounted() {
        
        this.getProduct();
        // console.log('test log')
    },
    methods: {
        getProduct(){

            axios.get('http://localhost:8000/api/product')
            .then(res => {
                this.product = res.data.product
                // console.log(this.data)
            });
        }
    },
}

</script>