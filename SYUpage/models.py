from django.db import models
from django.conf import settings
from accounts.models import User
from django.core.validators import RegexValidator

class JungBo(models.Model):
    # 이름
    name = models.CharField(max_length=30)
    # 학과
    Department = models.CharField(max_length=30,  null=False, blank=False,default='Department')
    # 학번
    studentid = models.IntegerField()
    # 학년
    grade = models.IntegerField(default=0)
    # 전화번호
    phone = models.CharField(max_length=11)
    # 이메일(개인)
    email = models.EmailField(max_length=30, unique=True, null=False, blank=False)
    # 내용
    content = models.TextField()
    # 작성일
    created_at = models.DateTimeField(auto_now_add=True)
    