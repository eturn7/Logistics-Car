import pymysql
import qrcode
from Mysql import QRC_update
#注册邮箱密码登记

def logup_inset(mail,password):
    print(mail,password)
    global mail_password
    mail_password = {'mail':mail,'password':password}


#注册个人信息登记

def logup_message_inset(name,area,phone):
    try:
        db = pymysql.connect(host='localhost', user='root', passwd='2001WEIshuai10.@', port=3306, database='user')
        print('连接成功！')
    except:
        print('something wrong!')

    #生成二维码并上传图床，保存url到表
    data_str = "%s\n\r %s\n\r %s" % \
               (name, area, phone)
    filename = str(name) + '_QRC.png'
    QRCimg = qrcode.make(data_str)
    QRCimg.save('QRC_img/' + filename)
    url = QRC_update.SMMS().upload(filepath='QRC_img/' + filename)
    print(url)
    # # 使用 cursor() 方法创建一个游标对象 cursor
    cursor = db.cursor()
    sql = """INSERT INTO user_users(USERNAME,
             USERADDRESS, USERPHONENUMBER, USERMAIL, USERPASSWORD, USERurl)
             VALUES ('%s','%s',%s,'%s', '%s','%s')""" % (name, area, phone,mail_password['mail'],mail_password['password'], url)
    try:
        # 执行sql语句
        cursor.execute(sql)
        # 提交到数据库执行
        db.commit()
        print('数据插入成功！')
    except:
        # 如果发生错误则回滚
        db.rollback()
        print('数据插入错误！')

    # 关闭数据库连接
    db.close()

