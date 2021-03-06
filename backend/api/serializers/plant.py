from rest_framework import serializers
from ..models.plant import Plant


class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = ('name', 'days_to_sow',
                  'start_indoor')
