# Generated by Django 3.2 on 2021-08-05 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0020_alter_order_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='free_delivery',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
