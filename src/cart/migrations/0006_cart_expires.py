# Generated by Django 3.2 on 2021-06-07 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0005_alter_cart_quantity'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='expires',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
