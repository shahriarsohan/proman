# Generated by Django 3.2 on 2021-06-14 06:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0008_auto_20210611_0021'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cart', '0008_orderitem'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecentlyView',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.products')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]