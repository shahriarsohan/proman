from django.db import models


class Contact(models.Model):
    email = models.EmailField(default='demo@example.com')
    category = models.CharField(max_length=200, blank=True, null=True)
    sub_category = models.CharField(max_length=200, blank=True, null=True)
    datetime = models.DateTimeField(auto_now_add=True)
    subject = models.CharField(max_length=200, blank=True, null=True)
    meesage = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.email
