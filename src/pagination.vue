<template>
        
	<div class="row" v-if="pageData && pageData.totalPage>0">
        <div class="hide" data-opt="for fun" v-show="decoratePageData">
            <span>计算分页中...</span>
        </div>
        <div class="col-xs-4">
            <div class="dataTables_info">
                <span class="disabled">共<em>{{pageData.total}}</em>条</span> 
            </div>
        </div>
        <div class="col-xs-8">
            <nav aria-label="Page navigation example" style="text-align: right;">
                <ul class="pagination justify-content-end" style="margin: 0;">
                    <li v-if="pageData.first==true" class="page-item previous disabled">
                        <span  class="disabled">首页</span> 
                    </li>
                    <li class="page-item" v-if="pageData.first==false">
                        <a href="javascript:void(0)"  v-on:click="pageQuery(1)">首页</a> 
                    </li>
                    <li v-if="pageData.first==true" class="page-item disabled" >
                        <span class="disabled">上一页</span> 
                    </li>
                    <li class="page-item" v-if="pageData.first==false">
                        <a href="javascript:void(0)"  v-on:click="pageQuery(pageData.preIndex)" class="pagiv-prev">上一页</a> 
                    </li>
                    <li class="page-item" v-for="link in pageData.linkNumbers" :class="{active:link == pageData.pageIndex}"> 
                        <a v-if="link != pageData.pageIndex" href="javascript:void(0)" v-on:click="pageQuery(link)" class="pagiv-number">{{link}}</a> 
                        <span v-if="link == pageData.pageIndex" class="cur">{{link}}</span>
                    </li> 
                    <li v-if="pageData.last==true" class="page-item next disabled">
                        <span>下一页</span> 
                    </li>
                    <li class="page-item next" v-if="pageData.last==false">
                        <a href="javascript:void(0)" v-on:click="pageQuery(pageData.nextIndex)">下一页</a>
                    </li>
                    <li v-if="pageData.last==true" class="page-item disabled">
                        <span  class="disabled">尾页</span> 
                    </li>
                    <li v-if="pageData.last==false" class="page-item ">
                        <a href="javascript:void(0)"  v-on:click="pageQuery(pageData.totalPage)">尾页</a> 
                    </li>
                    <li>
                        <span class="disable">{{pageData.pageIndex}} / {{pageData.totalPage}}</span>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
	export default{
		props:{
			pageData:{
				type:Object,
				default:{},
				require:true
			}
		},
		methods:{
			pageQuery:function(idx){
				this.$emit('pageQuery',idx);
			}
		},
		computed:{
            decoratePageData(){
                var pageIndex = parseInt(this.pageData.pageIndex);
                var pageSize = this.pageData.pageSize;
                var total = this.pageData.total;
                // start fix
                var totalPage = parseInt(total/pageSize);
                if(total%pageSize>0){
                    totalPage = totalPage + 1;
                }
                var pageLinkNumber = 6;
                if(totalPage<pageLinkNumber){
                    pageLinkNumber = totalPage;
                }

                var isOdd = pageLinkNumber%2==0;
                var val = parseInt(pageLinkNumber/2);
                var beginIndex = pageIndex - (isOdd?val-1:val);
                var endIndex = pageIndex + val;
                if(beginIndex<1){
                    beginIndex = 1;
                    endIndex = pageLinkNumber;
                }
                if(endIndex>totalPage){
                    endIndex = totalPage;
                    beginIndex = endIndex - pageLinkNumber + 1;
                }

                var first = pageIndex==1;
                var last = pageIndex==totalPage;

                var linkNumbers = [];

                this.pageData.totalPage = totalPage;
                this.pageData.first = first;
                this.pageData.last = last;
                for (var i = beginIndex; i <= endIndex; i++) {
                    linkNumbers.push(i);
                }
                this.pageData.linkNumbers = linkNumbers;
                this.pageData.preIndex = pageIndex-1;
                this.pageData.nextIndex = pageIndex+1;
            }
		}
	}
</script>
