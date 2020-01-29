<template>
  <div class="index">
    <div id="head">
      <h1>同学录</h1>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input v-model="userInfo.name" placeholder="姓名"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input v-model="userInfo.gender" placeholder="性别"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input v-model="userInfo.phone" placeholder="手机号"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content <bg-purple></bg-purple>">
            <el-date-picker v-model="userInfo.birthday" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd日"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </el-col>
      </el-row>
      <el-button type="primary" style="width: 100%;margin-top: 20px;" @click="addUser">添加</el-button>
    </div>

    <div id="body">
      <el-table :data="users" style="width: 100%">
        <el-table-column type="index" label="序号">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="gender" label="性别">
        </el-table-column>
        <el-table-column prop="phone" label="手机号">
        </el-table-column>
        <el-table-column prop="birthday" label="出生日期">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.row, scope.$index)"></el-button>
            <el-button size="mini" type="primary" icon="el-icon-delete" circle @click="handleDelete(scope.$index)"></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="编辑用户信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose"
        :close-on-press-escape="false" :close-on-click-modal="false">
        <div>
          <el-form ref="form" :model="editUser" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="editUser.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="editUser.gender"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="editUser.phone"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
              <el-date-picker v-model="editUser.birthday" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="commit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        userInfo: {
          name: "",
          gender: "",
          phone: "",
          birthday: ""
        },
        users: [{
          name: "FlyingHu",
          gender: "男",
          phone: "18579091508",
          birthday: "1999-01-27"
        }],
        dialogVisible: false,
        editUser: {
          name: "",
          gender: "",
          phone: "",
          birthday: ""
        },
        editIndex: 0
      }
    },
    methods: {
      addUser() {
        this.users.push(this.userInfo)
        this.userInfo = {
          name: "",
          gender: "",
          phone: "",
          birthday: ""
        }
        this.$message({
          message: '添加成功',
          type: 'success'
        })
      },
      handleDelete(index) {
        this.$confirm('确认删除？')
          .then(_ => {
            this.users.splice(index, 1)
            this.$message({
              message: '删除成功',
              type: 'success'
            })
          })
          .catch(_ => {
            this.$message({
              message: '取消删除',
              type: 'success'
            })
          });
      },
      handleEdit(item, index) {
        this.editIndex = index
        this.editUser = {
          name: item.name,
          gender: item.gender,
          phone: item.phone,
          birthday: item.birthday
        }
        this.dialogVisible = true
      },
      handleClose() {
        this.$confirm('确认修改？')
          .then(_ => {
            this.users.splice(this.editIndex, 1, this.editUser)
            this.editUser = {
              name: "",
              gender: "",
              phone: "",
              birthday: ""
            }
            this.$message({
              message: '修改成功',
              type: 'success'
            })
          })
          .catch(_ => {
            this.$message({
              message: '取消修改',
              type: 'success'
            })
          });
        this.dialogVisible = false
      },
      commit() {
        this.users.splice(this.editIndex, 1, this.editUser)
        this.editUser = {
          name: "",
          gender: "",
          phone: "",
          birthday: ""
        }
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.dialogVisible = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    width: 1000px;
    margin: 20px auto;
  }

  #body {
    margin-top: 20px;
  }
</style>
