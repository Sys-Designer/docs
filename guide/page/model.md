# 最佳实践

## 分组
1. common 公共分组
2. 在common分组下创建源模型 `BaseIdDomain`(根模型，所有模型的源模型的根模型，仅包含自增主键),`BaseTimeDomain`(继承BaseIdDomain,增加创建时间和修改时间属性),`BaseProjectDomain`(继承BaseTimeDomain,增加项目ID属性)