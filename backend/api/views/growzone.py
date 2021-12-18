from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework import status
from django.shortcuts import get_object_or_404

from ..serializers.growzone import GrowZoneSerializer
from ..models.growzone import GrowZone

# /growzones

class GrowZonesView(APIView):
    # POST / growzones
    def post(self, request):
        growzone = GrowZoneSerializer(data=request.data)
        if growzone.is_valid():
            growzone.save()
            return Response(growzone.data, status=status.HTTP_201_CREATED)
        else:
            return Response(growzone.errors, status=status.HTTP_400_BAD_REQUEST)

    # GET /growzones
    def get(self, request):
        growzones = GrowZone.objects.all()
        data = GrowZoneSerializer(growzones, many=True).data
        return Response(data)


class GrowZoneView(APIView):
    # GET /growzones/:id
    def get(self, request, pk):
        growzone = get_object_or_404(GrowZone, pk=pk)
        data = GrowZoneSerializer(growzone).data
        return Response(data)

    def delete(self, request, pk):
        growzone = get_object_or_404(GrowZone, pk=pk)
        growzone.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk):
        growzone = get_object_or_404(GrowZone, pk=pk)
        updated_growzone = GrowZoneSerializer(growzone, data=request.data)
        if updated_growzone.is_valid():
            updated_growzone.save()
            return Response(updated_growzone.data)

    def put(self, request, pk):
        growzone = get_object_or_404(GrowZone, pk=pk)
        updated_growzone = GrowZoneSerializer(
            growzone, data=request.data, partial=True)
        if updated_growzone.is_valid():
            updated_growzone.save()
            return Response(updated_growzone.data)
