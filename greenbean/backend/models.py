from datetime import datetime

from django.db import models


class Plant(models.Model):
    name = models.CharField(max_length=128)
    days_to_harvest = models.PositiveSmallIntegerField(default=0)


class Layout(models.Model):
    name = models.CharField(max_length=128)
    configuration = models.JSONField(default=dict, null=True)
    date_added = models.DateField(default=datetime.today().date())
