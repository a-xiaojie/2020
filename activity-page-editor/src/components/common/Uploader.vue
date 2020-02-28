<template>
  <div class="uploader">
    <el-upload
        class="xj-upload"
        :action="action"
        :on-preview="handleXjPreview"
        :on-remove="handleXjRemove"
        :before-upload="beforeXjUpload"
        :before-remove="beforeXjRemove"
        :on-change="onXjChange"
        :limit="limit"
        :file-list="xjfileList"
        :list-type="listType"
        :ext="ext"
        :data="data"
        :class="{hide: checkLimit}"
    >
      <i class="el-icon-plus" v-if="isImage"></i>
      <el-button size="small" type="primary" v-else>点击上传</el-button>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" size="tiny" v-if="isImage">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Uploader',
    props: {
      data: Object,
      limit: {
        type: Number,
        default: 1
      },
      fileList: {
        type: [Array, String],
        default () {
          return ''
        }
      },
      maxSize: {
        type: Number,
        default: 2
      },
      action: {
        type: String,
        default: '//restapi.xuanwonainiu.com/agent/image/save'
      },
      listType: {
        type: String,
        default: 'picture-card'
      },
      ext: {
        type: String,
        default: '.jpg, .jpeg, .png, .gif'
      },
      onPreview: {
        type: Function,
        default: function () {}
      },
      handleRemove: {
        type: Function,
        default: function () {}
      },
      beforeUpload: {
        type: Function,
        default: function () {}
      },
      beforeRemove: {
        type: Function,
        default: function () {}
      },
      handleChange: {
        type: Function,
        default: function () {}
      },
      keyName: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        xjfileList: []
      }
    },
    computed: {
      checkLimit () {
        return (this.limit > 0 && this.count >= this.limit)
      },
      isImage () {
        return this.listType === 'picture-card'
      },
      images () {
        return this.xjfileList.filter(file => file.status === 'success').map(file => file.url)
      },
      count () {
        return this.xjfileList.length
      }
    },
    created() {
      const _file = this.fileList && (Array.isArray(this.fileList) ? this.fileList : [this.fileList]).filter(i => i) || []
      this.xjfileList = _file.map((file, index) => {
        return {
          name: Date.now() + Math.random() + index + '.png',
          url: file
        }
      })
    },
    methods: {
      beforeXjUpload (file) {
        const isOkExt = this.ext.indexOf(file.name.substring(file.name.lastIndexOf('.'))) > 0
        if (!isOkExt) {
          this.$message.error(`只能上传${this.ext}格式的文件！`)
          return false
        }

        const isLtM = file.size / 1024 / 1024 < this.maxSize
        if (!isLtM) {
          this.$message.error(`上传的文件大小不能超过${this.maxSize}M`)
          return false
        }
        return this.beforeUpload
      },
      onXjChange (file, fileList) {
        file = this.handleFile(file)
        if (fileList) {
          fileList = fileList.map(f => {
            return this.handleFile(f)
          })
        }
        this.xjfileList = [...fileList].slice(0, this.limit)
        // this.$emit('onChange', {file, fileList: targetFileList, keyName: this.keyName, images})

        this.handleChange({file, fileList: this.xjfileList, keyName: this.keyName, images: this.images})
      },
      handleXjRemove (file, fileList) {
        this.xjfileList = fileList

        this.handleChange({fileList: this.xjfileList, keyName: this.keyName, images: this.images})
      },
      beforeXjRemove (file, fileList) {
        return this.beforeRemove(file, fileList)
      },
      handleXjPreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      handleFile (file) {
        if (!file) {
          return file
        }
        const { status, response } = file
        if (status === 'success' && response && response.status === 1) {
          file.url = response.data.url || response.data
        }
        return file
      }
    }
  }
</script>

<style lang="less">
  .xj-upload {
    .el-upload--picture-card {
      width: 100px;
      height: 100px;
      line-height: 98px;
    }
    .el-upload-list--picture-card {
      .el-upload-list__item {
        width: 100px;
        height: 100px;
      }
    }
    &.hide {
      .el-upload--picture-card {
        display: none;
      }
    }
  }
</style>
