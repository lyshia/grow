from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.deletion import SET_DEFAULT, SET_NULL
# Create your models here.


class PlantList(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    plant = models.ForeignKey('Plant', on_delete=models.CASCADE) 

    def __str__(self):
        return f"{self.name} needs to be started {self.days_to_sow} days before the last frost. Can be started outdoors {self.start_indoor}"
