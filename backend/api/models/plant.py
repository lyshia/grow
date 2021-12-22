from django.db import models

# Create your models here.


class Plant(models.Model):
    name = models.CharField(max_length=50, default='PLANT')
    days_to_sow = models.IntegerField(default=42)
    start_indoor = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} needs to be started {self.days_to_sow} days before the last frost. Can be started outdoors {self.start_indoor}"
