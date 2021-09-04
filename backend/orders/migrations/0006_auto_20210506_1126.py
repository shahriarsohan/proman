# Generated by Django 3.2 on 2021-05-06 05:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0004_alter_cart_quantity'),
        ('orders', '0005_alter_order_ordered'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='products',
        ),
        migrations.AddField(
            model_name='order',
            name='products',
            field=models.ManyToManyField(to='cart.Cart'),
        ),
    ]