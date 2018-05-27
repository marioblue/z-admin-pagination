# z-admin-pagination
a vue component

for bootstrap backend
<p>http://ace.jeka.by/tables.html</p>

a simple admin backend base on bootstrap + laravel
<p>http://adminn.orzzz.top/</p>

usage
<p>step1:npm i z-admin-pagination</p>
<p>step2:import pagination from 'z-admin-pagination';</p>
<p>step3:
<br>
&lt;pagination v-bind:pageData="pageData" @pageQuery="pageQuery"&gt;&lt;/pagination&gt;
</p>

pageData structrue
{
	"pageIndex": "1",
	"pageSize": 10,
	"total": 255,
	"totalPage": 26
}
