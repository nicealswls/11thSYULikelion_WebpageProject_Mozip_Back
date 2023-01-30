from .models import JungBo
from .serializers import JungBoSerializer
from rest_framework import viewsets, permissions
from django.shortcuts import redirect, render
from rest_framework.permissions import AllowAny

# JungBo의 목록, detail 보여주기, 수정하기, 삭제하기 모두 가능
class JungBoViewSet(viewsets.ModelViewSet):
    permission_classes = [
         permissions.AllowAny
    ]
    queryset = JungBo.objects.all()
    serializer_class = JungBoSerializer


    