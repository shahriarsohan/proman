# Generated by Django 3.2 on 2021-04-19 11:17

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='benifits',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='products',
            name='best_selling',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='products',
            name='category',
            field=models.CharField(blank=True, choices=[('hair_care', 'hair_care'), ('skin_care', 'skin_care'), ('hair_oil', 'hair_oil'), ('face_oil', 'face_oil')], max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='products',
            name='country_made',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='products',
            name='featured',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='products',
            name='manufacturer',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='products',
            name='out_of_stock',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='products',
            name='quantity_in_stock',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='products',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2021, 4, 19, 11, 17, 18, 232303, tzinfo=utc)),
            preserve_default=False,
        ),
    ]