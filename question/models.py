from django.conf import settings
from django.db import models


class Question(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, db_column='author')  # 작성자는 유저 !
    q_title = models.CharField(max_length=50)
    q_content = models.TextField()
    q_created_at = models.DateTimeField(auto_now_add=True) # 생성시 자동으로 시간저장
    q_updated_at = models.DateTimeField(auto_now=True) # 수정시 자동으로 시간저장

# 테이블명을 따로 지정
    class Meta:
        db_table = 'question'
        ordering = ['-id'] # 정렬기준 최신순