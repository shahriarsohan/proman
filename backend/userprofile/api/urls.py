from django.urls import path
from .views import ProfileEditView

urlpatterns = [
    path('details', ProfileEditView.as_view())
]
