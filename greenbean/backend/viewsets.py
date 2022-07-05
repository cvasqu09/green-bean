from rest_framework.viewsets import ModelViewSet, ViewSet

from backend.models import Plant
from backend.serializers import PlantSerializer


class PlantViewSet(ModelViewSet):
    queryset = Plant.objects.filter()
    http_method_names = ['get', 'post']
    serializer_class = PlantSerializer