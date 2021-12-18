from django.urls import path
from .views.growzone import GrowZonesView, GrowZoneView

urlpatterns = [
    path('grow-zone/', GrowZonesView.as_view(), name='grow-zone'),
    path('grow-zone/<int:pk>/', GrowZoneView.as_view(), name='grow-zone')
]