from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from Mysql import sql_inset, sql_read
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

#login回传信息的获取
class LoginView(APIView):

    def post(self, request, *args, **kwargs):
        print(request.data)
        mail_password = request.data
        print(mail_password['password'])
        url = sql_read.sql_get_QRCimg(mail_password['mail'], mail_password['password'])
        print(url)
        # return Response({"status": True})
        return Response(url)

#logup回传信息的获取
class LogupView(APIView):

    def post(self, request, *args, **kwargs):
        mail_password = request.data
        print(mail_password['mail'])
        sql_inset.logup_inset(mail_password['mail'],mail_password['password'])
        return Response({"status": True})

class MessageView(APIView):

    def post(self, request, *args, **kwargs):
        print(request.data)
        name_area_phone = request.data
        sql_inset.logup_message_inset(name_area_phone['name'],name_area_phone['area'],name_area_phone['phone'])
        return Response({"status": True})


#todo:list
#todo:1、生成QRC码：sql_get_QRCimg()、上传图床：QRC_update.SMMS().upload、存储url：logup_message_inset  done
#todo:2、发送图片url给前端小程序  done