# Generated by Django 2.2.7 on 2019-11-28 23:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Petalos', '0002_flor_estado'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='flor',
            name='estado',
        ),
    ]