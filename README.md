# z-admin-pagination
a vue component

for ace admin backend
<p>http://ace.jeka.by/tables.html</p>

a simple admin backend base on ace + laravel
<p>http://adminn.orzzz.top/</p>

usage
<p>step1:npm i z-admin-pagination</p>
<p>step2:import pagination from 'z-admin-pagination';</p>
<p>step3:
<br>
```<pagination v-bind:pageData="pageData" @pageQuery="pageQuery"></pagination>```
</p>

pageData structrue
{
	"pageIndex": "1",
	"pageSize": 10,
	"total": 255,
	"totalPage": 26
}
