from rest_framework import serializers
from ..models.userprofile import UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('user','name', 'zipcode',
                  'zone')
