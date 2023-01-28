from rest_framework import serializers
from .models import Question
from accounts.serializers import UserInfoSerializer


class QuestionSerializer(serializers.ModelSerializer):
    user = UserInfoSerializer(read_only=True) # 유저 정보를 가져옴

    class Meta:
        model = Question
        fields = '__all__'