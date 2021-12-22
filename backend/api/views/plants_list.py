from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework import status
from django.shortcuts import get_object_or_404

from ..serializers.plants_list import PlantListSerializer
from ..models.plants_list import PlantList

# /plantlists


class plantlistsView(APIView):
    # POST / plantlists
    def post(self, request):
        plantlist = PlantListSerializer(data=request.data)
        if plantlist.is_valid():
            plantlist.save()
            return Response(plantlist.data, status=status.HTTP_201_CREATED)
        else:
            return Response(plantlist.errors, status=status.HTTP_400_BAD_REQUEST)

    # GET /plantlists
    def get(self, request):
        plantlists = PlantList.objects.all()
        data = PlantListSerializer(plantlists, many=True).data
        return Response(data)


class plantlistView(APIView):
    # GET /plantlists/:id
    def get(self, request, pk):
        plantlist = get_object_or_404(PlantList, pk=pk)
        data = PlantListSerializer(plantlist).data
        return Response(data)

    def delete(self, request, pk):
        plantlist = get_object_or_404(PlantList, pk=pk)
        plantlist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk):
        plantlist = get_object_or_404(PlantList, pk=pk)
        updated_plantlist = PlantListSerializer(plantlist, data=request.data)
        if updated_plantlist.is_valid():
            updated_plantlist.save()
            return Response(updated_plantlist.data)

    def put(self, request, pk):
        plantlist = get_object_or_404(PlantList, pk=pk)
        updated_plantlist = PlantListSerializer(
            plantlist, data=request.data, partial=True)
        if updated_plantlist.is_valid():
            updated_plantlist.save()
            return Response(updated_plantlist.data)
