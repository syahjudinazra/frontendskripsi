<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Product</h4>
            </div>
            <div class="card-body">

                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                    <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                        {{ error[0] }}
                    </li>
                </ul>

                <div class="mb-3">
                    <label for="device" class="form-label">Device</label>
                    <input type="text" v-model="model.product.nama" class="form-control" id="device" name="device">
                </div>
                <div class="mb-3">
                    <label for="serialnumber" class="form-label">Serial Number</label>
                    <input type="text" v-model="model.product.serialnumber" class="form-control" id="serialnumber" name="serialnumber">
                </div>

                <button type="button" @click="saveProduct" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'productCreate',
    data(){
        return {
            errorList: '',
            model: {
                product: {
                    nama: '',
                    serialnumber: ''
                }
            }
        }
    },
    methods: {
        saveProduct() {

            var mythis = this;
            axios.post('http://localhost:8000/api/product', this.model.product)
            .then(res => {
                console.log(res.data)
                alert(res.data.message);

                this.model.product = {
                    nama: '',
                    serialnumber: ''
                }
            })
            .catch(function(error){
                if (error.response) {
                    if(error.response.status == 422) {
                        mythis.errorList = error.response.data.errors;
                    }
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                } else if (error.request) {
                console.log(error.request);
                } else {
                console.log('Error', error.message);
                }
            })
        }
    }
}

</script>