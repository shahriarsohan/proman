# Generated by Django 3.2 on 2021-08-10 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0018_auto_20210810_0532'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='expires',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
