from django.conf import settings
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import models

User = settings.AUTH_USER_MODEL

USER_STATUS_CHOICES = (
    ('active', 'active'),
    ('not-active', 'not-active'),
    ('suspicious', 'suspicious'),
    ('fraud', 'fraud'),
)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    f_name = models.CharField(max_length=200, blank=True, null=True)
    l_name = models.CharField(max_length=200, blank=True, null=True)
    gender = models.CharField(max_length=200, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    referral_code = models.CharField(max_length=20, blank=True, null=True)
    status = models.CharField(
        max_length=200, blank=True, null=True, default='active')
    wallet_amount = models.IntegerField(default=0)
    users_free_delivery = models.IntegerField(default=0)


class UserGameActivity(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    reward_validity = models.DateTimeField()
    reward_value = models.IntegerField()
    game_type = models.CharField(max_length=50, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    type = models.CharField(max_length=20, blank=True, null=True)


@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
