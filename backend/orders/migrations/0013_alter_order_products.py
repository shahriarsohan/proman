# Generated by Django 3.2 on 2021-06-10 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0008_orderitem'),
        ('orders', '0012_alter_order_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='products',
            field=models.ManyToManyField(to='cart.OrderItem'),
        ),
    ]