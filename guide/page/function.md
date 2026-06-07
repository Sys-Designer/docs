# Service模块
每一个表模型都对应一个Service模块，XxxService 

# 数据表操作
Service模块中，调用repository()方法返回一个Repository

# Repository
已User用户表为例
```java
public interface UserRepository extends BaseRepository<User, Long> {
    User findById(Long id, boolean throwEx);

    User findById(Long id);

    List<User> findByIds(Set<Long> ids);

    List<User> findByIds(Long id, Long... ids);

    User findOne(User entity, boolean throwEx);

    User findOne(User entity);

    List<User> findAll();

    List<User> findAll(User entity);

    List<User> findLatest(User entity, int size);

    User findLatest(User entity);

    boolean addOne(User entity, boolean throwEx);

    boolean addOne(User entity);

    boolean addBatch(List<User> list, int batchSize);

    boolean addBatch(List<User> list);

    boolean deleteByIds(Set<Long> ids, boolean throwEx);

    boolean deleteByIds(Set<Long> ids);

    boolean deleteById(Long id, boolean throwEx);

    boolean deleteById(Long id);

    boolean updateById(User entity, boolean throwEx);

    boolean updateById(User entity);

    boolean updateBatchById(List<User> list, int batchSize);

    boolean updateBatchById(List<User> list);

    boolean existsById(Long id);

    boolean existsByIds(Set<Long> ids);

    boolean existsBy(User entity);

    List<User> findByPage(User entity, Integer page, Integer size);

    User findFieldByUsername(char[] username, boolean throwEx);

    User findFieldByUsername(char[] username);

    boolean existsByUsername(char[] username);

    boolean deleteOne(User entity, boolean throwEx);

    boolean deleteOne(User entity);

    boolean deleteBatch(User entity, boolean throwEx);

    boolean deleteBatch(User entity);

    boolean deleteBatch(User entity, Integer maxCount, boolean throwEx);

    boolean deleteBatch(User entity, Integer maxCount);

    boolean transaction(Runnable runnable);

}
```

## 模块调用
1. xxxService 可直接调用对应模块的Service
2. xxxFunction.xxx() 调用对应模块的Function
3. java常用类可直接适用
4. 系统工具方法可直接适用
5. xxxService 会自动注入对应的实例

