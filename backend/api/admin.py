from django.contrib import admin

from .models.userprofile import UserProfile
from .models.user import User
from .models.growzone import GrowZone
from .models.plant import Plant
from .models.plants_list import PlantList
# Register your models here.

admin.site.register(User)
admin.site.register(GrowZone)
admin.site.register(Plant)
admin.site.register(PlantList)
admin.site.register(UserProfile)