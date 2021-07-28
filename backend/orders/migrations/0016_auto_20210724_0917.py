# Generated by Django 3.2 on 2021-07-24 09:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0015_order_coupon'),
    ]

    operations = [
        migrations.CreateModel(
            name='DeliveryCharge',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=64)),
                ('delivery_charge', models.IntegerField(default=60)),
            ],
        ),
        migrations.AddField(
            model_name='order',
            name='delivery_charge',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='orders.deliverycharge'),
        ),
    ]
