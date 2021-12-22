from rest_framework import serializers
from ..models.plants_list import PlantList


class PlantListSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantList
        fields = ('user', 'plant')
