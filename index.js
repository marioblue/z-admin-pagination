import Pagination from './src/pagination.vue';

/* istanbul ignore next */
Pagination.install = function(Vue) {
  Vue.component('ZAdminPagination', Pagination);
};

export default Pagination;

