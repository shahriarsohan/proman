import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


SECRET_KEY = 's*wkso3p2o%olg@gy^&^qq(t(4$u=zn^-#4%ase+^00!5v^5(_'
DEBUG = True

ALLOWED_HOSTS = [
    '*', 'http://Proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com']


SYSTEM_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

]

THIRD_PARTY_APPS = [
    'rest_framework',
    'corsheaders',
    'debug_toolbar',
    'oauth2_provider',
    'social_django',
    'rest_framework.authtoken',
    'rest_framework_social_oauth2',
    'drfpasswordless',
    'phone_login',
    'phonenumber_field',
    'django_celery_beat',
    'django_celery_results'
]


LOCAL_APPS = ['products', 'users', 'wishlist',
              'orders', 'address', 'cart', 'coupon', 'userprofile']

INSTALLED_APPS = SYSTEM_APPS + LOCAL_APPS + THIRD_PARTY_APPS

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

AUTH_USER_MODEL = 'users.User'


ROOT_URLCONF = 'passwordless.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'passwordless.wsgi.application'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'promandb',
        'USER': 'promandb',
        'PASSWORD': 'sohanhas45',
        'HOST': 'proman.cn0zjhraxysk.ap-south-1.rds.amazonaws.com',
        'PORT': '5432',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static_my_project')
]

STATIC_ROOT = os.path.join(BASE_DIR, 'static_cdn', 'static_root')


PASSWORDLESS_AUTH = {
    'PASSWORDLESS_AUTH_TYPES': ['EMAIL'],
    'PASSWORDLESS_EMAIL_NOREPLY_ADDRESS': 'noreply@example.com',
}

CORS_ORIGIN_ALLOW_ALL = True

CELERY_CACHE_BACKEND = 'default'

CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': 'redis://127.0.0.1:6379/',
        'OPTIONS': {
            'CLIENT_CLASS': 'django_redis.client.DefaultClient',
        }
    }
}

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    )
}

SOCIAL_AUTH_FACEBOOK_KEY = '188661309759475'
SOCIAL_AUTH_FACEBOOK_SECRET = '75717adafd0d37ec9bd9bca9799b3c25'


SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']
SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
    'fields': 'id, name, email'
}

# SOCIAL_AUTH_USER_FIELDS = ['email', 'username', 'first_name', 'password']


AUTHENTICATION_BACKENDS = (
    'social_core.backends.google.GoogleOAuth2',
    'social_core.backends.facebook.FacebookAppOAuth2',
    'social_core.backends.facebook.FacebookOAuth2',
    'rest_framework_social_oauth2.backends.DjangoOAuth2',
    'django.contrib.auth.backends.ModelBackend',
    'phone_login.backends.phone_backend.PhoneBackend',
)

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = "448045876292-4h78svvsdr86fbon1s6jlcqnf2sorjpd.apps.googleusercontent.com"
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = "CkaoAa18aiVLKtrEkGGwdA2P"

SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
]

OAUTH2_PROVIDER = {
    'ACCESS_TOKEN_EXPIRE_SECONDS': 36000 * 15,
    'OAUTH_SINGLE_ACCESS_TOKEN': True,
    'OAUTH_DELETE_EXPIRED': True
}
CORS_ALLOW_CREDENTIALS = True


EMAIL_HOST = 'smtp.mailgun.org'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'postmaster@mail.romex.com.bd	'
EMAIL_HOST_PASSWORD = 'd02efeb5cba71c6459e46679f3062d93-e438c741-265fed91'
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = "please do not reply <no-reply@romex.com.bd>"

DEFAULTS = {
    'PASSWORDLESS_REGISTER_NEW_USERS': True,
    'PASSWORDLESS_MOBILE_NOREPLY_NUMBER': '+12569077289',

}

CORS_ALLOW_CREDENTIALS = True

SESSION_COOKIE_SAMESITE = None

SESSION_COOKIE_HTTPONLY = False


# (defaults to 'sendsms.backends.console.SmsBackend')


SMS_BACKEND = 'sms.backends.twilio.SmsBackend'
TWILIO_ACCOUNT_SID = 'ACdbffa1399e452a35e0773b665e01309a'
TWILIO_AUTH_TOKEN = '85a46f82d8dacf858c00e5b050bb78fd'

SENDSMS_BACKEND = 'sendsms.backends.console.SmsBackend'
SENDSMS_FROM_NUMBER = "+12569077289"


SENDSMS_FROM_NUMBER = "+12569077289"
SENDSMS_ACCOUNT_SID = 'ACdbffa1399e452a35e0773b665e01309a'
SENDSMS_AUTH_TOKEN = '85a46f82d8dacf858c00e5b050bb78fd'

SENDSMS_TWILIO_ACCOUNT_SID = 'ACdbffa1399e452a35e0773b665e01309a'
SENDSMS_TWILIO_AUTH_TOKEN = '85a46f82d8dacf858c00e5b050bb78fd'


BROKER_URL = 'redis://localhost:6379'
CELERY_BROKER_URL = 'redis://127.0.0.1:6379'
CELERY_TASK_TRACK_STARTED = True
