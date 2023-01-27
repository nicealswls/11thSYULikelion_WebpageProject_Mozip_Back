#my_settings.py
#MySQL연동 관련 파일

DATABASES = {
    'default' :{
        'ENGINE': 'django.db.backends.mysql', #사용할 엔진 설정
        'NAME': 'likelion11thPage', #DB 이름
        'USER': 'likelion11th', #DB 접속 계정명
        'PASSWORD': 'likelion3636!', #DB 계정 비밀번호
        'HOST' : 'likelion11thpage.cfivmtywflcn.us-east-1.rds.amazonaws.com', #실제 주소
        'PORT' : '3306',
    }
}
SECRET_KEY = 'django-insecure-vgz=n!m(e9h#pjbx%ps-_ze&a4t3!t1wstun=_=)6w46n4m1#n'