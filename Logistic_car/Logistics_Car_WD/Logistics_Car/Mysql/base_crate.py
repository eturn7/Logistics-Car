#todo  用于建表
import pymysql
# 打开数据库连接
try:
    db = pymysql.connect(host='localhost', user='root', passwd='2001WEIshuai10.@', port=3306, database='user')
    print('连接成功！')
except:
    print('something wrong!')

# # 使用 cursor() 方法创建一个游标对象 cursor
cursor = db.cursor()
# 使用 execute() 方法执行 SQL，如果表存在则删除
cursor.execute("DROP TABLE IF EXISTS user_USERS")

# 使用预处理语句创建表
sql = """CREATE TABLE user_USERS (
         USERNAME  CHAR(30) ,
         USERADDRESS  CHAR(30),
         USERPHONENUMBER BIGINT,
         USERMAIL CHAR(30),
         USERPASSWORD CHAR(30),
         USERurl CHAR(50))"""

cursor.execute(sql)
print('建表成功！')