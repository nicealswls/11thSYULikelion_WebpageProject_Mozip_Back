from .models import JungBo
from rest_framework import serializers

class JungBoSerializer(serializers.ModelSerializer):
   # user = serializers.ReadOnlyField(source = 'user.nickname')
    class Meta:
        model = JungBo
        fields = ['name', 'Department', 'studentid', 'grade', 'phone', 'email', 'content', 'created_at']