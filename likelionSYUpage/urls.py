from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('accounts.urls')),
    path('api/quest/', include('question.urls')),
    path('api/jungbo/', include('SYUpage.urls')),
]