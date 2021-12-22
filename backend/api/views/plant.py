from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework import status
from django.shortcuts import get_object_or_404

from ..serializers.plant import PlantSerializer
from ..models.plant import Plant

# /plants


class PlantsView(APIView):
    # POST / plants
    def post(self, request):
        plant = PlantSerializer(data=request.data)
        if plant.is_valid():
            plant.save()
            return Response(plant.data, status=status.HTTP_201_CREATED)
        else:
            return Response(plant.errors, status=status.HTTP_400_BAD_REQUEST)

    # GET /plants
    def get(self, request):
        plants = Plant.objects.all()
        data = PlantSerializer(plants, many=True).data
        return Response(data)


class PlantView(APIView):
    # GET /plants/:id
    def get(self, request, pk):
        plant = get_object_or_404(Plant, pk=pk)
        data = PlantSerializer(plant).data
        return Response(data)

    def delete(self, request, pk):
        plant = get_object_or_404(Plant, pk=pk)
        plant.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk):
        plant = get_object_or_404(Plant, pk=pk)
        updated_plant = PlantSerializer(plant, data=request.data)
        if updated_plant.is_valid():
            updated_plant.save()
            return Response(updated_plant.data)

    def put(self, request, pk):
        plant = get_object_or_404(Plant, pk=pk)
        updated_plant = PlantSerializer(
            plant, data=request.data, partial=True)
        if updated_plant.is_valid():
            updated_plant.save()
            return Response(updated_plant.data)
