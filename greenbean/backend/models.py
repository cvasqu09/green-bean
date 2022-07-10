from datetime import datetime

from django.db import models


# Create your models here.
from django.utils.timezone import now

class Plant(models.Model):
    name = models.CharField(max_length=128)
    days_to_harvest = models.PositiveSmallIntegerField(default=0)


class Layout(models.Model):
    name = models.CharField(max_length=128)
    configuration = models.JSONField(default=dict)
    date_added = models.DateField(default=datetime.today().date())
