from django.db import models
from django.contrib.auth import get_user_model

class UserProfile(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null=True)
    zipcode = models.IntegerField(default=5, null=True)
    zone = models.ForeignKey('GrowZone', null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} lives in {self.zipcode} and is in zone {self.zone}"
