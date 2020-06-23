
import Hello from '../components/Hello.vue';
import Stock from '../components/Stocks.vue';

import ProductPage from '../components/pages/ProductPage.vue';
import ProductFormNone from '../components/forms/ProductFormNone.vue';
import ProductForm from '../components/forms/ProductForm.vue';



export const routes = [

  {
    path: '/dashboard/index',
    component: ProductPage
  },


  {
    path: '/dashboard/add_product_none',
    component: ProductFormNone
  },

    {
        path: '/dashboard/add_product',
        component: ProductForm
    },


];