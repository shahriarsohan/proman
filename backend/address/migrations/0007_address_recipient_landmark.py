# Generated by Django 3.2 on 2021-12-25 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('address', '0006_auto_20210801_1126'),
    ]

    operations = [
        migrations.AddField(
            model_name='address',
            name='recipient_landmark',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]