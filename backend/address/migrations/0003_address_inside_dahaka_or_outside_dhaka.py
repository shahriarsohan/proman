# Generated by Django 3.2 on 2021-07-24 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('address', '0002_auto_20210606_0050'),
    ]

    operations = [
        migrations.AddField(
            model_name='address',
            name='inside_dahaka_or_outside_dhaka',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]