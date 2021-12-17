from django.urls import path

from .views import CreateContact, tearDown

urlpatterns = [
    path('create', CreateContact.as_view()),
    path('test', tearDown.as_view())
]
