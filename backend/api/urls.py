from django.urls import path
from .views.growzone import GrowZonesView, GrowZoneView
from .views.user import  SignIn, SignOut, SignUp, ChangePassword
from .views.plant import PlantsView, PlantView
from .views.userprofile import UserProfilesView, UserProfileView

urlpatterns = [
    path('grow-zone/', GrowZonesView.as_view(), name='grow-zones'),
    path('grow-zone/<pk>/', GrowZoneView.as_view(), name='grow-zone'),
    path('plants/', PlantsView.as_view(), name='plants'),
    path('plants/<int:pk>/', PlantView.as_view(), name='plant-view'),
    path('sign-up/', SignUp.as_view(), name='sign-up'),
    path('sign-in/', SignIn.as_view(), name='sign-in'),
    path('sign-out/', SignOut.as_view(), name='sign-out'),
    path('change-password/', ChangePassword.as_view(), name='change-password'),
    path('profile-view/', UserProfilesView.as_view(), name='profile'),
    path('profile-view/<int:pk>/', UserProfileView.as_view(), name='profile')
]
