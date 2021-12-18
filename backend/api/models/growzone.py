
from django.db import models

# Create your models here.

class GrowZone(models.Model):
    zone_name = models.CharField(primary_key=True, max_length=4)
    lowest_temp = models.IntegerField()
    average_last_frost = models.DateField(auto_now=False, null=True)
    average_first_frost = models.DateField(auto_now=False, null=True)

    def __str__(self):
        return f"{self.zone_name} has the lowest temp {self.lowest_temp} on a cold winter. The avg last frost is {self.average_last_frost} and the average first frost in fall is {self.average_first_frost}"