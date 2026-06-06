# 创建项目

新用户登录后页面没有内容，需要先创建一个项目

1. 点击logo图标
![点击Logo](./page/images/create1.png)

2. 点击创建项目按钮
![点击创建项目](./page/images/create2.png)

3. 选择项目类型
![选择项目类型](./page/images/create3.png)

4. 输入项目名称,点击创建按钮
![输入项目名称](./page/images/create4.png)

5. 项目创建成功后，切换到该项目
![切换项目](./page/images/create5.png)

6. 创建项目成功后，可以看到左侧目录树中出现了该项目
![项目目录](./page/images/create6.png)

# 创建账号

用于链接数据源，这里选择mysql
![创建账号](./page/images/new-account.png)

创建成功后可以编辑账号信息
![编辑账号](./page/images/account.png)

修改账号信息
![修改账号](./page/images/edit-account.png)

# 创建数据源

指定项目链接的数据库
1.创建Mysql数据源
![创建Mysql](./page/images/new-datasource.png)
![数据源](./page/images/new-datasource-2.png)

2. 修改数据源信息
指定一个唯一的ID为: master
从账号目录树中用鼠标拖拽一个账号到数据源的账号字段中做关联
![修改数据源](./page/images/edit-datasource.png)

## 创建模型
后面主要工作量都在创建模型

1. 创建分组，用于归类模型
![创建分组](./page/images/new-model-group.png)
![分组信息](./page//images/new-model-group-info.png)

2. 编辑分组
![编辑分组](./page/images/edit-model-group-info.png)

3. 点击分组右键菜单创建模型
![创建模型](./page/images/new-model.png)

4.选择源模型，数据模型的根模型，用于链接数据源
![选择源模型](./page/images/new-model.png)
![模型信息](./page/images/new-model-info.png)

5. 编辑模型信息
关联数据源：从数据源列表中拖拽一个数据源到数据源字段中做关联
![编辑模型](./page/images/edit-model.png)

6. 创建模型字段
可以从模板中快速选择创建，也可以点击添加自定义创建
![创建模型字段](./page/images/edit-model-field.png)

点击刷新图标
![属性信息](./page/images/edit-model-field-info.png)

7. 编辑模型字段
双击字段名可以编辑
![编辑模型字段](./page/images/edit-model-field-property.png)

## 创建一个函数
可对外或内部调用

1. 创建分组
![创建分组](./page/images/new-function.png)
选择新建
![分组信息](./page/images/new-function-group-info.png)
可编辑分组信息

2. 创建模块
选择分组右键菜单创建模块
![创建模块](./page/images/new-function.png)

3. 编辑模块
![编辑模块](./page/images/edit-function.png)

4. 创建函数
![创建函数](./page/images/new-method.png)
创建成功后展开目录树
![函数](./page/images/new-method-info.png)

点击创建的函数查看函数的属性
![函数属性](./page/images/edit-method.png)

实现方式 修改为编码实现，然后再内容区双击对应的函数，进入编辑
![编辑函数](./page/images/method-code.png)

5. 编辑函数
调用方式选择查询
资源ID写 test 
如果需要输入模型或输出模型，拖拽对应类型的模型到对应字段中做关联
![编辑函数](./page/images/method-info.png)

## 创建应用
用于生成对应的项目代码

1. 创建SpringBoot应用
选择Web模块
![创建SpringBoot应用](./page/images/new-app.png)
展开目录树，点击创建的应用并修改信息
![应用信息](./page/images/edit-app-info.png)

2. 设计构建流水线
点击应用右键菜单选择设计
![设计构建流水线](./page/images/app-design.png)

3. 添加构建阶段
展开目录树设计节点，再展开应用节点，将构建节点拖拽到设计器中,并补充连线
![添加构建阶段](./page/images/app-design-flow.png)

关闭设计器后会自动保存

4. 构建应用
点击应用右键菜单选择构建
![构建应用](./page/images/build-app.png)

等待构建完成后，点击应用节点的刷新菜单可查看构建产物
![代码](./page/images/app-files.png)

选择对应目录后，再内容中双击文件名可查看文件内容
![文件内容](./page/images/code.png)

## 代码推送
1. 需要先创建一个登录账号，配置好账号和密码
2. 拖拽一个代码推送节点到设计器中
需要配置账号和密码，推送的代码仓http地址和分支
账号配置从账号目录树中拖拽一个账号到账号字段做关联

![代码推送](./page/images/codepush.png)

配置后重新点击构建，即可推送到指定的代码仓