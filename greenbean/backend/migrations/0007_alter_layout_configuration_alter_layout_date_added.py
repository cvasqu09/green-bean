# Generated by Django 4.0.6 on 2022-07-30 21:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_alter_layout_configuration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='layout',
            name='configuration',
            field=models.JSONField(default=dict),
        ),
        migrations.AlterField(
            model_name='layout',
            name='date_added',
            field=models.DateField(default=datetime.date(2022, 7, 30)),
        ),
    ]
