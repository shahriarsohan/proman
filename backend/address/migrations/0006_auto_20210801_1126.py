# Generated by Django 3.2 on 2021-08-01 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('address', '0005_auto_20210727_1341'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='alternate_phone_number',
            field=models.CharField(blank=True, max_length=60, null=True),
        ),
        migrations.AlterField(
            model_name='address',
            name='zip_code',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
