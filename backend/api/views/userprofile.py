from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework import status
from django.shortcuts import get_object_or_404

from ..serializers.userprofile import UserProfileSerializer
from ..models.userprofile import UserProfile

# /profiles


class UserProfilesView(APIView):
    # POST / profiles
    def post(self, request):
        profile = UserProfileSerializer(data=request.data)
        if profile.is_valid():
            profile.save()
            return Response(profile.data, status=status.HTTP_201_CREATED)
        else:
            return Response(profile.errors, status=status.HTTP_400_BAD_REQUEST)

    # GET /profiles
    def get(self, request):
        profiles = UserProfile.objects.all()
        data = UserProfileSerializer(profiles, many=True).data
        return Response(data)


class UserProfileView(APIView):
    # GET /profiles/:id
    def get(self, request, pk):
        profile = get_object_or_404(UserProfile, pk=pk)
        data = UserProfile(profile).data
        return Response(data)

    def post(self, request, pk):
        print("request", request.data)
        profile = get_object_or_404(UserProfile, pk=pk)
        data = UserProfileSerializer(profile).data

        if profile.is_valid():
            profile.save()
            return Response(profile.data, status=status.HTTP_201_CREATED)
        else:
            return Response(profile.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        profile = get_object_or_404(UserProfile, pk=pk)
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk):
        # print("request",request)
        print("DATA:", request.data)
        profile = get_object_or_404(UserProfile, pk=pk)
        updated_profile = UserProfileSerializer(profile, data=request.data)
        if updated_profile.is_valid():
            updated_profile.save()
            return Response(updated_profile.data)
        else:
            return Response(updated_profile.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        profile = get_object_or_404(UserProfile, pk=pk)
        updated_profile = UserProfileSerializer(
            profile, data=request.data, partial=True)
        if updated_profile.is_valid():
            updated_profile.save()
            return Response(updated_profile.data)
