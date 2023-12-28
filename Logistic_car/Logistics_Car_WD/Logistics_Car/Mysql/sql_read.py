import pymysql
import qrcode
from Mysql import QRC_update

def sql_get_QRCimg(mail, password):

    global USERPHONENUMBER, USERADDRESS, USERNAME, USERPASSWORD, db
    print(mail, password)
    # 打开数据库连接
    try:
        db = pymysql.connect(host='localhost', user='root', passwd='2001WEIshuai10.@', port=3306, database='user')
        print('连接成功！')
    except:
        print('something wrong!')
    # 使用 cursor() 方法创建一个游标对象 cursor
    cursor = db.cursor()
    # SQL 查询语句
    sql = "SELECT * FROM user_users \
           WHERE USERMAIL = '%s' " % mail
    try:
        # 执行SQL语句
        cursor.execute(sql)
        # 获取所有记录列表
        results = cursor.fetchall()
        for row in results:
            USERNAME = row[0]
            USERADDRESS = row[1]
            USERPHONENUMBER = row[2]
            USERMAIL = row[3]
            USERPASSWORD = row[4]
            URSERurl = row[5]
            # 打印结果
            print('数据查询成功！')
            print("NAME=%s,ADDRESS=%s,PHONENUMBER=%s" % \
                  (USERNAME, USERADDRESS, USERPHONENUMBER))
    except:
        print("Error: unable to fetch data")
    #二登录信息正确则将url传回
    if password == USERPASSWORD:
        url = URSERurl
        return url
    else:
        print('密码错误')



