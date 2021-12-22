from rest_framework import serializers
from ..models.growzone import GrowZone


class GrowZoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrowZone
        fields = ('zone_name', 'lowest_temp',
                  'average_last_frost', 'average_first_frost')
