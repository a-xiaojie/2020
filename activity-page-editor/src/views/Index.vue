<template>
  <layout>
    <template v-slot:header-right>
      <h1>right</h1>
    </template>
    <el-container>
      <el-main>
        <div class="buttons">
          <el-button type="primary" size="mini" @click="showDialog">新建页面</el-button>
        </div>
        <el-table
            :data="tableData"
            style="width: 100%"
        >
          <el-table-column
              prop="id"
              label="ID"
          />
          <el-table-column
              prop="name"
              label="名称"
          />
          <el-table-column
              prop="imgUrl"
              label="预览图"
          >
            <template slot-scope="scope">
              <el-image
                  style="width: 100px; height: 100px"
                  :src="scope.row.imgUrl"
                  fit="cover"
                  :preview-src-list="[scope.row.imgUrl]"
              />
            </template>
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              width="100">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="handleClick(scope.row)">编辑内容</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
    <el-dialog
        title="新建页面"
        :visible.sync="dialogVisible"
    >
      <el-form :model="form" label-width="120px" size="mini">
        <el-form-item label="页面名称">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="页面缩略图">
          <uploader
              keyName="imgUrl"
              :files="form.imgUrl"
              :handle-change="handleChange"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleDialogClose" size="mini">取消</el-button>
        <el-button type="primary" @click="handleDialogSubmit" size="mini">确定</el-button>
      </div>
    </el-dialog>
  </layout>
</template>

<script>
  import Layout from '../components/Layout'
  import Uploader from '../components/common/Uploader'

  export default {
    name: 'Index',
    components: {
      Layout,
      Uploader
    },
    data () {
      return {
        tableData: [],
        form: {
          name: '',
          imgUrl: ''
        },
        dialogVisible: false
      }
    },
    methods: {
      handleDialogClose () {
        this.dialogVisible = false
      },
      handleDialogSubmit () {
        const lastId = this.tableData[this.tableData.length - 1] ? this.tableData[this.tableData.length - 1].id : 0
        const params = {
          ...this.form,
          id: lastId + 1
        }
        this.tableData = [params, ...this.tableData]
        localStorage.setItem('pageList', JSON.stringify(this.tableData))
        this.dialogVisible = false

      },
      showDialog () {
        this.dialogVisible = true
      },
      handleChange ({images}) {
        this.form.imgUrl = images ? images[0] : ''
      },
      handleClick (row) {
        this.$router.push(`/home?id=${row.id}`)
      }
    },
    created() {
      let pageList = localStorage.getItem('pageList');
      this.tableData = JSON.parse(pageList) || []
    }
  }
</script>

<style scoped lang="less">
  .buttons {
    margin-bottom: 10px;
  }
</style>
