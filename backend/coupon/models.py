from django.db import models

from django.core.validators import MinValueValidator, MaxValueValidator


class Coupon(models.Model):
    code = models.CharField(max_length=10, unique=True)
    valid_from = models.DateTimeField()
    valid_to = models.DateTimeField()
    discount_amount = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(200)])
    number_of_use = models.IntegerField(default=1)
    active = models.BooleanField(default=False)

    def __str__(self):
        return self.code
