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
                    <label for="serialnumber" class="form-label">Serial Number</label>
                    <input type="text" v-model="model.product.serialnumber" class="form-control" id="serialnumber" name="serialnumber">
                </div>
                <div class="mb-3">
                    <label for="device" class="form-label">Device</label>
                    <input type="text" v-model="model.product.nama" class="form-control" id="device" name="device">
                </div>
                <div class="mb-3">
                    <label for="ram" class="form-label">RAM</label>
                    <input type="text" v-model="model.product.ram" class="form-control" id="ram" name="ram">
                </div>
                <div class="mb-3">
                    <label for="android" class="form-label">Android</label>
                    <input type="text" v-model="model.product.android" class="form-control" id="android" name="android">
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
                    serialnumber: '',
                    nama: '',
                    ram: '',
                    android: ''
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
                    serialnumber: '',
                    nama: '',
                    ram: '',
                    android: ''
                }
                this.errorList = '';
            })
            .catch(function(error){
                if (error.response) {
                    if(error.response.status == 422) {
                        mythis.errorList = error.response.data.error;
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