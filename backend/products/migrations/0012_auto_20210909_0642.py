# Generated by Django 3.2 on 2021-09-09 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_auto_20210805_0731'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimages',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='media/product-details'),
        ),
        migrations.AlterField(
            model_name='products',
            name='thumbnail',
            field=models.ImageField(blank=True, null=True, upload_to='media/thumbnail'),
        ),
    ]