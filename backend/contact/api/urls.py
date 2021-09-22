from django.urls import path

from .views import CreateContact

urlpatterns = [
    path('create', CreateContact.as_view())

]
